var renderer = PIXI.autoDetectRenderer(512, 512,{backgroundColor : 0xFFFFFF});
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();
var chessField = new PIXI.Container();
stage.addChild(chessField);
makeChessField(chessField);


animate();
function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
}

function makeChessField(container) {
    var graphics = new PIXI.Graphics();
    var elemWidth = renderer.width / 8;
    var elemHeight = renderer.height / 8;
    var color, offset;
    for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 8; y++) {
            if ((y + 1) % 2 == 0) {
                offset = 1;
            } else {
                offset = 0;
            }
            if ((x + offset + 1) % 2 == 0) {
                color = 0x000000;
            } else {
                color = 0xFFFFFF;
            }
            graphics.lineStyle(0);
            graphics.beginFill(color, 1.0);
            graphics.drawRect(elemWidth * x, elemHeight * y, elemWidth, elemHeight); 
            graphics.endFill();
        }
    }
    container.addChild(graphics);
}