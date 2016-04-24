app.directive('projectsGrid', function() {
    var controller = ['$stateParams', '$sce', function($stateParams, $sce) {
        var vm = this;
    }];

    return {
        restrict: 'E',
        replace: true,
        controller: controller,
        templateUrl: 'views/directives/projectsGrid.html',
        controllerAs: 'vm'
    };
});
