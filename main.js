
//attach eventlistener
const submitButton = document.querySelector('#submit-btn');

submitButton.addEventListener('click', function () {
    //Get input values
    const answerOne = document.querySelector('#answer1');
    const answerTwo = document.querySelector('#answer2');
    const answerThree = document.querySelector('#answer3');
    const answerFour = document.querySelector('#answer4');
    const answerFive = document.querySelector('#answer5');
    const answerSix = document.querySelector('#answer6');
    console.log(answerOne.value);
    console.log(answerTwo.value);
    console.log(answerThree.value);
    console.log(answerFour.value);
    console.log(answerFive.value);
    console.log(answerSix.value);
})


const map = L.map('map').setView([56, 11.6], 6);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// get color depending on population density value
function getColor(labelEnglish) {
    if(labelEnglish === "Varde") {
        return '#800026'
    }
}

function onEachFeature(feature, layer) {
    layer.on({
        click: function(feature, a, b) {
            console.log(feature.sourceTarget.feature.properties.label_dk)
        }
    });
}

/* global statesData */
L.geoJson(kommuneData, {
    style: function (feature) {
        return {
            weight: 1,
            fillColor: getColor(feature.properties.label_en)
        };
    },
    onEachFeature: onEachFeature,
}).addTo(map);