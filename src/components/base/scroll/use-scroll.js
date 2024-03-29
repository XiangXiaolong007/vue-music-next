import BScroll from "@better-scroll/core";
import { ref, onMounted, onUnmounted } from "vue";
import ObserveDOM from "@better-scroll/observe-dom";

// 自动判断内容变化，计算高度并滚动
BScroll.use(ObserveDOM)

export default function useScroll(wrapperRef, options, emit) {
  const scroll = ref(null)
  onMounted(() => {
    const scrollVal = scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options
    });
    if(options.probeType > 0) {
      scrollVal.on('scroll', pos => {
        emit('scroll', pos)
      })
    }
  })
  onUnmounted(() => {
    scroll.value.destroy()
  })

  return {
    scroll
  }
}
