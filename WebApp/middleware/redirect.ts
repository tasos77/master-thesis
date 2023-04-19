import { getTokenState } from "../composables/useAuth";

export default defineNuxtRouteMiddleware((to, from) => {
  const token = getTokenState();
  if (token) {
    return navigateTo("/devices");
  }
  return true;
});