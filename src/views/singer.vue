<template>
  <div class="singer" v-loading="!singers.length">
    <index-list :data="singers" @select="selectSinger" />
    <router-view :singer="selectedSinger"></router-view>
  </div>
</template>
<script>
import { getSingerList } from '@/service/singer.js';
import indexList from '../components/base/index-list/index-list.vue';

export default {
  name: 'singer',
  async created() {
    const result = await getSingerList();
    console.log(result)
    this.singers = result.singers;
  },
  components: {
    indexList
  },
  data() {
    return {
      singers: [],
      selectedSinger: null
    }
  },
  methods: {
    selectSinger(singer) {
      this.selectedSinger = singer;
      this.$router.push({
        path: `/singer/${singer.mid}`
      })
    }
  }
}
</script>
<style lang="scss" scoped>
 .singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
 }
</style>
