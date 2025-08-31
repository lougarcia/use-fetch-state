import { ref } from 'vue'
import { useFetch, type UseFetchOptions } from '#app'

export function useFetchState<T>(
  url: string,
  params?: UseFetchOptions<T>
) {
    const data = ref<T | null>(null)
    const error = ref<unknown>(null)
    const status = ref<'idle' | 'pending' | 'success' | 'error'>('idle')

    async function actionFn(event?: Event) {
        if (event?.preventDefault) event.preventDefault()
        status.value = 'pending'
        error.value = null

        try {
            const { data: fetchedData, error: fetchError } = await useFetch(url, {
                ...params
        })

        if (fetchError.value) {
            status.value = 'error'
            error.value = fetchError.value
        } else {
            status.value = 'success'
            data.value = fetchedData.value as T
        }
        } catch (err) {
            status.value = 'error'
            error.value = err
        }
    }

    function clear() {
        data.value = null
        error.value = null
        status.value = 'idle'
    }

    async function refresh() {
        return actionFn()
    }

    return {
        data,
        error,
        status,
        actionFn,
        refresh,
        clear
    }
}
