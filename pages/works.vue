<template>
  <div>
    <pageHead>Works</pageHead>
    <section class="section">
      <div class="container">
        <Work
          v-for="workInfo in workInfos"
          :key="workInfo.title"
          :title="workInfo.title"
          :image="workInfo.image"
          :tags="workInfo.tags"
          :url="workInfo.url"
        >{{ workInfo.comment }}</Work>
      </div>
    </section>
  </div>
</template>

<script>
import PageHead from '~/components/PageHead'
import Work from '~/components/Work'

export default {
  name: 'Works',
  components: {
    Work,
    PageHead
  },
  asyncData () {
    return {
      workInfos: [
        {
          title: 'Vlueprint',
          image:
            '/images/vlueprint.png',
          tags: ['oss-maintenance', 'nuxt.js', 'open-data', 'CloudRun(GCP)'],
          comment:
            'It is a platform for virturl world. For example VTuber, VirtualBeing and more.',
          url: 'https://github.com/vlueprint/vlueprint'
        },
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
          title: 'kotoba palette',
          image:
            '/images/momoyan.png',
          tags: ['nuxt.js', 'Bing Image Search API', 'heroku'],
          comment:
            'Suggest colors from keyword.',
          url: 'https://kotoba-palette.herokuapp.com/'
        },
        {
          title: 'web-demo-suit',
          image:
            '/images/web-demo-suit.gif',
          tags: ['TensorFlow.js', 'バズり駆動開発'],
          comment:
            'It is a joke web app. You can easily overlay suit image on yourself and make it looks as wearing it.',
          url: 'https://github.com/takanakahiko/web-demo-suit'
        },
        {
          title: '結婚式向けのラフィックメモリーサービス「メモリ」さま LP制作',
          image:
            '/images/memori.png',
          tags: ['nuxt.js', 'SEO', 'Web accessibility'],
          comment:
            'I\'ve created a landing page at the request from "Memori", a wedding memory service.',
          url: 'https://memoriwedding.com/'
        },
        {
          title: 'event-to-twitter-list',
          image:
            '/images/event-to-twitter-list.png',
          tags: ['nuxt.js', 'Twitter API', 'heroku'],
          comment:
            'You can create a Twitter list that summarizes event participants.',
          url: 'https://event-to-twitter-list.herokuapp.com/'
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
