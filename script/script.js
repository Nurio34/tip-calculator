
const billInput = document.querySelector("#bill")
const rateInputs = document.querySelectorAll(".tip-cont label")
const customInput = document.querySelector("#custom")
const peopleInput = document.querySelector("#people")
const totalAmount = document.querySelector(".totalAmount")
const amount = document.querySelector(".amount")
const resetBtn = document.querySelector(".resetBtn")

let bill
let people
let ratePerc
let rate 
let totalTip
let custom



    billInput.addEventListener("keyup", function(e) {
        bill = parseInt(e.target.value)
    })

    rateInputs.forEach(function(rateBtn){

        rateBtn.addEventListener("click", function(e) {

            rateInputs.forEach((rateBtn)=>{
                rateBtn.classList.remove("active")
            })

            ratePerc = e.target.textContent
            rate = parseInt(ratePerc.replace("%","")) * 0.01 
            totalTip = bill * rate
            rateBtn.classList.add("active")
            
            totalAmount.textContent = totalTip
            amount.textContent = totalTip / people

            if(billInput.value !== "") {
                resetBtn.disabled = false
            }
            
            customInput.value = ""
        })
    })

    customInput.addEventListener("keyup",function(e){
        custom = parseInt(e.target.value)
        rate = custom * 0.01
        totalTip = bill * rate 
        resetBtn.disabled = false

        totalAmount.textContent = totalTip
        amount.textContent = totalTip / people

        rateInputs.forEach(function(rateBtn){
            rateBtn.classList.remove("active")
        })
    })

    peopleInput.addEventListener("keyup", function(e) {
        people = parseInt(e.target.value)

        amount.textContent = totalTip / people
    })

    resetBtn.addEventListener("click", function(){
        billInput.value =""
        rateInputs.forEach(function(rateBtn){
            rateBtn.classList.remove("active")
        })
        customInput.value = ""
        peopleInput.value = ""
        resetBtn.disabled = true
        totalAmount.textContent = "0.00"
        amount.textContent = "0.00"
    })
