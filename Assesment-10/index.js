let para= document.getElementById('text')
let hed=document.getElementsByTagName('h1')
console.log(hed[0].innerText);
let b =document.getElementsByClassName('box')
hed[0].style.color='red'
hed[0].id='heading'
console.log(hed)
setTimeout(function(){
    hed[0].innerText='hello world'
},5000)
function func(){
    let par =document.getElementById('parent')
    par.style.flexDirection = "column"
}
function func1(){
    let hello=document.getElementById('change')
    hello.innerText='Welcome to Elevation academy'
    hello.style.color='green'

}
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
   
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();

  function getOption() {
    selectElement = document.querySelector('.select1');
    output = selectElement.value;
    document.querySelector('.output').textContent = output;
}