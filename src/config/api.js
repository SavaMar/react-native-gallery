var api = {
    getPhotos(page) {
    var url = `https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=${page}`
        return fetch(url).then((res) => res.json());
    }
}

module.exports = api;