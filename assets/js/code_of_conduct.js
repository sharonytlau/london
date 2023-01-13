var controllerCodeOfConduct = (function(jQuery) {
    var menteeConduct = jQuery("#mentee-conduct");
    var mentorConduct = jQuery("#mentor-conduct");
    
    var btnMenteeConduct = jQuery("#btn-mentee");
    var btnMentorConduct = jQuery("#btn-mentor");
    var btnHideMenteesConduct = jQuery("#btn-mentee-hide");
    var btnHideMentorConduct = jQuery("#btn-mentor-hide");
    

    var classHide = "d-none";

    var menteeCodeConduct = function() {
        menteeConduct.removeClass(classHide);
        btnHideMenteesConduct.removeClass(classHide);
        btnMenteeConduct.addClass(classHide);
    }

    var mentorCodeConduct = function() {
        mentorConduct.removeClass(classHide);
        btnHideMentorConduct.removeClass(classHide);
        btnMentorConduct.addClass(classHide);
    }

    var initPage = function() {
        btnHideMenteesConduct.addClass(classHide);
        btnHideMentorConduct.addClass(classHide);
        btnMenteeConduct.removeClass(classHide);
        btnMentorConduct.removeClass(classHide);

        mentorConduct.addClass(classHide);
        menteeConduct.addClass(classHide);
    };

    var init = function() {
        initEvents();
        initPage();
    };

    var initEvents = function() {
        btnMenteeConduct.click(function() {
            menteeCodeConduct();
        });

        btnMentorConduct.click(function() {
            mentorCodeConduct();
        });

        btnHideMenteesConduct.click(function() {
            initPage();
        });

        btnHideMentorConduct.click(function() {
            initPage();
        });
    };

    return {
        init: init
    };

}(jQuery));

controllerCodeOfConduct.init();
