$(function() {
    
    const stickySidebarOnScroll = () => {
        let maxScrollY = $(document).height() - $(window).height();
        let nextHeight = $('.next-project').height();
        let metaHeight = $('.project__meta').height();
        let windowHeight = $(window).height();
        let bottomValue =  ((windowHeight / 2) - (metaHeight / 2)) - 64;
        
        $('.project__meta').css('bottom', bottomValue + 'px');

        if (window.scrollY > maxScrollY - nextHeight + 64) {
            $('.project__meta').addClass('project__meta--scrolled');
        } else {
            $('.project__meta').removeClass('project__meta--scrolled');
        };
        
    };

    const openProjectPdf = (e) => {
        let pdf = '../assets/truckzter-logo-presentation.pdf';
        e.preventDefault();
        window.open(pdf);
    }
    
    $(window).on('scroll', stickySidebarOnScroll);
    $('.truckzter .pdf-link').on('click', openProjectPdf);

});