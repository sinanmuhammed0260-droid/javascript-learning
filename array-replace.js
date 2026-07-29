let b=[10,20,10]
alert(b)
let num=parseInt(prompt("enter a number"))
let change=parseInt(prompt("enter number to change"))


for(i=0;i<b.length;i++){
    if(num==b[i]){
    b[i]=change
        
    }
    
}
alert(b)

