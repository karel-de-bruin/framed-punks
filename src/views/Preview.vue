<template>
    <div class="relative bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto">
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 pb-0 pt-8 sm:px-6">
                        <h4 class="flex justify-center items-center">
                            <span class="font-bold text-xl">Frame {{frameId}}</span>
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800 ml-5">
                                <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-blue-400" fill="currentColor" viewBox="0 0 8 8">
                                    <circle cx="4" cy="4" r="3" />
                                </svg>
                            Preview
                            </span>
                            
                        </h4>
                    </div>
                    <div class="px-4 py-3 sm:p-6">
                        <artwork
                            class="mr-2"
                            :punk-id="punkId"
                            :frame-id="frameId"
                            :full-size="true">
                        </artwork>
                    </div>
                    <div class="flex flex-col px-4 sm:px-6 items-center">
                        <div class="flex justify-center">
                            <button @click="previousPunkId" type="button" class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mx-2">
                                <svg  class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button @click="nextPunkId" type="button" class="inline-flex items-center p-1.5 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mx-2">
                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                        <div class="mt-6 relative">
                            <div class="mt-1 flex">
                                <div class="relative flex items-stretch flex-grow focus-within:z-10">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <!-- Heroicon name: solid/users -->
                                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                    </svg>
                                </div>
                                <input type="text" @keyup.enter="setPunkIdFromInput" v-model="punkIdInput" class="focus:ring-blue-500 focus:border-blue-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300" placeholder="Punk ID e.g. 0010">
                                </div>
                                <button @click="setPunkIdFromInput" class="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                                <span>Fetch</span>
                                </button>
                            </div>
                        </div>
                        <div class="rounded-md bg-red-50 p-4 mt-4" v-if="error">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                <!-- Heroicon name: solid/x-circle -->
                                <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                                </svg>
                                </div>
                                <div class="ml-3">
                                <h3 class="text-sm font-medium text-red-800">
                                    {{error}}
                                </h3>
                                </div>
                            </div>
                        </div>
                        <p class="mt-8 mb-6 text-sm flex items-center text-gray-500 mb-8">
                            <svg class="h-5 w-5 inline text-gray-300 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                            </svg>
                            Click on the arrows to preview a different punk in this frame, or enter a punk ID.
                        </p>
                    </div>
                </div>
            </div>
        </div>
            
            
        <div class="fixed bottom-0 inset-x-0 pb-2 sm:pb-5" v-if="showBanner">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="p-2 rounded-lg bg-blue-600 shadow-lg sm:p-3">
                <div class="flex items-center justify-between flex-wrap">
                    <div class="w-0 flex-1 flex items-center">
                    <span class="flex p-2 rounded-lg bg-blue-800">
                        <!-- Heroicon name: outline/speakerphone -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                    </span>
                    <p class="ml-3 font-medium text-white truncate">
                        <span class="md:hidden">
                        Coming soon! Link your punks to frames
                        </span>
                        <span class="hidden md:inline">
                        Coming soon! Link your punks to frames that you own and view them in your showroom.
                        </span>
                    </p>
                    </div>
                    
                    <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                    <button type="button" @click="showBanner = false" class="-mr-1 flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white">
                        <span class="sr-only">Dismiss</span>
                        <!-- Heroicon name: outline/x -->
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
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
import Artwork from '../components/Artwork.vue'

export default {
  data() {
        return {
            punkId: null,
            punkIdInput: null,
            maxPunkId: 9999,
            showBanner: true,
            error: null
        }
    },
    props: {
        frameId: String
    },
    components: {
        Artwork
    },
    methods : {
        nextPunkId: function () {
            let tempId = this.punkId ? parseInt(this.punkId) : 0
            tempId = tempId + 1
            if (tempId > 9999) tempId = 9999
            this.punkId = tempId.toString().padStart(4, '0')
            this.punkIdInput = this.punkId
        },
        previousPunkId: function () {
            let tempId = this.punkId ? parseInt(this.punkId) : 0
            tempId = tempId - 1
            if (tempId < 0) tempId = 0
            this.punkId = tempId.toString().padStart(4, '0')
            this.punkIdInput = this.punkId
        },
        setPunkIdFromInput: function () {
            this.error = null
            const exactlyFourDigits = new RegExp("[0-9]{4}$")
            if (exactlyFourDigits.test(this.punkIdInput)) {
                this.punkId = this.punkIdInput.toString()
            }
            else {
                this.error = "The punk ID should be exactly 4 digits, e.g. 0023"
            }
        }
    },

}

</script>

<style>

</style>