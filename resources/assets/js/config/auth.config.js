app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $authProvider, $httpProvider, $provide) {
    function redirectWhenLoggedOut($q, $injector) {
        return {
            responseError: function(rejection) {
                // Need to use $injector.get to bring in $state or else we get
                // a circular dependency error
                var $state = $injector.get('$state');
                var authService = $injector.get('AuthService');

                // Instead of checking for a status code of 400 which might be used
                // for other reasons in Laravel, we check for the specific rejection
                // reasons to tell us if we need to redirect to the login state
                var rejectionReasons = ['token_not_provided', 'token_expired', 'token_absent', 'token_invalid'];

                // Loop through each rejection reason and redirect to the login
                // state if one is encountered
                angular.forEach(rejectionReasons, function(value, key) {
                    if(rejection.data.error === value) {
                        authService.logoutUser()
                        .then(function() {
                            return $q.reject(rejection);
                        });
                    }
                });
            }
        }
    }

    // Setup for the $httpInterceptor
    $provide.factory('redirectWhenLoggedOut', redirectWhenLoggedOut);

    // Push the new factory onto the $http interceptor array
    $httpProvider.interceptors.push('redirectWhenLoggedOut');

    // Satellizer configuration that specifies which API
    // route the JWT should be retrieved from
    $authProvider.loginUrl = '/api/authenticate';
    $authProvider.signupUrl = '/api/signup';
});
