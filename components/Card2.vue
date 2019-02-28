<template>
  <div class="column is-one-third">
    <div class="card">
      <div class="card-image">
        <a :href="url">
          <figure class="image is-4by3">
            <img :src="image" alt="Placeholder image">
          </figure>
        </a>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">
              {{ title }}
            </p>
          </div>
        </div>
        <div class="content">
          <slot />
        </div>
        <div class="content">
          <span v-for="tag in tags" :key="tag"> #{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>
