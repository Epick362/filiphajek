app.directive('project', function() {
    var controller = ['$stateParams', '$sce', '$translate', function($stateParams, $sce, $translate) {
        var vm = this;

        vm.project = $stateParams.id;

        $translate('PROJECT_DETAIL.' + vm.project + '.TITLE').then(function(title) {
            vm.title = title;
        });

        $translate('PROJECT_DETAIL.' + vm.project + '.BODY').then(function(body) {
            vm.body = $sce.trustAsHtml(body);
        });
    }];

    return {
        restrict: 'E',
        replace: true,
        controller: controller,
        templateUrl: 'views/directives/project.html',
        controllerAs: 'vm'
    };
});
