class Rope{
    constructor(bodyA,pointB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length:200
        }
        this.pointB = pointB;
        this.sling1 = Constraint.create(options);
        World.add(world,this.sling1);
    }

    fly(){
        this.sling1.bodyA = null;
    }
    display(){
        if(this.sling1.bodyA) {
        var pointA = this.sling1.bodyA.position;
        var pointB = this.pointB;
        strokeWeight (4);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}







// class Rope{
//     constructor(body1, body2, offsetX, offsetY){
//         this.offsetX = offsetX
//         this.offsetY = offsetY
//         var options = {
//             bodyA: body1,
//             bodyB: body2,
//             stiffness: 0.04,
//             length: 10
//         }
//         this.rope = Constraint.create(options);
//         World.add(world, this.rope);
//     }

//     fly(){
//         this.rope.bodyA = null;
//     }

//     display(){
//             var bodyA = this.rope.bodyA.position;
//             var bodyB = this.bodyB;
//             push ();
//             strokeWeight(2);
//             stroke (0);
//             //if(bodyA.x<220) { 
//             strokeWeight (7);    
//             line(bodyA.x-20, bodyA.y, bodyB.x-20, bodyB.y);
//             line(bodyA.x-20, bodyA.y, bodyB.x+30, bodyB.y-3);
//           //  strokeWeight(3);
//             line(bodyA.x+20, bodyA.y, bodyB.x-10, bodyB.y);
//             line(bodyA.x+20, bodyA.y, bodyB.x+30, bodyB.y-3);
//             pop ();
        
//     }
    
// }