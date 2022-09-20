<template>
  <canvas id="canvas" width="600" height="200" />
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import icon from '~/assets/icon.jpg'

export default {
  name: 'RotateBox',
  setup () {
    return { scene: null, renderer: null, camera: null, light: null, geometry: null, material: null, cube: null, controls: null }
  },
  mounted () {
    if (process.client) {
      this.init()

      const $canvas = document.getElementById('canvas')
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas: $canvas
      })

      this.controls = new OrbitControls(this.camera, $canvas)

      this.camera.position.set(0, 0, 2)
      this.light.position.set(0, 0, 10)
      this.scene.add(this.cube)
      this.scene.add(this.light)

      this.animate()
    }
  },
  methods: {
    init () {
      const scene = new THREE.Scene()
      const renderer = null
      const camera = new THREE.PerspectiveCamera(75, 600 / 200, 0.1, 1000)
      const light = new THREE.DirectionalLight(0xFFFFFF)
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const texture = new THREE.TextureLoader().load(icon)
      const material = new THREE.MeshBasicMaterial({ map: texture })
      const cube = new THREE.Mesh(geometry, material)

      this.scene = scene
      this.renderer = renderer
      this.camera = camera
      this.light = light
      this.geometry = geometry
      this.material = material
      this.cube = cube
    },
    animate () {
      requestAnimationFrame(this.animate)

      this.cube.rotation.x += 0.02
      this.cube.rotation.y += 0.02

      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>

<style>
canvas {
  width: 100%;
}
</style>
