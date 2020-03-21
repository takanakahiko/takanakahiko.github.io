<template>
  <div>
    <pageHead>Works</pageHead>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <card2
            v-for="workInfo in workInfos"
            :key="workInfo.title"
            :title="workInfo.title"
            :image="workInfo.image"
            :tags="workInfo.tags"
            :url="workInfo.url"
          >
            {{ workInfo.comment }}
          </card2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHead from '~/components/PageHead'
import Card2 from '~/components/Card2'

export default {
  name: 'Works',
  components: {
    Card2,
    PageHead
  },
  asyncData () {
    return {
      workInfos: [
        {
          title: 'google/clasp',
          image: '/images/clasp.png',
          tags: ['oss-contribution', 'typescript'],
          comment: 'I contribute to Clasp of Google OSS',
          url: 'https://github.com/google/clasp/commits?author=takanakahiko'
        },
        {
          title: 'slack emoji meister',
          image:
            'https://lh3.googleusercontent.com/BRD3N_8nPTM3OGKPoJ1haKyHo8KvCnAJImAT9h7Q7CfeIQg8QkMc5URj-aouYImlMIhmxqcPMVI=w640-h400-e365',
          tags: ['oss-maintenance', 'typescript', 'chrome-extention'],
          comment:
            'It is a Chrome extension that you can register as slack emoji by right clicking on the image in the browser',
          url: 'https://github.com/google/clasp/commits?author=takanakahiko'
        },
        {
          title: 'PrismDB',
          image:
            '/images/prismdb.png',
          tags: ['oss-maintenance', 'typescript', 'nuxt.js', 'open-data', 'docker-compose', 'aws', 'express.js'],
          comment:
            'PrismDB is a platform to organize information of Pretty series. It is conducted as part of coterie activities.',
          url: 'https://github.com/prickathon/prismdb'
        },
        {
          title: 'sao-clasp',
          image:
            'https://user-images.githubusercontent.com/8784712/47992262-650b1780-e127-11e8-9e58-6c75e22ad99f.png',
          tags: ['saojs', 'scaffolding'],
          comment:
            'It is a tool for interactively setting up a project when developing with clasp',
          url: 'https://github.com/takanakahiko/sao-clasp'
        },
        {
          title: 'Movie On Wallpaper',
          image: '/images/mow.gif',
          tags: ['c-sharp', 'windows'],
          comment:
            'It is an application that can setting video to Windows wallpaper',
          url: 'https://takanakahiko.me/MovieOnWallpaper/'
        },
        {
          title: 'SocialityFilter API',
          image: '/images/sfa.gif',
          tags: ['google-apps-script', 'web-api'],
          comment: 'It is a sociality filter API',
          url: 'https://takanakahiko.me/SocialityFilter/'
        }
      ]
    }
  }
}
</script>
