//constructor
function Book(title,auther,year){
    this.title=title;
    this.auther=auther;
    this.year=year;
}
//get summary
    Book.prototype.getsummary =function() {
        return `${this.title} was written by ${this.auther} in ${this.year}`;
    };
//getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear()- this.year;
    return `${this.title} is ${years} years old`;
};
//revise /change year
Book.prototype.revise =function(newYear){
    this.year =newYear;
    this.revise =true;
};


//instatiate an object
const Book1 =new  Book('book one', 'chetan bhagat' , '2001');
 const Book2 =new  Book('book two', 'jane doe' ,'2016');
 //console.log(Book2.getAge());
 
 Book2.revise('2018');
 console.log(Book2);
 console.log(Book2.getAge());
