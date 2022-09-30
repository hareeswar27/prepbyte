let a = 'hello';
let b = new Promise((resolve,reject)=>{
    let check = ""
    if(check == ""){
    resolve("promise Resolved")
    }
    else reject("promise Reject")
    })
Promise.all([a,b]).then((a) => {
console.log(a);
});
