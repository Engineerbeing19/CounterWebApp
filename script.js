const countValue = document.getElementById('counter')

function increment(){
    // get the value from UI
    let value = parseInt(countValue.innerText);
    
     //applying the condition of upper limit for counter value

    if(value < 20){
        value = value + 1;
        // making the value to print in console
        console.log(value);

        countValue.innerText= value;
    }

};

function decrement(){
    let value=parseInt(countValue.innerText);

   //applying the condition of lower limit for counter value
    
    if(value >0){
    value = value - 1;
    // making the value to print in console
    console.log(value);
    countValue.innerText = value;
    }
}
