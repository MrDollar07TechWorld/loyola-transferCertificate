function play()
{
    /* place for hide details 
    document.queryselector(".year").style.display="block";
     */
// variablees for the year class 
let mks=document.getElementById('mk');
let tms= document.getElementById('tm');

if(mks.value>1000||tms.value>1000)
    {
        alert("invalid marks");
        mks.value='';
        tms.value='';
    }
else if(parseInt(mks.value) > parseInt(tms.value))
    {
        alert("ivalid marks");
        mks.value='';
        tms.value='';
    }
    else
    {
        let percentage=(mks.value/tms.value)*100;
        percentage=percentage.toFixed(2);
        document.getElementById('sc').style.display="block";
        document.getElementById('sco').innerHTML=percentage+"%";
        document.getElementById('sco').style.color="red";
        document.getElementById('sco').style.fontSize="30px";

    }

}

function playD()
{
    let sem1=parseInt(document.getElementById('SEM1').value);
    let sem2=parseInt(document.getElementById('SEM3').value);
    let sem3=parseInt(document.getElementById('SEM4').value);
    let sem4=parseInt(document.getElementById('SEM5').value);
    let sem5=parseInt(document.getElementById('SEM6').value);
/* for calculating total marks */
let tm1=parseInt(document.getElementById('tm1').value);
let tm2=parseInt(document.getElementById('tm3').value);
let tm3=parseInt(document.getElementById('tm4').value);
let tm4=parseInt(document.getElementById('tm5').value);
let tm5=parseInt(document.getElementById('tm6').value);

/* for evaluating*/

    
/* for taking 25% from first sem */
sem1= (25*sem1)/100;
sem1=parseInt(sem1);
console.log(sem1);
tm1=250;
/* now taking another semister values  */
let totalMarks=tm1+tm2+tm3+tm4+tm5;
console.log(totalMarks);
/* value of the semister total */
let semTotals=sem1+sem2+sem3+sem4+sem5;
console.log(semTotals);

let percentagedip=(semTotals/totalMarks) *100;
console.log(percentagedip);
if(percentagedip===NaN)
    {
        alert("Invalid Details");
    }
/* printing percentage on to the page */
percentagedip=percentagedip.toFixed(2);
        document.getElementById('scD').style.display="block";
        document.getElementById('scoD').innerHTML=percentagedip+"%";
        document.getElementById('scoD').style.color="red";
        document.getElementById('scoD').style.fontSize="30px";

}




  // to dispaly according to the navigations
   function semDISP()
   {
    document.getElementById('ses').style.display="none";
    document.getElementById('dim').style.display="block";
    document.querySelector(".year").style.display="block";
    document.querySelector(".dip").style.display="none";
    

   }
  function dipDISP()
    {
    document.getElementById('ses').style.display="block";
    document.getElementById('dim').style.display="none";
    document.querySelector(".year").style.display="none";
    document.querySelector(".dip").style.display="block";


  }
  