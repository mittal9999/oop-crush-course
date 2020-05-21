//object literal
const book1 ={
    title:'book one',
    auther:'john doe',
    year:'2013',
    getsummary:function() {
        return `${this.title} was written by ${this.auther} in ${this.year}`;
    }
};


const book2 ={
    title:'book two',
    auther:'john doe',
    year:'2016',
    getsummary:function() {
        return `${this.title} was written by ${this.auther} in ${this.year}`;
    }
};
//console.log(book1.getsummary());

console.log(Object.values(book2));
console.log(Object.values(book1));
console.log(Object.keys(book1));