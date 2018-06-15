var num1;
var num2;
var num3;
var dis;
var root1;
var root2;
var res=document.querySelector("#result");
var box1=res.innerHTML;


function caluateRoots(){
                    num1=parseInt(document.querySelector("#a").value);
                    num2=parseInt(document.querySelector("#b").value);
                    num3=parseInt(document.querySelector("#c").value);
                    dis=num2*num2-4*num1*num3;
                    if(num1==0){
                      root1=-num3/num2;
                      root2=root1;

                      root1=(Math.round(root1*100))/100;
                     root2=(Math.round(root2*100))/100;
                      dis="<p><br>The root of this Linear Equation is <strong> "+root1+"</strong>.</p>"
                     if(num2==0){
                      dis="<p><br>This Equation has <strong>no real</strong> root.</p>";
                     }
                    }
  else if(dis>=0){
                 dis=Math.sqrt(dis);            
                  root1=(dis-num2)/(4*num1);
                  root2=-(dis+num2)/(4*num1);
                  root1=(Math.round(root1*100))/100;
                  root2=(Math.round(root2*100))/100;
                  dis="<p><br>The roots of this Quadratic Equation are <strong> "+root1+" and "+root2+" </strong>.</p>"
               }
  else{
                     dis="<p><br>This Quadratic Equation has <strong>no real</strong> roots.</p>";
  }
           res.innerHTML=box1+dis;
            document.querySelector("#a").value=num1;
            document.querySelector("#b").value=num2;
            document.querySelector("#c").value=num3;
}




