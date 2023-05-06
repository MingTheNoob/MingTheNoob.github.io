/*
    Pressing the paper menu item will change the chevron icon accordingly
*/
var chevron = document.getElementById('chevron');
var dropdown = document.getElementById('papersDropdown');
dropdown.addEventListener('click', function() {
    if (chevron.getAttribute('name') == 'chevron-down') {
        chevron.setAttribute('name', 'chevron-up');
    } else {
        chevron.setAttribute('name', 'chevron-down');
    }
});

/*
    When a paper category is open, pressing the x button will close the paper category and go back to the search page
*/
var closePaperCat = document.getElementById('closePaperCat');

if (closePaperCat) {
    closePaperCat.addEventListener('click', function () {
        window.location.href = '../../papers/#search';
    });
}

/* When a paper is open pressing back button will go back to paper category */

var backToSocSciPapersBtn = document.getElementById('backToSocSciPapersBtn');
backToSocSciPapersBtn.addEventListener('click', function() {
    window.location.href = '../../socsci/#search';
});