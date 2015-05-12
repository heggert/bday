require(["js/data"], function(data){
    "use strict";

    var POSITION_OF_LOGO = 6;
    var VIDEO_WIDTH = 1280;
    var VIDEO_HEIGHT = 640;

    var LIGHTBOX_CLASS = "html5lightbox";

    var $ = jQuery;

    var $mainContainer = $("#links");

    applyDataToDom($mainContainer, data);
    require(["js/plugins/html5lightbox/html5lightbox"], function(){});

    function applyDataToDom($target, data) {
        for (var i = 0, len = data.videos.length; i < len; i++) {
            if (i === POSITION_OF_LOGO) {
                appendLogo($target, data.logo.url)
            }
            appendVideo($target, data.videos[i]);
        }
    }

    function appendLogo($target, url) {
        $target.append('<img class="logo" style="pointer-events: none;" src="' + url + '" alt="Happy Birthday!">');
    }

    function appendVideo($target, video) {
        $target.append('<a href="' + video.url + '" class=' + LIGHTBOX_CLASS +
            ' data-width=' + VIDEO_WIDTH +
            ' data-height=' + VIDEO_HEIGHT +
            '><img src=' + video.thumb + ' alt=' +
            video.alt + '></a>');
    }

});