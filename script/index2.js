$(function () {
    var $container = $('#container');
    var iTimer = null;

    var reset = function () {
        var $wid = $(window).width();
        var num = 10;
        if($wid <= 414) {
            num = 4;
        }

        var info = list.map(function (val, key) {
            return [
                '<a title="' + val.title + ' - ' + val.tip + '" data-index="' + key + '"' + (key % num == 0 ? ' class="left"' : '') + '>' + val.title + '</a>'
            ].join('');
        }).join('');
        $container.html(info);
        $container.find('a:gt('+(num-1)+')').addClass('top');

        $container.on('click', 'a', function (event) {
            var $this = $(this);
            var index = $this.data('index');
            window.open(list[index].link);
            $this.addClass('active').siblings().removeClass('active');
            event.preventDefault();
        });
    }

    reset();
    
    $(window).on('resize', function () {
        clearTimeout(iTimer);
        iTimer = setTimeout(reset, 50)
    });
});
