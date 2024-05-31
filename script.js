// // script.js

// script.js

// document.addEventListener("DOMContentLoaded", function() {
//     var preloader = document.getElementById('preloader');
//     var content = document.getElementById('content');
    
//     window.onload = function() {
//         preloader.style.opacity = '0'; // Fade out the preloader

//         // Wait for the transition to complete before hiding the preloader
//         setTimeout(function() {
//             preloader.style.display = 'none';
//             // content.style.display = 'block'; // Show the content
//         }, 2000); // This should match the duration of the CSS transition (2s)
//     };
// });

const preloaderEl = document.querySelector('.pre-loader');

window.addEventListener('load', function() {

    // preloaderEl.classList.add('fade-out-animation')
    setTimeout(() => {
        preloaderEl.style.display = 'none';
    }, 3000);

    preloaderEl.style.opacity = '1';
});
   
// setTimeout(() => {
//     // preloaderEl.classList.add('hide');
//     preloaderEl.style.opacity = '0'
// }, 2000);