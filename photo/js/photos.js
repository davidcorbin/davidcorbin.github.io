/**
 * Created by David Corbin on 12/20/2015.
 */

var gallery = $(".photo-cont");

var anim_state = "closed";

/*
 * On page load, load images from data.js file.
 */
$(document).ready(function() {

	var i = 0;
	for (i in photos) {
		gallery.append("<div class='col-md-3 photo-wrap' aria-id='" + i + "'><img src='" + photos[i]["src"] + "'></div>");
		i++;
	}

	$(".photo-wrap").on("click", function(){
		var el = $(this);
		var aria = el.attr("aria-id");
		var wrap = $(".photo-wrap[aria-id='" + aria + "']");

		// If image is small, open it
		if (wrap.hasClass("col-md-3")) {
			// If an image is already large, close it
			if (anim_state != "closed") {
				closeimage(anim_state);
			}
			openimage(aria);
			anim_state = aria;
		} 
		// If image is large, close it 
		else if (wrap.hasClass("col-md-12")) {
			closeimage(aria);
		} 

	});

});

// Function to enlarge image
function openimage(aria) {
	$(".photo-wrap[aria-id='" + aria + "']").removeClass("col-md-3");
	$(".photo-wrap[aria-id='" + aria + "']").addClass("col-md-12");
}

// Function to close image
function closeimage(aria) {
	$(".photo-wrap[aria-id='" + aria + "']").removeClass("col-md-12");
	$(".photo-wrap[aria-id='" + aria + "']").addClass("col-md-3");
}
