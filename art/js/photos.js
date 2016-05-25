/**
 * Created by David Corbin.
 */

var gallery = $(".photo-cont");

/*
 * On page load, load images from data.js file.
 */
$(document).ready(function() {

	var i = 0;

    // Load all images from photos var
	for (i in photos) {
		gallery.append("<div class='col-xs-12 col-sm-6 col-md-3 col-lg-3 photo-wrap' aria-id='" + i + "'><img src='" + photos[i]["tbn"] + "'><div class='desc'>" + photos[i]["desc"] + "</div></div>");

        // If specific image is specified in url, open it
        if (getParameterByName("day")!=null && photos[i]["desc"]==="Day "+getParameterByName("day")) {
            openimage(photos.length-getParameterByName("day"));
        }

		i++;
	}

    // When user clicks on image, enlarge it
	$(".photo-wrap").on("click", function(){
		var el = $(this);
		var aria = el.attr("aria-id");
		var wrap = $(".photo-wrap[aria-id='" + aria + "']");
        openimage(aria);
	});

    // When user clicks on background, close enlarged image
    $(".bg").on("click", function(){
        closeimage();
    });

});

// Get HTTP GET parameter from URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Function to enlarge image
function openimage(aria) {
    var i = 0;
    var link = "";
    for (i in photos) {
        if (i == aria) {
            link = photos[i]["src"];

            // Change url to direct link to image
            history.pushState({}, '', '/art/?day='+photos[i]["desc"].split("Day ")[1]);

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
    $(".viewer img").attr("src", "");

    // Change url to main page
    history.pushState({}, '', '/art/');
}
