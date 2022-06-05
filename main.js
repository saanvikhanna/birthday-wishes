var canvas = new fabric.Canvas('myCanvas');
block_image_width=750;
block_image_height=500;
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
    block_image_object=Img;
    
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:0,
        left:0
    });
    canvas.add(block_image_object);
    } );
    }
	
function playSound(){
 x.play();	
}
