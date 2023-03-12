import { ref } from 'vue'

export function useGetMyMovies() {
    const myMovies = ref([]);

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + import.meta.env.VITE_STRAPI_TOKEN);
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    async function getMyMovies() {
        await fetch(`${import.meta.env.VITE_STRAPI_DOMAIN}/api/movies`, requestOptions)
            .then(response => response.json())
            .then(result => myMovies.value = result.data)
            .catch(error => console.log('error', error));

    }

    return { myMovies, getMyMovies }
}