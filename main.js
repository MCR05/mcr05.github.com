var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img2 = new Image();
img2.src = 'dn.png';

var dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.drawImage(img2, this.x, this.y)
  }
}

var img1 = new Image();
img1.src = 'pl.png';

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 160;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.drawImage(img1, this.x, this.y)
  }
}
var cactus = new Cactus();
cactus.draw();


var timer = 0;
var cactus여러개 = [];
var jumptimer = 0;
var animation;

function choco(){
animation = requestAnimationFrame(choco);
  timer++;

  ctx.clearRect(0,0, canvas.width, canvas.height);
  
  if (timer % 190 === 0){
    var cactus = new Cactus();
    cactus여러개.push(cactus);
    cactus.draw();
  }

  cactus여러개.forEach((a, i, o)=>{
    if (a.x < 0){
      o.splice(i, 1)
    }
    a.x--;

    충돌(dino, a);

    a.draw();
  })

  if (jump == true){
    dino.y-=2;
    if (dino.y < 500){
    jumptimer++;
    }
  }
  if (jump == false){
    if (dino.y < 200){
      dino.y+=2.5;
    }
  }
  if (jumptimer > 100){
    jump = false;
    jumptimer = 0
  }

  dino.draw()
}

choco();


//충돌확인

function 충돌(dino, cactus){
  var x축차이 = cactus.x - (dino.x + dino.width);
  var y축차이 = cactus.y - (dino.y + dino.height);
  if (x축차이 < 0 && y축차이 < 0){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    cancelAnimationFrame(animation)
  }
}





var jump = false;
document.addEventListener('keydown', function(e){
  if (e.code === 'Space'){
    jump = true;
  }
})