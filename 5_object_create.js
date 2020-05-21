//object of  protos
const bookProtos = {
    getsummary:function(){
        return `${this.title} was written by ${this.auther} in ${this.year}`;    
    },
    getAge: function(){
        const year = new Date().getFullYear() - this.year;
        return '${this.title} is ${yesrs} years old';  
    }
}
//create object

 //const book1 = object.create(bookProtos);
//  book1.title = 'Book One';
//  book1.auther = 'john doe';
//  book1.year = '2013';
//  console.log(book1);
const book1 = Object.create(bookProtos ,{
title: {value:'Book One'},
auther: {value:'john doe'},
year: {value:'2013'},
});
console.log(book1);
