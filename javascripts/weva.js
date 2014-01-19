(function ($) {

  Weva = {
    get: function(options) {
      $.ajax({
        type:        'GET',
        url:         'http://api.openweathermap.org/data/2.5/weather', +
                     '?lat=' + options.lat + '&lng=' + options.lng
        success:     function(result, successCode, xhr) {
          console.log(result);
        },
        error:       function(xhr, errorType, error) {
          return 'Bogus.'
        }

    }
  };

  $.fn.windy = function(options) {
    var defaults = {
          lat: 41.575260,
          lng: -70.641403
        };

      });
    settings = $.extend(defaults, options);
    Weva.get(settings);
    return this.each(function() {
      $(this).hide().html('Yo').fadeIn(200);
    });

  };


  $(function() {
    $('#wind').windy();
  });
}(jQuery));
