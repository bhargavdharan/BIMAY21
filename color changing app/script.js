let colors = ['green','white' , 'yellow' , 'blue' , 'coral' , 'violet' , 'purple' , 'black' , 'orange' , 'darkblue' , 'brown'];
let button = document.getElementById('button');

button.addEventListener('click', function(){
    //select random number between 0 to 10
    let index = parseInt((Math.random()*colors.length)+1);
    //grab the canvas
    let canvas = document.getElementById('canvas');

    canvas.style.background = `${colors[index]}`;
})