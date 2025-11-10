import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Plan } from '../data/plans';
import { plans } from '../data/plans';

export const usePlanStore = defineStore('plan', () => {
  const selectedPlanId = ref<Plan['id']>('plus');

  const allPlans = ref<Plan[]>(plans);

  const selectedPlan = computed(() =>
    allPlans.value.find((plan) => plan.id === selectedPlanId.value) ?? allPlans.value[0]
  );

  function selectPlan(id: Plan['id']) {
    selectedPlanId.value = id;
  }

  return {
    plans: allPlans,
    selectedPlanId,
    selectedPlan,
    selectPlan
  };
});
