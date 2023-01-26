$(function() {

    // PROJECT BACK BUTTON
    $('.project__back-button').on('click', () =>  {

        if (history.length > 1) {
            history.back();
        } else {
            document.location.href = '/index.html';
        }

    });

    // PROJECTS FILTER MENU
    let projects = [];

    function createProject(name, roles) {
        function Project(name, roles) {
            this.name = name;
            this.roles = roles;
        }

        let project = new Project(name, roles);
        projects.push(project);
    }

    const getProjects = () => {

        $('.project').each(function() {

            let name = $(this).find('.project__title').text();
            let roles = [];

            $(this).find('.project__roles span').each(function() {
                roles.push($(this).text().slice(0, 1));
            });

            createProject(name, roles);

        });
    };

    getProjects();

    const showProjects = (projects) => {
        if (projects.length > 0) {

            $('.project').removeClass('project--visible');
            
            projects.forEach(project => {
                $('.project__title').each(function() {
                    if ($(this).text() === project) {
                        $(this).parents('.project').addClass('project--visible');
                    }
                });
            });

        } else {

            $('.project').addClass('project--visible');

        };
    };

    const filterProjects = (filter) => {

        $('.projects__nav .nav-item').removeClass('nav-item--active');

        $('.projects__nav .nav-item').each(function() {
            if ($(this).text().includes(filter)) {
                $(this).addClass('nav-item--active');
            };
        });

        let projectsToShow = []

        for (i = 0; i < projects.length; i++) {
            for (j = 0; j < projects[i].roles.length; j++) {
                if (filter === projects[i].roles[j]) {

                    projectsToShow.push(projects[i].name);

                };
            };
        };

        showProjects(projectsToShow);

    }

    showProjects([]);

    $('.projects__nav .nav-item').on('click', function(e) {
        filterProjects(e.target.textContent.slice(0, 1));
    });

    // HEADER TOGGLE MENU
    $('.menu__button').on('click', () => {

        let colors = ['#A3CBF0', '#EB9DBB', '#00C28A'];
        let activeColor = colors[Math.floor(Math.random() * colors.length)];

        if ($('.header').hasClass('header--menu-open')) {

            $('.header').removeClass('header--menu-open');

            $('.nav-item__stroke path').each(function() {
                $(this).removeAttr('style');
            });
    
            $('.header__flowers path').each(function() {
                $(this).removeAttr('style');
            });

        } else {

            $('.nav-item__stroke path').each(function() {
                $(this).css('stroke', activeColor);
            });
    
            $('.header__flowers path').each(function() {
                $(this).css('fill', activeColor);
            });
            
            $('.header').addClass('header--menu-open');

        };
    });

    // HEADER SUBMENU
    
    let isTouchDevice = window.matchMedia('(hover: none)').matches;
    let hasMenuButton = $('.menu__button').css('display') !== 'none';

    $(window).on('resize', () => {
        hasMenuButton = $('.menu__button').css('display') !== 'none';
    });

    if (isTouchDevice || hasMenuButton) {

        $('.header__nav .nav-item').each(function() {
            if ($(this).children('.sub').length > 0) {
                $(this).on('click', function(e) {
                    if (!$(this).find('.sub').hasClass('flex')) {

                        e.preventDefault();
                        $(this).find('.sub').slideDown(200);
                        $(this).find('.sub').addClass('flex');

                    };
                });
            };
        });

        $('.sub').on('click', () => $('.header').removeClass('header--menu-open'));

    } else {

        $('.header__nav .nav-item').on({
            mouseenter: function() {
                $(this).find('.sub').slideDown(200);
            },
            mouseleave: function() {
                $(this).find('.sub').slideUp(200);
            }
        });

    };

    let hash = document.location.hash;

    switch (hash) {
        case '#frontend-development':
            filterProjects('F');
            break;
        case '#ui-design':
            filterProjects('U');
            break;
        case '#graphic-design':
            filterProjects('G');
            break;
    }

    $('.header__nav .sub__nav-item').on('click', function(e) {
        filterProjects(e.target.textContent.slice(0, 1));
    });

});