'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Header } from '@/components/header'
import { FormField, SelectField, CheckboxField, TextAreaField } from '@/components/form-field'
import { sponsorFormSchema, type SponsorFormData } from '@/lib/schemas'
import { AlertCircle, CheckCircle } from 'lucide-react'

export default function SponsorRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SponsorFormData>({
    resolver: zodResolver(sponsorFormSchema),
    defaultValues: {
      sponsorshipBenefits: [],
    },
  })

  const benefitsArray = [
    'Booth Exhibition',
    'Logo on Website',
    'Branded Materials',
    'Speaking Opportunity',
    'VIP Networking Event',
    'Email Campaign Mention',
  ]

  const benefitsWatch = watch('sponsorshipBenefits')

  async function onSubmit(data: SponsorFormData) {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const response = await fetch('/api/registrations/sponsor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Registration failed')
      }

      setSubmitStatus('success')
      setTimeout(() => {
        window.location.href = '/'
      }, 2000)
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen py-12 sm:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">Sponsorship Application</h1>
            <p className="text-muted-foreground">
              Increase your brand visibility at DoExim Expo with premium sponsorship packages
            </p>
          </div>

          <div className="bg-card rounded-xl border border-border p-8">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-green-900">Application Successful!</p>
                  <p className="text-sm text-green-800">Redirecting you back to the homepage...</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-red-900">Application Error</p>
                  <p className="text-sm text-red-800">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  label="Company Name"
                  placeholder="Your company name"
                  {...register('companyName')}
                  error={errors.companyName?.message}
                  required
                />
                <SelectField
                  label="Sponsorship Level"
                  {...register('sponsorshipLevel')}
                  options={[
                    { value: 'gold', label: 'Gold - $25,000' },
                    { value: 'silver', label: 'Silver - $15,000' },
                    { value: 'bronze', label: 'Bronze - $5,000' },
                  ]}
                  error={errors.sponsorshipLevel?.message}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  label="Contact Person"
                  placeholder="Full name"
                  {...register('contactPerson')}
                  error={errors.contactPerson?.message}
                  required
                />
                <FormField
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  {...register('email')}
                  error={errors.email?.message}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  label="Phone"
                  type="tel"
                  placeholder="+1-800-000-0000"
                  {...register('phone')}
                  error={errors.phone?.message}
                  required
                />
                <SelectField
                  label="Country"
                  {...register('country')}
                  options={[
                    { value: 'US', label: 'United States' },
                    { value: 'UK', label: 'United Kingdom' },
                    { value: 'CN', label: 'China' },
                    { value: 'IN', label: 'India' },
                    { value: 'DE', label: 'Germany' },
                    { value: 'JP', label: 'Japan' },
                    { value: 'Other', label: 'Other Country' },
                  ]}
                  error={errors.country?.message}
                  required
                />
              </div>

              <FormField
                label="Company Website"
                type="url"
                placeholder="https://example.com"
                {...register('company_website')}
                error={errors.company_website?.message}
              />

              <TextAreaField
                label="Company Description"
                placeholder="Tell us about your company..."
                rows={4}
                {...register('companyDescription')}
                error={errors.companyDescription?.message}
                required
              />

              <div className="space-y-3">
                <label className="block text-sm font-medium text-foreground">
                  Sponsorship Benefits <span className="text-destructive">*</span>
                </label>
                <div className="space-y-2">
                  {benefitsArray.map((benefit) => (
                    <CheckboxField
                      key={benefit}
                      label={benefit}
                      checked={benefitsWatch?.includes(benefit)}
                      onChange={(e) => {
                        // Handled by react-hook-form
                      }}
                    />
                  ))}
                </div>
                {errors.sponsorshipBenefits && (
                  <p className="text-sm text-destructive">{errors.sponsorshipBenefits.message}</p>
                )}
              </div>

              <TextAreaField
                label="Additional Message"
                placeholder="Any special requests or additional information..."
                rows={4}
                {...register('message')}
                error={errors.message?.message}
              />

              <div className="pt-6 border-t border-border">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
