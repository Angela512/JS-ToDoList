const quotes = [
    {
        quote: "I never dreamed about success, I worked for it",
        author: "Estee Lauder",
    },
    {
        quote: "Do not try to be original, just try to be good",
        author: "Paul Rand",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great",
        author: "John D.Rockefeller"
    },
    {
        quote: "I will prepare, and someday my chance will come",
        author: "Abraham Lincoln",
    },
    {
        quote: "Don't dream, Be it",
        author: "Tim curry",
    },
    {
        quote: "Fate loves the fearless",
        author: "James Russell Lowell",
    },
    {
        quote: "Luck is what happens when preparation meets opportunity",
        author: "Darrel Royal",
    },
    {
        quote: "No pain No gain",
        author: "Benjamin Franklin",
    },
    {
        quote: "When it is dark enough, you can see the stars",
        author: "Charles Beard",
    },
    {
        quote: "Where there is a will, there is a way",
        author: "Angela Merkel"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;