/**
 * Created by David Corbin on 12/20/2015.
 */

var gallery = $(".photo-cont");

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
		$(".photo-wrap[aria-id='" + aria + "']").removeClass("col-md-3");
		$(".photo-wrap[aria-id='" + aria + "']").addClass("col-md-12");
	});

});
