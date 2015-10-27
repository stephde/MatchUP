'use strict';

/**
 * @ngdoc function
 * @name matchUpApp.controller:AroundmeCtrl
 * @description
 * # AroundmeCtrl
 * Controller of the matchUpApp
 */
angular.module('matchUpApp')
  .controller('AroundmeCtrl', ["$scope", function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    var id = 1;
    
    // format: 
    //["Type of Organization","Name of Organization","Executive Director/ Principal","Title 1","Address","City",
    //"Zip Code","Phone","Fax","Email","# of youth served / year","# of Low Income Students",
    //"Percentage\n of Low Income","Age range of youth","Activities / Sports/Age","Demographic info of\n  youth / families",
    //"Cost (if any) to participate in programs","lat","long"]
    
    $.get("https://s10hanaxs.hanatrial.ondemand.com/i848741trial/hanatrial/innojam/innojam_xs_backend/sport_data.xsjs")
    	.done(function(data){
    		var targets = JSON.parse(data).data.slice(1,15); //use first 20 entries only
    		
    		$scope.markers = $scope.markers.concat(targets.map(function(item){
    			return {
    				id: id++,
    				coords: {
    					latitude: item[17],
    					longitude: item[18]
    				},
    				data: {
    					name: item[1],
    					phone: item[7],
    					age: item[13],
    					activities: item[14],
    					source: "Tom"
    				}
    			};
    		}));	
    		
    		var osData = dataForSport("tennis").slice(1, 15)
    		
    		$scope.markers = $scope.markers.concat(osData.map(function(item){
    			return {
    				id: id++,
    				coords: {
    					latitude: item.lat,
    					longitude: item.long
    				},
    				data: {
	    				name: item.name || "No Name",
	    				activities: item.sport,
	    				source: "Open Street Map"
    				},
    				options: {
    					icon: iconForSport(item.sport)
    				}
    			}
    		}))
    		
    		console.log($scope.markers);
    		
    		//$scope.$apply()
    	});
    
	$scope.map = { center: { latitude: 37.4475533, longitude: -122.1618798 }, zoom: 12 };
	
	$scope.markers = [{
		id: id++,
		coords: {latitude: 37.4475533, longitude: -122.1618798}
	}]
	
	$scope.circles = [{
                id: 1,
                center: $scope.markers[0].coords,
                radius: 5,
                stroke: {
                    color: '#FF0000',
                    weight: 2,
                    opacity: 0.8
                },
                fill: {
                    color: '#FF0000',
                    opacity: 0.35
                }
    }]
	
	$scope.addMarkers = function() {
		$scope.markers = []
		$scope.markers.push({
			id: id++,
			coords: {latitude: 34.0500271, longitude: -118.1981123}
		})
		// $scope.markers.push({
		// 	id: id++,
		// 	coords: {latitude: 33.931958, longitude: -117.981957}
		// })
		
		$scope.map = { center: { latitude: 34.0500271, longitude: -118.1981123 }, zoom: 12 };
		$scope.circles[0] = {
                id: 1,
                center: $scope.markers[0].coords,
                radius: 5,
                stroke: {
                    color: '#FF0000',
                    weight: 2,
                    opacity: 0.8
                },
                fill: {
                    color: '#FF0000',
                    opacity: 0.35
                }
    	}
	}
	
	$scope.addMarkers()
	
  }]);