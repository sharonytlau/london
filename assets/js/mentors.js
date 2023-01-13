var controllerMentors = (function(jQuery) {
    var skillsButton = jQuery(".skills");
    var presentationButton = jQuery(".presentation");

    var classActive = "active";
    var classHide = "d-none";

    var showPresentation = function(index) {
        jQuery("#bt-p-"+index).addClass(classActive);
        jQuery("#bt-s-"+index).removeClass(classActive);

        jQuery("#presentation-"+index).removeClass(classHide);
        jQuery("#skills-"+index).addClass(classHide);
    }

    var showSkills = function(index) {
        jQuery("#bt-p-"+index).removeClass(classActive);
        jQuery("#bt-s-"+index).addClass(classActive);

        jQuery("#presentation-"+index).addClass(classHide);
        jQuery("#skills-"+index).removeClass(classHide);
    }

    var init = function(){
        initEvents();
        showPresentation();
    };

    var initEvents = function() {
        skillsButton.click(function() {
            showSkills(jQuery(this).data('index'));
        });

        presentationButton.click(function() {
            showPresentation(jQuery(this).data('index'));
        });
    };

    return {
        init: initEvents
    };

}(jQuery));

controllerMentors.init();
