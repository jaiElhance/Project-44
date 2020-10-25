var batsmen1,batsmen2;
var bowler;
var fielder1, fielder2, fielder3, fielder4, fielder5, fielder6, fielder7, fielder8, fielder9;
var bat, ball;
var Swicket, NSwicket;
var StraightBoundary, OffBoundary, LegBoundary;

function preload(){

}

function setup(){
    createCanvas(800,800);

    batsmen1 = createSprite(400,700,20,20);
    batsmen2 = createSprite(350,350,20,20);
    bowler = createSprite(425,350,20,20);
    fielder1 = createSprite(250,100,20,20);
    fielder2 = createSprite(150,300,20,20);
    fielder3 = createSprite(200,450,20,20);
    fielder4 = createSprite(200,600,20,20);
    fielder5 = createSprite(650,650,20,20);
    fielder6 = createSprite(525,500,20,20);
    fielder7 = createSprite(750,375,20,20);
    fielder8 = createSprite(650,300,20,20);
    fielder9 = createSprite(550,100,20,20);
    bat = createSprite();
    ball = createSprite();
    Swicket = createSprite();
    NSwicket = createSprite();
    StraightBoundary = createSprite(400,10,800,20);
    OffBoundary = createSprite(790,400,20,800);
    LegBoundary = createSprite(10,400,20,800);
}

function draw(){
    background("black");

    batsmen1.shapeColor = "blue"
    batsmen2.shapeColor = "blue"
    bowler.shapeColor = "green"
    fielder1.shapeColor = "red"
    fielder2.shapeColor = "red"
    fielder3.shapeColor = "red"
    fielder4.shapeColor = "red"
    fielder5.shapeColor = "red"
    fielder6.shapeColor = "red"
    fielder7.shapeColor = "red"
    fielder8.shapeColor = "red"
    fielder9.shapeColor = "red"

    drawSprites();
}