// Traverse the DOM!

function traverse_dom(search_term) {
  var elements = document.getElementsByTagName('div');
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].innerText === search_term) {
      return elements[i].innerText;
    }
  }
  return null;
}

function feed_the_shark() {

}

function grow_the_shark() {
  var timer = setInterval(feed_the_shark, 2000);
}