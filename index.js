const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === ''|| height<0 || isNaN(height)) {
        results.innerHTML = `Please give valid Height`
    }else if (weight === ''|| weight<0 || isNaN(weight)) {
        results.innerHTML = `Please give valid Weight`
    } else{
        const BMI = (weight/((height*height)/10000)).toFixed(2)
        // results.innerHTML = `<span>${BMI}</span>`;
        if (BMI<18.6) {
            results.innerHTML = `Your BMI : ${BMI} <br> You are under Weight`
        }
        if (BMI>18.6 && BMI<24.9) {
            results.innerHTML = `Your BMI : ${BMI} <br> You have Normal Weight`
        }
        if (BMI>24.9) {
            results.innerHTML = `Your BMI : ${BMI} <br> You are Over Weight`
        }
    }
    
})