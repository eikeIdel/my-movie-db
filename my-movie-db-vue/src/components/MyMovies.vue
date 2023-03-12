<script setup>
import FlexWrap from './FlexWrap.vue'
import MovieCard from './MovieCard.vue';
import { ref, computed, onMounted } from 'vue'
import { useGetMyMovies } from '../composables/useGetMyMovies';


const { myMovies, getMyMovies } = useGetMyMovies();
const isMyMovie = ref(true)

onMounted(() => {
    useGetMyMovies();
})
</script>

<template>
    <FlexWrap>
        <button @click="getMyMovies">Go, get my Movies!</button>
    </FlexWrap>
    <FlexWrap>
        <MovieCard v-for="movie in myMovies" :title="movie.attributes.Title" :imgUrl="movie.attributes.imgUrl"
            :isMyMovie="isMyMovie" />
    </FlexWrap>
</template>


<style scoped></style>