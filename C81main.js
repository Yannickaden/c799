canvas=
document.getElementById("mecanvas");
ctx=canvas.getContext("2d")

ctx.beginPath();
ctx.strokeStyle="gray";
ctx.lineWIdth=1;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWIdth=40;
ctx.arc(250,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWIdth=40;
ctx.arc(300,250,40,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWIdth=40;
ctx.arc(350,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWIdth=40;
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWIdth=40;
ctx.arc(450,210,40,0,2*Math.PI);
ctx.stroke();

