app.directive('project', function() {
    var controller = ['$stateParams', '$sce', function($stateParams, $sce) {
        var vm = this;

        vm.project = $stateParams.id;

        switch (vm.project) {
            case 'edocu':
                vm.title = 'eDocu';
                vm.body = '<b>heheh</b>';

                break;
            case 'readditing':
                vm.title = 'Readditing';
                vm.body = '<b>wda</b>';
                break;
            default:
                console.err('No project found');
        }

        vm.body = $sce.trustAsHtml(vm.body);
    }];

    return {
        restrict: 'E',
        replace: true,
        controller: controller,
        templateUrl: 'views/directives/project.html',
        controllerAs: 'vm'
    };
});
