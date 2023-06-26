<template>
  <v-header></v-header>
  <main class="v-main-wrapper">
    <router-view></router-view>
  </main>
  <v-footer></v-footer>
</template>
<script>

import VFooter from "@/components/footer/v-footer.vue";
import VHeader from "@/components/header/v-header.vue";

export default {
  name: 'v-main-wrapper',
  components: {VHeader, VFooter},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.v-main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  flex-grow: 1;
  width: 100%;
  margin: 100px auto 100px;
}
</style>