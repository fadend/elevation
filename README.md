# Get the elevation for current location (US only)

Due to the recent tsunami scare for my area, I wanted a simple way to find our elevation.

This uses HTML5's geolocation service (https://w3c.github.io/geolocation/#get-current-position)
to find the user's coordinates plus The National Map - Elevation Point Query Service
(https://apps.nationalmap.gov/epqs/) to query the elevation. Unfortunately, the latter is
US only. If I find a free service to get elevation data (or build my own), I'll expand
coverage.

I can't vouch for the accuracy of this in general -- there are two points of failure here --
but at least it seems to do all right with Pike Peak's in Colorado:

-105.0442, 38.8405 -> 14107.4 feet

Sounds about right?
