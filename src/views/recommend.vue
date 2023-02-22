<template>
  <div class="recommend">
    <div class="slider-wrapper">
      <div class="slider-content">
        <slider v-if="sliders.length" :sliders="sliders"></slider>
      </div>
    </div>
  </div>
</template>
<script>
import { getRecommend } from '../service/recommend';
import Slider from '@/components/base/slider/slider';

export default {
  name: 'recommend',
  data() {
    return {
      sliders: []
    }
  },
  components: {
    Slider
  },
  async created() {
    const result = await getRecommend()
    console.log(result)
    this.sliders = result.sliders;
  }
}
</script>
