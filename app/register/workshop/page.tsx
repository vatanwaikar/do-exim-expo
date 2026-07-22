'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormField, SelectField, CheckboxField, TextAreaField } from '@/components/form-field'
import { workshopFormSchema, type WorkshopFormData } from '@/lib/schemas'
import { AlertCircle, CheckCircle } from 'lucide-react'

export default function WorkshopRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<WorkshopFormData>({
    resolver: zodResolver(workshopFormSchema),
    defaultValues: {
      workshopChoices: [],
    },
  })

  const workshopsArray = [
    'Import Export Basics',
    'International Payment Methods',
    'Customs & Compliance',
    'Digital Trade Solutions',
    'Logistics & Shipping',
    'Market Research & Analysis',
  ]

  const workshopsWatch = watch('workshopChoices')

  async function onSubmit(data: WorkshopFormData) {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const response = await fetch('/api/registrations/workshop', {
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
    <main className="bg-background min-h-screen pt-28 pb-16 sm:pt-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Learning</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-3 tracking-tight">Workshop Registration</h1>
          <p className="text-muted-foreground leading-relaxed">
            Learn from industry experts and enhance your import/export knowledge
          </p>
        </div>

        <div className="bg-card rounded-lg border border-border p-8 shadow-sm">
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
                <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-green-900">Registration Successful!</p>
                  <p className="text-sm text-green-800">Redirecting you back to the homepage...</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-red-900">Registration Error</p>
                  <p className="text-sm text-red-800">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  label="First Name"
                  placeholder="John"
                  {...register('firstName')}
                  error={errors.firstName?.message}
                  required
                />
                <FormField
                  label="Last Name"
                  placeholder="Doe"
                  {...register('lastName')}
                  error={errors.lastName?.message}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  label="Email"
                  type="email"
                  placeholder="your@email.com"
                  {...register('email')}
                  error={errors.email?.message}
                  required
                />
                <FormField
                  label="Phone"
                  type="tel"
                  placeholder="+1-800-000-0000"
                  {...register('phone')}
                  error={errors.phone?.message}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <FormField
                  label="Company"
                  placeholder="Your company name"
                  {...register('company')}
                  error={errors.company?.message}
                  required
                />
                <FormField
                  label="Position"
                  placeholder="Your job title"
                  {...register('position')}
                  error={errors.position?.message}
                  required
                />
              </div>

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

              <div className="space-y-3">
                <label className="block text-sm font-medium text-foreground">
                  Select Workshops <span className="text-destructive">*</span>
                </label>
                <div className="space-y-2">
                  {workshopsArray.map((workshop) => (
                    <CheckboxField
                      key={workshop}
                      label={workshop}
                      checked={workshopsWatch?.includes(workshop)}
                      onChange={(e) => {
                        // Handled by react-hook-form
                      }}
                    />
                  ))}
                </div>
                {errors.workshopChoices && (
                  <p className="text-sm text-destructive">{errors.workshopChoices.message}</p>
                )}
              </div>

              <SelectField
                label="Experience Level"
                {...register('experience')}
                options={[
                  { value: 'beginner', label: 'Beginner - New to import/export' },
                  { value: 'intermediate', label: 'Intermediate - Some experience' },
                  { value: 'advanced', label: 'Advanced - Experienced professional' },
                ]}
                error={errors.experience?.message}
                required
              />

              <TextAreaField
                label="Special Requests"
                placeholder="Any special requirements or topics you'd like to learn..."
                rows={4}
                {...register('specialRequests')}
                error={errors.specialRequests?.message}
              />

              <div className="pt-6 border-t border-border">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-sm hover:bg-accent/90 disabled:opacity-50 transition-colors"
                >
                  {isSubmitting ? 'Registering...' : 'Complete Registration'}
                </button>
              </div>
            </form>
          </div>
        </div>
    </main>
  )
}
