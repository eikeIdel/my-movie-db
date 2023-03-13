import { ref } from 'vue'
// import { useSearchMovieDetails } from './useSearchMovieDetails';

export function useAddNewMovie() {
    // const { queryID, movieDetails, startDetailsSearch, useApi } = useSearchMovieDetails();
    const movieID = ref('');

    async function addNewMovie(data) {
        // queryID.value = movieID;
        // startDetailsSearch();

        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + import.meta.env.VITE_STRAPI_TOKEN);
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body: data,
        };
        await fetch(`${import.meta.env.VITE_STRAPI_DOMAIN}/api/movies`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    return { addNewMovie, movieID }
}
