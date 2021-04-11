export default class ApiController {
    constructor(url) {
        this.url = url;
    }

    async getRand(count=10) {
        const res = await fetch(this.url + `/random?count=${count}`);
        return (await res.json()).data;
    }

    async search(str, count=10) {
        const authorRes = await fetch(this.url + `/random?count=${count}&author=${str}`);
        const genreRes = await fetch(this.url + `/random?count=${count}&genre=${str}`);

        const authorData = (await authorRes.json()).data;
        const genreData = (await genreRes.json()).data;

        if (authorData[0]?.quoteAuthor == str) {
            return authorData;
        } else if (genreData[0]?.quoteGenre == str) {
            return genreData;
        } else {
            if (authorData.length > genreData.length) {
                return authorData;
            } else {
                return genreData;
            }
        }
    }
}