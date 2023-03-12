import { ref, computed } from "vue"

export function useSearchMovies() {
    const useApi = ref(true);
    const query = ref('');
    const queryResults = ref([]);
    const onlyMovies = computed(() => {
        if (queryResults.value.d) {
            return queryResults.value.d.filter((result) => { return result.qid === 'movie' })
        }
    })

    function startSearch() {
        if (useApi.value === true) {
            const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${query.value}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
                    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
            };

            fetch(url, options)
                .then(res => res.json())
                .then(json => queryResults.value = json)
                .catch(err => console.error('error:' + err));

        } else {
            queryResults.value = {
                d: [
                    {
                        id: 'fake123',
                        l: 'Test Movie',
                        i: {
                            imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjZiOTNlMzYtZWYwZS00YWJjLTk5NDgtODkwNjRhMDI0MjhjXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg'
                        },
                        qid: 'movie'
                    }]
            }
        }
    }
    return { query, onlyMovies, startSearch, useApi }
}