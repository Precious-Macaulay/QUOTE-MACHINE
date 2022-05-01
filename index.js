const projectName = "QUOTE MACHINE";
var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

fetch("./quotes.json")
  .then((res) => res.json())
  .then((data) => (allQuotes = data))
  .finally(() => {
    changeQuotes();
  });

var currentQuote = "";
var currentAuthor = "";

function changeQuotes() {

  // CHANGE QUOTE
  let quoteNum = Math.floor(Math.random() * allQuotes.length);
  currentQuote = allQuotes[quoteNum].text;
  currentAuthor = allQuotes[quoteNum].author;

  $("#text").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $("#text").text('"' + currentQuote + '"');
  });

  $("#author").animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $("#author").text("- " + currentAuthor);
  });
  
  // CHANGE COLORS

  let color = Math.floor(Math.random() * colors.length);

  $("#wrapper,button,a").animate(
    {
      backgroundColor: colors[color],
    },
    1000
  );
  $("#text,#author").animate(
    {
      color: colors[color],
    },
    1000
  );
  //CHANGE TWEET LINKS

  $("#tweet-quote").attr(
    "href",
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
  );

  $("#post-quote").attr(
    "href",
    "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
      encodeURIComponent(currentAuthor) +
      "&content=" +
      encodeURIComponent(currentQuote) +
      "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
  );
}

$("#new-quote").on("click", changeQuotes);
