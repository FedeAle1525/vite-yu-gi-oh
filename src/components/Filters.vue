<script>
import store from '../store';

export default {
  data() {
    return {
      types: ['no type', 'normal monster', 'effect monster', 'synchro monster', 'spell card', 'trap card'],
      store
    }
  }
}
</script>

<template>
  <div class="container">
    <!-- Con $emit creo Evento Personalizzato per ascoltare Evento "keyup.enter" -->
    <input type="text" placeholder="Filtra per Nome" v-model="store.filterName" @keyup.enter='$emit("searchName")'>

    <select id="" v-model="store.type">
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



