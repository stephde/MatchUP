(function(angular, OpenLayers, undefined) {
	'use strict';

	angular
		.module('ngMaps.services')
		.service('Maps', MapsService);

	/**
	 * @class
	 * @alias Maps
	 * @type {Maps}
	 * @memberOf ngMaps.services
	 * @description Handle maps
	 */
	function MapsService ($q) {

		var baselayers = [];

		/**
		 * Add a base layer to the map
		 *
		 * @param {Map} map Map instance
		 * @param {String} type Base layer type
		 * @param {Object} opts Base layer options
		 */
		this.addBaseLayer = function(map, type, opts) {
			var baselayer;
			var styledType;
			var styledOptions;

			switch(type) {

				case 'googleMaps': {
					baselayer = new OpenLayers.Layer.Google('default', {
						numZoomLevels: opts.numZoomLevels,
						minZoomLevel: opts.minZoomLevel,
						maxZoomLevel: opts.maxZoomLevel
					});
				}
				break;

				case 'googleMapsHybrid': {
					baselayer = new OpenLayers.Layer.Google('hybrid', {
						type: google.maps.MapTypeId.HYBRID,
						numZoomLevels: opts.numZoomLevels,
						minZoomLevel: opts.minZoomLevel,
						maxZoomLevel: opts.maxZoomLevel
					});
				}
				break;

				case 'googleMapsNight': {
					baselayer = new OpenLayers.Layer.Google('night', {
						type: 'styled',
						numZoomLevels: opts.numZoomLevels,
						minZoomLevel: opts.minZoomLevel,
						maxZoomLevel: opts.maxZoomLevel
					});

					var styleNight = [{
		  			featureType: 'all',
						elementType: 'all',
						stylers: [
				      { "invert_lightness": true },
				      { "visibility": "on" },
				      { "hue": "#00bbff" },
				      { "saturation": 1 }
				    ]
				 	}];
					styledOptions = { name: 'Night Map' };
			  	styledType = new google.maps.StyledMapType(styleNight, styledOptions);
				}
				break;
			}

			map.addLayer(baselayer);

			if(styledType) {
				baselayer.mapObject.mapTypes.set('styled', styledType);
				baselayer.mapObject.setMapTypeId('styled');
			}
		};

		/**
		 * Add base layers to the map
		 * @param {Map} map        Map instance
		 * @param {Object} baselayers Baselayers
		 */
		this.addBaseLayers = function(map, baselayers) {
			for(var baselayer in baselayers) {
				this.addBaseLayer(map, baselayer, baselayers[baselayer]);
			}
		};

		/**
	   * Change the base layer
	   *
	   * @param {String} Type of the base layer. Options: default|hybrid|night
	   */
	  this.setBaseLayer = function(map, name) {
	  	var layer = map.getLayersByName(name)[0];
	  	if(layer) {
	    	map.setBaseLayer(layer);
	  	}
	  };

		/**
		 * Add a layer to the map
		 *
		 * @param {Map} map Map instance
		 * @param {Object} opts Layer options
		 */
		this.addLayer = function(map, opts) {
			var layer = new OpenLayers.Layer.Vector(opts.title);
			map.addLayer(layer);
		};

		/**
		 * Add layers to the map
		 *
		 * @param {Map} map Map instance
		 * @param {Object} layers Layers
		 */
		this.addLayers = function(map, layers) {
			for(var layer in layers) {
				this.addLayer(map, layers[layer]);
			}
		};

		/**
		 * Add a control to the map
		 *
		 * @param {Map} map Map instance
		 * @param {String} type Selected control
		 * @param {Object} opts Control options
		 */
		this.addControl = function(map, type, opts) {
			var control;
			opts = opts || {};

			switch(type) {

				case 'mousePosition': {
					control = new OpenLayers.Control.MousePosition(opts);
				}
				break;

				case 'navigation': {
					control = new OpenLayers.Control.Navigation(opts);
				}
				break;

				case 'zoom': {
					control = new OpenLayers.Control.Zoom(opts);
				}
				break;

				case 'geolocate': {
					control = new OpenLayers.Control.Geolocate(opts);
				}
				break;

				default: {
					alert('ngMaps: Control ' + type + ' not found.');
				}
				break;
			}

			map.addControl(control);
		};

		/**
		 * Add controls to the map
		 *
		 * @param {Map} map      Map instance
		 * @param {Object} controls Control options
		 */
		this.addControls = function(map, controls) {
			for(var control in controls) {
				this.addControl(map, control, controls[control]);
			}
		};

		/**
		 * Set the center of the map
		 *
		 * @param {Map} map Map instance
		 * @param {Object} lonlat LonLat object
		 * @param {Integer} [zoom] Zoom level
		 * @param {Object} [opts] Options
		 */
		this.setCenter = function(map, lonlat, zoom, opts) {
			opts = opts || {};

			OpenLayers.Util.applyDefaults(opts, {
				transformTo: 'EPSG:4326'
			});

			var point = new OpenLayers.LonLat(lonlat.lon, lonlat.lat);

			if(opts.hasOwnProperty('transformTo'))
			{
				point = point.transform(opts.transformTo, map.getProjection());
			}

			map.setCenter(point, zoom);
		};

		/**
		 * Get center of map
		 *
		 * @param {Map} map Map instance
		 * @return {Object} LonLat object
		 */
		this.getCenter = function(map, opts)
		{
			opts = opts || {};

			OpenLayers.Util.applyDefaults(opts, {
				transformTo: 'EPSG:4326'
			});

			var center = map.getCenter();
			if (opts.hasOwnProperty('transformTo')) {
				center = center.transform(map.getProjection(), opts.transformTo);
			}

			var lonlat = {
				lon: center.lon,
				lat: center.lat
			};

			return lonlat;
		};

		/**
		 * Get the max zoom level of the base layer
		 *
		 * @param  {Map} map Map instance
		 * @return {Integer}  The the number of max zoom level that can be displayed by the current base layer
		 */
		this.getMaxZoomLevel = function(map) {
			return map.getNumZoomLevels();
		};

		/**
		 * Get the all zoom levels of the base layer
		 *
		 * @param  {Max} map Max instance
		 * @return {Array} Array of zoom of can be displayed by the current base layer
		 */
		this.getZoomLevels = function(map) {
			var arr = [];
			var maxZoomLevel = map.getNumZoomLevels();
			for(var i = 1; i < maxZoomLevel; i++) {
				arr.push(i);
			}
			return arr;
		};

		/**
		 * Set zoom of the map
		 *
		 * @param {Map} map  Map instance
		 * @param {Integer} zoom Zoom level
		 */
		this.setZoom = function(map, zoom) {
			map.setCenter(null, zoom);
		};

		/**
		 * Get zoom of the map
		 *
		 * @param  {Map} map Map instance
		 * @return {Integer} Actual zoom level
		 */
		this.getZoom = function(map) {
			return map.getZoom();
		};

		/**
		 * Event of zoom change
		 *
		 * @param  {Map} map Map instance
		 * @param  {Function} callback Callback function
		 * @return {Promise} Promise object
		 */
		this.onZoomChange = function(map, callback) {
			map.events.register('zoomend', map, function(e) {
				var zoom = map.getZoom();
				callback(zoom);
			});
		};

		/**
		 * Use Geolocate to get position
		 *
		 * @param  {Map} map  Map instance
		 * @param  {Object}  [opts] Geolocate options
		 * @return {Promise} Promise object
		 */
		this.getPosition = function(map, opts) {
			opts = opts || { };

			OpenLayers.Util.applyDefaults(opts, {
				bind: true,
				transformTo: 'EPSG:4326',
				geolocationOption: {
					maximumAge: 0,
					timeout: 10000,
					enableHighAccuracy: true
				}
			});

			var control = new OpenLayers.Control.Geolocate(opts);
			var deferred = $q.defer();

			control.events.register('locationuncapable', map, function() {
				var msg = "Error\n\nThe device does not support Geolocation.";
				deferred.reject(msg);
			});

			control.events.register('locationfailed', map, function(e) {
				var msg;
				if(e.hasOwnProperty('error'))
  			{
  				msg = 'Position Error (Code ' + e.error.code + ")\n\n";
  				msg += e.error.message;
  			}
  			else
  			{
	      	msg = "Error\n\nFailed to get your position.";
  			}
				deferred.reject(msg);
			});

			control.events.register('locationupdated', map, function(e) {
				var point = e.point.transform(map.getProjection(), opts.transformTo);
				var lonlat = {
					lon: e.point.x,
					lat: e.point.y
				};

				deferred.resolve(lonlat);
			});

			map.addControl(control);

			control.activate();
			control.getCurrentLocation();

			return deferred.promise;
		};


		/**
		 * Transform latlon object from projection to another
		 *
		 * @param {Object} lonlat LonLat object
		 * @param {String} from From projection
		 * @param {String} to To projection
		 *
		 * @return {Object} lonlat
		 */
		this.transform = function(lonlat, from, to) {
			var dest = new OpenLayers.LonLat(lonlat.lon, lonlat.lat);
			dest = dest.transform(from, to);
			return { lon: dest.lon, lat: dest.lat };
		};

		/**
		 * Check if lonlat is in bounds
		 *
		 * @param {Object} lonlat LonLat object
		 * @param {Array(Number)} bounds Array with bounds [left, bottom, right, top]
		 *
		 * @return {Boolean}
		 */
		this.contains = function(lonlat, bounds) {
			if(bounds === undefined || bounds.length !== 4) return false;

			bounds = new OpenLayers.Bounds(bounds[0], bounds[1], bounds[2], bounds[3]);
			return bounds.containsLonLat(lonlat);
		};

	}

})(window.angular, OpenLayers);
