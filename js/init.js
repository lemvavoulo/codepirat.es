jQuery.backstretch("http://codepirates.eiremedia.netdna-cdn.com/img/bg.png");

jQuery(function () {


/*
    jQuery(window).hashchange(function () {
        var hash = location.hash;

        if ((hash.replace(/^#/, '') || 'blank') == 'filedump') {
            document.open();
            document.write('<script src="https://gist.github.com/6324632.js"><' + '\/script>');
            document.close();
        }


        jQuery('#nav a').each(function () {
            var that = jQuery(this);
            that[that.attr('href') === hash ? 'addClass' : 'removeClass']('selected');
        });



    })

    jQuery(window).hashchange();
    
*/

    var links = document.getElementById('body').getElementsByTagName('a'),
        len = links.length,
        i;
    for (i = len; i--;) {
        if (!links[i].title.match(/top|shar|bai|Host/)) {
            links[i].target = '_blank';
        }
    }

    jQuery('a[target~="_blank"]').simpleTooltip({
        title: 'Opens in new window!'
    });



});

jQuery.fn.vibrate = function (conf) {
    var config = jQuery.extend({
        speed: 50,
        duration: 1000,
        spread: 15
    }, conf);


    return this.each(function () {

        var t = jQuery(this);

        var vibrate = function () {
            var topPos = Math.floor(Math.random() * config.spread) - ((config.spread - 2) / 2);
            var leftPos = Math.floor(Math.random() * config.spread) - ((config.spread - 1) / 2);
            var rotate = Math.floor(Math.random() * config.spread) - ((config.spread - 1) / 2);

            t.css({
                position: 'relative',
                left: leftPos + 'px',
                top: topPos + 'px',
                WebkitTransform: 'rotate(' + rotate + 'deg)'
            });
        };

        var doVibration = function () {
            var vibrationInterval = setInterval(vibrate, config.speed);

            var stopVibration = function () {
                clearInterval(vibrationInterval);
                t.css({
                    position: 'static',
                    WebkitTransform: 'rotate(0deg)'
                });
            };

            setTimeout(stopVibration, config.duration);
        };
        doVibration();
    });
};

jQuery('#head').mouseover(function () {
    jQuery(this).vibrate();
});