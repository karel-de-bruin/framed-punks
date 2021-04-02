<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
      <nav class="flex py-2 md:my-6 mx-2" aria-label="Breadcrumb">
        <ol class="w-full flex justify-center md:justify-start items-center space-x-4">
          <li>
            <div>
              <router-link tag="a" to="/" class="text-gray-400 hover:text-gray-500">
                <!-- Heroicon name: solid/home -->
                <svg
                  class="flex-shrink-0 h-5 w-5 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  />
                </svg>
                <span class="sr-only">Home</span>
              </router-link>
            </div>
          </li>

          <li>
            <div class="flex items-center">
              <!-- Heroicon name: solid/chevron-right -->
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <router-link tag="a" to="/frame"
                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >Frames</router-link
              >
            </div>
          </li>

          <li>
            <div class="flex items-center">
              <!-- Heroicon name: solid/chevron-right -->
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span
                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current="page"
                >{{frame.title}}</span
              >
            </div>
          </li>
        </ol>
      </nav>
      <div class="max-w-2xl mx-auto">
        <div class="bg-white overflow-hidden md:shadow rounded-lg">
          <div class="px-4 pb-0 pt-2 md:pt-8 sm:px-6 text-right">
            <span
              class="hidden md:inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800 mr-5"
            >
              <svg
                class="-ml-0.5 mr-1.5 h-2 w-2 text-blue-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>
              Preview
            </span>
            <h6 class="uppercase text-xs text-center mt-10 md:mt-4">            
              Frame {{frame.id}}
            </h6>
            
            <h4 class="font-bold text-3xl text-center text-blue-500 mt-2">
              "{{ frame.title }}"
              
            </h4>
            
          </div>
          <div class="px-0 py-3 sm:p-5">
            <artwork
              class="mr-2"
              :punk-id="punkId"
              :frame-id="frameId"
              :full-size="true"
            >
            </artwork>
          </div>
          
          <div class="flex flex-col px-4 sm:px-6 items-center">
            <div class="flex justify-center">
              <button
                @click="previousPunkId"
                type="button"
                class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mx-2"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                @click="nextPunkId"
                type="button"
                class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mx-2"
              >
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div class="text-center mt-4 max-w-lg mx-auto mt-8 mb-4" v-if="frame">
              {{ frame.description }}
            </div>
            <div
              class="w-full flex justify-around mt-6"
              v-if="frame && frame.properties"
            >
              <div
                class="text-center"
                v-for="(property, index) in frame.properties"
                :key="index"
              >
                <h5 class="uppercase text-sm">{{ property.type }}</h5>
                <h5 class="font-bold text-blue-500 text-sm">
                  {{ property.value }}
                </h5>
                <h5 class="text-gray-400 text-xs">
                  {{ property.rarity }}% of frames
                </h5>
              </div>
            </div>
            <div class="inline-flex rounded-md shadow mt-8">
              <a
                v-if="frame"
                :href="frame.url"
                target="_blank"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Buy Frame
              </a>
            </div>
            <div class="border-t w-full border-gray-200 my-8">
              <p class="mt-4 mb-6 text-sm flex items-center text-gray-500 mb-8">
                <svg
                  class="h-5 w-5 inline text-gray-300 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  />
                </svg>
                Click on the arrows to preview a different punk* in this frame,
                or enter a specific punk ID below.
              </p>
              <div class="mt-4 relative">
                <div class="mt-1 flex">
                  <div
                    class="relative flex items-stretch flex-grow focus-within:z-10"
                  >
                    <div
                      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                    >
                      <!-- Heroicon name: solid/users -->
                      <svg
                        class="h-5 w-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      @keyup.enter="setPunkIdFromInput"
                      v-model="punkIdInput"
                      class="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                      placeholder="Punk ID e.g. 0010"
                    />
                  </div>
                  <button
                    @click="setPunkIdFromInput"
                    class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <span>Fetch Punk</span>
                  </button>
                </div>
              </div>
              <div class="rounded-md bg-red-50 p-4 mt-4" v-if="error">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: solid/x-circle -->
                    <svg
                      class="h-5 w-5 text-red-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="ml-3">
                    <h3 class="text-sm font-medium text-red-800">
                      {{ error }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="text-center mb-12 text-gray-400">
      * Not affiliated with Larva Labs. Punks sold separately.
    </p>

    <div class="fixed bottom-0 inset-x-0 pb-2 sm:pb-5" v-if="showBanner">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="p-2 rounded-lg bg-blue-600 shadow-lg sm:p-3">
          <div class="flex items-center justify-between flex-wrap">
            <div class="w-0 flex-1 flex items-center">
              <span class="flex p-2 rounded-lg bg-blue-800">
                <!-- Heroicon name: outline/speakerphone -->
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </svg>
              </span>
              <p class="ml-3 font-medium text-white truncate">
                <span class="md:hidden">
                  Coming soon! Link your punks to frames
                </span>
                <span class="hidden md:inline">
                  Coming soon! Link your punks to frames that you own and view
                  them in your showroom.
                </span>
              </p>
            </div>

            <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button
                type="button"
                @click="showBanner = false"
                class="-mr-1 flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span class="sr-only">Dismiss</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Artwork from "../components/Artwork.vue";
import frames from "../json/frames.json";

export default {
  data() {
    return {
      punkId: null,
      punkIdInput: null,
      maxPunkId: 9999,
      showBanner: false,
      error: null,
      frames: frames,
    };
  },
  props: {
    frameId: String,
    previewId: {
      type: String,
      default: null,
    },
  },
  components: {
    Artwork,
  },
  mounted() {
    if (this.previewId) {
      const exactlyFourDigits = new RegExp("[0-9]{4}$");
      if (exactlyFourDigits.test(this.previewId)) {
        this.punkId = this.previewId;
      }
    }
  },
  methods: {
    nextPunkId: function () {
      let tempId = this.punkId ? parseInt(this.punkId) : 0;
      tempId = tempId + 1;
      if (tempId > 9999) tempId = 9999;
      this.punkId = tempId.toString().padStart(4, "0");
      this.punkIdInput = this.punkId;
    },
    previousPunkId: function () {
      let tempId = this.punkId ? parseInt(this.punkId) : 0;
      tempId = tempId - 1;
      if (tempId < 0) tempId = 0;
      this.punkId = tempId.toString().padStart(4, "0");
      this.punkIdInput = this.punkId;
    },
    setPunkIdFromInput: function () {
      this.error = null;
      const exactlyFourDigits = new RegExp("[0-9]{4}$");
      if (exactlyFourDigits.test(this.punkIdInput)) {
        this.punkId = this.punkIdInput.toString();
      } else {
        this.error = "The punk ID should be exactly 4 digits, e.g. 0023";
      }
    },
  },
  computed: {
    frame: function () {
      return this.frames.find((frame) => frame.id == this.frameId);
    },
  },
};
</script>

<style>
</style>