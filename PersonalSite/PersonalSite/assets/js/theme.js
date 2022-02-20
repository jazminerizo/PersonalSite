//function toggleTheme() {

//    //Find the bootstrap link tag
//    let currentTheme = document.getElementById('theme');
//    console.log(currentTheme.getAttribute('href'));

//    //Check if flatly is currently being used
//    if (currentTheme.getAttribute('href').includes('theme')) {
//        //If so, replace the hrf with the darkly css
//        currentTheme.setAttribute('href', 'css/darkly.css');
//    }
//    else {
//        currentTheme.setAttribute('href', 'css/theme');
//    }
//}


////Check to see if the browsers theme has been set previously using the localStorage
//if (localStorage.getItem('jspgtheme') != null) {
//    setTheme(localStorage.getItem('jspgtheme'));
//}


//function setTheme(themeName) {
//    let currentTheme = document.getElementById('theme');

//    switch (themeName) {

//        case 'darkly':
//            currentTheme.setAttribute('href', 'css/darkly.css');
//            break;

//        default:
//            break;
//    }

//    localStorage.setItem('jspgtheme', themeName);
//}