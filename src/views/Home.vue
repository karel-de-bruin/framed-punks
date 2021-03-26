<template>
  <div class="relative bg-white overflow-hidden">
    <div class="hidden lg:block lg:absolute lg:inset-0" aria-hidden="true">
      <svg
        class="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
        width="640"
        height="784"
        fill="none"
        viewBox="0 0 640 784"
      >
        <defs>
          <pattern
            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
            x="118"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          y="72"
          width="640"
          height="640"
          class="text-gray-50"
          fill="currentColor"
        />
        <rect
          x="118"
          width="404"
          height="784"
          fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
        />
      </svg>
    </div>
    <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
      <main class="mt-8 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        <div class="mt-8 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div class="text-center">
            <h1
              class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span>Frame your </span>
              <span class="text-blue-500">NFTs</span>
            </h1>
            <p
              class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              Augment your prized punks* and display them in our handcrafted
              frames.
            </p>
            <router-link to="/frame" tag="button" class="inline-flex items-center px-6 py-3 my-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Browse Frames
              <svg class="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">

                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>

            
          </div>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-8 sm:my-12 lg:my-24"
        >
          <artwork
            class="mb-3 sm:mb-10 mx-2"
            :punk-id="punkIds[0]"
            :frame-id="frameIds[0]"
            :allow-click="true"
          >
          </artwork>
          <artwork
            class="mb-3 sm:mb-10 mx-2"
            :punk-id="punkIds[1]"
            :frame-id="frameIds[1]"
            :allow-click="true"
          >
          </artwork>
          <artwork
            class="hidden sm:flex sm:mb-10 mb-3 mx-2"
            :punk-id="punkIds[2]"
            :frame-id="frameIds[2]"
            :allow-click="true"
          >
          </artwork>
          <artwork
            class="hidden sm:flex sm:mb-10 mb-3 mx-2"
            :punk-id="punkIds[3]"
            :frame-id="frameIds[3]"
            :allow-click="true"
          >
          </artwork>
        </div>
        <a
          class="float-right mr-6 flex items-center hover:text-blue-700 cursor-pointer"
          @click="forceRerender"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </a>

        <div class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 mt-8">
              <div class="flex justify-center">
                <div class="mr-16">
                  <a
                    class="flex items-center text-blue-500 hover:text-blue-700"
                    href="https://twitter.com/FramedPunks"
                    target="_blank"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="inline w-6 h-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="inline ml-2"
                      ><span class="hidden md:inline">Follow us on </span
                      >Twitter</span
                    >
                  </a>
                </div>
                <div>
                  <a
                    class="flex items-center text-blue-500 hover:text-blue-700"
                    href="https://opensea.io/collection/framed-punks-v2"
                    target="_blank"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="inline w-6 h-6"
                      aria-hidden="true"
                    >
                      <path
                        d="M8.2,9.3L5.5,8c0,0-0.1,0-0.2,0.1l-2.8,7.1c0,0.1,0,0.2,0.1,0.2h5.4c0.1,0,0.1,0,0.1-0.1L8.2,9.3 C8.3,9.3,8.2,9.3,8.2,9.3z M23.9,16.4c-0.1-0.1-0.2-0.1-0.4,0l-0.3,0.1c-1.6,0.8-3.4,1.2-5.2,1.2c-0.1,0-0.1,0-0.1,0.1 c-0.2,0.9-0.9,1.5-1.8,1.5h-3.7v-3.1h0c0.2,0,0.4,0,0.7,0.1c1.6,0.2,2.3,1,2.7,1.3l0,0l0,0c0,0,0.1,0,0.2,0c0,0,0.1-0.1,0.2-0.1 c0.6-0.4,1.9-1.2,1.9-5.5c0-4.4-3.3-7.3-3.7-7.5l0,0l0,0l0,0l0,0l-1.9-0.1h0V3.1C12.7,2.9,13,2.5,13,2c0-0.8-0.6-1.4-1.3-1.4 S10.3,1.2,10.3,2c0,0.5,0.2,0.9,0.7,1.1v1L8.2,3.9C8,3.9,7.9,4,8,4.1c0.5,0.8,1.8,3.1,1.9,6.7c0.1,3.3-0.4,4.9-0.7,5.5 c0,0,0,0.1,0,0.1l0,0c0,0,0.1,0,0.1,0c0.3,0,0.9-0.1,1.6-0.2v3.1H7.9c-1,0-1.9-0.9-1.9-1.9v-0.8c0-0.1,0-0.1-0.1-0.1H0.1 c0,0-0.1,0-0.1,0.1c0,0.1,0,0.3,0,0.4c0,2.1,0.6,4.1,1.7,5.8c0.2,0.3,0.5,0.4,0.8,0.3L3.1,23c0.5-0.2,1-0.2,1.6,0l0.7,0.3 c0.5,0.2,1,0.2,1.6,0L7.6,23c0.5-0.2,1-0.2,1.6,0l0.7,0.3c0.5,0.2,1,0.2,1.6,0L12,23c0.5-0.2,1-0.2,1.6,0l0.7,0.3 c0.5,0.2,1,0.2,1.6,0l0.7-0.3c0.5-0.2,1-0.2,1.6,0l0.7,0.3c0.4,0.2,0.9,0,1.1-0.5c0.4-0.6,0.7-1.3,1-2c0.5-1.6,1.5-3,2.9-3.8 c0.1,0,0.2-0.2,0.2-0.3C24,16.6,24,16.5,23.9,16.4z"
                        fill="currentColor"
                      />
                    </svg>
                    <span class="inline ml-2"
                      ><span class="hidden md:inline">Find us on </span
                      >OpenSea</span
                    >
                  </a>
                </div>
              </div>
            </div>
          
        
        <sign-up></sign-up>
        <p class="text-center text-gray-400">
          * Not affiliated with Larva Labs. Punks sold separately.
        </p>
      </main>
    </div>
  </div>
</template>

<script>
import Artwork from "../components/Artwork.vue";
import SignUp from "../components/SignUp.vue";

export default {
  data() {
    return {
      maxPunkId: 9999,
      maxFrameId: 19,
      frameIds: ["0019", "0007", "0008", "0009"],
      punkIds: ["0000", "0001", "0002", "0003"],
    };
  },
  components: {
    Artwork,
    SignUp,
  },
  methods: {
    getRandomPunkId() {
      return Math.floor(Math.random() * this.maxPunkId)
        .toString()
        .padStart(4, "0");
    },
    getRandomFrameId() {
      return Math.floor(Math.random() * this.maxFrameId)
        .toString()
        .padStart(4, "0");
    },
    getFrameIds() {
      let frameIds = [];
      while (frameIds.length < 4) {
        const randomId = this.getRandomFrameId();
        if (frameIds.findIndex((id) => id === randomId) === -1) {
          frameIds.push(randomId);
        }
      }
      return frameIds;
    },
    getPunkIds() {
      let punkIds = [];
      while (punkIds.length < 4) {
        const randomId = this.getRandomPunkId();
        if (punkIds.findIndex((id) => id === randomId) === -1) {
          punkIds.push(randomId);
        }
      }
      return punkIds;
    },
    forceRerender() {
      this.frameIds = this.getFrameIds();
      this.punkIds = this.getPunkIds();
    },
  },
};
</script>

<style>
</style>