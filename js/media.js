// const quote = document.getElementById("quote");
// const author = document.getElementById("author");
// const api_url = "https://api.quotable.io/random";

// async function getQuote(url) {
//   const response = await fetch(url);
//   var data = await response.json();
//   quote.innerHTML = data.content;
//   author.innerHTML = data.author;
// }

// getQuote(api_url);
const quotes = [
  {
    quote: `"“So many books, so little time.”"`,
     writer: `― Frank Zappa `,
  },
  {
    quote: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
     writer: `― Albert Einstein`,
  },
  {
    quote: `“A room without books is like a body without a soul.”`,
     writer: `― Marcus Tullius Cicero`,
  },
  {
    quote: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
     writer: `― Bernard M. Baruch`,
  },
  {
    quote: `“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”`,
     writer: `― William W. Purkey`,
  },
  {
    quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
     writer: `― Dr. Seuss`,
  },
  {
    quote: `“You only live once, but if you do it right, once is enough.”`,
     writer: `― Mae West`,
  },
  {
    quote: `“In three words I can sum up everything I've learned about life: it goes on.”`,
     writer: `― Robert Frost`,
  },
  {
    quote: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
     writer: `― J.K. Rowling, Harry Potter and the Goblet of Fire`,
  },
  {
    quote: `“Don,t walk in front of me… I may not follow
    Don,t walk behind me… I may not lead
    Walk beside me… just be my friend”`,
     writer: `― Albert Camus`,
  },
  {
    quote: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
    writer: `― Maya Angelou`,
},]

var btn = document.querySelector("#Qbtn");
var quote = document.querySelector(".quote");
var  writer = document.querySelector(".writer");
btn.addEventListener("click", function () {
  var random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  writer.innerHTML = quotes[random].writer;
});
