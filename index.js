



let c=10;

function second(){
   c--;
   document.getElementById('time').innerText=c;
   if(c<=0){
      
      document.getElementById('time').innerText= "  Happy New Year" +  "\n" +2024 + "\n"+ 
      "To my dear friends & families"+ "\n" + "Hope this year brings you a happy & healthy life forever";
    //   + "\n"+ "\n"+ "Regards," + "\n" +"Harivignesh";
      
         
   }

   }
setInterval(second,1000);
