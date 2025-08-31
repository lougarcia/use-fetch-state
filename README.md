## Usage

### Installation
```
npm install @louanthony/use-fetch-state
```

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

### Or if using NuxtUI
```
<script setup lang="ts">
const { actionFn, data, status, error } = useFetchState('/api/modules', {
    method: 'POST',
    body: { foo: 'bar' }
})

watch(status, () => {
    if(status.value == 'success') {
        toast.add({
            title: 'Success',
            description: 'The form has been submitted.',
            color: 'success'
        })
    }
    if(status.value == 'error') {
        ... do something with the error object from the useFetchState hook
    }
})

/* Front-end error handling */
async function onError(event: FormErrorEvent) {
    console.log("ERROR", event?.errors)
}

</script>
<template>
    <UForm :schema="schema" :state="state" @submit="actionFn" @error="onError">
    ...
    </UForm>
</template>
```

#### Contributions are more than welcome!