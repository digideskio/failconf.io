do ($=jQuery)->
  $ "a[href^='#']"
    .on "click", (e)->
      e.preventDefault()
      hash = @hash
      $("#navbar").collapse('hide') if $(window).width() <= 757
      setTimeout =>
        $ "html, body"
          .animate
            scrollTop: $(@hash).offset().top - $(".navbar").height() + 2
          , 300, ->
            window.location.hash = hash
      , 500

  $.stellar
    horizontalScrolling: false
    verticalOffset: 40
