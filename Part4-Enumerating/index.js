class Circle {
    constructor(radius) {
        this.radius = radius
        this.draw = function () {
            console.log(draw)
        }
    }
}

const circle = new Circle(10);

console.log(circle)

for (let key in circle){
    if(typeof circle[key] !== 'function')
        console.log(key, circle[key] )
}

const keys = Object.keys(circle);
console.log(keys)


if ('radius' in circle)
    console.log('circle had a radius')
