<template>
  <div class="timeline">
    <header class="timeline-header">
      <span class="tag is-medium is-primary">Present</span>
    </header>
    <div v-for="(content, i) in timelineContent" :key="i" class="timeline-item">
      <div class="timeline-marker" />
      <div class="timeline-content">
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
  }
}
</script>
