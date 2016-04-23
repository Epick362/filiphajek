app.directive('formErrors', function() {
    return {
        restrict: 'A',
        require: '^form',
        link: function(scope, el, attrs, formCtrl) {
            // find the text box element, which has the 'name' attribute
            var inputEl = el[0].querySelector('[ng-model]');
            // convert the native text box element to an angular element
            var inputNgEl = angular.element(inputEl);
            var inputName = inputNgEl.attr('name');

            // only apply the has-error class after the user leaves the text box
            inputNgEl.bind('blur', function() {
                el.toggleClass('has-danger', formCtrl[inputName].$invalid);
                inputNgEl.toggleClass('form-control-danger', formCtrl[inputName].$invalid);
            });
        }
    }
});
