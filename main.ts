// https://arcade.makecode.com/reference
// https://tetris.com/play-tetris

scene.setBackgroundColor(1);

// 1 is white
// 2 is red
// 3 is pink
// 4 is orange
// 5 is yellow
// 6 is green
// 7 is light green
// 8 is dark blue
// 9 is cyan
// a is purple
// b is pale
// c is dark purple
// d is weird   :(
// e is dark red
// f is black

// A square does look like a square
let mySprite  = sprites.create(img`
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
`)

// The screen is 160 pixels wide and 120 pixels tall
// The position of the sprite is in the middle of the sprite
// 5 to 155 for x
// 5 to 115 for y
let x: number = 80;
mySprite.setPosition(80, 60)
game.onUpdateInterval(50, update);

function update() {
    // This speed seems okay
    if (controller.left.isPressed()) {
        x = x - 5;
        mySprite.setPosition(x, 60);
    }
    else
    {
        x = 80;
        mySprite.setPosition(80, 60)
    }
}