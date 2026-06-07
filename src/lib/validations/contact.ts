import { z } from 'zod'

export const contactSchema = z.object({
  namn: z.string().min(2, 'Ange ditt namn'),
  telefon: z.string().min(7, 'Ange ett giltigt telefonnummer'),
  email: z.string().email('Ange en giltig e-postadress'),
  kommentar: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>
