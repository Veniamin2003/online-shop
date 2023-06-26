<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog__link_to_cart">Вернуться к выбору товаров</div>
    </router-link>
    <h1>Корзина</h1>
    <p v-if="!CART.length">Корзина пуста...</p>
    <v-cart-item
        v-for="(item, index) in CART"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart='deleteFromCart(index)'
        @increment="increment(index)"
        @decrement="decrement(index)"
    />
    <div class="v-cart__total">
      <p class="total__name">Заказ на сумму:</p>
      <p>{{cartTotalCost}} руб.</p>
    </div>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue"
import {mapActions, mapGetters, mapState} from "vuex";
export default {
  name: 'v-cart',
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
    }
  },
  computed: {
    cartTotalCost() {
      let result = [];

      if(this.CART.length) {
        for(let item of this.CART) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce(function (sum, el){
          return sum + el;
        })
        return result;
      } else {
        return 0
      }

    },
    ...mapState({
      cart: state => state.product.cart
    }),
    ...mapGetters({
      CART: "product/CART"
    })
  },

  methods: {
    ...mapActions({
      DELETE_FROM_CART: "product/DELETE_FROM_CART",
      INCREMENT_CART_ITEM: "product/INCREMENT_CART_ITEM",
      DECREMENT_CART_ITEM: "product/DECREMENT_CART_ITEM"
    }),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    }
  }
}
</script>

<style lang="scss" >
.v-cart {
  m-bottom: 100px;
  width: 100%;
  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding*2 $padding*3;
    display: flex;
    justify-content: center;
    background: $blue-bg;
    color: white;
    font-size: 20px;
    }

  .total__name {
    margin-right: $margin*2;
  }

}

</style>