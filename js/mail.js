$(function() {

    let isTouchDevice = window.matchMedia('(hover: none)').matches;
    let mail = $('.contact__mail').text();

    if (isTouchDevice) {

        // This doesn't work on IOS yet
        // @see https://stackoverflow.com/questions/34045777/copy-to-clipboard-using-javascript-in-ios

        $('.contact__mail').on('click', function() {
            $(this).text('Email copied!');
            navigator.clipboard.writeText(mail);
        });

    } else {

        $('.contact__mail').on({
            mouseenter: function() {
                $(this).text('Copy email?');
            },
            mouseleave: function() {
                $(this).text(mail);
            },
            click: function() {
                navigator.clipboard.writeText(mail);
                $(this).text('Email copied!');
            },
        });

    };
});