<script>
import store from '../store';

export default {
  data() {
    return {
      types: ['normal monster', 'effect monster', 'synchro monster', 'spell card', 'trap card'],
      store
    }
  }
}
</script>

<template>
  <div class="container">
    <!-- Con $emit creo Evento Personalizzato per ascoltare Evento "keyup.enter" -->
    <input type="text" placeholder="Filtra per Nome" v-model="store.filterName" @keyup.enter='$emit("searchName")'>

    <!-- Con $emit creo Evento Personalizzato per ascoltare Evento "change" -->
    <select id="" v-model="store.filterType" @change="$emit('searchType')">
      <option value="">Nessun Tipo</option>
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



