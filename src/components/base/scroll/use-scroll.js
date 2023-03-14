import BScroll from "@better-scroll/core";
import { ref, onMounted, onUnmounted } from "vue";
import ObserveDOM from "@better-scroll/observe-dom";

// 自动判断内容变化，计算高度并滚动
BScroll.use(ObserveDOM)

export default function useScroll(wrapperRef, options) {
  const scroll = ref(null)

  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options
    });
  })
  onUnmounted(() => {
    scroll.value.destroy()
  })
}
