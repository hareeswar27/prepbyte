function hello(obj) 
 {
  if (!hi(obj)) 
  return [];
  let a = [];
  for (let key in obj)
  a.push(key);
  return a;
}
function hi(obj) 
{
  let type = typeof obj;
  return type == 'function' || type === 'object' && !!obj;
}
function Student(name) {
this.name = name; 
}

Student.prototype.age = true;
console.log((new Student("Hareeswar")));
 