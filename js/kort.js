"use strict"

document.addEventListener('DOMContentLoaded', function() {

	mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVhc2thZGhlZGUiLCJhIjoiY2x2emVweXdzMnZ0czJrbWg0dmJybWh5bSJ9.Fo_VkTtfP9zIPPhUP0OOkQ';
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/andreaskadhede/clvzfrwyf02d301qzak4d4gz4', // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        center: [10.202932877316176, 56.15955518980131], // starting position
        zoom: 17 // starting zoom
    });

});