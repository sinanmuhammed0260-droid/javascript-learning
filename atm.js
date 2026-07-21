let withdraw=prompt("enter the amount to withdraw")

let notesof500=Math.floor(withdraw/500)
let balance=withdraw%500
let notesof200=Math.floor(balance/200)
let balance200=balance%200
let notesof100=Math.floor(balance/100)
let totalbalance=balance%100

alert("no of ₹500 notes ="+notesof500 )
alert("no of ₹200 notes ="+notesof200)
alert("no of ₹100 notes ="+notesof100)
alert("remaining amount =₹"+totalbalance)

