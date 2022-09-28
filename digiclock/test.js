let lastimage=document.getElementsById('lasti');
    let sama = document.getElementById('clock')
    let sama1 = document.getElementById('clock3')
    if(session=="AM"){
      document.getElementsById('lasti').src="./evening.jpg"
        document.getElementById('clock').innerText='GOOD MORNING!! WAKE UP !! '
        good1.innerText='GRAB SOME HEALTHY BREAKFAST!!!'
    }
    if(hh>=12 && hh<=15 && sama1 == "PM"){
      lastimage.src="./afternoon.jpg"
      good.innerText='GOOD AFTERNOON !! TAKE SOME SLEEP'
      good1.innerText='LETS HAVE SOME LUNCH !!'
    }
    if(sama>3 && sama<=6 && sama1 == "PM"){
      lastimage.src="./evening.jpg";
      good.innerText='GOOD EVENING !!'
     good1.innerText='STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!'
    }
  if(sama>=7 && sama<12 && sama1 == "PM" ){
    lastimage.src="./night.jpg"
    good.innerText='GOOD NIGHT !!'
    good1.innerText='CLOSE YOUR EYES AND GO TO SLEEP'
  }



  if(test==1){
    document.getElementById('img').src='./afternoon.jpg';
    document.getElementsByClassName('texs')[0].innerText='GOOD AFTERNOON !! TAKE SOME SLEEP';
    document.getElementsByClassName('left')[0].innerText='LETS HAVE SOME LUNCH !!';
    }
    if(test==2){
      document.getElementById('img').src='./afternoon.jpg';
      document.getElementsByClassName('texs')[0].innerText='GOOD AFTERNOON !! TAKE SOME SLEEP';
      document.getElementsByClassName('left')[0].innerText='LETS HAVE SOME LUNCH !!';
      }
    if(test==3){
        document.getElementById('img').src='./afternoon.jpg';
        document.getElementsByClassName('texs')[0].innerText='GOOD AFTERNOON !! TAKE SOME SLEEP';
        document.getElementsByClassName('left')[0].innerText='LETS HAVE SOME LUNCH !!';
        }
    if(test==4){
      document.getElementById('img').src='./night.jpg'
      document.getElementsByClassName('texs')[0].innerText='GOOD NIGHT !!'
      document.getElementsByClassName('left')[0].innerText='CLOSE YOUR EYES AND GO TO SLEEP'
    }