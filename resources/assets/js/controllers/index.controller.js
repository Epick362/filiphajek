app.controller('IndexController', function($rootScope) {
    var vm = this;

    document.addEventListener('scroll', function (event) {
        var contentStart = document.getElementsByClassName('content is-hero');

        if (contentStart && contentStart.length > 0) {
            var cotentStartPx = contentStart[0].getBoundingClientRect().top;
        }

        if(document.body.scrollTop > cotentStartPx - 180) {
            $rootScope.$apply(function() {
                $rootScope.forceOpaque = true;
            });
        }else{
            $rootScope.$apply(function() {
                $rootScope.forceOpaque = false;
            });
        }
    });
});
