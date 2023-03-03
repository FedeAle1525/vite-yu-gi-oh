<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="card">

    <img :src="card.card_images[0].image_url">

    <div class="card-info">
      <span class="name">{{ card.name }}</span>
      <span class="archetype">{{ card.archetype }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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