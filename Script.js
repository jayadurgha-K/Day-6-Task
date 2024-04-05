// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
//rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

//Day-6-Task-1a
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie {
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
const obj=new Movie ("mehandi-circus","studio-green","8");

console.log(obj.title,obj.studio,obj.rating);


// Day-6-Task-1b
//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie1 {
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
const obj1=new Movie1 ("Leo","7-screen-studio");

console.log(obj1.title,obj1.studio,obj1.rating);

// Day-6-Task-1c
//Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class film {
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    static getPG(films){
        return films.filter((film)=>film.rating==="PG")
    }
}


const films = [
    new film ("jaiBhim","2DEntertainment"),
    new film ("varanamAayiram","cloud-nine"),
    new film ("leo","7 screen studio","8")
]

const PGfilms=film.getPG(films);

console.log (PGfilms);




// Day-6-Task-1d
//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie3 {
    constructor(title,studio,rating="PG13"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
const obj3=new Movie3 ("Casino Royale","Eon Productions");

console.log(obj3.title,obj3.studio,obj3.rating);


//---------------------------------------------------------------------



//Day-6-Task-2

class Circle {
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get Radius(){
        return this.radius
    }
    set Radius(n){
        this.raidus=n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color=c;
    }
    get toString(){
        return `"circle=[radius=${this.radius}, color=${this.color}]"`;
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2);
    }
    get circumference(){
        return 2*Math.PI*this.radius;
    }
}

const obj4=new Circle("1.0","red");
console.log(obj4.radius);
console.log(obj4.color);
console.log(obj4.toString);
console.log(obj4.area);
console.log(obj4.circumference);


//---------------------------------------------------------------


// Day-6-Task-3
// Write a "person" class to hold all the details

class Person {
    constructor(name,age,gender,martialStatus,contact,email,city){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.martialStatus=martialStatus;
        this.contact=contact;
        this.email=email;
        this.city=city;
    }
}

const obj5=new Person ("jayadurgha","28","female","married","9019081993","jayadurgha04@gmail.com","ariyalur");
console.log(obj5);
console.log(obj5.name);
console.log(obj5.age);
console.log(obj5.martialStatus);
console.log(obj5.gender);
console.log(obj5.contact);
console.log(obj5.email);
console.log(obj5.city);


//----------------------------------------------------------------------------------

// Day6-Task-4
// Write a class to calculate the Uber Price


class UberPrice {
    constructor(distance,price){
        this.distance=distance;
        this.price=price;
    } 
    get Distance(){
        return this.distance
    }
    set Distance(d){
         this.distance=d
    }
    set Price(n){
        this.price=n
    }
    get Price(){
        return this.price
    }
    get amount(){
        return (this.distance*this.price)
    }
       }

const obj6=new UberPrice (15,50)
console.log(obj6);
console.log(obj6.amount);

