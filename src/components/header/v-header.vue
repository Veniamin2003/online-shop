<template>
  <div class="header">
    <a class="header__name">
      <p>ЛЕСТНИЧНЫЙ КАЛЬКУЛЯТОР</p>
    </a>
    <ul id="navbar">
      <li><p>Перейти на сайт</p></li>
      <li class="header__description">
        <a href="tel:89085712253">+7(992)503-64-01</a>
        <p>Звонок бесплатный по РФ</p>
      </li>
    </ul>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(27,38,44, 0.9);
  /*background-image: url("../../Images/All/menu-bg-two.png");*/
  /*padding: 20px 80px;*/
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
}

#navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}


.nav_main_desc {
  font-weight: bold;
  font-size: 22px;
}

</style>