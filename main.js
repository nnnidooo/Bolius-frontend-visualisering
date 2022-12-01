function next(id) {

    document.getElementsByClassName('container')[id - 1].style.display = "none";

    document.getElementsByClassName('container')[id].style.display = "block";
}

const showTheHidingAnswersBox = document.querySelector('.submit-button')
showTheHidingAnswersBox.addEventListener('click', function (){
    document.querySelector('#result').style.display = 'block';
})
