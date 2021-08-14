<template>
  <div>
<!--    <TopPanel v-if="isShowing" @clicked="onTopPanelClose"></TopPanel>-->
<!--    <TopHeader></TopHeader>-->
    <Menubar></Menubar>
    <nuxt style="min-height: calc(100vh - 122px);" />
    <Footer></Footer>
    <SiteLoader v-if="loading" />
    <BackToTop></BackToTop>
  </div>
</template>

<script>
import TopPanel from './TopPanel';
import TopHeader from './TopHeader';
import Menubar from './Menubar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import SiteLoader from './SiteLoder';

import '@/assets/scss/styles/animate.min.css';
import '@/assets/scss/styles/style.scss';
import '@/assets/scss/styles/admin.scss';
import '@/assets/scss/styles/responsive.scss';

export default {
  components: {
    TopPanel, TopHeader, Menubar, Footer, BackToTop, SiteLoader
  },
  data() {
    return {
      loading: true,
      isShowing: true
    }
  },
  methods: {
    onTopPanelClose (value) {
      this.isShowing = value;
    }
  },
  watch: {
    '$route' (pathUrl){
      this.loading = true;
      setTimeout(() => { this.loading = false; }, 600);
    }
  },
  mounted(){
    setTimeout(() => { this.loading = false; }, 600);
  }
}
</script>

<style>
  .page-title {
    border: 1px solid #eeeeee;
    border-bottom: none;
    margin-bottom: 0;
  }

  .page-title h2 {
    font-size: 1.75rem;
  }

  .page-title h2 .dot {
    position: absolute;
    top: 8px;
    left: -6px;
    width: 18px;
    height: 18px;
    border: 1px solid #222222;
  }
</style>
