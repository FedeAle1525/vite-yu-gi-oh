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
      CARDS
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

main {
  padding: 5px 0;
  background-color: $bg-main;
}
</style>