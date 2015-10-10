app.controller('AuthController', function($rootScope, $scope, $auth, $state, $http) {
    var vm = this;

    // TODO refactor all these into service
    vm.login = function() {
        vm.loading = true;
        var credentials = {
            name: vm.name,
            password: vm.password
        }

        // Use Satellizer's $auth service to login
        $auth.login(credentials).then(function (data) {
            vm.loading = false;
            return $http.get('api/authenticate/user');
        }, function (error) {
            vm.loading = false;
            vm.loginError = true;
            vm.loginErrorText = error.data.error;
        }).then(function (response) {
            if(!response) {
                return;
            }

            vm.putUserIntoStorage(response.data.user);

             // Everything worked out so we can now redirect to
             // the users state to view the data
             $state.go('index', {}, {reload:true});
        });
    }

    vm.register = function() {
        vm.loading = true;
        var user = {
            name: vm.name,
            email: vm.email,
            password: vm.password,
            password_conf: vm.password_conf
        }

        $auth.signup(user).then(function (data) {
            vm.loading = false;
            return $http.get('api/authenticate/user');
        }).then(function (response) {
            if(!response) {
                return;
            }

            vm.putUserIntoStorage(response.data.user);

             // Everything worked out so we can now redirect to
             // the users state to view the data
             $state.go('index', {}, {reload:true});
        });
    }

    vm.putUserIntoStorage = function(userData) {
        // to go into local storage
         var user = JSON.stringify(userData);

         // Set the stringified user data into local storage
         localStorage.setItem('user', user);

         // The user's authenticated state gets flipped to
         // true so we can now show parts of the UI that rely
         // on the user being logged in
         $rootScope.authenticated = true;

         // Putting the user's data on $rootScope allows
         // us to access it anywhere across the app
         $rootScope.currentUser = userData;
    }
});
