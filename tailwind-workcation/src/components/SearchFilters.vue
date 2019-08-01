<template>
  <section class="bg-gray-800">
    <div class="flex justify-between px-4 py-3 ">
      <div class="relative">
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
          class="bg-gray-900 w-full text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:bg-gray-200 focus:text-gray-900"
          type="text"
          placeholder="Search by keywords"
        />
      </div>
      <button
        class="inline-flex bg-gray-700 rounded-lg shadow pl-3 pr-4 ml-4 items-center hover:bg-gray-600 focus:outline-none focus:shadow-outline"
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
    <form>
      <!-- /start/ top level div -->

      <fieldset>
        <!-- bed and bath -->
        <div>
          <label>
            <span>Bedrooms</span>
            <select class="form-select"
              ><option>4</option></select
            >
          </label>
          <label>
            <span>Bathrooms</span>
            <select class="form-select"
              ><option>2</option></select
            >
          </label>
        </div>

        <!-- price rannge -->
        <div>
          <label>
            <span>Price Range</span>
            <select class="form-select"
              ><option>Up to $2,000 /wk</option></select
            >
          </label>
        </div>
      </fieldset>

      <fieldset>
        <legend>Property Type</legend>
        <label>
          House
          <input type="radio" name="propertyType" value="house" />
        </label>
        <label>
          Apartment
          <input type="radio" name="propertyType" value="apartment" />
        </label>
        <label>
          Loft
          <input type="radio" name="propertyType" value="loft" />
        </label>
        <label>
          Townhouse
          <input type="radio" name="propertyType" value="townhouse" />
        </label>
      </fieldset>

      <fieldset>
        <legend>Amenities</legend>
        <label>
          Balcony
          <input type="checkbox" name="amenities[]" value="balcony" />
        </label>
        <label>
          air conditioning
          <input type="checkbox" name="amenities[]" value="air conditioning" />
        </label>
        <label>
          Pool
          <input type="checkbox" name="amenities[]" value="pool" checked />
        </label>
        <label>
          Beach
          <input type="checkbox" name="amenities[]" value="beach" />
        </label>
        <label>
          Pet friendly
          <input type="checkbox" name="amenities[]" value="pet friendly" />
        </label>
        <label>
          Kid friendly
          <input type="checkbox" name="amenities[]" value="kid friendly" />
        </label>
      </fieldset>

      <div>
        <button type="submit">Update results</button>
      </div>

      <!-- /end/   top level div -->
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
