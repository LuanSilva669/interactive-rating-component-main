const numberContainer = document.querySelector(".rating-numbers");
const rateNumber = document.querySelector(".result");
const submitBtn = document.querySelector(".submit-btn");
const ratingState = document.querySelector(".rate-content");
const thankyouState = document.querySelector(".thanks-content");


numberContainer.addEventListener('click', event=>{
    const numberSelected = event.target.innerText;
    rateNumber.innerText=numberSelected;
    if(numberSelected>0 || numberSelected<=5){
        submitBtn.addEventListener('click', ()=>{
            ratingState.style.display = 'none';
            thankyouState.style.display = 'flex';
        });
    }
});