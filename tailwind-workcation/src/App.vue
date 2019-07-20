<template>
  <div class="bg-gray-300">
    <!-- Above the fold - splash screen -->
  <div class="flex bg-green-100">
    <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
      <div class="xl:max-w-lg xl:ml-auto">
        <img class="h-10" src="/img/logo.svg" alt="logo">
        <img class="mt-4 rounded-lg shadow-xl sm:mt-8 sm:h-72 sm:w-full sm:object-cover sm:object-center lg:hidden"
          src="/img/demo.jpg" alt="img">
        <h1 class="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:text-4xl sm:mt-8 lg:mt-4 lg:text-3xl xl:text-4xl">
          You can work from anywhere.
          <br class="hidden md:block">
          <span class="text-brand-blue">Take advantage of it.</span>
        </h1>
        <p class="mt-2 text-gray-600 sm:text-xl sm:mt-4">
          Workcation helps you find work-friendly, rentanls in beautiful locations so you can enjoy some nice weather
          even when you are not on vacation.
        </p>
        <div class="mt-4 sm:mt-6">
          <a class="btn btn-primary sm:text-base shadow-lg" href="#">Book your escape</a>
          <a class="btn btn-secondary ml-2" href="#">Learn more</a>
        </div>
      </div>
    </div>

    <div class="hidden lg:block lg:w-1/2 lg:relative">
      <img class="absolute inset-0 h-full w-full object-center object-cover" src="/img/demo.jpg" alt="img">
    </div>
  </div>

  <!-- Cards list -->
  <div>
    <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <h2 class="text-xl text-gray-600">Popular destinations</h2>
      <p class="text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>

      <div class="flex flex-wrap -mx-4">
        <div class="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3" v-for="destination in popularDestinations" :key="destination.city">
          <DestinationCard :destination="destination"/>
        </div>
      </div>


    </div>
  </div>

  </div>
</template>

<script>
import DestinationCard from './components/DestinationCard.vue'

export default {
  name: 'app',
  components: {
    DestinationCard
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
      ]
    }
  }
}
</script>

