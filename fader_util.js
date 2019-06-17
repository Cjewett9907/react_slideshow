import React from 'react'

export function fader(images){
    let i = 0
    let fadeVar = 999
    let fadeSwitch = -1
    images[i].style.opacity = "0." + fadeVar ;
    
        setInterval(function(){
            if (fadeVar < 100 ) {  
                fadeVar = 101 
                fadeSwitch *= -1 
                images[i].style.display = "none"
                    if (i === images.length - 1){       
                        i = 0     
                    } else {    
                        i += 1
                    }
                images[i].style.opacity = "0." + fadeVar
                
                images[i].style.display = "block"
            }
            if (fadeVar > 1000){
                images[i].style.opacity = "1.0"
                fadeSwitch *= -1
            } else {
                images[i].style.opacity = "0." + fadeVar
            }
            // controls the rate of fading 50 = 0.05 opacity per tick 
            fadeVar += (50 * fadeSwitch) 
             
        }, 100);
    
}