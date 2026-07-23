import { z } from 'zod'

export const exhibitorFormSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  country: z.string().min(2, 'Country is required'),
  industry: z.string().min(2, 'Industry is required'),
  boothSize: z.enum(['small', 'medium', 'large'], {
    message: 'Please select a booth size'
  }),
  productCategories: z.array(z.string()).min(1, 'Select at least one product category'),
  message: z.string().optional(),
})

export const visitorFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  company: z.string().min(2, 'Company name is required'),
  position: z.string().min(2, 'Position is required'),
  country: z.string().min(2, 'Country is required'),
  industryInterests: z.array(z.string()).min(1, 'Select at least one industry interest'),
  visitingReason: z.enum(['sourcing', 'networking', 'business', 'learning'], {
    message: 'Please select a reason for visiting'
  }),
})

export const sponsorFormSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  sponsorshipLevel: z.enum(['gold', 'silver', 'bronze'], {
    message: 'Please select sponsorship level'
  }),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  country: z.string().min(2, 'Country is required'),
  company_website: z.string().url('Valid website URL required').optional().or(z.literal('')),
  companyDescription: z.string().min(10, 'Company description is required'),
  sponsorshipBenefits: z.array(z.string()).min(1, 'Select at least one benefit'),
  message: z.string().optional(),
})

export const workshopFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  company: z.string().min(2, 'Company name is required'),
  position: z.string().min(2, 'Position is required'),
  country: z.string().min(2, 'Country is required'),
  workshopChoices: z.array(z.string()).min(1, 'Select at least one workshop'),
  experience: z.enum(['beginner', 'intermediate', 'advanced'], {
    message: 'Please select experience level'
  }),
  specialRequests: z.string().optional(),
})

export type ExhibitorFormData = z.infer<typeof exhibitorFormSchema>
export type VisitorFormData = z.infer<typeof visitorFormSchema>
export type SponsorFormData = z.infer<typeof sponsorFormSchema>
export type WorkshopFormData = z.infer<typeof workshopFormSchema>
