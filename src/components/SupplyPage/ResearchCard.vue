<template>
  <article class="research-card">
    <div class="card-tags">
      <span class="tag">Берберин</span>
      <span class="tag">Диабет</span>
      <span class="tag">Метаболизм</span>
    </div>
    <div class="card-content">
      <div class="effect"> {{effect}} эффект</div>
      <div class="name">
        <h2>{{ researchName }}</h2>
      </div>
      <div class="details">
        <p>• {{ details }}</p>
        <p>• Значительное снижение Гемоглобина на 20%</p>
        <p>• Значительное снижение Холестерина на 25%</p>
      </div>
      <hr class="divider" />
      <div class="overall">
        <span>4 Исследования</span>
        <span>1000 Участников</span>
      </div>
      <button class="button">Подробнее</button>
    </div>
  </article>
</template>

<script>
export default {
  name: "ResearchCard",
  props: {
    effect: {
      type: String,
      required: true,
    },
    researchName: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
* {
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
}

.research-card {
  padding: 30px 40px;
  border-radius: 12px;
  background-color: #f1f1f1;
  border: 1.6px solid #000000;
  display: flex;
  flex-direction: column;
  gap: 90px;
  color: #000000;
  max-width: 400px;
  /* margin: 0; */
}

.card-tags .tag {
  margin-right: 20px;
}

.card-tags .tag:last-child {
  margin-right: 0;
}


.tag {
  font-size: 18px;
  line-height: 150%;
  color: #4D4D4D;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
}

.effect {
  font-size: 14px;
  line-height: 150%;
}

.name h2 {
  font-size: 28px;
  line-height: 100%;
  margin: 0;
}

.details p {
  font-size: 18px;
  line-height: 140%;
  margin: 0;
}

.divider {
  border: none;
  border-top: 1px solid #a7a7a7;
}

.overall {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.overall span {
  font-size: 18px;
  line-height: 140%;
}

.button {
  padding: 14px 20px;
  font-size: 18px;
  color: #ffffff;
  background-color: #000000;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-align: center;
}

.button:hover {
  background-color: #333333;
}
</style>