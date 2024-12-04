
const name=document.getElementById('name');
const pin=document.getElementById('pin');
const fathername=document.getElementById('father-name');
const mothername=document.getElementById('mother-name');
const nationality=document.getElementById('nationality');
const category=document.getElementById('category');
const dob=document.getElementById('dob');
const language=document.getElementById('mother-tongue');
const admissiondate=document.getElementById('admission-date');
const admissionnum=document.getElementById('admission-num');
const particulars=document.getElementById('academic-particulars');
const appdate=document.getElementById('applied-date');
const amdno=document.getElementById('admission-num');
const conduct=document.getElementById('conduct');
const btn=document.getElementById('button');
// for certificate element
let d=new Date();
let day = d.getDate();
let month=d.getMonth()+1;
let year=d.getFullYear();
function submit()
{
console.log(name.value.toUpperCase()+" "+pin.value+" "+fathername.value+" "+mothername.value+" "+nationality.value+" "+category.value+" "+dob.value+" "+language.value+" "+admissiondate.value+" "+particulars.value+" "+appdate.value+" ");
document.getElementById("box").style.display="block";
document.getElementById('nm').innerHTML=name.value.toUpperCase();
document.getElementById('pi').innerHTML=pin.value.toUpperCase();
document.getElementById('fn').innerHTML=fathername.value.toUpperCase();
document.getElementById('mn').innerHTML=mothername.value.toUpperCase();
document.getElementById('nrc').innerHTML=nationality.value.toUpperCase();
document.getElementById('cat').innerHTML=category.value.toUpperCase();
document.getElementById('db').innerHTML=dob.value;
document.getElementById('mt').innerHTML=language.value.toUpperCase();
document.getElementById('ed').innerHTML=admissiondate.value;
document.getElementById('ap').innerHTML=particulars.value.toUpperCase();
document.getElementById('ad').innerHTML=appdate.value;
document.getElementById('amdnoc').innerHTML=amdno.value;
document.getElementById('charecter').innerHTML=conduct.value.toUpperCase();
document.getElementById('date').innerHTML=day+"/"+month+"/"+year;
document.getElementById("download").style.display="block";

}
bmx=document.getElementById('bmx');
bmx.addEventListener('focus',()=>{
    document.querySelector(".nvbar").style.display="block"; 
    document.querySelector(".button-74").style.display="none"; 
    document.querySelector(".button-75").style.display="block"; 

})

document.querySelector(".button-75").addEventListener('click',()=>{
    document.querySelector(".nvbar").style.display="none"; 
    document.querySelector(".button-74").style.display="block"; 
    document.querySelector(".button-75").style.display="none"; 

})