var quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" }
  ];

  function generateQuate() {
    var random = Math.floor(Math.random() * quotes.length);
    var newQuote = quotes[random].quote;
    var author = quotes[random].author;
    document.getElementById("quote-text").innerHTML = `<q>${newQuote}</q>`;
    document.getElementById("author-text").innerHTML = `-- ${author}`;


  }