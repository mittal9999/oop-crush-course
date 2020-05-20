const s1 ="hello";
console.log(typeof s1);

const s2 = new String('hello');
console.log(typeof s2);

//dom object for window
console.log(window);
//window.alert('hiii');

console.log(navigator.appVersion);

//object literal

const book1 ={
title:'book one',
auther:'john doe',
year:'2013',
getsummary:function() {
    return '${this.title} was written by ${this.auther} in ${this.year}';
}

};

const book2 ={
    title:'book two',
    auther:'john doe',
    year:'2015',
    getsummary:function() {
        return '${this.title} was written by ${this.auther} in ${this.year}';
    }
    
    };
//console.log(book2.getsummary());
console.log(Object.values(book2));
console.log(Object.values(book1));
console.log(Object.keys(book1));

//constructor
function Book(title,auther,year){
    this.title=title;
    this.autheauther;
    this.year=year;
}
    //prototype summary
    Book.prototype.getsummary =function(){
        return '${this.title} was written by ${this.auther} in ${this.year}';
    };
   //getAge
   Book.prototype.getAge = function(){
       const year = new Date().getFullYear -this.year;
       return '${this.title} is ${yesrs} years old';
   };
//revise /change year
Book.prototype.revise =function(newYear){
    this.year =newYear;
    this.revise =true;
};


//instatiate an object
const Book1 =new  Book('book one', 'chetan bhagat' , '2001');
 const Book2 =new  Book('book two', 'jane deoe' ,'2016');

console.log(book2);
book2.revise('2018');
console.log(book2);

//constructor
function Book(title,auther,year){
    this.title=title;
    this.autheauther;
    this.year=year;
}
    //prototype summary
    Book.prototype.getsummary =function(){
        return '${this.title} was written by ${this.auther} in ${this.year}';
    };

    //magazine constructor
    function magazine(title, auther, year ,month){
      Book.call(this,title,auther,year);
        this.month = month;
    }
    //inherite prototype
    magazine.prototype = object.create(Book.prototype);

    //instantiate Magazine object
    const mag1 = new magazine('Mag One','john doe','2018','jan');
    //console.log(mag1);

    //use magazine constrictor
    magazine.prototype.constructor =magazine;
    
   // console.log(mag1.getsummary());
console.log(mag1);



//object of  protos
const bookProtos = {
    getsummary:function(){
        return '${this.title} was written by ${this.auther} in ${this.year}';    
    },
    getAge: function(){
        const year = new Date().getFullYear -this.year;
        return '${this.title} is ${yesrs} years old';  
    }
}

//create object

// const book1 =object.create(bookProtos);
// book1.title = 'Book One';
// book1.auther = 'john doe';
// book1.year = '2013';

const book1 =object.create(bookProtos);
title: {value:'Book One'};
auther: {value:'john doe'};
year: {value:'2013'};
console.log(book1);