<template>
  <img :src="code" alt="qr code" />
</template>

<script>
import * as qrcode from "qrcode";

export default {
  props: {
    waiver: {
      type: Object,
      default() {
        return {
          code: ''
        };
      }
    }
  },
  asyncComputed: {
    code() {
      return qrcode.toDataURL(JSON.stringify(this.waiver)) || '';
    }
  }
};
</script>
