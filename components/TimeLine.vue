<template>
  <div class="timeline">
    <header class="timeline-header">
      <span class="tag is-medium is-primary">Present</span>
    </header>
    <div v-for="(content, i) in timelineContent" :key="i" class="timeline-item">
      <div class="timeline-marker" />
      <div
        class="timeline-content"
      >
        <p class="heading">
          {{ content.title }}
        </p>
        <p>{{ content.content }}</p>
        <p>-</p>
        <p>{{ content.role }}</p>
      </div>
    </div>
    <div class="timeline-header">
      <span class="tag is-medium is-primary">Birth :tada:</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    timelineContent: {
      type: Array,
      required: true
    }
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      const classList = entry.target.classList
      if (isVisible) { classList.add('test') } else { classList.remove('test') }
    }
  }
}
</script>

<style>
.timeline-content{
  opacity: 0;
  animation-name:fade-in;
  animation-duration:1s;
  animation-timing-function: ease-out;
  animation-delay:0;
  animation-iteration-count:1;
  animation-direction:normal;
  animation-fill-mode: forwards;
}

@keyframes fade-in {
  0% {opacity: 0; transform: translate3d(0,30px,0);}
  100% {opacity: 1; transform: translate3d(0,0,0);}
}
</style>
