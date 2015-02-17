angular.module('app').controller("MainController", ['$http', function($http) {
    var vm = this;
    vm.title = 'AngularJS Tutorial Example';
    vm.searchInput = '';

    function get() {
        $http
            .get('http://104.236.35.212/links')
            .success(function (data) {
                vm.links = data.links;
            })
            .error(function (data, status) {
                console.log(status);
                console.log(data);
            });
    }
    get();

    vm.new = {};
    vm.addLink = function() {
        var config = {
            method: 'POST',
            url: 'http://104.236.35.212/links/create',
            headers: {
                'Authorization': 'Basic dXNlcjpwYXNz',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: {
                url: vm.new.url,
                title: vm.new.title
            }
        };
        $http(config)
            .success(function (data) {
                get();
            })
            .error(function (data, status) {
                alert('Failed to add link');
                console.log(data);
                console.log(status);
            });
        vm.new = {};
    };
}]);