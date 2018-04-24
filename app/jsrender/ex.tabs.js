(function () {
    function TabsController ( tabs, content ) {
        this.$tabs = $(tabs);
        this.$contents = $(content);
        this.userData = null;

        this.init();
    }

    TabsController.prototype = {
        constructor: TabsController,
        init: function () {
            this.$tabs.off('click');
            this.$tabs.eq(0).on('click', this.clickEvent.bind(this));
        },
        contentsCalling: function () {
            var jQAjax = $.ajax({
                url: "",
                data: {},
                dataType: "json",
                async: true,
                statusCode: {
                    404: function(){console.log("page not found")},
                    500: function(){console.log("500")},
                },
                // success: function(){}
            }).done(function (response) {
                console.log(response);
            }).fail(function (error) {
                console.error(error);
            }).always(function () {
                console.log("Finally");
            })
        },
        clickEvent: function (event) {
            var $elem = $(event.currentTarget);
            var currentTabIndex = $elem.index();
            var usableTabIndex = currentTabIndex + 1;

            // Contents Events
            this.$contents.removeClass('on');
            this.$contents.eq(currentTabIndex).addClass('on');

            // Tab Events
            this.$tabs.off('click');
            console.log("Clicked Element: ",$elem);
            function initEvent(index, elem) {
                var $elem = $(elem);
                if(index <= usableTabIndex) {
                    $elem.on('click', this.clickEvent.bind(this))
                }
            }
            this.$tabs.each(initEvent.bind(this));
        },

    };


    var $COLL = $("#leecColl");
    var $contents = $COLL.find(".cont_tab");

    var tabs = $COLL.find(".list_tab li");
    var TabCont = new TabsController(tabs, $contents);

})();


