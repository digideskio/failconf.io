(function(){!function(t){return t("a[href^='#']").on("click",function(n){var i;return n.preventDefault(),i=this.hash,t(window).width()<=757&&t("#navbar").collapse("hide"),setTimeout(function(n){return function(){return t("html, body").animate({scrollTop:t(n.hash).offset().top-t(".navbar").height()+2},300,function(){return window.location.hash=i})}}(this),500)}),t.stellar({horizontalScrolling:!1,verticalOffset:40})}(jQuery)}).call(this);