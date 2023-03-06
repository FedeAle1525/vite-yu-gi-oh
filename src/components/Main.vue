<script>
import axios from 'axios';
import Filters from './Filters.vue';
import Card from './Card.vue';
import store from '../store';

export default {

  components: {
    Card,
    Filters
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    getCardsFromServer() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        .then((res) => {
          this.store.cards = res.data.data;
          // console.log(this.cards);
        })
    },

    // Funzione che esegue chiamata al Server con Parametri da componente Filters (Figlio)
    filterByParam() {
      if (store.filterType === '') {

        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`, {
          params: {
            num: 20,
            offset: 0,
            fname: store.filterName,
          }
        })
          .then((res) => {
            this.store.cards = res.data.data;
          })

      } else {

        axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`, {
          params: {
            num: 20,
            offset: 0,
            fname: store.filterName,
            type: store.filterType
          }
        })
          .then((res) => {
            this.store.cards = res.data.data;
          })
      }

    }
  },

  mounted() {
    this.getCardsFromServer();
  }

}
</script>

<template>
  <main>

    <!-- Ascolto Evento Personalizzato "searchName" e "searchType" (in Figlio) e reagisco con Funzione "filterByName"  -->
    <Filters @searchName="filterByParam()" @searchType="filterByParam()" />

    <div class="container">
      <Card v-for="card in store.cards" :key="card.id" :srcImg="card.card_images[0].image_url" :name="card.name"
        :archetype="card.archetype" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

main {
  padding: 30px 0;
  background-color: $bg-main;
}

.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px 10px;
}
</style>