$(function () {
    var $container = $('#container');
    var iTimer = null;
    var num = 10;

    var info = list.map(function (val, key) {
        return [
            '<a title="' + val.title + ' - ' + val.tip + '" data-index="' + key + '">' + val.title + '</a>'
        ].join('');
    }).join('');

    $container.html(info);

    $container.on('click', 'a', function (event) {
        var $this = $(this);
        var index = $this.data('index');
        window.open(list[index].link);
        $this.addClass('active').siblings().removeClass('active');
        event.preventDefault();
    });

    var reset = function () {
        var $wid = $(window).width();
        if($wid <= 414) {
            num = 4;
        }
        else {
            num = 10;
        }

        $.each($container.find('a'), function (key, val) {
            var classname = key % num == 0 ? 'left' : '';
            $(val).attr('class', classname);
        });

        $container.find('a:gt('+(num-1)+')').addClass('top');
    }

    reset();
    
    $(window).on('resize', function () {
        clearTimeout(iTimer);
        iTimer = setTimeout(reset, 50)
    });
});
