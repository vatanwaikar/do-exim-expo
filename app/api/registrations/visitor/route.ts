import { NextRequest, NextResponse } from 'next/server'
import { visitorFormSchema } from '@/lib/schemas'
import { saveVisitor } from '@/lib/storage'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the data
    const validatedData = visitorFormSchema.parse(body)
    
    // Save to storage
    await saveVisitor(validatedData)
    
    return NextResponse.json(
      { success: true, message: 'Registration saved successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving visitor registration:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save registration' },
      { status: 400 }
    )
  }
}
