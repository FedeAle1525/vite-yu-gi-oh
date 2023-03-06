<script>
export default {
  data() {
    return {
      types: ['no type', 'normal monster', 'effect monster', 'synchro monster', 'spell card', 'trap card']
    }
  }
}
</script>

<template>
  <div class="container">
    <input type="text" placeholder="Filtra per Nome">

    <select id="">
      <option v-for="(type, i) in types" :key="i" :value="type"> {{ type.toUpperCase() }} </option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 30px 0;
  gap: 20px;
}
</style>



