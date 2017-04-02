/*
---------------------------------
DECLARING AND ASSIGNING VARIABLES
--------------------------------- */

/* 
Declare variables:
masthead (HTML container storing 
the current slide - slide-show part)


slides (array of elements storing 
all slides - slide-show part)

buttons (collected list of 
3 buttons in array - main content hide/reveal part)

contents (array of 3 elements - contents 
in main content hide/reveal part)

container (HTML element that will get a content
from array contents)

i (variable to be used as index-pointer 
inside loops for slide-show part)

k (variable to be used as index-pointer
inside loops for hide/reveal content part) */

var masthead,
    slides,
    buttons,
    contents,
    container,
    i,
    k;

var imagesList, images, i;
 
imagesList = [
   "./img/water.jpg",
   "./img/plug.jpg",
   "./img/energy.jpg"
];
 
images = [];
 
function preload(arr) {
   for (i = 0; i < arr.length; i += 1) {
      images[i] = new Image();
      images[i].src = arr[i];
   }
}

preload(imagesList);

// images ready to be used;
console.log(images[0].src + "\n" + images[1].src + "\n" + images[2].src);
/* 
Access empty div with the 
class "mh-image" (look at the HTML structure 
above), and pass the reference
to variable masthead */
masthead = document.querySelector(".mh-image");

/* 
Assign 4 elements to array slides
(slide-show content) */
slides = [
    "<figure><img src=\"./img/green-energy-icons-01.png\" alt=\"image\"><figcaption>Biogas</figcaption></figure>",
    "<figure><img src=\"./img/green-energy-icons-02.png\" alt=\"image\"><figcaption>Hydro</figcaption></figure>",
    "<figure><img src=\"./img/green-energy-icons-03.png\" alt=\"image\"><figcaption>Solar</figcaption></figure>",
    "<figure><img src=\"./img/green-energy-icons-04.png\" alt=\"image\"><figcaption>Wind</figcaption></figure>"

];

/* 
Define function fadeOut. This function will make currently displayed slide disappear. */
function fadeOut() {
    /*Use style object with property opacity on masthead and set it to 0. */
    masthead.style.opacity = 0;
    /* 
    End function fadeOut. */
}

/* 
Use i as index pointer for the array slides. Assign i with initial value 0. */
i = 0;

/* 
Define function runSlides. This function will loop through the array slides. */
function runSlides() {
    /*
Set opacity of masthead to 1. Make sure masthead is visible 
(use style object and opacity on masthead). */
    masthead.style.opacity = 1;
    /* 
    Check the value of i. If the value of i is greater than 3 (3 is index of fourth slide),
    reset the value of i to 0 (slide-show starts over). */
    if (i > 3) {
        i = 0;
    }

    /* Use i to pass the next in line slide rom array slides to masthead. */
    masthead.innerHTML = slides[i];

    /*Increment i. */
    i++;

    /* Use setTimeOut() to call function fadeout after 5 seconds.(Slide will remain displayed 
    for 5s and then, function fadeOut will make it disappear). */
    window.setTimeout(fadeOut, 5000);

    /*End function runSlides. */
}

/*
Call function runSlides. This will display 
the first slide as the web page is loaded. */

runSlides();



/* 
Use setInterval() to call function 
runSlides every 6 seconds.
(Function runSlides is 
a slide-show "engine"). */

window.setInterval(runSlides, 6000);




//SOURCE

//contents = [
//    "<figure><img src=\"http://placehold.it/200x200\" alt=\"image\"><figcaption>Image 1</figcaption></figure>",
//     "<figure><img src=\"http://placehold.it/200x200\" alt=\"image\"><figcaption>Image 2</figcaption></figure>",
//     "<figure><img src=\"http://placehold.it/200x200\" alt=\"image\"><figcaption>Image 3</figcaption></figure>"
//
//
//];
//
//buttons = document.querySelectorAll("button");
//container = document.querySelector(".container");

//function checkButton(ev) {
//    "use strict";
//    //    console.log(ev.target.innerHTML);
//    if (ev.target.innerHTML === "B1") {
//        container.innerHTML = contents[0];
//    } else if (ev.target.innerHTML === "B2") {
//        container.innerHTML = contents[1];
//
//    } else if (ev.target.innerHTML === "B3") {
//        container.innerHTML = contents[2];
//
//    }
//
//}
//
//for (i = 0; i < buttons.length; i += 1) {
//    buttons[i].addEventListener("click", checkButton, false);
//}
//

/* 
Collect all buttons in array buttons. 

Have all contents in array contents. 

Access div with the class "container"
and pass the reference to variable container.*/
contents = [
    "<figure><img src=\"img/water.jpg\" alt=\"Water\"><figcaption><p><strong>Rainwater Harvesting System</strong><br>For typically <span id=\"costColor\">$50</span> and up you can install a rain collector system. Rain collector systems are extremely simple mechanical systems that connect to a gutter system or other rooftop water collection network and store rain water in a barrel or cistern for later non-potable use (like watering plants, flushing toilets, and irrigation). These systems are extremely inexpensive, provided you purchase and assemble the rain collection equipment yourself. If you pay a contractor to install the rain collection system, it could cost you anywhere from several hundred dollars and up.</p></figcaption></figure>",
    
     "<figure><img src=\"img/plug.jpg\" alt=\"Power Strip\"><figcaption><p><strong>Smart Power Strips</strong><br>For about <span id=\"costColor\">$30</span> each, you can install smart power strips around your home. Smart power strips are a simple and elegant solution to a major energy problem. Energy vampires (devices that are plugged in and shut off or fully charged) are generally blamed for around 20% of all energy wasted in America annually. Smart power strips sense energy demand and cut off power supply to fully charged or not in use devices, and can almost eliminate vampire power drawdown.</p></figcaption></figure>",
    
     "<figure><img src=\"img/energy.jpg\" alt=\"Energy Monitor\"><figcaption><p><strong>Energy Monitor</strong><br>One of the easiest things you can do to decrease energy consumption around the house is to install an energy monitor for about <span id=\"costColor\">$20-$150</span>. Household energy monitors are easy to use and inexpensive, and allow you to see a minute by minute presentation of your energy use. These devices work by clipping onto the power cable coming in to your home and transmitting a wireless signal to a display that shows precisely the amount of power being consumed. In studies conducted in the British Isles, households with energy monitors saved between 10 to 15% annually by instituting the simple and inexpensive device.</p></figcaption></figure>"


];


//contents = ["test1", "test2", "test3"];

buttons = document.querySelectorAll(".btn");
container = document.querySelector(".container");



/*
Pass the value of the first array-element of array contents
to container (use innerHTML on container). */

container.innerHTML = contents[0];

/* 
Define function handleClick 
(pass event object to function) */
function handleClick(ev) {
    /* 
Loop through buttons array and
use removeAttribute() to remove 
id with the value active from an HTML element 
that contains this id (use hasAttribute() in if-statement to check). */


    for (k = 0; k < buttons.length; k += 1) {
        if (buttons[k].hasAttribute("id")) {
            buttons[k].removeAttribute("id");
        }
    }

    /* 
    Use innerHTML on ev.target to check which button
    was clicked. Based on this, display corresponding array 
    element inside <div class="container"></div> */

    "use strict";
    //    console.log(ev.target.innerHTML);
    if (ev.target.innerHTML == "B1") {
        container.innerHTML = contents[0];
    } else if (ev.target.innerHTML == "B2") {
        container.innerHTML = contents[1];

    } else if (ev.target.innerHTML == "B3") {
        container.innerHTML = contents[2];

    }

    ev.target.setAttribute("id", "active");

}


for (k = 0; k < buttons.length; k += 1) {
    buttons[k].addEventListener("click", handleClick, false);
}


/*
Add the class active to clicked list item (use ev.target) */
/* 
End function handleClick. */

/* 
Loop through buttons array and 
register handleClick to listen for "click" event 
on any button from array buttons. */

$('.handle').on('click', function () {
    $('nav ul').toggleClass('showing');
});
