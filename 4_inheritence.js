//constructor
function Book(title,auther,year){
    this.title=title;
    this.auther=auther;
    this.year=year;
}
//get summary
    Book.prototype.getSummary =function() {
        return `${this.title} was written by ${this.auther} in ${this.year}`;
    };

    //magazine constructor
    function Magazine(title, auther, year ,month) {
        Book.call(this,title,auther,year);
          this.month = month;
      }
       //inherite prototype
         Magazine.prototype = Object.create(Book.prototype);

      //instantiate Magazine object
    const mag1 = new Magazine('Mag One','john doe','2018','jan');

   //use magazine constrictor
   Magazine.prototype.constructor =Magazine;

    console.log(mag1);