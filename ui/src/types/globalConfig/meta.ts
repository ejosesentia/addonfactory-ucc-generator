import { z } from 'zod';

export const meta = z.object({
    displayName: z.string(),
    name: z.string(),
    restRoot: z.string(),
    apiVersion: z.string().optional(),
    version: z.string(),
    schemaVersion: z.string().optional(),
    _uccVersion: z.string().optional(),
    hideUCCVersion: z.boolean().default(true).optional(),
    checkForUpdates: z.boolean().default(true).optional(),
    searchViewDefault: z.boolean().default(false).optional(),
    hideOpenAPI: z.boolean().default(true).optional(),
});

export type meta = z.infer<typeof meta>;
