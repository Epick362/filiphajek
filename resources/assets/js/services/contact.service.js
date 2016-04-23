'use strict';

app.service('ContactService', function($http) {
    this.store = function(data) {
        return $http({
            url: 'api/contact',
            data: data,
            method: 'POST'
        });
    }
});
