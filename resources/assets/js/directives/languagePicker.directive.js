app.directive('languagePicker', function() {
    var controller = ['$translate', function($translate) {
        var vm = this;

        vm.languages = [
            {
                'key': 'sk',
                'name': 'Slovak',
            },
            {
                'key': 'en',
                'name': 'English',
            }
        ];

        vm.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };
    }];

    return {
        restrict: 'E',
        replace: true,
        controller: controller,
        templateUrl: 'views/directives/languagePicker.html',
        controllerAs: 'vm'
    };
});
