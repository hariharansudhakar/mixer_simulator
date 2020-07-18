var x = document.getElementById("need1");
var y = document.getElementById("need2");
var a=10;
var b=10;
var vol=0;
var vol = x+y;

function vol_upd(){
  var x = Number(document.getElementById("need1").value);
  var y = Number(document.getElementById("need2").value);
  var vol = x+y;
  
  if(a>x){
    if(b>y){
      if(vol<20){
  document.getElementById("l3").innerHTML = vol+" litres";
  document.getElementById("l1").innerHTML = a-x+" litres";
  document.getElementById("l2").innerHTML = b-y+" litres";

  a=a-x;
  b=b-y;
    }
  }
  }
}

function empty(){
  document.getElementById("l3").innerHTML = 0+" litres";
}

function fill_tanks(){
  document.getElementById("l1").innerHTML = 10+"litres";
  document.getElementById("l2").innerHTML = 10+"litres";
  a=10;
  b=10;

}
