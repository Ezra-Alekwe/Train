let time = 3000;
let i = 0;
let image = ["Slideshow 1.jpg", "Slideshow 2.jpg", "Slideshow 3.jpg", "Slideshow 4.jpg", "Slideshow 5.jpg"];
function slideShow() {

    document.getElementById("slide").src = image[i];
    i++;
    if (i == image.length) {
        i = 0;
    }
    setTimeout(slideShow, time);
}

slideShow();

function prev(){
    i--;
    if(i<=0) {
        i=image.length -1;
        document.getElementById("slide").src = image[i];
    }else {
        document.getElementById("slide").src = image[i];
    }
}

function next(){
    i++;

    if(i>=image.length){
        i = 0;
        document.getElementById("slide").src = image[i];
    }else {
        document.getElementById("slide").src = image[i];
    }
}