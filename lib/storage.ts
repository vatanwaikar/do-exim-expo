import fs from 'fs'
import path from 'path'
import { ExhibitorFormData, VisitorFormData, SponsorFormData, WorkshopFormData } from './schemas'

const dataDir = path.join(process.cwd(), 'data')

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

const storageFiles = {
  exhibitors: path.join(dataDir, 'exhibitors.json'),
  visitors: path.join(dataDir, 'visitors.json'),
  sponsors: path.join(dataDir, 'sponsors.json'),
  workshops: path.join(dataDir, 'workshops.json'),
}

function ensureFileExists(filePath: string) {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]))
  }
}

export async function saveExhibitor(data: ExhibitorFormData) {
  ensureFileExists(storageFiles.exhibitors)
  const existing = JSON.parse(fs.readFileSync(storageFiles.exhibitors, 'utf-8'))
  existing.push({
    ...data,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  })
  fs.writeFileSync(storageFiles.exhibitors, JSON.stringify(existing, null, 2))
  return existing
}

export async function saveVisitor(data: VisitorFormData) {
  ensureFileExists(storageFiles.visitors)
  const existing = JSON.parse(fs.readFileSync(storageFiles.visitors, 'utf-8'))
  existing.push({
    ...data,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  })
  fs.writeFileSync(storageFiles.visitors, JSON.stringify(existing, null, 2))
  return existing
}

export async function saveSponsor(data: SponsorFormData) {
  ensureFileExists(storageFiles.sponsors)
  const existing = JSON.parse(fs.readFileSync(storageFiles.sponsors, 'utf-8'))
  existing.push({
    ...data,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  })
  fs.writeFileSync(storageFiles.sponsors, JSON.stringify(existing, null, 2))
  return existing
}

export async function saveWorkshop(data: WorkshopFormData) {
  ensureFileExists(storageFiles.workshops)
  const existing = JSON.parse(fs.readFileSync(storageFiles.workshops, 'utf-8'))
  existing.push({
    ...data,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  })
  fs.writeFileSync(storageFiles.workshops, JSON.stringify(existing, null, 2))
  return existing
}

export async function getExhibitors() {
  ensureFileExists(storageFiles.exhibitors)
  return JSON.parse(fs.readFileSync(storageFiles.exhibitors, 'utf-8'))
}

export async function getVisitors() {
  ensureFileExists(storageFiles.visitors)
  return JSON.parse(fs.readFileSync(storageFiles.visitors, 'utf-8'))
}

export async function getSponsors() {
  ensureFileExists(storageFiles.sponsors)
  return JSON.parse(fs.readFileSync(storageFiles.sponsors, 'utf-8'))
}

export async function getWorkshops() {
  ensureFileExists(storageFiles.workshops)
  return JSON.parse(fs.readFileSync(storageFiles.workshops, 'utf-8'))
}

export async function getAllRegistrations() {
  return {
    exhibitors: await getExhibitors(),
    visitors: await getVisitors(),
    sponsors: await getSponsors(),
    workshops: await getWorkshops(),
  }
}
