
(function(angular) {
  'use strict';
  angular.module('myApp', ['chart.js'])

  .controller('myController', ['$scope','$http',function MainController($scope,$http) {
  	 console.log("Hello")
    $http.get('/reports').then(function(response) {
    	console.log(response);
    	//debugger;
    	$scope.reports = response.data;
    })
    var ctrl = this;

    ctrl.socialChart = {
      options : {
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        }
      },
      type: 'StackedBar',
        labels: ['Mobile Games', 'Ads Inc', 'Advert.io', 'ClickBuy', 'YouCell'],
        series: ['FACEBOOK', 'GOOGLE', 'TWITTER', 'INSTAGRAM'],
        colors: ['#ED402A', '#F0AB05', '#A0B421', '#00A39F'],
        data : [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 96, 27, 100]
    ]
    }
   
  }]);

})(window.angular);
/*var myApp = angular.module("myApp", ['chart.js']); 

myApp.controller('controller', ['$scope','$http', function MainController($scope,$http) {
    console.log("Hello")
    $http.get('/reports').then(function(response) {
    	console.log(response);
    	$scope.reports = response.data;
    })
    var ctrl = this;

    ctrl.socialChart = {
      options : {
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        }
      },
      type: 'StackedBar',
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        series: ['FACEBOOK', 'GOOGLE', 'TWITTER', 'INSTAGRAM'],
        colors: ['#ED402A', '#F0AB05', '#A0B421', '#00A39F'],
        data : [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 96, 27, 100]
    ]
    }
              
}]);*/
