function reverse(){
    var num = getUserInput();
    var rev=0;
    while(num!=0)
        {
            r=num%10;
        rev = rev*10 + r;
            num = Math.parseInt(num / 10);
            
        }
    showResult("reverse:"+rev);
    
    
}
function fibonacci(){
    var num=getUserInput();
    var output="";
    if(num==1)
        {
            output+="0";
        }
    else if(num==2){
        output+="0 1";
        
      
    }
    else{
        var a=0;
        b=1;
        output+="0 1";
        for(var i=1;i<=num;i++)
            {
                c=a+b;
                output+=" "+c;
                a=b;
                b=c;
            }
    }
    showResult("fibonacci series:"+num+" is:"+output);
    
       
    
}
function factorial()
{
    var num=getUserInput();
    var res = 1;
    for(var i=2;i<=num;i++)
        {
            res+=i;
        }
    showResult("factorial")
}
function sumofdigits(){
      var num=getUserInput();
    sum=0;
    while(num!=0){
        sum+=num%10;
        num=num/10;
    }
    showResult("sum of digits:"+num+" is:"=output);
}
function CheckPrime()
{
   var num=getUserInput();
    flag=true;
    if(num<2){
        flag=false;
        
    }
    for(var i=2;i<=Math.sqrt(num);i++)
        {
            if(num%i==0)
                {
                    flag=false;
                    break;
                }
        }
    if(flag)
        {
             showResult("given number is:"+num+" prime");
        }
    else{
             showResult("given num is:"+num+" not a prime");
        }
}

 
        
    

    function sumofsingledigit()
    {
        var num=getUserInput();
        var output="";
        sum=num;
        while(num>9){
            sum=num/10+num%10;
            num=sum;
        }
        showResult("sum of single digits:"+num+"is:"+output)
        
    }

function getUserInput(){
    num=getdocument.getElementById("num").value;
    return num;
}
function showResult(message)
document.getElementById("result").innerHTML="<h4>"+message+"<h4>";

}