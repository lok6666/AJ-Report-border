<template>
  <div class="dv-border-box-1" :style="styleObj">
    <svg class="border" :width="styleObj.borderWidth" :height="styleObj.borderHeight">
      <polygon
        :fill="styleObj.backgroundColors"
        :points="`10, 27 10, ${styleObj.borderHeight - 27} 13, ${styleObj.borderHeight - 24} 13, ${styleObj.borderHeight - 21} 24, ${styleObj.borderHeight - 11}
                    38,  ${styleObj.borderHeight - 11} 41,  ${styleObj.borderHeight - 8} 73, ${styleObj.borderHeight - 8} 75, ${styleObj.borderHeight - 10} 81, ${styleObj.borderHeight - 10}
                                                                              85, ${styleObj.borderHeight - 6} ${
                                                                                styleObj.borderWidth - 85
        }, ${styleObj.borderHeight - 6}  ${styleObj.borderWidth - 81}, ${styleObj.borderHeight - 10}  ${styleObj.borderWidth - 75}, ${styleObj.borderHeight - 10}
                                                                               ${styleObj.borderWidth - 73}, ${
        styleObj.borderHeight - 8
        }  ${styleObj.borderWidth - 41}, ${styleObj.borderHeight - 8}  ${styleObj.borderWidth - 38}, ${styleObj.borderHeight - 11}
                                                                               ${styleObj.borderWidth - 24}, ${
          styleObj.borderHeight - 11
        }  ${styleObj.borderWidth - 13}, ${styleObj.borderHeight - 21}  ${styleObj.borderWidth - 13}, ${styleObj.borderHeight - 24}
                                                                               ${styleObj.borderWidth - 10}, ${
          styleObj.borderHeight - 27
        }  ${styleObj.borderWidth - 10}, 27  ${styleObj.borderWidth - 13}, 25  ${styleObj.borderWidth - 13}, 21
                                                                               ${styleObj.borderWidth - 24}, 11 ${
          styleObj.borderWidth - 38
        }, 11  ${styleObj.borderWidth - 41}, 8  ${styleObj.borderWidth - 73}, 8  ${styleObj.borderWidth - 75}, 10
                                                                               ${styleObj.borderWidth - 81}, 10 ${
          styleObj.borderWidth - 85
        }, 6 85, 6 81, 10 75, 10 73, 8 41, 8 38, 11 24, 11 13, 21 13, 24`"
      />
    </svg>

    <svg v-for="item in border" :key="item" width="150px" height="150px" :class="`${item} border`">
      <polygon
        :fill="styleObj.colorLeft"
        points="6,66 6,18 12,12 18,12 24,6 27,6 30,9 36,9 39,6 84,6 81,9 75,9 73.2,7 40.8,7 37.8,10.2 24,10.2 12,21 12,24 9,27 9,51 7.8,54 7.8,63"
      >
        <animate
          attributeName="fill"
          :values="`${styleObj.colorLeft};${styleObj.colorRight};${styleObj.colorLeft}`"
          dur="0.5s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>
      <polygon
        :fill="styleObj.colorRight"
        points="27.599999999999998,4.8 38.4,4.8 35.4,7.8 30.599999999999998,7.8"
      >
        <animate
          attributeName="fill"
          :values="`${styleObj.colorRight};${styleObj.colorLeft};${styleObj.colorRight}`"
          dur="0.5s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>
      <polygon
        :fill="styleObj.colorLeft"
        points="9,54 9,63 7.199999999999999,66 7.199999999999999,75 7.8,78 7.8,110 8.4,110 8.4,66 9.6,66 9.6,54"
      >
        <animate
          attributeName="fill"
          :values="`${styleObj.colorLeft};${styleObj.colorRight};transparent`"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </polygon>
    </svg>
  </div>
</template>
  
  <script>
  
  export default {
    name: "widgetBorder1",
    components: {},
    props: {
      value: Object,
      ispreview: Boolean
    },
    data() {
      return {
        options: {
          title: {},
          colorLeft: '',
          colorRight: ''
        },
        border: ['left-top', 'right-top', 'left-bottom', 'right-bottom'],
        optionsStyle: {}, // 样式
        optionsSetup: {}
      }
    },
    computed: {
      styleObj() {
        return {
          position: this.ispreview ? "absolute" : "static",
          width: this.optionsStyle.width + 'px',
          height: this.optionsStyle.height + 'px',
          borderWidth: this.optionsStyle.width,
          borderHeight: this.optionsStyle.height,
          left: this.optionsStyle.left + "px",
          top: this.optionsStyle.top + "px",
          backgroundColors: this.optionsSetup.background,
          colorRight: this.optionsSetup.colorRight,
          colorLeft: this.optionsSetup.colorLeft
        };
      }
    },
    watch: {
      value: {
        handler(val) {
          this.optionsStyle = val.position;
          this.optionsData = val.data;
          this.optionsSetup = val.setup;
          this.editorOptions();
        },
        deep: true
      }
    },
    mounted() {
      this.optionsStyle = this.value.position;
      this.optionsData = this.value.data;
      this.optionsSetup = this.value.setup;
      this.editorOptions();
    },
    methods: {
      editorOptions() {
        // this.setOptionsLastRing();
      }
    }
  }
  </script>
  
  
<style lang="scss" scoped>
.dv-border-box-1 {
  // position: relative;
/*   width: 100%;
  height: 100%;
  pointer-events: none; */

  .border {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .right-top {
    right: 0;
    transform: rotateY(180deg);
  }

  .left-bottom {
    bottom: 0;
    transform: rotateX(180deg);
  }

  .right-bottom {
    right: 0;
    bottom: 0;
    transform: rotateX(180deg) rotateY(180deg);
  }

  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
