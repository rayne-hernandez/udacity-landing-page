/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("main section");
const navbarList = document.querySelector("#navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createHamburgerIcon() {
    // create list element container
    const li = document.createElement("li");
    li.classList.add("hamburger");

    // create hamburger bars
    const span1 = document.createElement("span");
    span1.classList.add("bar", "first");
    const span2 = document.createElement("span");
    span2.classList.add("bar");
    const span3 = document.createElement("span");
    span3.classList.add("bar");

    li.appendChild(span1);
    li.appendChild(span2);
    li.appendChild(span3);
    return li;
}

function populateNavbar() {
    const liFrag = document.createDocumentFragment();

    // create hamburger icon
    const li = createHamburgerIcon();
    liFrag.appendChild(li);

    // Create NavLink for each Section
    for (const section of sections) {
        const dataNav = section.getAttribute("data-nav");
        const li = document.createElement("li");
        li.textContent = dataNav;
        liFrag.appendChild(li);
    }

    navbarList.appendChild(liFrag);
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
populateNavbar();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


