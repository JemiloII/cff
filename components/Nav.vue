<template>
  <b-navbar type="is-dark">
    <template slot="brand">
      <b-navbar-item :to="{ path: '/' }" tag="nuxt-link">
        <h4 class="title is-4">
          <a href="/">Convention Foam Fighting</a>
        </h4>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item>
        <a @click="goToWaiver()">
          <b-button type="is-secondary">
            New Waiver
          </b-button>
        </a>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    goToWaiver() {
      localStorage.removeItem('waiver');
      location.pathname = '/waiver';
    }
  }
};
</script>

<style scoped>
nav {
  background-color: lavender;
}
</style>
