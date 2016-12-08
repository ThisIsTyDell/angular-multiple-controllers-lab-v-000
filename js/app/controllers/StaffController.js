function StaffController() {
  var vm = this;

  vm.name = 'Alex'
  vm.email = 'foley.a@fakeemail.com'
  vm.phone = '555-555-5555'
}

angular
  .module('app')
  .controller('StaffController', StaffController);