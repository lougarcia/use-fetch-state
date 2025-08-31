## Usage

### With Nuxt auto-imports
```
export default defineNuxtConfig({
    modules: ['@lougarcia/use-fetch-state']
})
```

### Inside components
```
<script setup lang="ts">
const { actionFn, data, status, error } = useFetchState('/api/modules', {
    method: 'POST',
    body: { foo: 'bar' }
})

async function onSubmit(event: Event) {
    await actionFn(event)
    if (status.value === 'success') {
        console.log('Success:', data.value)
    }
}
</script>
```