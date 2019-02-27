<template>
  <section class="hero is-primary is-fullheight">
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

<style scoped>
.fill-in {
  display: inline-block;
  position: relative;
  overflow: hidden !important;
  background: transparent !important;
  z-index: 10;
  vertical-align: top;
  animation: fill-in-body 1.2s ease 0.3s;
  animation-fill-mode: both;
}
@keyframes fill-in-body {
  0% {
    color: transparent;
  }
  49% {
    color: transparent;
  }
  50% {
    color: white;
  }
  99% {
    color: white;
  }
}
.fill-in::after {
  content: '';
  height: 100%;
  display: block;
  background: white;
  position: absolute;
  top: 0;
  z-index: -15;
  animation: fill-in-box 1.2s ease 0.3s;
  animation-fill-mode: both;
}
@keyframes fill-in-box {
  0% {
    width: 0%;
    left: 0%;
  }
  50% {
    width: 120%;
    left: 0%;
  }
  99% {
    width: 120%;
    left: 100%;
  }
}
</style>
