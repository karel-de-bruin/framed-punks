<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
      <nav class="hidden md:flex py-6 mx-2" aria-label="Breadcrumb">
        <ol class="flex items-center space-x-4">
          <li>
            <div>
              <a href="/" class="text-gray-400 hover:text-gray-500">
                <!-- Heroicon name: solid/home -->
                <svg
                  class="flex-shrink-0 h-5 w-5"
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
              </a>
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
                >Frames</span
              >
            </div>
          </li>
        </ol>
      </nav>
      <div class="max-w-2xl mx-auto">
        <div class="bg-white overflow-hidden md:shadow rounded-lg">
          <div class="px-4 pb-0 pt-2 md:pt-8 sm:px-6">
            <ul class="divide-y divide-gray-200">
              <li v-for="(frame, index) in frames" :key="index">
                <router-link :to="'/frame/' + frame.id" tag="a" class="block hover:bg-gray-50 px-4 py-4 ">
                  <div class="flex items-center sm:px-6">
                    <div class="min-w-0 flex-1 flex flex-col md:flex-row items-center py-4">
                      <div class="flex-shrink-0">
                        <artwork
                          class="p-4"
                          :punk-id="null"
                          :frame-id="frame.id"
                        >
                        </artwork>
                      </div>
                      <div class="min-w-0 flex-1 px-4">
                        <div>
                          <h4 class="text-gray-500 font-bold text-xl">
                            "{{ frame.title }}"
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div>
                      <!-- Heroicon name: solid/chevron-right -->
                      <svg
                        class="h-5 w-5 text-gray-400"
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
                    </div>
                  </div>
                  
                </router-link>
              </li>
            </ul>
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
      frames: frames,
    };
  },
  components: {
    Artwork,
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<style>
</style>