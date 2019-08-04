<template>
  <div class="bg-gray-100 antialiased lg:flex">
    <div
      class="bg-blue-100 px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:w-1/2 lg:max-w-full lg:mr-0 lg:px-12 lg:py-24"
    >
      <div class="xl:max-w-lg xl:ml-auto">
        <div>
          <img class="h-10 lg:h-12" src="/img/workcation-dark.svg" alt="logo" />
        </div>
        <div class="mt-6 h-56 sm:mt-8 lg:hidden">
          <img
            class="w-full h-full rounded-lg shadow-xl object-cover"
            src="/img/demo.jpg"
            alt=""
          />
        </div>

        <h1
          class="mt-6 text-2xl text-gray-900 font-bold leading-tight sm:mt-8 sm:text-3xl lg:text-4xl"
        >
          <span>You can work from anywhere.</span>
          <br class="hidden sm:block" />
          <span class="sm:hidden">&nbsp;</span>
          <span class="text-indigo-500">Take advantage of it.</span>
        </h1>

        <p class="mt-2  text-gray-600 text-md sm:mt-4 sm:text-xl">
          Workcation helps you find work-friendly, rentanls in beautiful
          locations so you can enjoy some nice weather even when you are not on
          vacation.
        </p>

        <div class="mt-4 sm:mt-6">
          <v-link
            class="inline-block px-5 py-3 text-sm tracking-wider font-semibold uppercase bg-indigo-500 text-white rounded-lg shadow-lg focus:outline-none sm:text-base hover:bg-indigo-400 focus:bg-indigo-400"
            href="/listings"
          >
            Book your escape
          </v-link>
        </div>
      </div>
    </div>

    <!-- lg full bleed image -->
    <div class="hidden lg:block lg:w-1/2">
      <div class="relative h-full">
        <img class="w-full h-full object-cover" src="/img/demo.jpg" alt="" />
        <svg
          class="absolute inset-y-0 left-0 h-full w-16"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="text-blue-100"
            fill="currentColor"
            points="0,0 0,100 100,0"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import VLink from '../components/VLink.vue'

export default {
  name: 'app',
  components: {
    VLink,
  },
  data() {
    return {
      popularDestinations: [
        {
          city: 'Toronto',
          avgPrice: 120,
          propertyCount: 26,
          imgUrl: '/img/demo.jpg',
        },
        {
          city: 'Malibu',
          avgPrice: 142,
          propertyCount: 67,
          imgUrl: '/img/demo.jpg',
        },
        {
          city: 'Chicago',
          avgPrice: 90,
          propertyCount: 7,
          imgUrl: '/img/demo.jpg',
        },
        {
          city: 'Seattle',
          avgPrice: 180,
          propertyCount: 35,
          imgUrl: '/img/demo.jpg',
        },
        {
          city: 'Colorado',
          avgPrice: 220,
          propertyCount: 4,
          imgUrl: '/img/demo.jpg',
        },
        {
          city: 'Miami',
          avgPrice: 115,
          propertyCount: 40,
          imgUrl: '/img/demo.jpg',
        },
      ],
    }
  },
}
</script>

<style src="../assets/css/tailwind.css"></style>
