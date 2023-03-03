<script>
export default {
  props: {
    srcImg: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
      default: "NO NAME"
    },
    archetype: {
      type: String,
      required: true,
      default: "NO ARCHETYPE"
    }
  }
}
</script>

<template>
  <div class="card">

    <img :src="srcImg">

    <div class="card-info">
      <span class="name">{{ name }}</span>
      <span class="archetype">{{ archetype }}</span>
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