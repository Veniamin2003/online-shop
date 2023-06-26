<template>
  <footer>
    <div class="footer__container">
      <a href="#" class="footer__logo">VENIAMIN-SHOP</a>

      <ul class="permalinks">
        <li><a href="#">Домой</a></li>
        {/*<li><a href="#">О компании</a></li>
<!--        <li><a href="#">Мой опыт</a></li>
        <li><a href="#">Мои навыки</a></li>
        <li><a href="#">Портфолио</a></li>-->
        <li><a href="#">Отзывы</a></li>
        <li><a href="#">Контакты</a></li>*/}
      </ul>

      <div class="footer__social">
        <a href="mailto:resume@veniamin-petrov.ru">12</a>
        <a href="https://msngr.link/wa/79925036401>">12</a>
        <a href="https://msngr.link/tg/@spainvenk">12</a>
      </div>

      <div class="footer__copyright">
        <small>&copy; Veniamin. Frontend React-Redux Developer.</small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer {
  /*padding-top: 7rem;*/
  width: 100%;
  background: rgb(216, 255, 254);
  text-align: center;
  font-size: 0.9rem;
}

.footer__container {
  padding: 2rem 0;
  background-color: rgba(27,38,44, 0.9);
}
footer a {
  color: white;
}
footer a:hover {
  color: $color-primary;
}

.footer__logo {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  display: inline-block;
}

.permalinks {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;
}

.permalinks a {
  color: white;
}
.permalinks a:hover {
  color: $color-primary;
}

.footer__social {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
}

.footer__social a {
  background: $color-primary;
  color: white;
  padding: 0.8rem;
  border-radius: 0.7rem;
  display: flex;
  border: 1px solid transparent;
}

.footer__social a:hover {
  background: transparent;
  color: $color-primary;
  border-color: $color-primary;
}

.footer__copyright {
  margin-bottom: 4rem;
  color: #29393a;
}
</style>