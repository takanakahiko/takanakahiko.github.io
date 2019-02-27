<template>
  <section class="hero is-fullheight bg-animated-icon is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title btn10">
          <span class="fill-in">takanakahiko</span>
        </p>
        <p class="subtitle">
          <span class="fill-in">developer</span> / <span class="fill-in">engineer</span>
        </p>
      </div>
    </div>
    <div class="hero-foot">
      <nav class="tabs is-centered">
        <div class="container">
          <ul>
            <li>
              <nuxt-link :to="{name:'about'}">
                About
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name:'works'}">
                Works
              </nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'blank'
}
</script>
