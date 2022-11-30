function next(id) {

    document.getElementsByClassName('container')[id - 1].style.display = "none";

    document.getElementsByClassName('container')[id].style.display = "block";
}