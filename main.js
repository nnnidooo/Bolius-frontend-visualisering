//JSON.parse laver json til arrays af objekter
const fritidshuseAsArray = JSON.parse(fritidshuse)
console.log(JSON.parse (fritidshuse));

JSON.parse(ejerlejligheder)
console.log(JSON.parse (ejerlejligheder))

JSON.parse(parcelOgRækkehuse)
console.log(JSON.parse (parcelOgRækkehuse))

//Få værdierne af input
const submitButton = document.querySelector('#submit-btn');
submitButton.addEventListener('click', function () {
    //Get input values
    const answerOne = document.querySelector('#answer1');
    const answerThree = document.querySelector('#answer3');
    console.log(answerOne.value);
    console.log(answerThree.value);

    const a = answerOne.value;
    const b = answerThree.value;
    const whatCanTheUserAfford = a/b;
    console.log(whatCanTheUserAfford)

    const filterFritidshuse = fritidshuseAsArray.filter(fritidshuse => fritidshuse.Gennemsnit < whatCanTheUserAfford && fritidshuse.Gennemsnit > 0 );
    console.log(filterFritidshuse);

    if(filterFritidshuse === true) {
        console.log(fritidshuse)
    }
});

//eventlistener til udregn button
const showMap = document.querySelector('#submit-btn')
showMap.addEventListener('click', function () {
    document.querySelector('#map').style.display = 'block';

});
// display quiz box
submitButton.addEventListener('click', function (){
 document.querySelector('.quiz-container').style.display='none';
 document.querySelector('#map').style.visibility='visible';
})

//heatmat
const map = L.map('map').setView([56, 11.6], 6.5);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// get color depending on population density value
function getColor(label_dk) {
    if(label_dk === "Frederiksberg") {
        return '#06f60c'
    }

    else if(label_dk === "Gladsaxe"){
            return '#06f60c'
    }
    else if(label_dk === "Fredensborg"){
        return '#06f60c'
    }
    else if(label_dk === "Ringsted"){
        return '#06f60c'
    }
    else if(label_dk === "Odense"){
        return '#06f60c'
    }
    else if(label_dk === "Fredericia"){
        return '#06f60c'
    }
    else if(label_dk === "Vejen"){
        return '#06f60c'
    }
    else if(label_dk === "Favrskov"){
        return '#06f60c'
    }
    else if(label_dk === "Horsens"){
        return '#06f60c'
    }
    else if(label_dk === "Rebild"){
        return '#06f60c'
    }

}

function onEachFeature(feature, layer) {
    layer.on({
        click: function(feature, a, b) {
            console.log(feature.sourceTarget.feature.properties.label_dk)
        }
    });
}

//global statesData
L.geoJson(kommuneData, {
    style: function (feature) {
        return {
            weight: 1,
            fillColor: getColor(feature.properties.label_en),
            color: '#696969'
        };
    },
    onEachFeature: onEachFeature,

}).addTo(map);


