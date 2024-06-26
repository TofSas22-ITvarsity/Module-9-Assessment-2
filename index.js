//To calculate the interrnational time
//1. get current time and utc offset
//2. use that to calculate UTC current time
//3. find UTC offset of the city you need time for
// result is UTC current time plus UTC offset = current time there

let timer = setInterval(displayWorldTime, 1000);

let cities = [
    { name: "Instanbul", utcOffset: 3, flag: "Turkey.png" },
    { name: "New York City", utcOffset: -5, flag: "United-States-of-America.png" },
    { name: "Tokyo", utcOffset: 9, flag: "Japan.png" },
    { name: "Moscow", utcOffset: 3, flag: "Russia.png" },
    { name: "Rio De Janeiro", utcOffset: -3, flag: "Brazil.png" },
    { name: "Sydney", utcOffset: 11, flag: "Australia.png" },
    { name: "Vancouver", utcOffset: -8, flag: "Canada.png" },
    { name: "Beijing", utcOffset: 8, flag: "China.png" },
    { name: "Monaco", utcOffset: 2, flag: "Monaco.png" },
    { name: "Samoa", utcOffset: 13, flag: "Samoa.png" },
];

cities.sort(compare);

function compare(a, b) {
    let cityA = a.name;
    let cityB = b.name;

    let comparison = 0;

    if (cityA > cityB) {
        comparison = 1;
    } else if (cityA < cityB) {
        comparison = -1;
    }

    return comparison;
}

function getUtcTime() {
    let dt = new Date();
    let utcOffset = dt.getTimezoneOffset() * 60000;
    let utcTime = new Date(dt.getTime() + utcOffset);

    return utcTime.getTime()
}

function getCurrentTime(utcOffset) {
    let mil = 1000 * 60 * 60;
    let time = new Date(getUtcTime() + utcOffset * mil);
    return time.toLocaleTimeString();
}

function displayWorldTime() {
    let dt = new Date();
    document.getElementById("local").innerHTML = "Local Time : " + dt.toLocaleTimeString();

    let output = `<table id="cities">`;
    output += `
            <tr>
                <th class="col1></th>
                <th class="col2"></th>
                <th class="col3"></th>
            </tr>`;

    for (a = 0; a < cities.length; a++) {
        output += `
            <tr>
                <td><img src="img/${cities[a].flag}"/></td>
                <td>${cities[a].name}</td>
                <td>${getCurrentTime(cities[a].utcOffset)}</td>
            </tr>
        `;
    }
    output += `</table>`;
    document.getElementById("output").innerHTML = output;
}


