import ApiController from "./apiConfig.js";
import { search, getSearchString, setTitle, renderCards } from "./domManipulator.js";

const quoteController = new ApiController("https://quote-garden.herokuapp.com/api/v3/quotes");

const randData = await quoteController.getRand()

document.getElementById("search-button").onclick = () => {
    search( () => {
        return quoteController.search(getSearchString())
    })
}

document.getElementById("random-button").onclick = () => {
    search( () => {
        return quoteController.getRand()
    })
}

renderCards(randData);

