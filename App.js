document.getElementById('card').addEventListener('mouseenter', enter);
document.getElementById('card').addEventListener('mouseleave', leave);



function enter(){

document.getElementById('card').style.background = "rgb(42, 42, 42)";
document.getElementById('boton').style.transform = "translate(0px,-100px)"
document.getElementById('boton').style.opacity = "1"
document.getElementById('btnplay').style.opacity = "1"
}

function leave(){

    document.getElementById('card').style.background = ""

    document.getElementById('boton').style.opacity = "0"
   
    document.getElementById('btnplay').style.opacity = "0"
   

    }