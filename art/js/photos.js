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
		gallery.append("<div class='col-xs-6 col-sm-4 col-md-3 photo-wrap' aria-id='" + i + "'><img src='" + photos[i]["tbn"] + "'><div class='desc'>" + photos[i]["desc"] + "</div></div>");
		i++;
	}

	$(".photo-wrap").on("click", function(){
		var el = $(this);
		var aria = el.attr("aria-id");
		var wrap = $(".photo-wrap[aria-id='" + aria + "']");

        openimage(aria);

	});

    $(".bg").on("click", function(){
        closeimage();
    });

});

// Function to enlarge image
function openimage(aria) {
    var i = 0;
    var link = "";
    for (i in photos) {
        if (i == aria) {
            link = photos[i]["src"];
            break;
        }
        i++;
    }
    // Make viewer display block
    $(".viewer").addClass("viewer-fade");
    // Update image source
    $(".viewer img").attr("src", link);
    // Darken viewer background
    $(".viewer .bg").addClass("darken");
}

// Function to close image
function closeimage() {
	$(".viewer").removeClass("viewer-fade");
	// Lighten viewer background
    $(".viewer .bg").removeClass("darken");
}
