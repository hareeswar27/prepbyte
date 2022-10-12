const pushPOp=[]
const object=[]
function firstPopup(){
document.getElementById('main').style.filter='blur(10px)'
document.getElementById('firstPop').style.visibility='visible'
document.getElementById('firstPop').style.zIndex='9999'
}
function closingFirstPop(){
    document.getElementById('main').style.filter='blur(0px)'
    document.getElementById('firstPop').style.visibility='hidden'
    
}

function createcard(){
  document.getElementsByClassName('parainfirst')[0].style.visibility='hidden'
    const input1= document.getElementsByClassName('inp-firstpopbox')[0].value;
    let objData = {
        id: Date.now(),
        Name: input1,
      }
    
    pushPOp.push(objData);
    createcard2()
}
function createcard2(){
    // creation of a card

    const anc = document.createElement("a");
    const firstDiv = document.createElement("div");
    firstDiv.setAttribute("class", "card-class");
    firstDiv.setAttribute("id", "card-Id");

    //creaton of head div inside div

    let headerINsideDiv = document.createElement("div");
    headerINsideDiv.setAttribute("class", "headerOfCard");
    headerINsideDiv.setAttribute("id", "Headerofcard");

    //bodydiv in big div

    let bodyDiv = document.createElement("div");
    bodyDiv.setAttribute("class", "body-div");
    bodyDiv.setAttribute("id", "bodydiv-Id");

    // creation of div of footer to place add and delete icons

    let FooterDiv = document.createElement("div");
    FooterDiv.setAttribute("class", "footerClas");
    FooterDiv.setAttribute("id", "footerId");

    //creation of add icon

    let AddContent = document.createElement("i");
    AddContent.setAttribute("class", "fas fa-plus-circle");
    AddContent.setAttribute("id", "add-icon");

    //creation of delete icon

    let iconDelete = document.createElement("i");  
    iconDelete.setAttribute("class", "fas fa-trash-alt");

    // 

    let parent = document.createTextNode(pushPOp[pushPOp.length-1].Name);

    //appending everything

    anc.appendChild(parent);
    headerINsideDiv.appendChild(anc);
    firstDiv.appendChild(headerINsideDiv);
    firstDiv.appendChild(bodyDiv);
    FooterDiv.appendChild(AddContent);
    FooterDiv.appendChild(iconDelete);
    firstDiv.appendChild(FooterDiv);

    iconDelete.addEventListener('click', () => {firstDiv.remove();})


    AddContent.addEventListener('click', ()=>
    {

   document.getElementById("main").style.filter = "blur(10px)";
   document.getElementById("secondpopup").style.visibility ="visible";

 })

  let miniAddBtn = document.getElementById("additems");
  miniAddBtn.addEventListener("click", second);



     
    document.getElementById("cards").appendChild(firstDiv); 
   document.getElementById("firstPop").style.visibility =  "hidden";
    
  document.getElementById("main").style.filter = "blur(0px)";

 
  



 // headDiv.addEventListener('click', ()=>{

 //   divElement.style.visibility = "visible";
 //   document.getElementById("left").style.display = "none";
 //   document.getElementById("singlecardDisplay").style.display = "block";
 //   document.getElementById("cards").style.visibility =  "hidden";
//    document.getElementById("right").innerText = "";    
//    document.getElementById("center").style.fontSize = "80px";
 //   document.getElementById("center").innerHTML = firstpopup[firstpopup.length-1].Name;
//  })
}



//
function second(){

    let items = document.getElementById("items").value;
    let miniObj = {
      id: Date.now(),
      Name: items,
    }
  
    object.push(miniObj);
    downsec()
  
  
     
  
 
  }
  
  function downsec(){
    
    let i = document.createTextNode("done");

    let Div = document.createElement("div");
    Div.setAttribute("class", "item");

    let a = document.createElement("span");
    a.setAttribute("id", "itemtext");

    let cancel= document.createElement("span");
    cancel.setAttribute("id", "cancel");


    
  let v = document.createTextNode(object[object.length-1].Name);

   
    Div.appendChild(a);
    Div.appendChild(cancel);
    a.appendChild(v);
    cancel.appendChild(i);
    document.getElementById("bodydiv-Id").appendChild(Div);
   
    cancel.addEventListener('click', ()=>{
      cancel.remove();
      a .style.textDecoration = "line-through";
      a .style.color = "red";
  
    })
  
    document.getElementById("secondpopup").style.visibility =  "hidden";
      
    document.getElementById("main").style.filter = "blur(0px)";
    
  
  }
//  function noblur(){
//    let main= getElementById('main')
//    main.style.filter = "blur(0px)";
//  }
function closelast(){
  document.getElementById("secondpopup").style.visibility =  "hidden";
      
    document.getElementById("main").style.filter = "blur(0px)";
}
//