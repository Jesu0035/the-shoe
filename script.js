'use strict'


document.addEventListener('DOMContentLoaded', start)


let elementToPaint 

async function start(){
    let response = await fetch('snikker-01.svg')
    let mySvgData = await response.text( );
    document.querySelector('section').innerHTML = mySvgData;
    startManiputaltionSvg();   
}
    function startManiputaltionSvg(){
        document.querySelectorAll(".g_to_interact_with").forEach(eachG => {
            console.log(eachG); 
    
            eachG.addEventListener("click", theClick); 
            eachG.addEventListener("mouseover", theMouseover); 
            eachG.addEventListener("mouseout", theMouseout); 
        }
        ); 
        
        document.querySelectorAll(".color_btn").forEach(each_btn => {
            each_btn.addEventListener("click", colorClick); 
        }); 
        
    }
    
    function theClick(){
        console.log(this);
        elementToPaint = this; 
        this.style.fill = "grey"; 
    }
    
    function theMouseover(){
        console.log(this); 
        this.style.stroke = "blue";
    }
    
    function theMouseout(){
        console.log(this); 
        this.style.stroke = "none";
    }
    
    function colorClick(){
        console.log("KLIK", this.getAttribute("fill")); 
    if(elementToPaint != undefined){
        elementToPaint.style.fill = this.getAttribute("fill"); 
    }
}

       /*  document.querySelector('#frente_02').setAttribute('fill',this.getAttribute('fill'))
        console.log("KLIK", this.getAttribute("fill"));  
        
         
    }*/

   /*  document.querySelector('path').style.fill='red'; */

