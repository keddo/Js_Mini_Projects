const api_url = 'https://api.quotable.io/quotes/random';

// Element to put data on
const quote = document.getElementById('quote');
const author = document.getElementById('author');

const getQuote = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    
    quote.innerHTML = data[0].content;
    author.innerHTML = data[0].author;
}

const tweet = () => {
    window.open('https://twitter.com/intent/tweet?text=' + quote.innerHTML + "--- by: " + author.innerHTML, "Tweet Window", "width=600, height=300");
}

getQuote(api_url);
