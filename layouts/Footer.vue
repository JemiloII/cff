<template>
    <footer class="footer-area p-0">
        <div class="copyright-area m-0">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-md-12 col-sm-6">
                        <p>Copyright &copy; {{ year }} Convention Foam Fighting, LLC. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
  export default {
    name: "Footer",
    computed: {
      year() {
        return new Date().getFullYear();
      }
    }
  };
</script>
