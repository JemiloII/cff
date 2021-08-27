<template>
  <div>
    <div class="modal-backdrop" v-if="isPanelOpen"></div>
    <!-- Start Shopping Cart Modal -->
    <transition name="slide-fade">
      <div v-if="isPanelOpen" class="modal right shoppingCartModal" id="shoppingCartModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <button type="button" class="close" @click="closeSidebarPanel"><span aria-hidden="true">&times;</span>
            </button>

            <div class="modal-body">
              <h3>Navigation</h3>
              <div @click="closeSidebarPanel" class="product-cart-btn">
                <nuxt-link to="/" class="btn btn-dark" exact-active-class="btn-light">Home</nuxt-link>
                <nuxt-link to="/gallery" class="btn btn-dark" active-class="btn-light">Gallery</nuxt-link>
                <nuxt-link to="/contact" class="btn btn-dark" active-class="btn-light">Contact</nuxt-link>
                <nuxt-link to="/waiver" class="btn btn-dark" active-class="btn-light">Waiver</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- End Shopping Cart Modal -->
  </div>
</template>

<script>
  import {store, mutations} from '~/utils/sidebar-util';

  export default {
    name: 'SidebarPanel',
    methods: {
      closeSidebarPanel: mutations.toggleNav
    },
    computed: {
      isPanelOpen() {
        return store.isNavOpen
      },
      cart() {
        return this.$store.getters.cart
      },
      cartTotal() {
        return this.$store.getters.totalAmount
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/styles/_transitions.scss";
</style>
