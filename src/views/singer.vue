<template>
  <div class="singer" v-loading="!singers.length">
    <index-list :data="singers" @select="selectSinger" />
    <router-view v-slot="{ Component }">
      <transition appear name="slide">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>
<script>
import { getSingerList } from '@/service/singer.js';
import indexList from '../components/base/index-list/index-list.vue';
import storage from 'good-storage';
import { SINGER_KEY } from '@/assets/js/constant.js';

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
      this.cacheSinger(singer)
      this.$router.push({
        path: `/singer/${singer.mid}`
      })
    },
    cacheSinger(singer) {
      storage.session.set(SINGER_KEY, singer)
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
