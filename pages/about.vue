<template>
  <div>
    <pageHead>About me</pageHead>
    <section class="section has-text-centered">
      <div class="container">
        <rotate-box />
      </div>
      <div class="container">
        <p>Hi! please call me Takanakahiko.</p>
        <p>I'd like to create a creative work that makes someone's heart move.</p>
        <p>My dream is to credits my name on the endrol of my loving content.</p>
        <p>I guess that sometimes the dreams come true.</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h3 class="title is-3">
          I like...
        </h3>
        <div class="columns is-variable">
          <div
            v-for="item in likes"
            :key="item.title"
            class="column has-text-centered bd-notification"
          >
            <p>
              <b-icon :icon="item.icon" size="is-large" />
            </p>
            <p class="title is-4">
              {{ item.title }}
            </p>
            <p class="subtitle is-5">
              {{ item.comment }}
            </p>
            <p class="content">
              {{ item.body }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            History
          </h1>
          <div class="columns">
            <div class="column">
              <timeLine :timeline-content="timelineContent" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h3 class="title is-3">
          Links
        </h3>
        <div class="columns">
          <card
            v-for="linkInfo in links"
            :key="linkInfo.title"
            :title="linkInfo.title"
            :icon="linkInfo.icon"
            :url="linkInfo.url"
          >
            {{ linkInfo.comment }}
          </card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PageHead from '~/components/PageHead'
import Card from '~/components/Card'
import TimeLine from '~/components/TimeLine'
import RotateBox from '~/components/RotateBox'

export default {
  name: 'AboutMe',
  components: {
    Card,
    PageHead,
    TimeLine,
    RotateBox
  },
  asyncData () {
    return {
      likes: [
        {
          icon: 'laptop',
          title: 'Programming',
          comment: 'I like coding.',
          body: 'Python / TypeScript / Elixir / ...'
        },
        {
          icon: 'earth',
          title: 'OSS',
          comment: 'I like those cultures.',
          body: 'Clasp / Nuxt / saojs / ...'
        },
        {
          icon: 'television-classic',
          title: 'Animes',
          comment: 'I like girls who strive hard.',
          body: 'Pripara / Aikatsu! / Vividred Operation / ...'
        }
      ],
      links: [
        {
          title: 'GitHub',
          icon: 'github',
          comment: 'Various developments',
          url: 'https://github.com/takanakahiko'
        },
        {
          title: 'Twitter',
          icon: 'twitter',
          comment: 'Various tweets',
          url: 'https://twitter.com/takanakahiko'
        },
        {
          title: 'Blog',
          icon: 'blogger',
          comment: 'Various poems',
          url: 'https://takanakahiko.hatenablog.com'
        },
        {
          title: 'Pixiv sketch',
          icon: 'pencil-circle',
          comment: 'Various illustrations',
          url: 'https://sketch.pixiv.net/@takanakahiko'
        },
        {
          title: 'Facebook',
          icon: 'facebook',
          comment: 'Private relationships',
          url: 'https://facebook.com/takanakahiko'
        },
        {
          title: 'Wishlist',
          icon: 'amazon',
          comment: 'Please give me a present',
          url: 'https://www.amazon.jp/hz/wishlist/ls/2X1XQIFXKS456'
        }
      ],
      timelineContent: [
        {
          title: 'April 2020 - Present',
          content: 'Akatsuki Inc.',
          role: 'Engineer'
        },
        {
          title: 'February 2019 - March 2020',
          content: 'Japan Digital Design',
          role: 'Data and Prototyping Engineer(internship)'
        },
        {
          title: 'February 2019 - March 2020',
          content: 'Gaiax',
          role: 'OSS promoter(internship)'
        },
        {
          title: 'April 2018 - March 2020',
          content: 'Takushoku University',
          role: 'Information and Design Science Course(Master of Engineering)'
        },
        {
          title: 'February 2018 - January 2019',
          content: 'Air Closet',
          role: 'Data scientist(internship)'
        },
        {
          title: 'April 2014 - December 2018',
          content: 'Non-disclosure (Embedded system development company)',
          role: 'Fullstack engineer(part-time job)'
        },
        {
          title: 'April 2014 - March 2018',
          content: 'Takushoku University',
          role: 'Undergraduate'
        }
      ]
    }
  }
}
</script>
