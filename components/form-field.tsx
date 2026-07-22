import { InputHTMLAttributes } from 'react'

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  helperText?: string
}

export function FormField({
  label,
  error,
  helperText,
  className = '',
  ...props
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-foreground">
        {label}
        {props.required && <span className="text-destructive ml-1">*</span>}
      </label>
      <input
        {...props}
        className={`w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all ${
          error ? 'border-destructive focus:ring-destructive' : ''
        } ${className}`}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
      {helperText && !error && <p className="text-xs text-muted-foreground">{helperText}</p>}
    </div>
  )
}

interface SelectFieldProps extends InputHTMLAttributes<HTMLSelectElement> {
  label: string
  options: { value: string; label: string }[]
  error?: string
  helperText?: string
}

export function SelectField({
  label,
  options,
  error,
  helperText,
  className = '',
  ...props
}: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-foreground">
        {label}
        {props.required && <span className="text-destructive ml-1">*</span>}
      </label>
      <select
        {...props}
        className={`w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all ${
          error ? 'border-destructive focus:ring-destructive' : ''
        } ${className}`}
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-destructive">{error}</p>}
      {helperText && !error && <p className="text-xs text-muted-foreground">{helperText}</p>}
    </div>
  )
}

interface CheckboxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export function CheckboxField({
  label,
  error,
  className = '',
  ...props
}: CheckboxFieldProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          {...props}
          className={`w-4 h-4 rounded border-border text-secondary focus:ring-2 focus:ring-secondary cursor-pointer ${className}`}
        />
        <span className="text-sm font-medium text-foreground">{label}</span>
      </label>
      {error && <p className="text-sm text-destructive ml-7">{error}</p>}
    </div>
  )
}

interface TextAreaFieldProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  helperText?: string
}

export function TextAreaField({
  label,
  error,
  helperText,
  className = '',
  ...props
}: TextAreaFieldProps & { rows?: number }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-foreground">
        {label}
        {props.required && <span className="text-destructive ml-1">*</span>}
      </label>
      <textarea
        {...(props as any)}
        className={`w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none ${
          error ? 'border-destructive focus:ring-destructive' : ''
        } ${className}`}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
      {helperText && !error && <p className="text-xs text-muted-foreground">{helperText}</p>}
    </div>
  )
}
