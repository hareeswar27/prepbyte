const firstpopup = [];

const object= [];


function box() {

    document.getElementById("msg").style.display = "none";
    document.getElementById("bigbox").style.filter = "blur(8px)";
    document.getElementById("popup").style.visibility ="visible";
    
}

function smallCard(){
  let inner = document.getElementById("cardname").value;

  let objData = {
    id: Date.now(),
    Name: inner,
  }

  firstpopup.push(objData);
  down()

}   

function down() {

    let a = document.createElement("a");
   
    let divElement = document.createElement("div");
    divElement.setAttribute("class", "card-1");
    divElement.setAttribute("id", "cardId");


    let headDiv = document.createElement("div");
    headDiv.setAttribute("class", "head-div");
    headDiv.setAttribute("id", "head-div-Id");
   

    let middleDiv = document.createElement("div");
    middleDiv.setAttribute("class", "middle-div");
    middleDiv.setAttribute("id", "middle-div-Id");

    let iconDiv = document.createElement("div");
    iconDiv.setAttribute("class", "icon-div");
    iconDiv.setAttribute("id", "icon-div-Id");
 

    let iconAdd = document.createElement("i");
    iconAdd.setAttribute("class", "fas fa-plus-circle");
    iconAdd.setAttribute("id", "add-icon");


    let iconDelete = document.createElement("i");  
    iconDelete.setAttribute("class", "fas fa-trash-alt");
    // iconDelete.setAttribute("id", "deleteIcon");
    // <i class="fa-solid fa-trash"></i><i class="fa-duotone fa-trash"></i>
    
    let parent = document.createTextNode(firstpopup[firstpopup.length-1].Name);
    // let headingText = document.createTextNode(firstpopup[firstpopup.length-1].Name);

     a.appendChild(parent)
     divElement.appendChild(headDiv);
     divElement.appendChild(middleDiv);
     headDiv.appendChild(a);   
     iconDiv.appendChild(iconDelete);
     iconDiv.appendChild(iconAdd);
     divElement.appendChild(iconDiv);



  iconDelete.addEventListener('click', () => {divElement.remove();})

  //creating mini card
  
    iconAdd.addEventListener('click', ()=>
    {

    document.getElementById("bigbox").style.filter = "blur(10px)";
    document.getElementById("secondpopup").style.visibility ="visible";

  })

  let miniAddBtn = document.getElementById("additems");
  miniAddBtn.addEventListener("click", second);



     
    document.getElementById("cards").appendChild(divElement); 
    document.getElementById("popup").style.visibility =  "hidden";
    
  document.getElementById("bigbox").style.filter = "blur(0px)";

 
  



  headDiv.addEventListener('click', ()=>{

    divElement.style.visibility = "visible";
    document.getElementById("left").style.display = "none";
    document.getElementById("singlecardDisplay").style.display = "block";
    document.getElementById("cards").style.visibility =  "hidden";
    document.getElementById("right").innerText = "";    
    document.getElementById("center").style.fontSize = "80px";
    document.getElementById("center").innerHTML = firstpopup[firstpopup.length-1].Name;
  })
}


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
    document.getElementById("middle-div-Id").appendChild(Div);
   
    cancel.addEventListener('click', ()=>{
      cancel.remove();
      a .style.textDecoration = "line-through";
      a .style.color = "red";
  
    })
  
    document.getElementById("secondpopup").style.visibility =  "hidden";
      
    document.getElementById("bigbox").style.filter = "blur(0px)";
  
  }



function closeDataObj()
{
  document.getElementById("bigbox").style.visibility = "visible";
  document.getElementById("popup").style.visibility = "hidden"
  document.getElementById("bigbox").style.filter = "blur(0px)"
  
}