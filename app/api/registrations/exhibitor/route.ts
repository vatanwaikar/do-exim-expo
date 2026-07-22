import { NextRequest, NextResponse } from 'next/server'
import { exhibitorFormSchema } from '@/lib/schemas'
import { saveExhibitor } from '@/lib/storage'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the data
    const validatedData = exhibitorFormSchema.parse(body)
    
    // Save to storage
    await saveExhibitor(validatedData)
    
    return NextResponse.json(
      { success: true, message: 'Registration saved successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving exhibitor registration:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save registration' },
      { status: 400 }
    )
  }
}
