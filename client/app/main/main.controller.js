'use strict';
(function() {

function MainController($scope, $http) {
  $scope.$parent.activeMenu = 'home';
  var option = {
    items:1,
    smartSpeed: 800,
    margin: 20,
    loop: false,
    nav: true,
    //navText: ["prev", "next"],
    navText: ['<a class="prev main__feedback__carousel__item__link" href="#"><span class="glyphicon glyphicon-chevron-left"></span></a>', '<a class="next main__feedback__carousel__item__link" href="#"><span class="glyphicon glyphicon-chevron-right"></span></a>'],
    dots: false
  };
  $(".main__feedback__carousel--container").owlCarousel(option);

}

angular.module('illiatApp')
  .controller('MainController', MainController);

})();
