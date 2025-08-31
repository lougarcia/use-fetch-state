declare module '#imports' {
  import type { Ref } from 'vue'

  export function useFetch<T = any>(
    url: string,
    opts?: Record<string, any>
  ): Promise<{
    data: Ref<T | null>
    error: Ref<any>
  }>
}
