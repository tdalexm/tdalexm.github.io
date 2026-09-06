(function ($) {

    const launchAnimate = {
        init: function () {
            this.config();
            this.launch();
        },
        config: function () {
            this.body = body;
            this.row = this.body.find('section');
        },
        launch: function () {
            const that = this;

            const options = {
                threshold: 0.7,
            };
            
            const callback = (entries) => {
                entries.forEach((entrie) => {
                    if (entrie.isIntersecting) {
                        const section = $(entrie.target).attr("id")
                        $(`.nav-tab:not(${section})`).removeClass('active');
                        $(`.nav-tab.${section}`).addClass('active');
                    }
                });
            };

            const observer = new IntersectionObserver(callback, options);
            this.row.each((entrie) => {
                observer.observe(this.row[entrie]);
            });

        },
    };


    var body;

    $(function () {
        body = $('body');

        launchAnimate.init();

        // Cursor glow effect (Brittany Chiang technique)
        const glow = $('.cursor-glow');
        if (glow.length && window.matchMedia('(hover: hover)').matches) {
            $(document).on('mousemove', function (e) {
                glow[0].style.background =
                    'radial-gradient(500px circle at ' +
                    e.clientX + 'px ' + e.clientY +
                    'px, rgba(210, 126, 153, 0.02), transparent 80%)';
            });
        }

    });

})(jQuery);
