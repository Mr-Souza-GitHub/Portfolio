document.addEventListener("DOMContentLoaded", function() {
    
    // Gets the elements on the code
    headerBtn = document.querySelector("div.headerBtn")
    headerNav = document.querySelector("ul.headerNav")
    navBtns = document.getElementsByClassName("nav-link")
    
    // Function for opening and closing the menu
    function toggleNav() {
        headerNav.classList.toggle('active')
    }
    
    // Event listener for the users click
    headerBtn.addEventListener('click', toggleNav)
    
    // Automation to close the menu when a link its clicked
    for (let i = 0; i < navBtns.length; i++) {
        // Adds a event listener for each link on the nav
        navBtns[i].addEventListener('click', function() {
            // Verify if the menu its opened
            if (headerNav.classList.contains('active')) {
                // Toggle the menu
                toggleNav()
            }
        })
    }

})