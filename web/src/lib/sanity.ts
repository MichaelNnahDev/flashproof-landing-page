// web/src/lib/sanity.ts
import { createClient } from '@sanity/client'

const env = (import.meta as any).env

export const sanityClient = createClient({
    projectId: env?.PUBLIC_SANITY_PROJECT_ID || '',
    dataset: env?.PUBLIC_SANITY_DATASET || 'production',
    apiVersion: env?.PUBLIC_SANITY_API_VERSION || '2026-10-01',
    useCdn: false,
})