$(document).ready(function(){

	      function randomQuote() {

	        $.ajax({
	          url: "https://api.forismatic.com/api/1.0/?",
	          dataType: "jsonp",
	          data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
	          success: function( response ) {

	            var content = response.quoteText;
	            var author = response.quoteAuthor;

	            //Put the content and author into the page
	            $("#quote-content").html("<p id='quote-content'>" + content + "</p><br/><p id='quote-author'>&dash;" + author + "</p>");

	            //Model the tweet
	            $("#tweet-this").attr("href", "https://twitter.com/home/?status=" + content + ' -' + author);

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

	/*
	TODO:
	  If a quote has the ';' char, replace with ','
	  Add backend
	*/