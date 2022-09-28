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
      
     let time = hh ;
     let time1= mm ;
     let time2= ss;
     let time3= session;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock1").innerText = time1;
    document.getElementById("clock2").innerText = time2;
    document.getElementById("clock3").innerText = time3;
    setTimeout(function(){ currentTime() }, 1000);
    
  } 
  currentTime();

  function getOption() {
    selectElement = document.querySelector('#give');
    output = selectElement.value;
    document.querySelector('.output').textContent = output;
    selectElement = document.querySelector('#give1');
    output1 = selectElement.value;
    document.querySelector('.output1').textContent = output1;
    selectElement = document.querySelector('#give2');
    output2 = selectElement.value;
    document.querySelector('.output2').textContent = output2;
    selectElement = document.querySelector('#give3');
    output3 = selectElement.value;
    document.querySelector('.output3').textContent = output3;


}
let photo = document.getElementById('img')
let test1=document.getElementsByClassName('texs')[0].innerText
let test2=document.getElementsByClassName('left')[0].innerText
let test3 = document.getElementById('clock3').innerText
let test =document.getElementById('clock').innerText
/*if(test3=="PM"){
  document.getElementById('img').src='./afternoon.jpg';
  document.getElementsByClassName('texs')[0].innerText='GOOD AFTERNOON !! TAKE SOME SLEEP';
  document.getElementsByClassName('left')[0].innerText='LETS HAVE SOME LUNCH !!';
  }*/
  if(test==1 && test3=="PM"){
    document.getElementById('img').src='./afternoon.jpg';
    document.getElementsByClassName('texs')[0].innerText='GOOD AFTERNOON !! TAKE SOME SLEEP';
    document.getElementsByClassName('left')[0].innerText='LETS HAVE SOME LUNCH !!';
    }
    if(test==2 && test3=="PM"){
      document.getElementById('img').src='./afternoon.jpg';
      document.getElementsByClassName('texs')[0].innerText='GOOD AFTERNOON !! TAKE SOME SLEEP';
      document.getElementsByClassName('left')[0].innerText='LETS HAVE SOME LUNCH !!';
      }
    if(test==3 && test3=="PM"){
        document.getElementById('img').src='./afternoon.jpg';
        document.getElementsByClassName('texs')[0].innerText='GOOD AFTERNOON !! TAKE SOME SLEEP';
        document.getElementsByClassName('left')[0].innerText='LETS HAVE SOME LUNCH !!';
 }
 if(test==4 && test3=="pm"){
  document.getElementById('img').src='./evening.jpg'
  document.getElementsByClassName('texs')[0].innerText='GOOD EVENING !!'
  document.getElementsByClassName('left')[0].innerText='STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!'
}
if(test==5 && test3=="pm"){
  document.getElementById('img').src='./evening.jpg'
  document.getElementsByClassName('texs')[0].innerText='GOOD EVENING !!'
  document.getElementsByClassName('left')[0].innerText='STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!'
}
if(test==6 && test3=="pm"){
  document.getElementById('img').src='./evening.jpg'
  document.getElementsByClassName('texs')[0].innerText='GOOD EVENING !!'
  document.getElementsByClassName('left')[0].innerText='STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!'
}
if(test==7 && test3=="pm"){
  document.getElementById('img').src='./evening.jpg'
  document.getElementsByClassName('texs')[0].innerText='GOOD EVENING !!'
  document.getElementsByClassName('left')[0].innerText='STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!'
}
if(test==8 && test3=="pm"){
  document.getElementById('img').src='./night.jpg'
      document.getElementsByClassName('texs')[0].innerText='GOOD NIGHT !!'
      document.getElementsByClassName('left')[0].innerText='CLOSE YOUR EYES AND GO TO SLEEP'
}
if(test==9 && test3=="pm"){
  document.getElementById('img').src='./night.jpg'
      document.getElementsByClassName('texs')[0].innerText='GOOD NIGHT !!'
      document.getElementsByClassName('left')[0].innerText='CLOSE YOUR EYES AND GO TO SLEEP'
}
if(test==10 && test3=="pm"){
  document.getElementById('img').src='./night.jpg'
      document.getElementsByClassName('texs')[0].innerText='GOOD NIGHT !!'
      document.getElementsByClassName('left')[0].innerText='CLOSE YOUR EYES AND GO TO SLEEP'
}
if(test==11 && test3=="pm"){
  document.getElementById('img').src='./night.jpg'
      document.getElementsByClassName('texs')[0].innerText='GOOD NIGHT !!'
      document.getElementsByClassName('left')[0].innerText='CLOSE YOUR EYES AND GO TO SLEEP'
}



console.log(test);
console.log(test3)
console.log(test2);
console.log(test1)
console.log(photo)

  
 