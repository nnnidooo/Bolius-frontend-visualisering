//JSON.parse laver json til arrays af objekter
const fritidshuseAsArray = JSON.parse(fritidshuse)
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
    //const answerTwo = document.querySelector('#answer2');
    const answerThree = document.querySelector('#answer3');
    //const answerFour = document.querySelector('#answer4');
    //const answerFive = document.querySelector('#answer5');
    //const answerSix = document.querySelector('#answer6');
    console.log(answerOne.value);
    console.log(answerThree.value);
    const a = answerOne.value;
    const b = answerThree.value;
    const whatCanTheUserAfford = a/b;
    console.log(whatCanTheUserAfford)
    const filterFritidshuse = fritidshuseAsArray.filter(fritidshuse => fritidshuse.Gennemsnit < answerOne.value);
    console.log(filterFritidshuse);

    if(filterFritidshuse === true) {
        console.log(fritidshuse)
    }
});












//eventlistener til udregn butto

const showMap = document.querySelector('#submit-btn')
showMap.addEventListener('click', function () {
    document.querySelector('#map').style.display = 'block';

})



