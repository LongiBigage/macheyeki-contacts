<template>
  <div class="bg-darker h-screen font-sans">
    <h1 class="text-lg font-bold underline text-primary p-4 text-center">
      <ion-icon name="skull-outline" class="animate-pulse text-tertiary pr-1"></ion-icon>
      Hello Contacts
      <ion-icon name="skull-outline" class="animate-pulse text-tertiary pl-1"></ion-icon>
    </h1>
    <component :is="layout">
      <slot />
    </component>
  </div>
</template>

<script>
import { markRaw, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'AppLayout',
  setup() {
    const layout = markRaw(AppLayoutDefault)
    const route = useRoute()
    watch(
      () => route.meta,
      async meta => {
        try {
          const component = await import(`@/layouts/${meta.layout}.vue`)
          layout.value = component?.default || AppLayoutDefault
        } catch (e) {
          layout.value = AppLayoutDefault
        }
      },
      { immediate: true }
    )
    return { layout }
  }
}
</script>
