class Book{
    constructor(title,auther,year){
    this. title =title;
    this.auther=auther;
    this.year=year;

    }
    getsummary(){
        return '${this.title} was written by ${this.auther} in ${this.year}';  
    }
}

     //Magazine Subclass

     class Magazine extends Book {
         constructor(title,auther,year,month);
         super(title,auther,year,month){
             this.month =month;
         }
     }
//     getAge(){
//         const year = new Date().getFullYear -this.year;
//         return '${this.title} is ${yesrs} years old'; 
//     }
//     revise(newYear){
//         this.year =newYear;
//         this.revise =true;
//     }
//     static topBookStore(){
//         return 'Barnes & Noble';
//     }
// }
//Insstantiate object
// const book1 =new Book('Book one', 'john Doe','2013');
// console.log(book1);
// book1.revise('2018');
// console.log(Book.topBookStore());