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

		// If all images are closed, open clicked image
		if (anim_state == "closed") {
			openimage(aria);
			//anim_state = aria;
		}

        /*
		// If image is large, close it 
		else if (wrap.hasClass("col-md-12")) {

            if (aria == 1) {
                $(".photo-wrap[aria-id='0']").insertBefore(".photo-wrap[aria-id='1']");
            }
            if (aria == 2) {
                $(".photo-wrap[aria-id='0']").insertBefore(".photo-wrap[aria-id='3']");
                $(".photo-wrap[aria-id='1']").insertBefore(".photo-wrap[aria-id='3']");
            }

			closeimage(aria);
		}
		*/

	});

});

// Function to enlarge image
function openimage(aria) {
	alert("Coming soon");
}

// Function to close image
function closeimage(aria) {
	alert("Coming soon");
}
