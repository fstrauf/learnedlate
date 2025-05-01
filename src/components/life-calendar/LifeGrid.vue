<template>
  <div class="relative pt-10 pb-4">
    <!-- X-Axis Label -->
    <div class="absolute top-0 left-8 right-0 text-center text-sm font-medium text-gray-600 mb-1"
         :style="{ width: `calc(100% - ${axisOffset}px)` }">
      {{ timeUnitName }} of the Year
    </div>

    <!-- X-Axis Markers -->
    <div class="absolute top-6 left-8 right-0 flex text-xs text-gray-500"
         :style="{ width: `calc(100% - ${axisOffset}px)` }">
      <span v-for="marker in xAxisMarkers" :key="`marker-${marker}`" class="absolute text-center"
            :style="{ left: `calc(${(marker - 1) / itemsPerYear * 100}% + ${markerOffsetX}px)` }">
        {{ marker }}
      </span>
    </div>

    <!-- Main Content Area (Labels + Grid) -->
    <div class="flex items-start mt-2">

      <!-- Y-Axis Label Container -->
      <div class="flex items-center justify-center mr-1" style="writing-mode: vertical-rl; transform: rotate(180deg);">
        <span class="text-sm font-medium text-gray-600 whitespace-nowrap">Age</span>
      </div>

      <!-- Y-Axis Labels (Age) -->
      <div class="flex flex-col mr-2 space-y-[0.126rem] pt-1">
        <div v-for="yearLabel in yearLabels" :key="`label-${yearLabel}`"
             class="h-3 flex justify-end text-xs text-gray-500 pr-1" style="font-size: 0.6rem; min-width: 1.5rem;">
          {{ yearLabel }}
        </div>
      </div>

      <!-- Grid -->
      <div class="grid gap-0.5 border border-gray-300 rounded bg-gray-200 p-1 flex-grow" :class="gridColsClass">
        <div
          v-for="itemIndex in totalItems"
          :key="itemIndex"
          class="w-3 h-3 border border-gray-300 rounded-sm"
          :class="getItemClass(itemIndex)"
          :title="getItemTitle(itemIndex)"
        >
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';
import type { DisplayMode } from '../../types'; // Adjusted import path

// --- State Constants ---
const STATE_FUTURE = 'future';
const STATE_ELAPSED = 'elapsed';
const STATE_TIME_OFF = 'timeOff';
const STATE_RETIREMENT = 'retirement';
const STATE_RUNWAY = 'runway';

// --- Component Props ---
const props = defineProps<{ 
  dateOfBirth: Date | null;
  showRetirement: boolean;
  retirementAge: number;
  runwayYears: number | null;
  timeOffStartAge: number | null;
  timeOffDurationYears: number | null;
  displayMode: DisplayMode;
}>();

// --- Constants ---
const years = 90;

// --- Display Mode Dependent Calculations ---
const itemsPerYear = computed(() => props.displayMode === 'weeks' ? 52 : 12);
const totalItems = computed(() => years * itemsPerYear.value);
const timeUnitName = computed(() => props.displayMode === 'weeks' ? 'Week' : 'Month');

// --- Grid Styling ---
const gridColsClass = computed(() => {
  return props.displayMode === 'weeks' ? 'grid-cols-52' : 'grid-cols-12';
});

// --- Calculated Values for Labels ---
const yearLabels = computed(() => Array.from({ length: years }, (_, i) => i));

// Constants for styling and layout
const axisOffset = 24; 
const markerOffsetX = 4; 

// --- Base Calculations (using items) ---

const elapsedItems = computed(() => {
  if (!props.dateOfBirth) return 0;
  const now = new Date();
  const dob = new Date(props.dateOfBirth);
  const diffTime = now.getTime() - dob.getTime();
  if (diffTime < 0) return 0;

  let diffItems: number;
  if (props.displayMode === 'weeks') {
    diffItems = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
  } else { // months
    // Approximate month calculation
    const yearsDiff = now.getFullYear() - dob.getFullYear();
    const monthsDiff = now.getMonth() - dob.getMonth();
    diffItems = yearsDiff * 12 + monthsDiff;
    // Adjust if the current day is before the birth day in the current month
    if (now.getDate() < dob.getDate()) {
       diffItems--;
    }
     diffItems = Math.max(0, diffItems); // Ensure non-negative
  }

  return Math.min(diffItems, totalItems.value);
});

const timeOffStartItem = computed(() => {
  if (props.timeOffStartAge === null || props.timeOffStartAge < 0) return -1;
  // Ensure calculation aligns with how elapsedItems is calculated for months
  if (props.displayMode === 'months') {
      // Start of the month corresponding to the start age
      return props.timeOffStartAge * itemsPerYear.value;
  }
  // Weeks calculation (original + 1 indexed assumption seems off compared to elapsed)
  // Let's make it 0-indexed for consistency with elapsed calculation
  return props.timeOffStartAge * itemsPerYear.value;

});

const timeOffDurationItems = computed(() => {
  if (props.timeOffDurationYears === null || props.timeOffDurationYears <= 0) return 0;
  return props.timeOffDurationYears * itemsPerYear.value;
});

const timeOffEndItem = computed(() => {
  // Becomes exclusive end index for easier looping and consistency
  if (timeOffStartItem.value === -1 || timeOffDurationItems.value === 0) return -1;
   // Use 0-based indexing consistently: startItem + durationItems
  const endItem = timeOffStartItem.value + timeOffDurationItems.value;
  return Math.min(endItem, totalItems.value); // Cap at total items
});


const runwayDurationItems = computed(() => {
    if (props.runwayYears === null || props.runwayYears <= 0) return 0;
    return props.runwayYears * itemsPerYear.value;
});

// --- State Calculation for Each Item ---

const itemStates = computed(() => {
  const states: string[] = new Array(totalItems.value).fill(STATE_FUTURE); // Use 0-based index

  // --- Preliminary Calculations for Retirement Adjustment ---
  const elapItems = elapsedItems.value; // 0-based index of first future item
  const toStartItem = timeOffStartItem.value; // 0-based index
  const toEndItem = timeOffEndItem.value; // 0-based exclusive end index
  const toDurationItemsVal = timeOffDurationItems.value;
  const runDurationItemsVal = runwayDurationItems.value;

  // 1. Initial retirement boundary (0-based index)
  const initialRetireStartItem = props.showRetirement && props.retirementAge > 0 && props.retirementAge <= years
                                 ? (props.retirementAge * itemsPerYear.value)
                                 : totalItems.value; // Effectively disabled if retirement not shown or invalid

  // 2. Calculate potential runway items (using 0-based index)
  const potentialRunwayItems = new Set<number>();
  let runwayItemsCount = 0;
  if (runDurationItemsVal > 0) {
      // Start from the first non-elapsed item
      for (let i = elapItems; i < initialRetireStartItem; i++) {
          if (runwayItemsCount >= runDurationItemsVal) break;
          if (i < totalItems.value) { // Ensure within bounds
              potentialRunwayItems.add(i);
              runwayItemsCount++;
          }
      }
  }

  // 3. Calculate overlap (0-based indices)
  let overlapItems = 0;
  if (toStartItem !== -1 && toDurationItemsVal > 0) {
       // Iterate from start (inclusive) up to end (exclusive)
      for (let i = toStartItem; i < toEndItem; i++) {
          // Check if the item is within grid bounds, *after* elapsed time, and is a potential runway item
          if (i >= elapItems && i < totalItems.value && potentialRunwayItems.has(i)) {
              overlapItems++;
          }
      }
  }


  // 4. Calculate shortfall and effective retirement start item (0-based index)
  const shortfallItems = Math.max(0, toDurationItemsVal - overlapItems);
  const effectiveRetirementStartItem = props.showRetirement
                                       ? Math.min(initialRetireStartItem + shortfallItems, totalItems.value)
                                       : totalItems.value; // Disabled if not shown

  // --- Actual State Painting (Using 0-based index) ---
  // Order: Elapsed -> Retirement -> Runway -> TimeOff

  // 1. Mark Elapsed (Highest priority for past)
  // Items from 0 up to (but not including) elapItems are elapsed
  for (let i = 0; i < elapItems; i++) {
     if (i < totalItems.value) states[i] = STATE_ELAPSED;
  }

  // 2. Mark Retirement (using *effective* start item, 0-based)
  if (props.showRetirement) {
      // Start from the effective retirement item up to the end
      for (let i = effectiveRetirementStartItem; i < totalItems.value; i++) {
        // Only overwrite future state
        if (states[i] === STATE_FUTURE) states[i] = STATE_RETIREMENT;
      }
  }


  // 3. Mark Runway (fills gap between elapsed and *effective* retirement, up to duration)
  let runwayItemsPainted = 0;
  if (runDurationItemsVal > 0) {
      // Iterate from the first non-elapsed item up to the effective retirement start
      for (let i = elapItems; i < effectiveRetirementStartItem; i++) {
          if (runwayItemsPainted >= runDurationItemsVal) break;
          // Only paint if it's currently Future
          if (i < totalItems.value && states[i] === STATE_FUTURE) {
              states[i] = STATE_RUNWAY;
              runwayItemsPainted++;
          }
      }
  }


  // 4. Mark Time Off (Overwrite Future OR Runway in its specific period)
  if (toStartItem !== -1) {
    // Iterate from start (inclusive) up to end (exclusive)
    for (let i = toStartItem; i < toEndItem; i++) {
      // Allow time off to overwrite future/runway, but not retirement or elapsed
      if (i >= 0 && i < totalItems.value && states[i] !== STATE_ELAPSED && states[i] !== STATE_RETIREMENT) {
          states[i] = STATE_TIME_OFF;
      }
    }
  }


  return states; // Array of states for indices 0 to totalItems-1
});

// --- Styling Function ---

const getItemClass = (itemIndex: number): string => {
  // Adjust index for 0-based array access
  const state = itemStates.value[itemIndex - 1] || STATE_FUTURE; 
  switch (state) {
    case STATE_ELAPSED:
      return 'bg-blue-800';
    case STATE_TIME_OFF:
      return 'bg-green-400'; // Keep retirement and time off same color for now
    case STATE_RUNWAY:
      return 'bg-blue-400';
    case STATE_RETIREMENT:
      return 'bg-green-400'; // Keep retirement and time off same color for now
    case STATE_FUTURE:
    default:
      return 'bg-white';
  }
};

// --- Tooltip Function ---
const getItemTitle = (itemIndex: number): string => {
  const year = Math.floor((itemIndex - 1) / itemsPerYear.value);
  const itemNumberInYear = ((itemIndex - 1) % itemsPerYear.value) + 1;
  return `Year ${year}, ${timeUnitName.value} ${itemNumberInYear}`;
};


// --- Axis Markers ---
const xAxisMarkers = computed(() => {
  if (props.displayMode === 'weeks') {
    // Show markers for weeks 1, 5, 10, etc.
    return [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  } else { // months
    // Show markers for months 1, 3, 6, 9, 12
    return [1, 3, 6, 9, 12];
  }
});

</script>

<style scoped>
/* Keep grid-cols-* definition in JS via :class binding */
.grid > div {
  transition: background-color 0.1s ease-in-out;
}
</style> 