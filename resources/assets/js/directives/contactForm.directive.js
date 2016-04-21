app.directive('contactForm', function() {
    var controller = ['$scope', function($scope) {

    }];

    return {
        restrict: 'E',
        replace: true,
        controller: controller,
        templateUrl: 'views/directives/contactForm.html'
    };
});
