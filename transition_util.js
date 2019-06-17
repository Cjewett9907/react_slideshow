import React from 'react'

export function transition(images){
   
    let i = 0

    setInterval(function(){  
        images[i].style.display = "none";
        if (i === images.length - 1){
            i = 0
        } else {
            i += 1
        }
        // console.log("i is:", i)     
        images[i].style.display = "block";
    }, 1000);
}