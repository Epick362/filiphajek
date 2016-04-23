app.directive('contactForm', function() {
    var controller = ['ContactService', function(ContactService) {
        var vm = this;

        vm.contact = {};

        vm.submit = function() {
            ContactService.store(vm.contact)
            .then(function(data) {
                vm.sent = true;
                vm.loading = false;
            })
            .catch(function() {
                vm.error = true;
                vm.loading = false;
            });

            vm.loading = true;
        }
    }];

    return {
        restrict: 'E',
        replace: true,
        controller: controller,
        templateUrl: 'views/directives/contactForm.html',
        controllerAs: 'vm'
    };
});
