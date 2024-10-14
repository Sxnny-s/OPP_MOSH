class Circle{
    constructor (radius){
    this.radius = radius

    this.defaultLocation = { x: 0, y: 10};

    this.cOL = function(){
        // ...
    }

    this.draw = function(){
        this.cOL()
        console.log('draw')
    }}
}

const circle = new Circle(10)


console.log(circle)

