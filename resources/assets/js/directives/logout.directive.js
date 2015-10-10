app.directive('logout', function() {
    var controller = ['$scope', '$state', 'AuthService', function($scope, $state, AuthService) {
        $scope.logout = function() {
            AuthService.logoutUser()
            .then(function() {
                $state.go('index', {}, {reload: true});
            });
        };
    }];

    return {
        restrict: 'E',
        replace: true,
        controller: controller,
        template: '<a href="" ng-click="logout()"><i class="fa fa-sign-out"></i> Logout</a>'
    };
});
