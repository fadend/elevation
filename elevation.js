const longitudeInput = document.getElementById('longitude');
const latitudeInput = document.getElementById('latitude');
const unitsInput = document.getElementById('units');
const answerArea = document.getElementById('answer-area');

async function findElevation() {
    const url = 'https://epqs.nationalmap.gov/v1/json?x=' +
        longitudeInput.value + '&y=' + latitudeInput.value + '&wkid=4326&units=' +
        unitsInput.value + '&includeDate=false';
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`fetch failed for ${url}: ${response.status}`);
    }
    const json = await response.json();
    const {x, y} = json.location;
    // `value` seems to a string for "Meters"; convert to float.
    const elevation = parseFloat(json.value).toFixed(1);
    answerArea.innerHTML = `Elevation: <b>${elevation} ${unitsInput.value.toLowerCase()}</b>` +
        ` for <a href="http://www.openstreetmap.org/?mlat=${y}&mlon=${x}&zoom=12">${x}, ${y}</a>.`;
}

function findCoordinates() {
    navigator.geolocation.getCurrentPosition(position => {
        longitudeInput.value = position.coords.longitude;
        latitudeInput.value = position.coords.latitude;
        findElevation();
    });
}

document.getElementById('coordinates-button').addEventListener('click', findCoordinates);
document.getElementById('altitude-button').addEventListener('click', findElevation);