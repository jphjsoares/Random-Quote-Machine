$(document).ready(function(){

      function randomQuote() {
        $.ajax({
          url: "https://api.forismatic.com/api/1.0/?",
          dataType: "jsonp",
          data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
          success: function( response ) {
            $("#quote-content").html("<p id='quote-content'>" + response.quoteText + "</p><br/><p id='quote-author'>&dash;" + response.quoteAuthor + "</p>");
            $("#tweet-this").attr("href", "https://twitter.com/home/?status=" + response.quoteText + ' (' + response.quoteAuthor + ')');
          }
        });
      }
      $(function() {
        randomQuote();
      });
      $("#new-quote").click(function(){
        randomQuote();
      });


    });//End of document function