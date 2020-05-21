class Book{
    constructor(title,auther,year){
    this. title =title;
    this.auther=auther;
    this.year=year;

    }
    getsummary(){
        return `${this.title} was written by ${this.auther} in ${this.year}`;  
    }
}

     //Magazine Subclass

     class Magazine extends Book {
         constructor(title,auther,year,month){
            super(title,auther,year);
            this.month =month;
         }
        
         }
     

     //instamtiate magazine

     const mag1 = new Magazine('Mag One','john doe','2018','feb');
     console.log(mag1.getsummary());