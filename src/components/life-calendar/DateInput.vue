<template>
  <div class="flex flex-wrap space-x-2 mb-4 items-center justify-center">
    <label for="dob-month" class="mb-2 sm:mb-0">Date of Birth:</label>
    <select id="dob-month" v-model="month" @change="emitDate" class="p-1 border rounded mb-2 sm:mb-0">
      <option v-for="(name, index) in months" :key="index" :value="index">{{ name }}</option>
    </select>
    <input
      id="dob-day"
      type="number"
      v-model.number="day"
      placeholder="Day"
      min="1"
      max="31"
      @input="emitDate"
      class="p-1 border rounded w-16 mb-2 sm:mb-0"
    />
    <input
      id="dob-year"
      type="number"
      v-model.number="year"
      placeholder="Year"
      :min="minYear"
      :max="maxYear"
      @input="emitDate"
      class="p-1 border rounded w-20 mb-2 sm:mb-0"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['update:date']);

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const currentYear = new Date().getFullYear();
const minYear = currentYear - 100; // Allow up to 100 years ago
const maxYear = currentYear;

const month = ref<number | null>(null);
const day = ref<number | null>(null);
const year = ref<number | null>(null);

const emitDate = () => {
  if (month.value !== null && day.value !== null && year.value !== null) {
    // Basic validation (more robust validation could be added)
    if (day.value >= 1 && day.value <= 31 && year.value >= minYear && year.value <= maxYear) {
      // Check for valid day in month (simple check)
      const daysInMonth = new Date(year.value, month.value + 1, 0).getDate();
      if (day.value <= daysInMonth) {
         emit('update:date', new Date(year.value, month.value, day.value));
      } else {
         // Handle invalid day for month - maybe clear day or show error?
         // For now, just don't emit if invalid
      }
    } 
  }
};

// Optionally, load saved date from local storage or set a default
// For now, we'll leave it blank initially

</script>

<style scoped>
/* Add any specific styles if needed */
</style> 