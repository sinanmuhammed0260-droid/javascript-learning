
let num=[10,20,30,40]
alert(num)
let num2=parseInt(prompt('enter the number to be search'))
let n=false

for(i=0;i<num.length;i++){
    
    if(num2==num[i]) {
        n=true
        alert("number is found"+"\n position is" +i)
        
        }  
        
    
    }
      if(n==false){
        alert("number not found")
      }





