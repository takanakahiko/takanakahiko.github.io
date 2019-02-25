<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      "Just start  <b-icon
        icon="rocket"
        size="is-large"
      />"
    </h2>
    <h3 class="subtitle is-6 has-text-grey">
      Author: <a href="https://github.com/anteriovieira">Antério Vieira</a>
    </h3>
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
  </section>
</template>

<script>
import Card2 from '~/components/Card2'

export default {
  name: 'Works',
  components: {
    Card2
  },
  asyncData() {
    return {
      workInfos: [
        {
          title: 'google/clasp',
          image: 'https://takanakahiko.me/images/clasp.jpg',
          tags: ['oss-contribution', 'typescript'],
          comment: 'Google製OSSのclaspにcontributionしています',
          url: 'https://github.com/google/clasp/commits?author=takanakahiko'
        },
        {
          title: 'slack emoji meister',
          image:
            'https://lh3.googleusercontent.com/BRD3N_8nPTM3OGKPoJ1haKyHo8KvCnAJImAT9h7Q7CfeIQg8QkMc5URj-aouYImlMIhmxqcPMVI=w640-h400-e365',
          tags: ['oss-maintenance', 'typescript', 'chrome-extention'],
          comment:
            'ブラウザで画像を右クリックするだけでslack emojiとして登録できるChrome拡張機能です',
          url: 'https://github.com/google/clasp/commits?author=takanakahiko'
        },
        {
          title: 'sao-clasp',
          image:
            'https://user-images.githubusercontent.com/8784712/47992262-650b1780-e127-11e8-9e58-6c75e22ad99f.png',
          tags: ['saojs', 'scaffolding'],
          comment:
            'claspを用いた開発をする際のプロジェクトのセットアップを対話的に行うためのツールです',
          url: 'https://github.com/takanakahiko/sao-clasp'
        },
        {
          title: 'Movie On Wallpaper',
          image: 'https://takanakahiko.me/images/pic08.gif',
          tags: ['c-sharp', 'windows'],
          comment: 'Windowsの壁紙を動画にするアプリケーションです',
          url: 'https://takanakahiko.me/MovieOnWallpaper/'
        },
        {
          title: 'SocialityFilter API',
          image: 'https://takanakahiko.me/images/pic09.gif',
          tags: ['google-apps-script', 'web-api'],
          comment: '社会性フィルターAPIです',
          url: 'https://takanakahiko.me/SocialityFilter/'
        }
      ]
    }
  }
}
</script>
