let student={name:"Areef",age:12};
let ans = JSON.stringify(student)
console.log(ans)
let str = '{ "name": "Areef", "age": 12 }';
let ob=JSON.parse(str);
console.log(ob)

function greet(name, callback){
    console.log('Hi' + ''+name);
    callback();
}

function callMe() {
    console.log('I am callback function');
}

greet('Mujtaba', callMe) 


