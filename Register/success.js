function checkStrength(password){
    let meterBar = $("#meter").find("#meter-bar");
    let meterStatus = $("#meter-text").find("#meter-status");
    let strength = 0;
    if(password.length < 6){
       meterBar.css({
        "background":"#6B778D",
        "width":"10%"
      });
      meterStatus.css("color","#6B778D");
      meterStatus.text("too short") ;
    }
    if(password.length > 7) strength += 1;
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
    if(strength < 2){
      meterBar.css({
        "background":"#ff0000",
        "width":"25%"
      });
      meterStatus.css("color","#ff0000");
      meterStatus.text("weak");
    }else if(strength == 2){
      meterBar.css({
        "background":"#00BCD4",
        "width":"75%"
      });
      meterStatus.css("color","#00BCD4");
      meterStatus.text("good");
    }else{
      meterBar.css({
        "background":"#4CAF50",
        "width":"100%"
      });
      meterStatus.css("color","#4CAF50");
      meterStatus.text("strong");
    }
  }
  
  $("#input-password").on("keyup",function(){
   checkStrength($(this).val());
  });

  let passStrength = 0;
let password = "";
let length = 0;

function getPass() {
  let passInput = document.getElementById("passInput").value;
  password = passInput;
  return password;
}

function getLength() {
  let passLength = password.length;
  length = passLength;
  return length;
}

function lengthReq() {
  if (length > 11 && passStrength == 0) {
    passStrength++;
  }
  if (length < 12 && passStrength >= 1) {
    passStrength--;
  }
}

function upperReq() {
  let chars = password;
  if (/[a-z].?[A-Z]/g.test(chars) && passStrength <= 1) {
    passStrength++;
  }
}

function numReq() {
  let chars = password;
  if (/[0-9]{1}/.test(chars) && passStrength <= 1) {
    passStrength++;
  }
}

function specialReq() {
  let chars = password;
  if (/[!@#\$%\^\&*\)\(+=._-]/g.test(chars) && passStrength <= 3) {
    passStrength++;
  }
}

function checkStrength() {
  switch(passStrength) {
    case 0:
      swordLeft.reverse();
      swordRight.reverse();
      wings.reverse();
      crown.reverse();
      break;
    case 1:
      swordLeft.play();
      swordRight.reverse();
      wings.reverse();
      crown.reverse();
      break;
    case 2:
      swordLeft.play();
      swordRight.play();
      wings.reverse();
      crown.reverse();
      break;
    case 3:
      swordLeft.play();
      swordRight.play();
      wings.play();
      crown.reverse();
      break;
    case 4:
      swordLeft.play();
      swordRight.play();
      wings.play();
      crown.play();
      break;
  }
}

function deletePass() {
  if (password == "") {
    passStrength = 0;
  }
}

function eventFunction() {
  getPass();
  getLength();
  lengthReq();
  upperReq();
  numReq();
  specialReq();
  deletePass();
  checkStrength();
  console.log(passStrength);
};

function toggle() {
  var x = document.getElementById("passInput");
  if (x.type === "password") {
    $("#showPass").css({"display": "block"});
    $("#hidePass").css({"display": "none"});
    x.type = "text";
  } else {
    $("#showPass").css({"display": "none"});
    $("#hidePass").css({"display": "block"});
    x.type = "password";
  }
} 

$("#showHide").click(function() {
  getPass();
  toggle();
});

gsap.set("#swords", {y: -60});
gsap.set("#sword-left", {x: -30, rotate: -30, transformOrigin: "center"});
gsap.set("#sword-right", {x: 30, rotate: 30, transformOrigin: "center"});
gsap.set("#wings", {scale: 0, y: 60, transformOrigin: "center"});
gsap.set("#crown", {rotate: 30, transformOrigin: "center", y: 60});

var swordLeft = gsap.timeline();
  swordLeft.to("#sword-left", .5, {opacity: 1, rotate: 0, y: 60, x: 0, ease: Back.easeOut});
  swordLeft.pause();

var swordRight = gsap.timeline();
 swordRight.to("#sword-right", .5, {opacity: 1, rotate: 0, y: 60, x: 0, ease: Power4.easeInOut});
  swordRight.pause();

var wings = gsap.timeline();
  wings.to("#wings", .5, {delay: .5, opacity: 1, scale: 1, y: 0, ease: Back.easeOut, transformOrigin: "center"});
  wings.pause();

var crown = gsap.timeline();
  crown.to("#crown", .5, {delay: 1, opacity: 1, y: 0, rotate: 0, ease: Back.easeOut});
  crown.pause();