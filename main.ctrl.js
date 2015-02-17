angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'AngularJS Tutorial Example';
    vm.searchInput = '';
    vm.members = [
        {
            name: 'Robin',
            color: 'chartreuse',
        },
        {
            name: 'Paul',
            color: 'blue??',
        },
        {
            name: 'Henry',
            color: 'marine blue',
        },
        {
            name: 'Brad',
            color: 'army green',
        },
    ];
    vm.orders = [
        {
            id: 0,
            title: 'Name',
            key: 'name',
        },
        {
            id: 1,
            title: 'Color',
            key: 'color',
        }
    ];
    vm.order = vm.orders[0];
    vm.new = {};
    vm.addMember = function() {
        vm.members.push(vm.new);
        vm.new = {};
    };
});