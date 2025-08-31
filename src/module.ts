import { defineNuxtModule, addImports, addTypeTemplate } from '@nuxt/kit'

export default defineNuxtModule({
    meta: {
        name: '@lougarcia/use-fetch-state',
        configKey: 'useFetchState'
    },
    setup(_, nuxt) {
        // Auto-import composable
        addImports({
        name: 'useFetchState',
        from: '@lougarcia/use-fetch-state'
        })

        // Add global type for auto-import in TS
        addTypeTemplate({
            filename: 'types/use-fetch-state.d.ts',
            getContents: () => `
                declare module '#imports' {
                export const useFetchState: typeof import('@lougarcia/use-fetch-state').useFetchState
                }
                export {}
            `
        })
    }
})
