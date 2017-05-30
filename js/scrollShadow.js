var target = document.getElementById("scrollDiv");

var x = target.scrollLeft;

function updateDiv(scroll_pos) {
	var divWidth = target.scrollWidth - target.clientWidth;
	
	if (scroll_pos == 0) {
		target.classList.remove("not-at-left");
	}
	
  if (scroll_pos > 0) {
    target.classList.add("not-at-left");
  }
	
	if (scroll_pos < divWidth) {
		target.classList.add("not-at-right");
	}
	
	if (scroll_pos == divWidth) {
		target.classList.remove("not-at-right");
	}
}

target.addEventListener('scroll', function(e) {
  x = target.scrollLeft;
  updateDiv(x);
});