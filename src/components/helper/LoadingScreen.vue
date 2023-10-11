<template>
  <div class="inside-content overlay">
    <div class="icon">
      <LoadingIcon class="loading-img"/>
      <div id="ball" class="green"></div>
      <p style="text-align: center;margin-top: 30px;font-family: 'Gravitas One', serif">Loading</p>
    </div>
  </div>
</template>

<script>
import LoadingIcon from "@/components/helper/LoadingIcon.vue";
import anime from "animejs";
import $ from "jquery";

export default {
  name: "LoadingScreen",
  emits: ["finish"],
  components: {LoadingIcon},
  data() {
    return {
      ballAnime: {}
    }
  },
  mounted() {
    const path = anime.path('.loading-img path');
    const cloneEl = document.querySelector('.green').cloneNode(true);

    cloneEl.style.position = 'absolute';
    cloneEl.style.background = 'rgba(0,0,0,0.5)';

    document.body.appendChild(cloneEl);

    this.ballAnime = anime({
      targets: '.green',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: 'linear',
      duration: 5000,
      loop: true
    });
  },
  methods: {
    beforeUnmount(callback) {
      this.ballAnime.pause();
      anime({
        targets: '.green',
        opacity: [1, 0],
        duration: 400
      })
      anime({
        targets: '.inside-content',
        opacity: [1, 0],
        duration: 400
      }).finished.then(() => {
        console.log("finished")
        callback()
      })
    },
    simpleBeforeUnmount() {
      this.ballAnime.pause();
      $("#ball").hide();
    }
  },
  expose: ["beforeUnmount", "simpleBeforeUnmount"]
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
}

.inside-content {
  background: rgb(220, 210, 187);
  background: radial-gradient(circle, rgba(220, 210, 187, 1) 0%, rgba(129, 67, 60, 1) 100%);
}

.icon {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.green {
  position: absolute;
  top: -10px;
  left: -10px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: rgba(129, 67, 60, 1);
}
</style>
