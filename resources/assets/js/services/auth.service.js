'use strict';

app.service('AuthService', function($rootScope, $http, $q, $auth, $state) {
    this.logoutUser = function() {
        return $auth.logout().then(function () {
            // Remove the authenticated user from local storage
            localStorage.removeItem('user');

            // Flip authenticated to false so that we no longer
            // show UI elements dependant on the user being logged in
            $rootScope.authenticated = false;

            // Remove the current user info from rootscope
            $rootScope.currentUser = null;

            $state.go('login', {}, {reload: true});
        });
    }

    this.getUser = function() {
        return $rootScope.currentUser;
    }

    this.isLoggedIn = function() {
        if($rootScope.authenticated === true) {
            return true;
        }

        return false;
    }
});
