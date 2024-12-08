<template>
  <div class="nav-bar-drop-down" v-if="isDropdownVisible">
    <div class="nav-bar">
      <div class="list">
        <div class="h-1-columns">
          <div class="популярные">Популярные</div>
          <div class="column-items">
            <div class="item" @click="fetchAndNavigate('Витамин D')">
              <p>Витамин D</p>
            </div>
            <div class="item">
              <p>Омега 3</p>
            </div>
            <div class="item">
              <p>Магний</p>
            </div>
            <div class="item" @click="fetchAndNavigate('Берберин')">
              <p>Берберин</p>
            </div>
            <div class="item">
              <p>CoQ10</p>
            </div>
            <div class="item">
              <p>Коллаген</p>
            </div>
            <div class="item">
              <p>Железо</p>
            </div>
            <div class="item">
              <p>Просмотреть все</p>
            </div>
          </div>
        </div>
        <div class="h-2-columns">
          <div class="все">Все</div>
          <div class="columns">
            <div class="column">
              <div class="item">
                <p>Кальций</p>
              </div>
              <div class="item">
                <p>Цинк</p>
              </div>
              <div class="item" @click="fetchAndNavigate('Витамин C')">
                <p>Витамин C</p>
              </div>
              <div class="item">
                <p>Пробиотики</p>
              </div>
              <div class="item">
                <p>Ашваганда</p>
              </div>
              <div class="item">
                <p>Л-карнитин</p>
              </div>
              <div class="item">
                <p>Масло черного тмина</p>
              </div>
              <div class="item">
                <p>Протеин</p>
              </div>
            </div>
            <div class="column">
              <div class="item">
                <p>Мелатонин</p>
              </div>
              <div class="item">
                <p>Рыбий жир</p>
              </div>
              <div class="item">
                <p>Биотин</p>
              </div>
              <div class="item">
                <p>Глюкозамин</p>
              </div>
              <div class="item" @click="fetchAndNavigate('Витамин D')">
                <p>Витамин D</p>
              </div>
              <div class="item">
                <p>Витамин B</p>
              </div>
              <div class="item">
                <p>Глюкоза</p>
              </div>
              <div class="item">
                <p>Экстракт виноградных косточек</p>
              </div>
            </div>
            <div class="column">
              <div class="item">
                <p>Фолиевая кислота</p>
              </div>
              <div class="item">
                <p>Салициловая кислота</p>
              </div>
              <div class="item">
                <p>BHA кислоты</p>
              </div>
              <div class="item">
                <p>AHA кислоты</p>
              </div>
              <div class="item">
                <p>Эхинацея</p>
              </div>
              <div class="item">
                <p>Родиола розовая</p>
              </div>
              <div class="item">
                <p>Селен</p>
              </div>
              <div class="item">
                <p>Посмотреть все</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { db } from '@/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default {
  name: 'NavBarDropDown',
  props: {
    isDropdownVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, { emit }) {
    const router = useRouter();

    const fetchAndNavigate = async (supplyName) => {
      const docRef = doc(db, 'supplies', 'RvClZ5IpL6EtFktxypBY');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const index = data.supply_name.findIndex((name) => name === supplyName);

        if (index !== -1) {
          const selectedData = {
            SupplyName: data.supply_name[index],
            Description: data.description[index],
            Category: data.category[index],
            Authors: data.authors[index],
          };

          console.log("Navigating with data:", selectedData);

          router.push({
            name: 'Supply',
            query: {
              SupplyName: selectedData.SupplyName,
              Description: selectedData.Description,
              Category: selectedData.Category,
              Authors: selectedData.Authors,
            },
          });
        } else {
          console.error("Supply not found in Firestore");
        }
      } else {
        console.error("Document does not exist in Firestore");
      }

      emit('closeDropdown');
    };

    return { fetchAndNavigate };
  },
};
</script>

<style scoped>
.nav-bar-drop-down {
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 40px 90px 180px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
}

.nav-bar {
  display: flex;
  width: 100%;
  max-width: 1704px;
  flex-direction: column;
  align-items: start;
}

.list {
  display: flex;
  margin-top: 90px;
  align-items: flex-start;
  gap: 40px 112px;
  justify-content: start;
  flex-wrap: wrap;
  width: 100%;
}

.h-1-columns, 
.h-2-columns {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  text-align: left;
}

.h-1-columns {
  width: 269px;
}

.h-2-columns {
  flex-grow: 1;
}

.популярные, .все {
  color: rgba(57, 57, 57, 1);
  font: 600 36px/1.2 Montserrat, sans-serif;
  margin-bottom: 20px;
}

.column-items, .columns {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.columns {
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.item {
  font: 400 23px Raleway, sans-serif;
  white-space: nowrap;
  display: inline-block;
  color: rgba(255, 255, 255, 1);
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.item p {
  display: inline-block; 
  padding: 6px  5px;
  border-radius: 4px;
  transition: background-color 0.3s ease; 
}

.item p:hover {
  background-color: #5E28CB;
}

@media (max-width: 991px) {
  .nav-bar-drop-down {
    padding: 20px;
  }

  .list {
    flex-direction: column;
    gap: 40px;
  }

  .columns {
    flex-direction: column;
  }

  .item {
    white-space: normal;
  }
}
</style>