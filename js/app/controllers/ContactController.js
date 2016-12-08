function ContactController() {
  var vm = this;

  vm.name = 'TyDell'
  vm.email = 'ty@fakeemail.com'
  vm.phone = '555-555-5555'

  this.changeName = function() {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);