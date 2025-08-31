import { defineNuxtModule, addImports, addTypeTemplate } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'

export default defineNuxtModule({
    meta: {
        name: '@lgarciawebdev/use-fetch-state',
        configKey: 'useFetchState'
    },
    defaults: {
        autoImport: false,
    },
    setup(_options: Record<string, unknown>, nuxt: Nuxt) {
        // Auto-import composable
        addImports({
            name: 'useFetchState',
            from: '@lgarciawebdev/use-fetch-state'
        })

        // Add global type for auto-import in TS
        addTypeTemplate({
            filename: 'types/use-fetch-state.d.ts',
            getContents: () => `
                declare module '#imports' {
                export const useFetchState: typeof import('@lgarciawebdev/use-fetch-state').useFetchState
                }
                export {}
            `
        })
    }
})
