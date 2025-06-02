<template>
  <div class="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
    <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">
      Life Balance Visualizer
    </h1>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Controls -->
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-6 text-gray-700">Adjust Your Life Parameters</h2>
        
        <div class="space-y-8">
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-2">
              Future Striving vs Present Focus
            </label>
            <div class="flex justify-between text-xs text-gray-500 mb-1">
              <span>Live for today</span>
              <span>Build for tomorrow</span>
            </div>
            <input
              type="range"
              v-model="values.futureStriving"
              min="0"
              max="10"
              step="1"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div class="text-center text-sm text-gray-600 mt-1">
              {{ values.futureStriving }}/10
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-600 mb-2">
              Present Life Enjoyment
            </label>
            <div class="flex justify-between text-xs text-gray-500 mb-1">
              <span>Stressed, unfulfilled</span>
              <span>Happy, content daily</span>
            </div>
            <input
              type="range"
              v-model="values.presentEnjoyment"
              min="0"
              max="10"
              step="1"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div class="text-center text-sm text-gray-600 mt-1">
              {{ values.presentEnjoyment }}/10
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-600 mb-2">
              Work Intensity
            </label>
            <div class="flex justify-between text-xs text-gray-500 mb-1">
              <span>Minimal work</span>
              <span>High stress/hours</span>
            </div>
            <input
              type="range"
              v-model="values.workIntensity"
              min="0"
              max="10"
              step="1"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div class="text-center text-sm text-gray-600 mt-1">
              {{ values.workIntensity }}/10
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-600 mb-2">
              Financial Security Buffer
            </label>
            <div class="flex justify-between text-xs text-gray-500 mb-1">
              <span>Living paycheck to paycheck</span>
              <span>Strong emergency fund</span>
            </div>
            <input
              type="range"
              v-model="values.securityBuffer"
              min="0"
              max="10"
              step="1"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div class="text-center text-sm text-gray-600 mt-1">
              {{ values.securityBuffer }}/10
            </div>
          </div>
        </div>
      </div>

      <!-- Visualization -->
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-6 text-gray-700">Your Balance</h2>
        
        <!-- Balance Meter -->
        <div class="mb-8">
          <div class="flex justify-between text-sm text-gray-600 mb-2">
            <span>🎣 Fisherman</span>
            <span>⚖️ Balanced</span>
            <span>💼 Businessman</span>
          </div>
          
          <div class="relative w-full h-8 bg-gradient-to-r from-blue-200 via-green-200 to-red-200 rounded-full">
            <div 
              :class="`absolute top-0 h-8 w-4 ${zoneColor} rounded-full border-2 border-white shadow-lg transition-all duration-500`"
              :style="{ 
                left: `${Math.max(2, Math.min(98, ((overallBalance + 100) / 200) * 100))}%`,
                transform: 'translateX(-50%)'
              }"
            />
          </div>
          
          <div class="text-center mt-2 text-lg font-semibold">
            Balance Score: {{ Math.round(overallBalance) }}
          </div>
        </div>

        <!-- Zone Description -->
        <div :class="`p-4 rounded-lg border ${zoneStyles.bgColor} ${zoneStyles.borderColor}`">
          <h3 class="font-bold text-lg mb-2">{{ zone.title }}</h3>
          <p class="text-gray-700 mb-3">{{ zone.description }}</p>
          <div>
            <h4 class="font-semibold text-sm mb-1">Watch out for:</h4>
            <ul class="text-sm text-gray-600">
              <li v-for="(risk, index) in zone.risks" :key="index" class="mb-1">• {{ risk }}</li>
            </ul>
          </div>
        </div>

        <!-- Life Phase Considerations -->
        <div class="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 class="font-semibold mb-2">💡 Remember:</h4>
          <p class="text-sm text-gray-600">
            Balance isn't static - it changes with life phases. Young professionals might lean businessman, 
            parents of young children might prioritize fisherman qualities, and those nearing retirement 
            might find a different sweet spot entirely.
          </p>
        </div>

        <!-- Quick Stats -->
        <div class="mt-6 grid grid-cols-2 gap-4">
          <div class="bg-blue-50 p-3 rounded">
            <div class="text-sm text-blue-600 font-medium">Fisherman Qualities</div>
            <div class="text-xl font-bold text-blue-800">
              {{ Math.max(0, Math.round((100 - overallBalance) / 2)) }}%
            </div>
          </div>
          <div class="bg-red-50 p-3 rounded">
            <div class="text-sm text-red-600 font-medium">Businessman Qualities</div>
            <div class="text-xl font-bold text-red-800">
              {{ Math.max(0, Math.round((100 + overallBalance) / 2)) }}%
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Items -->
    <div class="mt-8 bg-white rounded-lg shadow-lg p-6">
      <h3 class="text-xl font-semibold mb-4 text-gray-700">Rebalancing Suggestions</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <template v-if="balanceZone === 'businessman'">
          <div class="p-4 bg-yellow-50 rounded border-l-4 border-yellow-400">
            <h4 class="font-semibold text-yellow-800">Reduce Stress</h4>
            <p class="text-sm text-yellow-700">Consider delegating, saying no to commitments, or taking short breaks throughout the day.</p>
          </div>
          <div class="p-4 bg-yellow-50 rounded border-l-4 border-yellow-400">
            <h4 class="font-semibold text-yellow-800">Invest in Relationships</h4>
            <p class="text-sm text-yellow-700">Schedule regular family time and stick to it like an important meeting.</p>
          </div>
          <div class="p-4 bg-yellow-50 rounded border-l-4 border-yellow-400">
            <h4 class="font-semibold text-yellow-800">Present Moment</h4>
            <p class="text-sm text-yellow-700">Take some "retirement time" now - what small pleasures can you enjoy today?</p>
          </div>
        </template>
        
        <template v-if="balanceZone === 'fisherman'">
          <div class="p-4 bg-orange-50 rounded border-l-4 border-orange-400">
            <h4 class="font-semibold text-orange-800">Build Security</h4>
            <p class="text-sm text-orange-700">Start with a small emergency fund - even $500 can make a difference.</p>
          </div>
          <div class="p-4 bg-orange-50 rounded border-l-4 border-orange-400">
            <h4 class="font-semibold text-orange-800">Future Planning</h4>
            <p class="text-sm text-orange-700">Consider what "future you" needs and make small steps toward those goals.</p>
          </div>
          <div class="p-4 bg-orange-50 rounded border-l-4 border-orange-400">
            <h4 class="font-semibold text-orange-800">Skill Investment</h4>
            <p class="text-sm text-orange-700">Dedicate some time to maintaining or developing marketable skills.</p>
          </div>
        </template>
        
        <template v-if="balanceZone === 'balanced'">
          <div class="p-4 bg-green-50 rounded border-l-4 border-green-400">
            <h4 class="font-semibold text-green-800">Stay Aware</h4>
            <p class="text-sm text-green-700">Regularly check in with yourself - balance needs adjust with life changes.</p>
          </div>
          <div class="p-4 bg-green-50 rounded border-l-4 border-green-400">
            <h4 class="font-semibold text-green-800">Life Phases</h4>
            <p class="text-sm text-green-700">Remember that different life phases may require different balances.</p>
          </div>
          <div class="p-4 bg-green-50 rounded border-l-4 border-green-400">
            <h4 class="font-semibold text-green-800">Fine-tune</h4>
            <p class="text-sm text-green-700">Look for small optimizations rather than major overhauls.</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const values = ref({
  futureStriving: 5,
  presentEnjoyment: 5,
  workIntensity: 5,
  securityBuffer: 5
});

const overallBalance = ref(0);
const balanceZone = ref('balanced');

const updateBalance = () => {
  // More balanced calculation that considers the interplay between all factors
  
  // Future orientation (positive = businessman tendency)
  const futureOrientation = (values.value.futureStriving - 5) * 12;
  
  // Present enjoyment (positive = fisherman tendency)
  const presentFocus = (values.value.presentEnjoyment - 5) * 12;
  
  // Work intensity - extreme values push toward businessman, moderate values are neutral
  const workStress = values.value.workIntensity > 7 ? 
    (values.value.workIntensity - 7) * 15 : // High stress = businessman
    values.value.workIntensity < 3 ? 
    (3 - values.value.workIntensity) * -8 : 0; // Very low work = slight fisherman
  
  // Financial security - having security is good, but obsessing over it is businessman-like
  const securityObsession = values.value.securityBuffer > 7 ? 
    (values.value.securityBuffer - 7) * 8 : // Excessive security focus = businessman
    values.value.securityBuffer < 3 ? 
    (3 - values.value.securityBuffer) * -12 : 0; // No security = fisherman risk
  
  // Combine factors - balance future vs present, add stress and security concerns
  const balance = futureOrientation - presentFocus + workStress + securityObsession;
  overallBalance.value = Math.max(-100, Math.min(100, balance));

  // More nuanced zone determination
  if (balance < -20) balanceZone.value = 'fisherman';
  else if (balance > 20) balanceZone.value = 'businessman';
  else balanceZone.value = 'balanced';
};

// Watch for changes in values and update balance
watch(values, updateBalance, { deep: true, immediate: true });

const zoneColor = computed(() => {
  if (balanceZone.value === 'fisherman') return 'bg-blue-500';
  if (balanceZone.value === 'businessman') return 'bg-red-500';
  return 'bg-green-500';
});

const zoneStyles = computed(() => {
  if (balanceZone.value === 'fisherman') {
    return { bgColor: 'bg-blue-50', borderColor: 'border-blue-200' };
  }
  if (balanceZone.value === 'businessman') {
    return { bgColor: 'bg-red-50', borderColor: 'border-red-200' };
  }
  return { bgColor: 'bg-green-50', borderColor: 'border-green-200' };
});

const zone = computed(() => {
  if (balanceZone.value === 'fisherman') {
    return {
      title: "🎣 Fisherman Zone",
      description: "Living in the moment, but potentially neglecting future security",
      risks: ["Financial vulnerability", "Lack of emergency preparedness", "Potential regret in later years"]
    };
  }
  if (balanceZone.value === 'businessman') {
    return {
      title: "💼 Businessman Zone", 
      description: "Building for the future, but potentially sacrificing present happiness",
      risks: ["Chronic stress", "Relationship strain", "Missing life's precious moments"]
    };
  }
  return {
    title: "⚖️ Balanced Zone",
    description: "Good balance between present enjoyment and future security",
    risks: ["Maintain awareness as life phases change"]
  };
});
</script>

<style scoped>
.slider::-webkit-slider-thumb {
  appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
  border: none;
}
</style>
