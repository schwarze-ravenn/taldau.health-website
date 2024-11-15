<template>
  <section class="about-section">
    <div class="content-wrapper">
      <h1 class="main-title">Что такое taldau.health?</h1>
      <p class="description">
        Taldau.health – это ваш надежный источник знаний о здоровье. Более
        <span class="highlight-text">1000 статьей</span>.
        от ведущих экспертов в области медицины и здорового образ жизни. Здесь вы найдете актуальную и проверенную информацию для улучшения здоровья и качество жизни.
      </p>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  padding: 100px 232px;
}

.content-wrapper {
  display: flex;
  max-width: 100%;
  width: 1456px;
  flex-direction: column;
  justify-content: start;
}

.main-title {
  color: #000;
  font: 700 56px/1.2 Montserrat, sans-serif;
}

.description {
  color: #6c6c6c;
  align-self: center;
  margin-top: 30px;
  font: 400 28px/35px Raleway, sans-serif;
}

@media (max-width: 991px) {
  .about-section {
    padding: 0 20px 100px;
  }

  .main-title {
    max-width: 100%;
    font-size: 40px;
  }

  .description {
    max-width: 100%;
  }
}
</style>