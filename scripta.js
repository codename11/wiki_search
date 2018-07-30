$(document).ready(function() {
  $("#t1").click(function() {
    $("#ftxt").slideDown(500);

    $("#t1").slideUp(500);
  });

  $("#iks").click(function() {
    $("#ftxt").slideUp(500);
    $("#t1").slideDown(500);
    $("div #elm").addClass("bounceOutRight");
    setTimeout(function() {
      $("#message").empty();
    }, 500);
    $("#article").val("");
  });

  $("#article").keypress(function(e) {
    if (e.keyCode === 13) {
      var urlx = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
      var article = $("#article").val();
      urlx += article + "&format=json&callback=?";

      $.getJSON(urlx, function(json) {
        var jLen = json.length;

        for (var i = 0; i < json[1].length; i++) {
          $("#message").prepend(
            "<div id='elm' class='text-justify animated bounceInLeft'><a href='" +
              json[3][i] +
              "' target='_blank'><div class='box'><div class='headings'>" +
              json[1][i] +
              "</div><p class='tekst'>" +
              json[2][i] +
              "</p></div></a></div>"
          );
        }

        $(".animated").mouseenter(function() {
          if ($(".animated").hasClass("bounceInLeft") === true) {
            $(this).removeClass("bounceInLeft");

            $(this).addClass("pulse");
          }
        });

        $(".animated").mouseleave(function() {
          $(this).removeClass("pulse");
        });
      });
    }
  });

  $(".lnk").mouseenter(function() {
    $(this).addClass("pulse");
  });
  $(".lnk").mouseleave(function() {
    $(this).removeClass("pulse");
  });
});
