//constructor
function Book(title,auther,year){
    this.title=title;
    this.auther=auther;
    this.year=year;

    this.getsummary = function(){
        return `${this.title} was written by ${this.auther} in ${this.year}`;
    
    }
}
//instatiate an object
const Book1 =new  Book('book one', 'chetan bhagat' , '2001');
 const Book2 =new  Book('book two', 'jane doe' ,'2016');
 console.log(Book1.getsummary());