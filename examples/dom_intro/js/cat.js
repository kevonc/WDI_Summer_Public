var img = document.getElementsByTagName('img');
img[0].style.left = "0px";

function catWalk() {
  img.style.left = parseInt(img.style.left) + 10 + 'px' ;
}

function walking() {
  var timer = setInterval(catWalk, 200);
}