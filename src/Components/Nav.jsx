import React, { useEffect } from 'react';
import $ from 'jquery';




const Nav = () => {

// useEffect (()=>{$(function() {
// $('a.page-scroll').bind('click', function(event) {
// var $anchor = $(this);
// $('html, body').stop().animate({
// scrollTop: $($anchor.attr('href')).offset().top
// }, 1500, 'easeInOutExpo');
// event.preventDefault();
// });
// });

// // Highlight the top nav as scrolling occurs
// $('body').scrollspy({
// target: '.navbar-fixed-top'
// })

// // Closes the Responsive Menu on Menu Item Click
// $('.navbar-collapse ul li a').click(function() {
// $('.navbar-toggle:visible').click();
// });

// })


return (




<nav class="navbar navbar-expand-lg navbar-light bg-darkest-gray">
    <a class="navbar-brand page-scroll text-primary" href="#page-top">Bryan Is Awesome</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav justify-content-end w-100">
                <li class="hidden active">
                    <a href="#page-top"></a>
                </li>
                <li class="px-1">
                    <a class="page-scroll text-white" href="#Wihd">Wihd</a>
                </li>
                <li class="px-1">
                    <a class="page-scroll text-white" href="#Rworks">Recents Works</a>
                </li>
                <li class="px-1">
                    <a class="page-scroll text-white" href="#Skills">Skills</a>
                </li>
                <li class="px-1">
                    <a class="page-scroll text-white" href="#Wcidfy">Wcidfy</a>
                </li>
                <li class="px-1">
                    <a class="page-scroll text-white" href="#Contact">Contact</a>
                </li>
        </ul>
    </div>
</nav>

)






}


export default Nav;