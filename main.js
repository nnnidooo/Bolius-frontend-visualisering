//JSON.parse laver json til arrays af objekter
JSON.parse(fritidshuse)
console.log(JSON.parse (fritidshuse));

JSON.parse(ejerlejligheder)
console.log(JSON.parse (ejerlejligheder))

JSON.parse(parcelOgRækkehuse)
console.log(JSON.parse (parcelOgRækkehuse))

//Få værdierne af
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
});


//eventlistener til udregn butto

const showMap = document.querySelector('#submit-btn')
showMap.addEventListener('click', function () {
    document.querySelector('#map').style.display = 'block';

})

const blockFirstBox = document.querySelector(".quiz-container")[0].style.display = "block";

function next(id) {

    document.querySelector('#text')[id - 1].style.display = "none";

    document.querySelector('.quiz-container')[id].style.display = "block";
}

