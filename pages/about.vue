<template>
  <section class="section">
    <div class="columns">
      <card v-for="linkInfo in links" :key="linkInfo.title" :title="linkInfo.title" :icon="linkInfo.icon" :url="linkInfo.url">
        {{ linkInfo.comment }}
      </card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',
  components: {
    Card
  },
  transition: 'zoom-out',
  asyncData() {
    return {
      links: [
        {
          title: 'GitHub',
          icon: 'github-circle',
          comment: 'かいはつ',
          url: 'https://github.com/takanakahiko'
        },
        {
          title: 'Twitter',
          icon: 'twitter-circle',
          comment: 'つぶやき',
          url: 'https://twitter.com/takanakahiko'
        },
        {
          title: 'Blog',
          icon: 'blogger',
          comment: 'つぶやき(ながめ)',
          url: 'https://takanakahiko.hatenablog.com'
        },
        {
          title: 'Pixiv sketch',
          icon: 'pencil-circle',
          comment: 'おえかき',
          url: 'https://sketch.pixiv.net/@takanakahiko'
        },
        {
          title: 'Facebook',
          icon: 'facebook-box',
          comment: 'こじんじょうほう',
          url: 'https://facebook.com/takanakahiko'
        }
      ]
    }
  }
}
</script>
