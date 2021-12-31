<template>
  <div class="test-guide">
    <h1 style="display: inline-block;margin: auto;" id="ones">测试driver.js</h1>
    <div >
		<span  id="first-ele" >首页</span>
	</div>
    <div>
		<span id="second-intro">帮助</span>
	</div>
    <div >
		<span id="third-des">联系我们</span>
	</div>
  </div>
</template>
<script>
import "driver.js/dist/driver.min.css";
import Driver from "driver.js";
export default {
  mounted() {
    this.showTips();
  },
  methods: {
    showTips() {
      const driver = new Driver({
        prevBtnText: "上一步",
        nextBtnText: "下一步",
        doneBtnText: "我知道了",
        closeBtnText: "关闭"
      });
      const steps = [
        {
          element: "#ones",
          popover: {
            title: "这是本站首页",
            description: "本站首页是一些展示性的信息",
            position: "bottom"
          }
        },
        {
          element: "#first-ele",
          popover: {
            title: "这是本站首页",
            description: "本站首页是一些展示性的信息",
            position: "bottom"
          }
        },
        {
          element: "#second-intro",
          popover: {
            title: "这是帮助",
            description: "点此处可获取一些本站的相关说明",
            position: "top"
          }
        },
        {
          element: "#third-des",
          popover: {
            title: "联系我们",
            description: "点击这里可获取我们的相关信息",
            position: "right"
          }
        }
      ];
      driver.defineSteps(steps);
      driver.start();
    }
  }
};
</script>
<style>
.test-guide {
  color: #ffa0a0;
}
</style>