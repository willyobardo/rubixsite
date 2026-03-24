import type { HomeData } from '@/types/home'
import homeJson from '@/content/home.json'

/**
 * Fetch home page data.
 * Phase 1: reads from local JSON.
 * Phase 2 (Sanity): swap this implementation — signature stays the same.
 */
export async function getHomeData(): Promise<HomeData> {
  return homeJson as HomeData
}
