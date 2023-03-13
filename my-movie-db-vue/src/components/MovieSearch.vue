<script setup>
import { ref, computed } from "vue"
import MovieCard from './MovieCard.vue'
import FlexWrap from './FlexWrap.vue'
import { useSearchMovies } from "../composables/imdb-routes/useSearchMovies";

const { query, onlyMovies, startSearch, useApi } = useSearchMovies();
useApi.value = true;

const log = computed(() => {
    console.log(onlyMovies.value);
})

</script>



<template>
    <form @submit.prevent="startSearch()">
        <label>Find your favorite Movie:</label>
        <input v-model.text="query" name="query" />
        <button type="submit">Start Search</button>
    </form>

    <FlexWrap>
        <MovieCard v-for="movie in onlyMovies" :title="movie.l" :imgUrl="movie.i?.imageUrl" :stars="movie.s" :year="movie.y"
            :id="movie.id" :key="movie.id" />
    </FlexWrap>
</template>

<style scoped>
form {
    width: 200px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto 2rem auto;
}
</style>