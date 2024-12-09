<template>
  <div class="search-container">
    <form class="search-form" @submit.prevent="handleSubmit">
      <label for="search-input" class="visually-hidden">Поиск</label>
      <input
        type="text"
        id="search-input"
        class="search-input"
        placeholder="Берберин, Vitamin D, тревожность, потеря веса"
        v-model="searchQuery"
        @input="handleInput"
        @keydown.down="moveSuggestion('down')"
        @keydown.up="moveSuggestion('up')"
        @keydown.enter="selectActiveSuggestion"
      />
      <div v-if="suggestions.length && showSuggestions" class="search-suggestions">
        <div
          v-for="(suggestion, index) in suggestions"
          :key="suggestion.id"
          class="suggestion-item"
          @click="selectSuggestion(suggestion)"
          :class="{ 'active-suggestion': activeSuggestionIndex === index }"
        >
          <div class="suggestion-inner">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a1653366f60555da5cc7ebb00b55dc4790866345e547aa16912c95a6b51e72e?placeholderIfAbsent=true&apiKey=4a57dd5c21ba48329ec763aa664f8c8e"
              alt=""
              class="suggestion-icon"
            />
            <span>{{ suggestion.supply_name }}</span>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { db } from '@/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default {
  name: 'SearchBar',
  setup() {
    const searchQuery = ref('');
    const suggestions = ref([]);
    const showSuggestions = ref(false);
    const activeSuggestionIndex = ref(-1); // Индекс активного предложения
    const router = useRouter();

    const handleInput = async () => {
      if (searchQuery.value.length > 2) {
        const docRef = doc(db, 'supplies', 'RvClZ5IpL6EtFktxypBY');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          const supplyNames = data.supply_name;

          suggestions.value = supplyNames
            .filter((name) =>
              name.toLowerCase().includes(searchQuery.value.toLowerCase())
            )
            .map((name, index) => ({
              id: index,
              supply_name: name,
            }));

          showSuggestions.value = suggestions.value.length > 0;
        }
      } else {
        suggestions.value = [];
        showSuggestions.value = false;
      }
    };

    const moveSuggestion = (direction) => {
      if (suggestions.value.length === 0) return;

      if (direction === 'down') {
        activeSuggestionIndex.value = (activeSuggestionIndex.value + 1) % suggestions.value.length;
      } else if (direction === 'up') {
        activeSuggestionIndex.value =
          (activeSuggestionIndex.value - 1 + suggestions.value.length) % suggestions.value.length;
      }

      console.log("Active suggestion index:", activeSuggestionIndex.value); // Лог для отладки
    };

    const selectActiveSuggestion = () => {
      if (activeSuggestionIndex.value >= 0 && activeSuggestionIndex.value < suggestions.value.length) {
        console.log(
          "Selected suggestion via keyboard:",
          suggestions.value[activeSuggestionIndex.value]
        ); // Лог для отладки
        selectSuggestion(suggestions.value[activeSuggestionIndex.value]);
      }
    };

    const selectSuggestion = async (suggestion) => {
      if (!suggestion) return; // Предохранитель

      console.log("Final selected suggestion:", suggestion); // Лог для отладки

      const docRef = doc(db, 'supplies', 'RvClZ5IpL6EtFktxypBY');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const index = data.supply_name.findIndex((name) => name === suggestion.supply_name);

        if (index !== -1) {
          const selectedData = {
            SupplyName: data.supply_name[index],
            Description: data.description[index],
            Category: data.category[index],
            Authors: data.authors[index],
            What: data.what[index],
            How: data.how[index]
          };

          console.log("Navigating to:", selectedData); // Лог для отладки

          router.push({
            name: 'Supply',
            query: {
              SupplyName: selectedData.SupplyName,
              Description: selectedData.Description,
              Category: selectedData.Category,
              Authors: selectedData.Authors,
              What: selectedData.What,
              How: selectedData.How
            },
          });
        } else {
          console.error("Selected suggestion not found in database!");
        }
      } else {
        console.error("Document does not exist!");
      }

      // Скрыть подсказки
      showSuggestions.value = false;
    };

    const handleSubmit = async () => {
      if (activeSuggestionIndex.value >= 0) {
        console.log("Submitting active suggestion:", activeSuggestionIndex.value); // Лог
        selectActiveSuggestion();
      } else if (suggestions.value.length > 0) {
        console.log("Submitting first suggestion by default.");
        selectSuggestion(suggestions.value[0]);
      } else {
        console.error("No suggestions available to submit!");
      }

      showSuggestions.value = false;
    };

    return {
      searchQuery,
      suggestions,
      showSuggestions,
      activeSuggestionIndex,
      handleInput,
      moveSuggestion,
      selectSuggestion,
      selectActiveSuggestion,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.search-container {
  position: relative;
  width: 100%;
  max-width: 1530px;
  margin-top: 48px;
}

.search-form {
  position: relative;
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 22px 19px;
  border: 2px solid #1a1a1a;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  font: 400 26px/1 Raleway, sans-serif;
  color: #828282;
}

.search-suggestions {
  position: absolute;
  top: calc(100% - 2px);
  left: 0;
  right: 0;
  background-color: #fff;
  border: 2px solid #1a1a1a;
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
}

.suggestion-item {
  padding: 21px 18px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.suggestion-item:hover,
.active-suggestion {
  background-color: #f0f0f0;
}

.suggestion-inner {
  display: flex;
  align-items: center;
  gap: 18px;
}

.suggestion-icon {
  width: 38px;
  height: 39px;
  object-fit: contain;
}

.search-results {
  margin-top: 20px;
}

.result-item {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 991px) {
  .search-container {
    margin-top: 40px;
  }
}
</style>