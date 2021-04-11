import noQuote from "./webComponents/noQuote.js";
import card from "./webComponents/card.js";

const idCardsContainer = "all-cards-container";

function addCard(quote) {
    document.getElementById(idCardsContainer).innerHTML += card(quote.quoteGenre, quote.quoteText, quote.quoteAuthor);
}

function renderCards(quotes) {
    if (quotes.length > 0) {
        for (let quote of quotes) {
            addCard(quote);
        }
    } else {
        document.getElementById(idCardsContainer).innerHTML = noQuote();
    }
}

function resetCards() {
    document.getElementById(idCardsContainer).innerHTML = "";
}

function setTitle(title) {
    document.getElementById("title").innerHTML = title.replace(/^\w/, (c) => c.toUpperCase());
}

function getSearchString() {
    return document.getElementById("search-bar").value;
}

async function search(endpointFunction) {
    resetCards()
    const cards = await endpointFunction();
    renderCards(cards);
    setTitle(document.getElementById("search-bar").value);
    document.getElementById("search-bar").value = "";
}

export {addCard, setTitle, renderCards, getSearchString, search};