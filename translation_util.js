import React from 'react'

// let images = document.getElementsByClassName("slideshow-div-img")

export function translation(images){  
    let i = 0
    // displacement is how many pixels per move
    let displacement = 150
    images[i].style.left = "0px";

    setInterval(function(){

        if (displacement > 300){  
            displacement = 0
            images[i].style.display = "none"

            if (i === images.length - 1){       
                i = 0     
            } else {    
                i += 1
            }
            images[i].style.display = "block"
        }
        images[i].style.left = (displacement) + "px"
        displacement += 150
    }, 1000);
}





