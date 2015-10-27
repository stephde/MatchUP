# Angular Maps (ngMaps)

Module to create and handle maps to [AngularJS 1.x](https://angularjs.org)

Powered by [OpenLayers 2](http://openlayers.org/two/)

# Install

Available via [bower](http://bower.io/)

	bower install angular-maps


# Usage

Include the files `angular-maps.css` and `angular-maps.js`.

```html
<link href="bower_components/angular-maps/angular-maps.css" rel="stylesheet">
<script src="bower_components/angular-maps/angular-maps.js"></script>
```

Add `ngMaps` in your application dependencies

```javascript
app.module('app', [
	'ngMaps'
]);
```

Inject `Map` in your controller

```javascript
app.controller('AppController', [$scope, Map, function($scope, Map) {

	$scope.map = Map.create({
		id: 'map',
		zoom: 10,
		center: {
			lon: -63,
			lat: -8
		}
	});

}]);
```

And add a div with the same id used when create the map object
```html
<div id="map" style="width: 420px; height: 420px;"></div>
```

# Source

[github.com/hewerthomn/angular-maps](http://github.com/hewerthomn/angular-maps)

# API Reference

[hewerthomn.github.io/angular-maps](http://hewerthomn.github.io/angular-maps)

# License

**Angular Maps** is freely distributable under the terms of the MIT license.
