angular.module('my.controller', ['ui.router'])

.controller('myController', ['$scope', function ($scope) {

}])
.config(function($stateProvider,$urlRouterProvider ){
  $stateProvider
    .state('my-set',{
      url:'tab/my/set',
      templateUrl:'/mymemebox/tpls/my/my-set.html'
    })
})
