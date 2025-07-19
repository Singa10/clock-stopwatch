const increment=document.getElementById("increment")
const decrement=document.getElementById("decrement")
const reset=document.getElementById("reset")
const count=document.getElementById("count")
let counter=0
increment.onclick=function(){
    counter++;
    count.textContent=counter
}
decrement.onclick=function(){
    counter--;
    count.textContent=counter
}
reset.onclick=function(){
    counter=0;
    count.textContent=counter
}

const subscription=document.getElementById("subscription")
const mastercard=document.getElementById("mastercard")
const visa=document.getElementById("visa")
const paypal=document.getElementById("paypal")
const submit=document.getElementById("submit")
const subscriptiontext=document.getElementById("subscriptiontext")
const methodtext=document.getElementById("methodtext")
submit.onclick=function(){
    if(subscription.checked){
        subscriptiontext.textContent="thanks for your subscription"
        if(mastercard.checked){
            methodtext.textContent="your choice method is mastercard"
        }
        else if(visa.checked){
            methodtext.textContent="your choice method is visa"
        }
        else if(paypal.checked){
            methodtext.textContent="your choice method is paypal"
        }
    }
    else{
        subscriptiontext.textContent="please first subscribe"
    }
}

const initial = document.getElementById("initial");
const toferheniet = document.getElementById("toferheniet");
const tocelsius = document.getElementById("tocelsius");
const tempsub = document.getElementById("tempsub");
const result = document.getElementById("result");

    function convert() {
        let temp = Number(initial.value);

        if (toferheniet.checked) {
            result.textContent = (temp * 9 / 5 + 32).toFixed(2) + " °F";
        } else if (tocelsius.checked) {
            result.textContent = ((temp - 32) * 5 / 9).toFixed(2) + " °C";
        } else {
            result.textContent = "Please select unit!";
        }
    }

    tempsub.onclick = convert;


    function rolldice(){
        const num=document.getElementById("num").value
        const diceresult=document.getElementById("diceresult")
        const diceimage=document.getElementById("diceimage")
        const roller=document.getElementById("roller")
        const values=[]
        const images=[]
        for(let i=0;i<num;i++){
            const value=Math.floor(Math.random()*6)+1
            values.push(value)
           images.push(`<img src="images/${value}.png" alt="dice ${value}">`)
        }
        diceresult.textContent=`dice: ${values.join(', ')}`
        diceimage.innerHTML=images.join('')
}
roller.onclick=rolldice


