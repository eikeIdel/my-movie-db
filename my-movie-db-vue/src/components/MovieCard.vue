<script setup>
import LikeHeart from './LikeHeart.vue';
import { ref, computed } from 'vue'
import { useAddNewMovie } from '../composables/strapi-routes/useAddNewMovie.js'
import { useDeleteMyMovie } from '../composables/strapi-routes/useDeleteMyMovie.js'

const props = defineProps({
    title: String,
    imgUrl: String,
    year: Number,
    duration: Number,
    director: String,
    stars: String,
    plot: String,
    isMyMovie: Boolean,
    id: Number,
    imdbID: String,
});

const { addNewMovie } = useAddNewMovie();
const { deleteMyMovie } = useDeleteMyMovie();
const isFav = ref(props.isMyMovie ? true : false);
const heartColor = computed(() => {
    return isFav.value ? '--color:rgb(212, 57, 57);' : '--color:rgb(143, 141, 141);'
})

async function heartClick() {
    isFav.value = !isFav.value;
    if (isFav.value) {
        const data = JSON.stringify({
            data: {
                imdbID: props.imdbID,
                Title: props.title,
                Stars: props.stars,
                Year: props.year,
                Duration: props.duration,
                imgUrl: props.imgUrl,
                Director: "",
                Plot: ""
            }
        })
        addNewMovie(data)
    }
    else {
        deleteMyMovie(props.imdbID)
    }
}

console.log(props.id)
</script>

<template>
    <div v-if="title" class="MovieCard">
        <LikeHeart :isFav="isFav" :heartColor="heartColor" :heartClick="heartClick" />
        <img v-if="imgUrl" :src="imgUrl" alt="">
        <h2>{{ title }}</h2>
        <div>
            <p v-if="year">Erscheinungsjahr: {{ year }}</p>
            <p v-if="duration">Filmlänge: {{ duration }} min</p>
            <p v-if="director">Regie: {{ director }}</p>
            <p v-if="stars">Stars: {{ stars }}</p>
            <p v-if="plot">Plot:{{ plot }}</p>
        </div>
    </div>
</template>

<style>
.MovieCard {
    position: relative;
    width: 350px;
    border-radius: 15px;
    border: solid 4px var(--frameColor);
}

.MovieCard img {
    width: 100%;
    border-radius: 10px 10px 0 0;
}
</style>