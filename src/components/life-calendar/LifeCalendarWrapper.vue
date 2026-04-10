<script setup lang="ts">
// Moved from App.vue
import { ref, computed, onMounted, onUnmounted } from 'vue';
import LifeGrid from './LifeGrid.vue'; // Adjusted import path
import DateInput from './DateInput.vue'; // Adjusted import path
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { DisplayMode } from '../../types'; // Adjusted import path

const dateOfBirth = ref<Date | null>(null);
const showRetirement = ref(false);
const retirementAge = ref<number>(67);
const runwayYears = ref<number | null>(null);
const timeOffStartAge = ref<number | null>(null);
const timeOffDurationYears = ref<number | null>(null);

// --- Screen Size Detection ---
const isMobile = ref(false);
let mediaQueryList: MediaQueryList | null = null;

const checkScreenSize = () => {
  if (mediaQueryList) {
    isMobile.value = mediaQueryList.matches;
  }
};

onMounted(() => {
  mediaQueryList = window.matchMedia('(max-width: 767px)');
  checkScreenSize(); 
  mediaQueryList.addEventListener('change', checkScreenSize);
});

onUnmounted(() => {
  mediaQueryList?.removeEventListener('change', checkScreenSize);
});

const displayMode = computed<DisplayMode>(() => {
  return isMobile.value ? 'months' : 'weeks';
});
// --- End Screen Size Detection ---

const handleDateUpdate = (newDate: Date) => {
  dateOfBirth.value = newDate;
};

</script>

<template>
  <!-- Renamed from MainView.vue -->
  <div class="flex flex-col items-center w-full bg-white p-4 sm:p-6 rounded-lg shadow-md">
    <h1 class="text-xl sm:text-2xl font-bold mb-6 text-gray-800">Your Life in {{ displayMode === 'weeks' ? 'Weeks' : 'Months' }}</h1>
    <div class="flex flex-col items-center w-full mb-6 space-y-4">
      <DateInput @update:date="handleDateUpdate" />
      <div class="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
        <div class="flex items-center space-x-2">
          <Checkbox id="showRetirement" v-model:checked="showRetirement" />
          <Label for="showRetirement" class="text-sm text-gray-700">Show Retirement</Label>
        </div>
        <div class="flex items-center space-x-2">
          <Label for="runwayYears" class="text-sm text-gray-700">Runway (Years):</Label>
          <Input type="number" id="runwayYears" v-model.number="runwayYears" min="0" class="w-16 text-sm"/>
        </div>
         <div class="flex items-center space-x-2">
          <Label for="timeOffStart" class="text-sm text-gray-700">Time Off Start Age:</Label>
          <Input type="number" id="timeOffStart" v-model.number="timeOffStartAge" min="0" :max="90 - (timeOffDurationYears || 0)" class="w-16 text-sm"/>
        </div>
         <div class="flex items-center space-x-2">
          <Label for="timeOffDuration" class="text-sm text-gray-700">Time Off Duration (Years):</Label>
          <Input type="number" id="timeOffDuration" v-model.number="timeOffDurationYears" min="0" :max="90 - (timeOffStartAge || 0)" class="w-16 text-sm"/>
        </div>
      </div>
    </div>

    <div class="w-full max-w-screen-lg mx-auto overflow-x-auto">
      <LifeGrid
        :date-of-birth="dateOfBirth"
        :show-retirement="showRetirement"
        :retirement-age="retirementAge"
        :runway-years="runwayYears"
        :time-off-start-age="timeOffStartAge"
        :time-off-duration-years="timeOffDurationYears"
        :display-mode="displayMode"
      />
    </div>

    <!-- Legend -->
    <div class="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-6 text-xs text-gray-700">
      <div class="flex items-center"><span class="w-3 h-3 bg-gray-800 inline-block mr-1 rounded-sm border border-gray-400"></span> Elapsed</div>
      <div class="flex items-center"><span class="w-3 h-3 bg-amber-400 inline-block mr-1 rounded-sm border border-gray-400"></span> Time Off / Retirement</div>
      <div class="flex items-center"><span class="w-3 h-3 bg-gray-400 inline-block mr-1 rounded-sm border border-gray-400"></span>Runway</div>
      <div class="flex items-center"><span class="w-3 h-3 bg-white inline-block mr-1 rounded-sm border border-gray-400"></span> Future</div>
    </div>
  </div>
</template>

<style scoped>
/* Add component-specific styles if needed */
</style>
