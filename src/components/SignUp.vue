<template>
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="px-6 py-6 bg-blue-100 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            <div class="xl:w-0 xl:flex-1">
                <h2 class="font-family-pixelated text-2xl font-extrabold tracking-tight text-blue-500 sm:text-3xl">
                <span class="text-black">Know</span><span class="ml-2">first</span>
                </h2>
                <p class="mt-3 max-w-3xl text-lg leading-6 text-black">
                Get notifications about secret drops and hidden NFTs. 
                </p>
            </div>
            <div class="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                <form class="sm:flex" @submit.prevent="submitForm">
                    <label for="email" class="sr-only">Email address</label>
                    <input id="email" v-model="email" name="email" type="email" autocomplete="email" required class="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white rounded-md" placeholder="Enter your email">
                    <button type="submit" :disabled="loading" class="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-black hover:bg-blue-400 disabled:bg-blue-200 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                        <span class="spinner mr-2" v-if="loading"></span> Notify me
                    </button>
                </form>
                <p class="mt-3 text-black text-left font-bold" v-if="message">
                    {{message}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
const FORMSPARK_ACTION_URL = "https://submit-form.com/F7B1hbDi"

export default {
    data() {
        return {
            email: null,
            message: null,
            loading: false
        }
    },
    methods: {
        async submitForm () {
            this.loading = true
            await this.$recaptchaLoaded()
            const token = await this.$recaptcha('subscribe')
            if (!token) return ""

            await fetch(FORMSPARK_ACTION_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    email: this.email,
                }),
            }).then(function(response) {
                if (!response.ok) {
                    this.message = "Sorry, we could not sign you up"
                }
                else {
                    this.message = "Thanks for signing up."
                }
            }.bind(this))
            .catch(function() {
                this.message = "Sorry, we could not sign you up"
            }.bind(this))
            .finally(function() {
                this.loading = false
            }.bind(this))
        }
    }
}

</script>