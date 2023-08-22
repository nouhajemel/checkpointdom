let heart_btn=document.getElementsByClassName("heart_btn")
let plus_btn=document.getElementsByClassName("plus-btn")
let Quant=document.getElementsByClassName("Quant")
let minus_btn=document.getElementsByClassName("minus-btn")
let finalPrice=document.getElementById("finalPrice")
let price=document.getElementsByClassName("price")
let deletee=document.getElementsByClassName("delete")
let Item=document.getElementsByClassName("Item")
for (let index = 0; index < heart_btn.length; index++) {
    heart_btn[index].addEventListener("click",function(){
        if(heart_btn[index].style.color==="red"){
        heart_btn[index].style.color="black"}
        else{
            heart_btn[index].style.color="red"
        }
    })

    plus_btn[index].addEventListener("click",function(){
        Quant[index].value=Number(Quant[index].value)+1
        finalPrice.value=Number(finalPrice.value)+Number(price[index].textContent)
    })
    
    minus_btn[index].addEventListener("click",function(){
        if(Number(Quant[index].value)>1){
            Quant[index].value=Number(Quant[index].value)-1    
            finalPrice.value=Number(finalPrice.value)-Number(price[index].textContent) 
        }
        
    })

    deletee[index].addEventListener("click",function(){
        Item[index].style.display="none"
        finalPrice.value=Number(finalPrice.value)-Number(Quant[index].value)*Number(price[index].textContent)
    })
}