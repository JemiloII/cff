<template>
  <div>
    <!-- Start Navbar Area -->
    <div :class="['navbar-area bg-black', {'is-sticky': isSticky}]">
      <div class="comero-nav">
        <div class="container">
          <div class="navbar navbar-expand-md navbar-dark">
            <nuxt-link class="navbar-brand h1 m-0" to="/">
              Convention Foam Fighting
            </nuxt-link>

            <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

            <b-collapse class="collapse navbar-collapse" id="navbarSupportedContent" is-nav>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                </li>

<!--                <li class="nav-item">-->
<!--                  <nuxt-link to="/productss" class="nav-link">Crew</nuxt-link>-->
<!--                </li>-->

<!--                <li class="nav-item">-->
<!--                  <nuxt-link to="/blog" class="nav-link">Blog</nuxt-link>-->
<!--                </li>-->

<!--                <li class="nav-item">-->
<!--                  <nuxt-link to="/products" class="nav-link">Shop</nuxt-link>-->
<!--                </li>-->

                <li class="nav-item">
                  <nuxt-link to="/gallery" class="nav-link">Gallery</nuxt-link>
                </li>

                <li class="nav-item">
                  <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
                </li>

                <li class="nav-item">
                  <nuxt-link to="/waiver" class="nav-link">Waiver</nuxt-link>
                </li>
              </ul>

              <div class="others-option">
                <div class="option-item" v-if="cart.length > 0">
                  <a @click.prevent="toggle" href="#">
                    Cart({{ cart.length }}) <i class="fas fa-shopping-bag"></i>
                  </a>
                </div>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>
    <!-- End Navbar Area -->

    <SidebarPanel></SidebarPanel>
  </div>
</template>

<script>
  import SidebarPanel from '../layouts/SidebarPanel';
  import {mutations} from '../utils/sidebar-util';

  export default {
    components: {
      SidebarPanel
    },
    data() {
      return {
        isSticky: false
      }
    },
    mounted() {
      const that = this;
      window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        if (scrollPos >= 100) {
          that.isSticky = true;
        } else {
          that.isSticky = false;
        }
      })
    },
    computed: {
      cart() {
        return this.$store.getters.cart
      }
    },
    methods: {
      toggle() {
        mutations.toggleNav()
      }
    }
  }
</script>

<style>
  @media only screen and (max-width: 767px) {
    .navbar-area {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
  }
</style>
