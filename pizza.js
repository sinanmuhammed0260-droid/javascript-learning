let pizza=parseInt(prompt("enter pizzas number"))
let friend=parseInt(prompt("enter the no of friends"))
totalslice=pizza*8
sliceforfriend=Math.floor(totalslice/friend)
balanceslice=totalslice%friend
alert("total slices= "+totalslice)
alert("slice per friend= "+sliceforfriend)
alert("remaining slice= "+balanceslice)
