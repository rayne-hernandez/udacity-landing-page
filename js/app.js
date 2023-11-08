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
const pageHeader = document.querySelector(".page__header");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * @description Creates a hamburber menu icon for the navbar as a list item
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


/**
 * @description Causes a dropdown menu to appear containing navlinks if the
 * hamburger icon is clicked
 */
function hamburgerMenuDropdown() {
    // select navbar buttons except hamburger icon
    const navbarList = document.querySelectorAll("#navbar__list li:not(.hamburger)");
    // set class to change layout
    for (const navbarLink of navbarList) {
        navbarLink.classList.toggle("dropdown");
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

/**
 * @descripton Populates the navbar with a navlink for every secton on the page
 */
function populateNavbar() {
    const liFrag = document.createDocumentFragment();

    // create hamburger icon
    const li = createHamburgerIcon();
    liFrag.appendChild(li);

    // Create NavLink for each Section
    // for (const section of sections) {
    sections.forEach(
        (section, idx) => {
            // extract link info from sections
            const navLabel = section.getAttribute("data-nav");
            const navLink = section.getAttribute("id");
            // create new anchor inside new list element
            const li = document.createElement("li");
            li.setAttribute("id", `navlink${idx + 1}`);
            const a = document.createElement("a");
            a.setAttribute("href", `#${navLink}`);
            a.textContent = navLabel;
            li.appendChild(a);
            // append list element to document frag
            liFrag.appendChild(li);
        }
    );
    navbarList.appendChild(liFrag);
}

// Add class 'active' to section when near top of viewport
/**
 * @description Event listener detects if a section is within the viewport. If
 * within the viewport then the section class is set to active.
 */
function detectActiveSection() {
    for (const section of sections) {
        // set sections in the viewport to active
        const rect = section.getBoundingClientRect();
        if (rect.top > 0 && rect.bottom < window.innerHeight) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    }
}

// Add class 'active' to navlink when section is in viewport
/**
 * @description Event listener sets the navlink corresponding to the active
 * section to active as well.
 */
function setActiveNavlink() {
    // find the active sectionId
    const activeSection = document.querySelector("main section.active");

    // skip if no active section
    if (!activeSection) {
        return
    }

    const activeSectionId = activeSection.getAttribute("id");
    // get corresponding navlinkId
    const navlinkId = "navlink" + activeSectionId.replace("section", "");
    // get list of navlinks ignoring the hamburger icon
    const navlinkList = navbarList.querySelectorAll("li:not(.hamburger)");
    // If section is active, then set its navlink to active
    navlinkList.forEach((elem) => {
        if (elem.getAttribute("id") == navlinkId) {
            elem.classList.add("active");
        } else {
            elem.classList.remove("active");
        }
    });
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
*/
// Build menu
populateNavbar();

// Show dropdown menu when hamburger icon is clicked
const hamburgerIcon = document.querySelector("#navbar__list li.hamburger");
hamburgerIcon.addEventListener("click", hamburgerMenuDropdown);

// Scroll to section on link click

// Set sections as active
window.addEventListener("scroll", detectActiveSection);

// Set navlinks as active
window.addEventListener("scroll", setActiveNavlink);
