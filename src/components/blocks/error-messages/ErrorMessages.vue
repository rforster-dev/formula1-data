<template>
  <div v-if="errorMessage[0]" class="container mx-auto mt-10">
    <div
      class="
        bg-red-100
        border border-red-400
        text-red-700
        px-4
        py-3
        rounded
        relative
      "
      role="alert"
    >
      <span class="block sm:inline">{{ errorMessage[0] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  // we only want to display *a* error message to the user instead of X amount
  name: "ErrorMessages",
  props: ["errorMessages"],
  data() {
    return {
      errorMessage: this.errorMessages,
    };
  },
};
</script>

