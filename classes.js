class Rectangle {
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    calcArea(){
        return this.width*this.height;
    }
}

class Person {
    constructor(firstName, lastName, age, email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
    }
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

class Circle {
    constructor(radius){
        this.radius=radius;
    }
    get diameter(){
        return this.radius*2;
    }
    set diameter(value){
        this.radius=value/2;
    }
    calcArea(){
        return 3.14*(this.radius**2);
    }
}

class Point {
    constructor(x, y){
        this.x=x;
        this.y=y;
    }
    static distance(point1, point2){
        return Math.sqrt((point1.x-point2.x)**2+(point1.y-point2.y)**2)
    }
}


/*
let rect = new Rectangle(6, 7, "red");
console.log(rect.calcArea())
let person = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
console.log(person.toString());
let cir=new Circle(5);
console.log(cir.calcArea());
console.log(cir.diameter);
cir.diameter=7;
console.log(cir.calcArea());
console.log(cir.diameter);
console.log(cir.radius);
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
*/