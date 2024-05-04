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

    });

})(jQuery);
