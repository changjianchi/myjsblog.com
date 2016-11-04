$(function() {
    var defaultLeft = 0;
    $("#subShutHover").prevAll().each(function () {
        defaultLeft += $(this).innerWidth();
    });

    defaultLeft -= $(".indicator").innerWidth();
    $(".indicator").css("left", defaultLeft);
    $(".indicator").width($("#subShutHover").width());


    var hoverTimer;
    $(".submenu").hover(function () {
        var $this = $(this);
        hoverTimer = setTimeout(function () {
            var width = 0;
            $this.prevAll().each(function () {
                width += $(this).innerWidth();
            });
            width -= $(".indicator").innerWidth();
            $(".indicator").animate({left: width, width: $this.width()});
        }, 150);
    }, function () {
        clearTimeout(hoverTimer);
    });

    $(".submenus").hover(function () {
        $(".indicator").removeClass("hide");
    }, function () {
        var width = 0;
        $("#subShutHover").prevAll().each(function () {
            width += $(this).innerWidth();
        });
        width -= $(".indicator").innerWidth();
        $(".indicator").animate({left: width, width: $("#subShutHover").width()});
    })
});
