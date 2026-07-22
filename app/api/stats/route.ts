import { NextResponse } from 'next/server'
import { getAllRegistrations } from '@/lib/storage'

export async function GET() {
  try {
    const data = await getAllRegistrations()
    
    const stats = {
      exhibitors: data.exhibitors.length,
      visitors: data.visitors.length,
      sponsors: data.sponsors.length,
      workshops: data.workshops.length,
      total: data.exhibitors.length + data.visitors.length + data.sponsors.length + data.workshops.length,
      byCountry: {
        exhibitors: aggregateByField(data.exhibitors, 'country'),
        visitors: aggregateByField(data.visitors, 'country'),
        sponsors: aggregateByField(data.sponsors, 'country'),
      },
      byIndustry: {
        exhibitors: aggregateByIndustry(data.exhibitors),
        visitors: aggregateByIndustries(data.visitors),
      },
      boothSizes: aggregateByField(data.exhibitors, 'boothSize'),
      sponsorshipLevels: aggregateByField(data.sponsors, 'sponsorshipLevel'),
    }
    
    return NextResponse.json(stats, { status: 200 })
  } catch (error) {
    console.error('Error fetching stats:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch statistics' },
      { status: 500 }
    )
  }
}

function aggregateByField(arr: any[], field: string) {
  return arr.reduce((acc, item) => {
    const value = item[field]
    if (value) {
      acc[value] = (acc[value] || 0) + 1
    }
    return acc
  }, {})
}

function aggregateByIndustry(arr: any[]) {
  return arr.reduce((acc, item) => {
    if (item.industry) {
      acc[item.industry] = (acc[item.industry] || 0) + 1
    }
    return acc
  }, {})
}

function aggregateByIndustries(arr: any[]) {
  return arr.reduce((acc, item) => {
    if (item.industryInterests && Array.isArray(item.industryInterests)) {
      item.industryInterests.forEach((industry: string) => {
        acc[industry] = (acc[industry] || 0) + 1
      })
    }
    return acc
  }, {})
}
