import { NextRequest, NextResponse } from 'next/server'
import { getAllRegistrations } from '@/lib/storage'
import * as XLSX from 'xlsx'

export async function GET(request: NextRequest) {
  try {
    const data = await getAllRegistrations()
    
    // Create a new workbook
    const workbook = XLSX.utils.book_new()
    
    // Add exhibitors sheet
    if (data.exhibitors.length > 0) {
      const exhibitorsSheet = XLSX.utils.json_to_sheet(data.exhibitors)
      XLSX.utils.book_append_sheet(workbook, exhibitorsSheet, 'Exhibitors')
    }
    
    // Add visitors sheet
    if (data.visitors.length > 0) {
      const visitorsSheet = XLSX.utils.json_to_sheet(data.visitors)
      XLSX.utils.book_append_sheet(workbook, visitorsSheet, 'Visitors')
    }
    
    // Add sponsors sheet
    if (data.sponsors.length > 0) {
      const sponsorsSheet = XLSX.utils.json_to_sheet(data.sponsors)
      XLSX.utils.book_append_sheet(workbook, sponsorsSheet, 'Sponsors')
    }
    
    // Add workshops sheet
    if (data.workshops.length > 0) {
      const workshopsSheet = XLSX.utils.json_to_sheet(data.workshops)
      XLSX.utils.book_append_sheet(workbook, workshopsSheet, 'Workshops')
    }
    
    // Create summary sheet
    const summary = [
      ['DoExim Expo - Registration Summary'],
      [''],
      ['Registration Type', 'Count'],
      ['Exhibitors', data.exhibitors.length],
      ['Visitors', data.visitors.length],
      ['Sponsors', data.sponsors.length],
      ['Workshops', data.workshops.length],
      ['Total Registrations', data.exhibitors.length + data.visitors.length + data.sponsors.length + data.workshops.length],
      [''],
      ['Export Date', new Date().toISOString()],
    ]
    
    const summarySheet = XLSX.utils.aoa_to_sheet(summary)
    XLSX.utils.book_append_sheet(workbook, summarySheet, 'Summary', 0)
    
    // Write the workbook to a buffer
    const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' })
    
    // Return the buffer as a file download
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Disposition': `attachment; filename="DoExim_Expo_Registrations_${new Date().toISOString().split('T')[0]}.xlsx"`,
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      },
    })
  } catch (error) {
    console.error('Error exporting data:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to export data' },
      { status: 500 }
    )
  }
}
