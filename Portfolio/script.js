var pics=["images/1.png","images/2.png","images/3.png","images/3a.png","images/4.png","images/6.png"];

var i=1;

var picture=document.querySelector("#slideshow");

function changePic()
{
picture.src=pics[i];
i++;

if(i==pics.length){
  i=0;
}
}


setInterval(changePic,2000);