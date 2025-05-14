<template>
  <div class="concentric-circles-wrapper p-4 flex flex-col items-center min-h-screen justify-center">
    <div class="w-full flex justify-between items-center mb-4 px-4 md:px-0 md:max-w-3xl">
      <h1 class="text-2xl font-bold text-center">Concentric Circles of Experience</h1>
      <button 
        @click="toggleLabels"
        class="px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        :class="showLabels ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400'"
      >
        {{ showLabels ? 'Hide' : 'Show' }} Labels
      </button>
    </div>
    <svg 
      ref="svgRef" 
      :viewBox="viewBoxString" 
      width="90%" 
      class="border border-gray-300 rounded-lg max-w-6xl cursor-grab active:cursor-grabbing"
      @wheel.prevent="handleWheel"
    >
      <g :transform="`translate(${panState.x}, ${panState.y}) scale(1)`">
        <template v-for="circle in visibleCircles" :key="circle.id">
          <circle 
            :cx="0" 
            :cy="0" 
            :r="circle.radius" 
            fill="none" 
            :stroke="circle.id === focusedCircleId ? '#3B82F6' : circle.color" 
            :stroke-width="(circle.id === focusedCircleId ? 1.5 : 1) / currentScale"  
          />
          <text 
            v-if="getDynamicLabel(circle)"
            :x="0" 
            :y="-circle.radius - 5 / currentScale" 
            :font-size="10 / currentScale"
            text-anchor="middle"
            :fill="(circle.id === focusedCircleId && !showLabels) || (circle.id === focusedCircleId && showLabels) ? '#2563EB' : '#334155'"
            :font-weight="(circle.id === focusedCircleId && !showLabels) || (circle.id === focusedCircleId && showLabels) ? 'bold' : 'normal'"
          >
            {{ getDynamicLabel(circle) }}
          </text>
        </template>
      </g>
    </svg>
    <p class="text-center mt-4 text-gray-600">
      Interactive visualization of circles within circles, representing varying levels of experience and perspective. Check out my <a href="https://open.substack.com/pub/ffstrauf/p/bubble-biases?r=2fpxqa&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true" target="_blank">latest post</a> for more details.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Circle {
  id: number;
  radius: number;
  color: string;
  label?: string;
}

const svgRef = ref<SVGSVGElement | null>(null);

// --- Zoom State --- 
const zoomLevel = ref(1);
const minZoom = 0.05; // Adjusted minZoom for deeper zoom
const maxZoom = 20;   // Adjusted maxZoom for wider zoom
const zoomSensitivity = 0.1;

// --- ViewBox State (alternative to transform-based zoom/pan) ---
// Let's stick with transform for now as it might be simpler for basic zoom
const viewBox = ref({ x: -200, y: -200, width: 400, height: 400 });
const viewBoxString = computed(() => `${viewBox.value.x} ${viewBox.value.y} ${viewBox.value.width} ${viewBox.value.height}`);

// --- Pan State (Placeholder - not implemented yet) ---
const panState = ref({ x: 0, y: 0 });

// --- Circle Data ---
const allCircles = ref<Circle[]>([
  // Inner circles (visible when zoomed in)
  { id: 10, radius: 2, color: '#475569', label: 'AI Wizards' },
  { id: 11, radius: 5, color: '#475569', label: 'Me' },
  { id: 12, radius: 10, color: '#475569', label: 'Tech People' },
  { id: 13, radius: 20, color: '#475569', label: 'Everyone else' },
  
  // Mid-range circles (visible at default zoom)
  { id: 1, radius: 50, color: '#475569', label: '' },
  { id: 2, radius: 100, color: '#475569', label: '' },
  { id: 3, radius: 150, color: '#334155', label: '' },

  // Outer circles (visible when zoomed out)
  { id: 4, radius: 250, color: '#1e293b', label: 'Enterprise Architects' },
  { id: 5, radius: 400, color: '#0f172a', label: 'Architects' },
  { id: 6, radius: 600, color: '#020617', label: 'SAP Employees' },
  { id: 7, radius: 900, color: '#000000', label: 'Tech People' },
]);

// Calculate current scale based on viewBox for consistent stroke-width and font-size
const currentScale = computed(() => 400 / viewBox.value.width);

const showLabels = ref(true);
const toggleLabels = () => {
  showLabels.value = !showLabels.value;
};

const focusedCircleId = computed<number | null>(() => {
  if (!visibleCircles.value.length) {
    return null;
  }
  const targetRadius = viewBox.value.width * 0.3;
  let closestCircle = visibleCircles.value[0];
  let minDiff = Math.abs(closestCircle.radius - targetRadius);
  for (let i = 1; i < visibleCircles.value.length; i++) {
    const diff = Math.abs(visibleCircles.value[i].radius - targetRadius);
    if (diff < minDiff) {
      minDiff = diff;
      closestCircle = visibleCircles.value[i];
    }
  }
  return closestCircle.id;
});

const innerNeighborId = computed<number | null>(() => {
  if (!focusedCircleId.value || visibleCircles.value.length < 2) return null;
  const focusedIndex = visibleCircles.value.findIndex(c => c.id === focusedCircleId.value);
  if (focusedIndex === -1 || focusedIndex === 0) return null; // No inner neighbor if focused is not found or is the first
  return visibleCircles.value[focusedIndex - 1].id;
});

const outerNeighborId = computed<number | null>(() => {
  if (!focusedCircleId.value || visibleCircles.value.length < 2) return null;
  const focusedIndex = visibleCircles.value.findIndex(c => c.id === focusedCircleId.value);
  if (focusedIndex === -1 || focusedIndex === visibleCircles.value.length - 1) return null; // No outer neighbor if focused is not found or is the last
  return visibleCircles.value[focusedIndex + 1].id;
});

const getDynamicLabel = (circle: Circle): string | null => {
  if (showLabels.value) {
    return circle.label || null;
  }
  // When showLabels is false, provide contextual labels
  if (circle.id === focusedCircleId.value) return "Current Circle";
  if (circle.id === innerNeighborId.value) return "Circle Looking In";
  if (circle.id === outerNeighborId.value) return "Circle Looking Out";
  return null;
};

// --- Dynamic Circle Visibility ---
const visibleCircles = computed(() => {
  const viewWidth = viewBox.value.width;
  // Adjust these thresholds to control when circles appear/disappear
  const minRadiusRatio = 0.02; // Adjusted for potentially more circles visible
  const maxRadiusRatio = 0.85; // Adjusted

  const minVisibleRadius = viewWidth * minRadiusRatio;
  const maxVisibleRadius = viewWidth * maxRadiusRatio;

  return allCircles.value.filter(circle => 
    circle.radius > minVisibleRadius && circle.radius < maxVisibleRadius
  ).sort((a, b) => a.radius - b.radius); // Ensure circles are sorted for consistent focus
});

// --- Event Handlers ---
const handleWheel = (event: WheelEvent) => {
  if (!svgRef.value) return;

  const delta = -event.deltaY * zoomSensitivity * 0.1; 
  
  // Calculate new viewBox dimensions
  const currentWidth = viewBox.value.width;
  const currentHeight = viewBox.value.height;
  let newWidth = currentWidth / (1 + delta);
  let newHeight = currentHeight / (1 + delta);

  // Clamp zoom level (by clamping viewBox dimensions)
  const minDim = 400 / maxZoom; // Corresponds to maxZoom
  const maxDim = 400 / minZoom; // Corresponds to minZoom
  newWidth = Math.max(minDim, Math.min(maxDim, newWidth));
  newHeight = Math.max(minDim, Math.min(maxDim, newHeight));
  
  // Calculate change in dimensions
  const dw = newWidth - currentWidth;
  const dh = newHeight - currentHeight;

  // Adjust x, y to keep the center (0,0) fixed
  viewBox.value = {
    x: viewBox.value.x - dw / 2,
    y: viewBox.value.y - dh / 2,
    width: newWidth,
    height: newHeight,
  };
  
  zoomLevel.value = 400 / newWidth; // Update zoomLevel based on viewBox width
};

</script>

<style scoped>
.concentric-circles-wrapper {
  /* Basic styling */
}
svg {
  display: block;
  margin: auto;
  background-color: #f8fafc; /* Slightly adjusted background */
  overflow: hidden; /* Hide parts of circles outside the SVG boundary */
  aspect-ratio: 1 / 1; /* Make SVG a square */
  max-height: 85vh; /* Optionally, prevent it from becoming too tall on certain layouts */
}
</style> 