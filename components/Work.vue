<template>
  <div
    v-observe-visibility="visibilityChanged"
    class="work-container"
  >
    <div class="section columns is-variable">
      <div class="column is-half">
        <a :href="url">
          <figure class="image is-4by3">
            <img :src="image" class="has-background-white" alt="Placeholder image">
          </figure>
        </a>
      </div>
      <div class="column is-half">
        <p class="title is-2">
          {{ title }}
        </p>
        <div class="content">
          <slot />
        </div>
        <b-taglist>
          <b-tag v-for="tag in tags" :key="tag" type="is-info">
            #{{ tag }}
          </b-tag>
        </b-taglist>
      </div>
    </div>
    <hr>
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
  },
  methods: {
    visibilityChanged (isVisible, entry) {
      const classList = entry.target.classList
      if (isVisible) { classList.add('visible') } else { classList.remove('visible') }
    }
  }
}
</script>

<style scoped>
.work-container{
  opacity: 0;
}
.work-container.visible{
  animation-name:fade-in;
  animation-duration:1s;
  animation-timing-function: ease-out;
  animation-delay:0;
  animation-iteration-count:1;
  animation-direction:normal;
  animation-fill-mode: forwards;
}

.columns {
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
}

img {
  border-radius: 20px;
  border: 1px rgb(219, 219, 219) solid;
  object-fit: cover;
}
</style>
