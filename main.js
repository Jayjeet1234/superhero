var canvas = new fabric.Canvas('myCanvas');
playerx=10;
playery=10;
blockwidth=30;
blockheight=30;
var playerobject="";
var blockobject="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerobject);
    });

}
function block_update(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockobject=Img;
        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockobject);
    });

}