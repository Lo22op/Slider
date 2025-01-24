// Git Information {Img ,Length ,slider-num ,currentSlider ,btn ,function} | Arrry.from [ES6] Features
let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Slider Length
let sliderLength = sliderImages.length;

// Current Slider
var currentSlider = 1;

// slider-num
let sliderNum = document.getElementById('slider-num');


// Loop Through Images {I use the Old way and New way for Myreference}

let ulEement = document.createElement('ul'); 
ulEement.setAttribute('id' , 'ulEement');

for (let i = 1; i <= sliderLength; i++) {
    ulEement.innerHTML += `<li Data="li-${i}-">${i}</li>`;
}
document.getElementById('indicators').appendChild(ulEement);
var liEements = document.querySelectorAll('#ulEement li');
theChacker()

//Functionality
// #############################################################
// btn
let Prevbtn = document.getElementById('prev');
let Nextbtn = document.getElementById('next');

Prevbtn.onclick = prevslider;
Nextbtn.onclick = nextslider;

// prevbtn
function prevslider(){
    if( document.getElementById('prev').classList.contains('desabled'))
        {
            return false;
        }else{
            removeActive();
            currentSlider--;
            theChacker();      
        }
}
// nextbtn
function nextslider(){
    if(document.getElementById('next').classList.contains('desabled'))
    {
        return false;
    }else{
        removeActive();
        currentSlider++;
        theChacker();        
    }

}

// Function Chacker :
// { creat a num in sliderNum, set the active in li , chanage the img , when end of img change a btn next to active }
function theChacker(){
    sliderNum.textContent = ` #${currentSlider } Of ${sliderLength}`;
    sliderImages[currentSlider - 1].classList.add('active');
    ulEement.children[currentSlider - 1].classList.add('active');

    // prev
    if(currentSlider == 1)
    {
        document.getElementById('prev').classList.add('desabled');
    }else{
        document.getElementById('prev').classList.remove('desabled');
    }

    // next
    if(currentSlider == sliderLength)
    {
        document.getElementById('next').classList.add('desabled');
    }else{
        document.getElementById('next').classList.remove('desabled');
    }   

}

// remove active
function removeActive(){
    // img
    sliderImages.forEach(img => img.classList.remove('active'));
    // li
    liEements.forEach(li => li.classList.remove('active'));
}
// #############################################################
