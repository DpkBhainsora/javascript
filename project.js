let form = document.querySelectorAll('form');


form.addEventListener('submit', function (e) {
   console.log(e);
   

   let height = parseInt(document.querySelector('#height').value)
   let weight = parseInt(document.querySelector('#weight').value)
   let result = parseFloat(document.querySelector('#result'))
   
   if(height ==='' || height<0 || isNaN(height)){
    result.innerHTML = `please give the valid height ${height}`
   }

    else if(weight ==='' || weight<0 || isNaN(weight)){
    result.innerHTML = `please give the valid weight ${weight}`
   }
   {
    let calculate = (weight / ((height*height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${calculate}</span>`;
   }

    
})
