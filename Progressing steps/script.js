const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

var currenctActive = 1;

next.addEventListener('click', () => {
    currenctActive++;
    if(currenctActive > circles.length){
        currenctActive = circles.length;
    }
    update(); 
})

prev.addEventListener('click', () => {
    currenctActive--;
    if(currenctActive < 1){
        currenctActive = 1;
    }
    update();
})

function update(){
    //update active class in circle
    circles.forEach((circle,index) => {
        if(index < currenctActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    
    //update the progress bar
    var activeCircles = document.querySelectorAll('.active');

    progress.style.width = (activeCircles.length -1) / (circles.length -1) * 100 + '%';
    // console.log(activeCircles.length / circles.length)

    //change the button enabled and disabled state
    if(currenctActive ===1){
        prev.disabled = true;  
    }else if(currenctActive === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}