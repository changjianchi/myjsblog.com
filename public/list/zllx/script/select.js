$(function() {
    var setSelect = function () {
        var $select = $('.select_wrap:visible');
        $.each($select, function (key, val) {
            var $this = $(val).find('.select');
            var flag = false;
            var $valueHeight = $(val).find('.value').height();
            var $height = $(val).find('.option').height();

            $(val).css('zIndex', $select.length - key);

            $this.find('.value').on('click', function () {
                if (flag) {
                    $this.animate({
                        height: $valueHeight + 'px'
                    }, 50);
                    flag = false;
                }
                else {
                    $this.animate({
                        height: ($height + $valueHeight) + 'px'
                    }, 100);
                    flag = true;

                    setTimeout(function () {
                        $(document).one('click', function () {
                            $this.animate({
                                height: $valueHeight + 'px'
                            }, 50);
                            flag = false;
                        });
                    });
                }
            });

            $this.find('.option p').on('click mouseenter mouseleave', function (event) {
                if (event.type === 'click') {
                    $this.find('.value').html($(this).text());
                    $(this).addClass('active').siblings().removeClass('active');
                    $this.animate({
                        height: $valueHeight + 'px'
                    }, 50);
                    flag = false;
                }
                else if (event.type === 'mouseenter') {
                    $(this).addClass('hover');
                }
                else {
                    $(this).removeClass('hover');
                }
                
            });

        });
    };
    
    setSelect();
});
