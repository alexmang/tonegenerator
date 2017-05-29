// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
  $( "#big-one" ).click(function() {
    $("#tone-one").val(parseInt($("#tone-one").val())+10);
  });
  $( "#small-one" ).click(function(){
    $("#tone-one").val(parseInt($("#tone-one").val())-10);
  });
  $( "#big-two" ).click(function(){
    $("#tone-two").val(parseInt($("#tone-two").val())+10);
  });
  $( "#small-two" ).click(function(){
    $("#tone-two").val(parseInt($("#tone-two").val())-10);
  });
