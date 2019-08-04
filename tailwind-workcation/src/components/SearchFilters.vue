<template>
  <section class="bg-gray-800 xl:w-72">
    <div class="flex justify-between px-4 py-3 xl:hidden">
      <div class="relative w-full max-w-xs">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 fill-current text-gray-600"
          >
            <path
              d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
            ></path>
          </svg>
        </div>
        <input
          class="block bg-gray-900 w-full text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:bg-gray-200 focus:text-gray-900"
          type="text"
          placeholder="Search by keywords"
        />
      </div>
      <button
        @click="toggle"
        :class="{
          'bg-gray-600': isOpen,
          'bg-gray-700': !isOpen,
        }"
        type="button"
        class="ml-4 inline-flex hover:bg-gray-600 rounded-lg pl-3 pr-4 items-center focus:outline-none focus:shadow-outline"
      >
        <svg
          class="h-6 w-6 fill-current text-gray-500"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z"
          ></path>
        </svg>
        <span class="text-white font-medium ml-1">Filters</span>
      </button>
    </div>

    <!-- expanded filters -->
    <form
      :class="{ hidden: !isOpen, block: isOpen }"
      class="xl:flex xl:flex-col xl:justify-between xl:h-full"
    >
      <div class="lg:flex xl:block xl:overflow-y-auto">
        <!-- Dropdowns -->
        <div
          class="px-4 py-4 border-t border-gray-900 lg:w-1/3 xl:border-t-0 xl:w-full"
        >
          <div class="flex flex-wrap -mx-2">
            <!-- bed and bath -->
            <label class="block w-1/2 w-1/2 px-2 sm:w-1/4 lg:w-1/2">
              <span class="text-sm font-semibold text-gray-500">Bedrooms</span>
              <select
                class="mt-1 form-select block w-full shadow text-white focus:bg-gray-600"
                ><option>4</option></select
              >
            </label>
            <label class="block w-1/2 px-2 sm:w-1/4 lg:w-1/2">
              <span class="text-sm font-semibold text-gray-500">Bathrooms</span>
              <select
                class="mt-1 form-select block w-full shadow text-white focus:bg-gray-600"
                ><option>2</option></select
              >
            </label>

            <!-- price rannge -->
            <label class="mt-4 w-full px-2 sm:mt-0 sm:w-1/2 lg:mt-4 lg:w-full">
              <span class="text-sm font-semibold text-gray-500"
                >Price Range</span
              >
              <select
                class="mt-1 form-select block w-full shadow text-white focus:bg-gray-600"
                ><option>Up to $2,000 /wk</option></select
              >
            </label>
          </div>
        </div>

        <!-- Radios -->
        <div
          class="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l lg:border-gray-900 xl:w-full"
        >
          <span class="block text-sm font-semibold text-gray-500"
            >Property Type</span
          >
          <div class="sm:flex lg:block">
            <label class="mt-3 flex items-center sm:w-1/4 lg:w-full">
              <input
                class="form-radio flex-none bg-gray-900 focus:bg-gray-700"
                type="radio"
                name="propertyType"
                value="house"
              />
              <span class="ml-2 text-white">House</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 lg:w-full">
              <input
                class="form-radio flex-none bg-gray-900 focus:bg-gray-700"
                type="radio"
                name="propertyType"
                value="apartment"
              />
              <span class="ml-2 text-white">Apartment</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 lg:w-full">
              <input
                class="form-radio flex-none bg-gray-900 focus:bg-gray-700"
                type="radio"
                name="propertyType"
                value="loft"
              />
              <span class="ml-2 text-white">Loft</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 lg:w-full">
              <input
                class="form-radio flex-none bg-gray-900 focus:bg-gray-700"
                type="radio"
                name="propertyType"
                value="townhouse"
              />
              <span class="ml-2 text-white">Townhouse</span>
            </label>
          </div>
        </div>

        <!-- Checkboxes -->
        <div
          class="px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l lg:border-gray-900 xl:w-full"
        >
          <span class="block text-sm font-semibold text-gray-500"
            >Amenities</span
          >
          <div class="sm:flex sm:flex-wrap xl:block">
            <label class="mt-3 flex items-center sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                class="form-checkbox flex-none bg-gray-900 focus:bg-gray-700"
                type="checkbox"
                name="amenities[]"
                value="balcony"
              />
              <span class="ml-2 text-white">Balcony</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                class="form-checkbox flex-none bg-gray-900 focus:bg-gray-700"
                type="checkbox"
                name="amenities[]"
                value="pool"
                checked
              />
              <span class="ml-2 text-white">Pool</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                class="form-checkbox flex-none bg-gray-900 focus:bg-gray-700"
                type="checkbox"
                name="amenities[]"
                value="beach"
              />
              <span class="ml-2 text-white">Beach</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                class="form-checkbox flex-none bg-gray-900 focus:bg-gray-700"
                type="checkbox"
                name="amenities[]"
                value="pet friendly"
              />
              <span class="ml-2 text-white">Pet friendly</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                class="form-checkbox flex-none bg-gray-900 focus:bg-gray-700"
                type="checkbox"
                name="amenities[]"
                value="kid friendly"
              />
              <span class="ml-2 text-white">Kid friendly</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                class="form-checkbox flex-none bg-gray-900 focus:bg-gray-700"
                type="checkbox"
                name="amenities[]"
                value="parking"
              />
              <span class="ml-2 text-white">Parking</span>
            </label>
            <label class="mt-3 flex items-center sm:w-1/4 lg:w-1/2 xl:w-full">
              <input
                class="form-checkbox flex-none bg-gray-900 focus:bg-gray-700"
                type="checkbox"
                name="amenities[]"
                value="air conditioning"
              />
              <span class="ml-2 text-white">Air conditioning</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Button -->
      <div class="bg-gray-900 px-4 py-4 sm:text-right">
        <button
          class="block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg xl:block xl:w-full"
          type="submit"
        >
          Update results
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
