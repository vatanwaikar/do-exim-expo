import { NextRequest, NextResponse } from 'next/server'
import { sponsorFormSchema } from '@/lib/schemas'
import { saveSponsor } from '@/lib/storage'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the data
    const validatedData = sponsorFormSchema.parse(body)
    
    // Save to storage
    await saveSponsor(validatedData)
    
    return NextResponse.json(
      { success: true, message: 'Application saved successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error saving sponsor application:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save application' },
      { status: 400 }
    )
  }
}
