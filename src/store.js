// 1 - Creo un Oggetto Reattivo da usare come Store
import { reactive } from 'vue';

const store = reactive({

  // 2 - Inserisco Dati da salvare dentro lo Store
  cards: [],
  filterName: '',
  type: ''
})

// 3 - Rendo i Dati di Store accessibili esportandoli
export default store;