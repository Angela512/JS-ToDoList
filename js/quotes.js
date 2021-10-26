const quotes = [
    {
        quote: "No Pain No Gain",
        author: "Anonymous",
    },
    {
        quote: "피할 수 없으면 즐겨라",
        author: "Robert Eliott",
    },
    {
        quote: "먼저 핀 꽃은 먼저 진다",
        author: "채근담"
    },
    {
        quote: "I will prepare, and someday my chance will come",
        author: "Abraham Lincoln",
    },
    {
        quote: "A mistake is evidence that someone tried to do something",
        author: "Anonymous",
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
        quote: "A person who does not try cannot succeed",
        author: "Anonymous",
    },
    {
        quote: "When it is dark enough, you can see the stars",
        author: "Charles Beard",
    },
    {
        quote: "마음이 과거에 있으면 후회하고 미래에 있으면 불안하다. 고로 마음이 현재에 있어야 행복하다",
        author: "Anonymous"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//array의 마지막 index보다 작아야 하니까. 길이만큼 곱해주면
//예를 들어 5보다 큰 수는 생성X
quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;