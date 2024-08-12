const fetchFromUrl = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        // Получаем список данных аниме
        const animeData = data.response.map(anime => ({
        id: anime.anime_id,
        title: anime.title,
        views: anime.views,
        cover: `https:${anime.poster.fullsize}`,
        }));
        // Преобразуем данные в JSON-строку
        const jsonResponse = JSON.stringify(animeData);
        
        return jsonResponse;
    } catch (error) {
        return `Ошибка: ${error.message}`;
    }
}
window.Yummyanime1fetchPopularAnime = async (offset = 0) => {
    try {
        const url = `https://api.yani.tv/anime?sort=rating&offset=${offset * 30}&limit=30`;
        const data = await fetchFromUrl(url);
        console.log(data)
        return data;
    } catch (error) {
        console.error(error)
        return error;
    }
}
