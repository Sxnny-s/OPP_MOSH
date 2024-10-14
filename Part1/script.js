
// Factory Function 
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw')
        }
    }
    
}


const circle = createCircle(1);

//  constructor Function 

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log(draw);
        };
    }
}




const another = new Circle(1)

