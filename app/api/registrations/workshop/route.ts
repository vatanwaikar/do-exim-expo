import { NextRequest, NextResponse } from 'next/server'
import { workshopFormSchema } from '@/lib/schemas'
import { saveWorkshop } from '@/lib/storage'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the data
    const validatedData = workshopFormSchema.parse(body)
    
    // Save to storage
    await saveWorkshop(validatedData)
    
    return NextResponse.json(
      { success: true, message: 'Registration saved successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving workshop registration:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save registration' },
      { status: 400 }
    )
  }
}
