const person ={
    name:"pallavi",
    age:19,
    greet:function(){
        return 'hello,my name is ${this.name}';
    }
}
console.log(person.name);
console.log(person.greet());