var ball;
var database,position,Gposition;
var Gball;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    Gball = createSprite(0,250,10,10);
    var ballPosition = database.ref('ball/position');
    var GballPosition = database.ref('Gball/position');
    ballPosition.on("value",readposition,showerror);
    GballPosition.on("value",readGposition,showerror);
        ball.shapeColor = "red";
        Gball.shapeColor = "green";
        }
function readposition(data){
position = data.val();
ball.x=position.x;
ball.y = position.y;

console.log(position.x);
console.log(position.y);
}
function readGposition(data){
    Gposition = data.val();
    Gball.x=Gposition.x;
    Gball.y = Gposition.y;
    
    console.log(Gposition.x);
    console.log(Gposition.y);
    }
function showerror(){
    console.log("You are playing a production of rioSpecial");
}
function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
        })

}
function writeGposition(x,y){
    database.ref('Gball/position').set({
        'x':Gposition.x+x,
        'y':Gposition.y+y
    })
}

function draw(){
    background("white");
 if(position!== undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }}
    if(position!== undefined){
        if(keyDown("A")){
            writeGposition(-1,0);
        }
        else if(keyDown("D")){
            writeGposition(1,0);
        }
        else if(keyDown("W")){
            writeGposition(0,-1);
        }
        else if(keyDown("S")){
            writeGposition(0,+1);
        }}
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
