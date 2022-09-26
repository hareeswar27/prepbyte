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


let par = document.getElementsByClassName("parent")[0]
    let but=document.getElementById('but');
    if(but.innerText=='change flex directiom'){
        par.style,flexDirection ='column'
    }
    else{
        par.style,flexDirection='column'
    }