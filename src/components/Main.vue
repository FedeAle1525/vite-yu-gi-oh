<script>
import axios from 'axios';

export default {
  data() {
    return {
      cards: [],
    }
  },

  methods: {
    getCardsFromServer() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        .then((res) => {
          this.cards = res.data.data;
          console.log(this.cards);
        })
    }
  },

  mounted() {
    this.getCardsFromServer();
  }

}
</script>

<template>
  <main>
    <div class="container">
      <div class="card" v-for="card in cards">

        <img :src="card.card_images[0].image_url">

        <div class="card-info">
          <span class="name">{{ card.name }}</span>
          <span class="archetype">{{ card.archetype }}</span>
        </div>
      </div>
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

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  img {
    max-width: 40%;
  }

  .card-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    .name {
      color: royalblue;
    }

    .archetype {
      color: red;
    }
  }
}
</style>