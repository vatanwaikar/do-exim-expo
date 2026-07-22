'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormField, SelectField, CheckboxField, TextAreaField } from '@/components/form-field'
import { exhibitorFormSchema, type ExhibitorFormData } from '@/lib/schemas'
import { AlertCircle, CheckCircle } from 'lucide-react'

export default function ExhibitorRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ExhibitorFormData>({
    resolver: zodResolver(exhibitorFormSchema),
    defaultValues: {
      productCategories: [],
    },
  })

  const productCategories = [
    'Textiles',
    'Chemicals',
    'Electronics',
    'Agricultural Products',
    'Machinery',
    'Food & Beverages',
    'Other'
  ]

  const productCategoriesWatch = watch('productCategories')

  async function onSubmit(data: ExhibitorFormData) {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const response = await fetch('/api/registrations/exhibitor', {
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
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Registration</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-foreground mb-3 tracking-tight">Exhibitor Registration</h1>
          <p className="text-muted-foreground leading-relaxed">
            Showcase your products and connect with thousands of buyers at DoExim Expo
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
                  label="Company Name"
                  placeholder="Your company name"
                  {...register('companyName')}
                  error={errors.companyName?.message}
                  required
                />
                <FormField
                  label="Contact Person"
                  placeholder="Full name"
                  {...register('contactPerson')}
                  error={errors.contactPerson?.message}
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
                <SelectField
                  label="Industry"
                  {...register('industry')}
                  options={[
                    { value: 'textiles', label: 'Textiles' },
                    { value: 'chemicals', label: 'Chemicals' },
                    { value: 'electronics', label: 'Electronics' },
                    { value: 'machinery', label: 'Machinery' },
                    { value: 'food', label: 'Food & Beverages' },
                    { value: 'other', label: 'Other' },
                  ]}
                  error={errors.industry?.message}
                  required
                />
              </div>

              <SelectField
                label="Booth Size"
                {...register('boothSize')}
                options={[
                  { value: 'small', label: 'Small (3x3m) - $2,500' },
                  { value: 'medium', label: 'Medium (6x6m) - $5,000' },
                  { value: 'large', label: 'Large (9x9m) - $10,000' },
                ]}
                error={errors.boothSize?.message}
                required
              />

              <div className="space-y-3">
                <label className="block text-sm font-medium text-foreground">
                  Product Categories <span className="text-destructive">*</span>
                </label>
                <div className="space-y-2">
                  {productCategories.map((category) => (
                    <CheckboxField
                      key={category}
                      label={category}
                      checked={productCategoriesWatch?.includes(category)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          control._formValues.productCategories = [
                            ...(productCategoriesWatch || []),
                            category,
                          ]
                        } else {
                          control._formValues.productCategories = (productCategoriesWatch || []).filter(
                            (c) => c !== category
                          )
                        }
                      }}
                    />
                  ))}
                </div>
                {errors.productCategories && (
                  <p className="text-sm text-destructive">{errors.productCategories.message}</p>
                )}
              </div>

              <TextAreaField
                label="Additional Message"
                placeholder="Tell us more about your company or products..."
                rows={4}
                {...register('message')}
                error={errors.message?.message}
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
