

var quotes = [
    { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "--Albert Einstein" },
    { quote: "A room without books is like a body without a soul.", author: "--Marcus Tullius Cicero" },
    { quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "--Dr. Seuss" },
    { quote: "You only live once, but if you do it right, once is enough.", author: "--Mae West" },
    { quote: "If you tell the truth, you don't have to remember anything.", author: "--Mark Twain" },
    { quote: "To live is the rarest thing in the world. Most people exist, that is all", author: "--Oscar Wilde" },
    { quote: "Always forgive your enemies; nothing annoys them so much.", author: "--Oscar Wilde" },
    { quote: "Life isn't about finding yourself. Life is about creating yourself.", author: "--George Bernard Shaw" }
];


function numberGenerator() {
    return randomNum = Math.floor(quotes.length * Math.random());
}


function displayQuote() {
    var randomNum = numberGenerator();
    document.getElementById("quote").innerHTML = quotes[randomNum].quote;
    document.getElementById("author").innerHTML = quotes[randomNum].author;
}





