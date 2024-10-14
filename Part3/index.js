class Circle {
    constructor(radius) {
        this.radius = radius
        this.draw = function () {
            console.log(draw)
        }
    }
}


const circle = new Circle(10)

circle.location = {x: 1}
circle['location'] = {x: 1}

const propertyName = 'location'
console.log(circle)

delete circle.location;

console.log(circle)