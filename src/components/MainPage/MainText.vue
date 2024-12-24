<template>
  <div class="main-text">
    <h2 class="main-title">
      Узнайте об эффективности активных добавок из коллекции достоверных научных работ
    </h2>
    <p class="description">
      Введите название активного ингредиента либо решение которое вы ищите.<br />
      Подробнее о работе нашего сайта читайте <a href="#" class="info-link">здесь</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'MainText',
};
</script>

<style scoped>
.main-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.main-title {
  color: #fff;
  font: 700 56px/67px Montserrat, sans-serif;
  margin-top: 200px;
  max-width: 1500px;
}

.description {
  color: #fafafa;
  font: 400 28px/42px 'Raleway', -apple-system, Roboto, Helvetica, sans-serif;
  margin-top: 49px;
  max-width: 1200px;
}

.info-link {
  /* color: #594c73; */
  text-decoration: underline;
  font: 400 28px Raleway, sans-serif;
}

@media (max-width: 991px) {
  .main-title {
    font-size: 40px;
    line-height: 54px;
    margin-top: 40px;
  }

  .description {
    margin-top: 40px;
  }
}
</style>