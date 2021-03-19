<template>
  <div class="relative bg-white overflow-hidden">
  <div class="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
    <svg class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8" width="640" height="784" fill="none" viewBox="0 0 640 784">
      <defs>
        <pattern id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect y="72" width="640" height="640" class="text-gray-50" fill="currentColor" />
      <rect x="118" width="404" height="784" fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)" />
    </svg>
  </div>
  <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
    

    <main class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div class="text-center">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span>Frame your </span>
              <span class="text-blue-500">NFTs</span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Augment your prized punks and display them in our handcrafted frames.
            </p>
          </div>
        </div>
      
        <div class="grid grid-cols-2 md:grid-cols-4 my-24">
          <artwork
              class="mr-2"
              :punk-id="getRandomPunkId()"
              :frame-id="'0008'">
          </artwork>
          <artwork
              class="mr-2"
              :punk-id="getRandomPunkId()"
              :frame-id="'0003'">
          </artwork>
          <artwork
              class="mr-2"
              :punk-id="getRandomPunkId()"
              :frame-id="'0010'">
          </artwork>
          <artwork
              :punk-id="getRandomPunkId()"
              :frame-id="'0007'">
          </artwork>
        </div>

    <sign-up></sign-up>
      
    </main>
    
  </div>
</div>
</template>

<script>
import Artwork from '../components/Artwork.vue'
import SignUp from '../components/SignUp.vue'

export default {
  data() {
    return {
      maxPunkId: 10000,
      maxFrameId: 11
    }
  },
  components: {
    Artwork,
    SignUp
  },
  methods : {
    getRandomPunkId() {
      return Math.floor(Math.random() * this.maxPunkId).toString().padStart(4, '0')
    },
    getRandomFrameId() {
      return Math.floor(Math.random() * this.maxFrameId).toString().padStart(4, '0')
    }
  }
}

</script>

<style>

</style>