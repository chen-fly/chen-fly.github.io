angular.module('home.controller', [])

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .when('','/shome');
    $stateProvider
      .state('tabs.home.shome',{
        url: '/shome',
        templateUrl: '/mymemebox/tpls/home/home-shome.html'
        // onEnter:function () {
        //   getTotleWidth($(".home-nav .list .item"));
        //   setWidth($(".t-rush-pro"),getTotleWidth($(".t-rush-pro .pro-buy")));
        // }
      })
      .state('tabs.home.china',{
        url: '/china',
        templateUrl: '/mymemebox/tpls/home/home-china.html'
      })
      .state('tabs.home.week',{
        url: '/week',
        templateUrl: '/mymemebox/tpls/home/home-week.html'
      })
      .state('tabs.home.mask',{
        url: '/mask',
        templateUrl: '/mymemebox/tpls/home/home-mask.html'
      })
      .state('tabs.home.korea',{
        url: '/korea',
        templateUrl: '/mymemebox/tpls/home/home-korea.html'
      })
      .state('tabs.home.makeup',{
        url: '/makeup',
        templateUrl: '/mymemebox/tpls/home/home-makeup.html'
      })
      .state('tabs.home.beamakeup',{
        url: '/beamakeup',
        templateUrl: '/mymemebox/tpls/home/home-beamakeup.html'
      });
})

.controller('home.controller', ['$scope', '$rootScope', function ($scope, $rootScope) {
  // $scope.$on('$viewContentLoaded',function () {
  //   setWidth($(".home-nav .list"),getTotleWidth($(".home-nav .list .item")));
  //   setWidth($(".t-rush-pro"),getTotleWidth($(".t-rush-pro .pro-buy")));
  // })
  // $rootScope.$on('$stateChangeSuccess',function () {
  //   setWidth($(".home-nav"),getTotleWidth($(".home-nav .list .item")));
  //   setWidth($(".t-rush-pro"),getTotleWidth($(".t-rush-pro .pro-buy")));
  // })
  $(".home-nav .list .item").click(function(){
    //console.log(this.index);
    $(this).addClass("active")
      .siblings().removeClass("active");
  })
}]);
