// Menu Section Navigation
const menuButtons = document.querySelector('.menu-navbar-row').children;
const menuItems = document.querySelectorAll('.menu-row');

// Loop through every navigation buttons
for(let i = 0; i < menuButtons.length; i++){
    // On clicking the button add active class to it and remove active class from others
    menuButtons[i].addEventListener('click', function(){
        for(let j = 0; j < menuButtons.length; j++){
            menuButtons[j].classList.remove('active');
        }
        this.classList.add('active');
        // Change section according to the button
        const id = this.getAttribute('data-id');
        for(let i = 0; i < menuItems.length; i++){
            menuItems[i].classList.remove('active');
        }
        menuItems[id].classList.add('active');
    })
}

// Testimonials Section Slider
const testimonialButtons = document.getElementsByClassName('client-button');

// Loop through every testimionial slider buttons
for(let i = 0; i < testimonialButtons.length; i++){
    // On clicking the button add active class to it and remove active class from others
    testimonialButtons[i].addEventListener('click', function(){
        for(let j = 0; j < testimonialButtons.length; j++){
            testimonialButtons[j].classList.remove('active');
        }
        this.classList.add('active');
    })
}

// Link the bootstrap carousel control buttons to custom created buttons

// Bootstrap carousel control buttons
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');

// Custom buttons
const testButton2 = testimonialButtons[1];
const testButton1 = testimonialButtons[0];

// Initialize the status of custom buttons
let button1Status = true;
let button2Status = false;

// On clicking the first custom button
testButton1.addEventListener('click', function(){
    // If the button is already active, do nothing
    if(button1Status){
        return;
    // Else click the prev carousel control button
    } else{
        prevButton.click();
    }
    // Change the state of initialized variables
    button1Status = true;
    button2Status = false;
});

// Works same as the first custom button
testButton2.addEventListener('click', function(){
    if(button2Status){
        return;
    // Click the next carousel control button
    } else{
        nextButton.click();
    }
    button2Status = true;
    button1Status = false;
});