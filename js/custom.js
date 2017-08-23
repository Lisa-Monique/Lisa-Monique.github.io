$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(document).ready(function(){
    $("#western1718button").click(function(){
        $("#western1718").toggle();
    });
});
$(document).ready(function(){
    $("#western1718close").click(function(){
        $("#western1718").toggle();
    });
});
$(document).ready(function(){
    $("#western1617button").click(function(){
        $("#western1617").toggle();
    });
});
$(document).ready(function(){
    $("#western1617close").click(function(){
        $("#western1617").toggle();
    });
});
$(document).ready(function(){
    $("#salcc1415button").click(function(){
        $("#salcc1415").toggle();
    });
});
$(document).ready(function(){
    $("#salcc1415close").click(function(){
        $("#salcc1415").toggle();
    });
});
$(document).ready(function(){
    $("#salcc1314button").click(function(){
        $("#salcc1314").toggle();
    });
});
$(document).ready(function(){
    $("#salcc1314close").click(function(){
        $("#salcc1314").toggle();
    });
});
$(document).ready(function(){
    $("#sjcbutton").click(function(){
        $("#sjc08").toggle();
    });
});
$(document).ready(function(){
    $("#sjcclose").click(function(){
        $("#sjc08").toggle();
    });
});
$(document).ready(function(){
    $("#indepbutton").click(function(){
        $("#indep").toggle();
    });
});
$(document).ready(function(){
    $("#indepclose").click(function(){
        $("#indep").toggle();
    });
});