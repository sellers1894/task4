(function(){
  'use strict';

  angular
  .module('app')
  .directive('composeEmail', composeEmail);

  function composeEmail () {
    return {
      restrict: 'EA',
    // replace: true,
    scope: true,
    controllerAs: 'main',
    controller: 'MainController',
    templateUrl: 'template/newtask.template.html'
  };
}
})();