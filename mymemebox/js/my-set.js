angular.module('mySet',['ui.router'])

.config(function($stateProvider){
  $stateProvider
  .state('my',{
    url：'/my',
    templateUrl:'/mymemebox/tpls/my.html'
  })
})
