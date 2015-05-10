define([], function () {
    "use strict";
    
    var videoBase = "videos/";
    var imageBase = "images/";

    return {
    	// data goes here
    	videos: {
			"video1": videoBase + 'video1.mpg',
			"video2": videoBase + 'video2.mp4', 
			"etc": videoBase + 'pp.avi', 

    	},
    	images: {
			"img1": imageBase + 'img2.jpg',
			"img2": imageBase + 'img2.png',
			"etc": imageBase + 'pp.jpg',
			gifs: {
				"g1": imageBase + 'g1.gif',
				"h2": imageBase + 'h2.gif',
				"etc": imageBase + 'pp.gif',
			}
    	}
    };
});