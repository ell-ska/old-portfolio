$(function() {

    let meta = $('.project__meta');
    let projectOffset = $('.project').offset().top;
    let projectHeight = $('.project').height();
    let windowHeight = $(window).height();

    
    const stickyOnScroll = () => {
        
        if (window.scrollY < projectOffset) {
            
            meta.removeClass('project__meta--after-sticky');
            meta.removeClass('project__meta--sticky');
            meta.addClass('project__meta--before-sticky');
            
        } else if (window.scrollY > projectOffset && window.scrollY < projectOffset + projectHeight - windowHeight) {
            
            meta.removeClass('project__meta--before-sticky');
            meta.removeClass('project__meta--after-sticky');
            meta.addClass('project__meta--sticky');

        } else if (window.scrollY > projectOffset + projectHeight - windowHeight) {

            meta.removeClass('project__meta--before-sticky');
            meta.removeClass('project__meta--sticky');
            meta.addClass('project__meta--after-sticky');

        };
    };
    
    $(window).on('scroll', stickyOnScroll);

});