import { supabase } from '@/lib/supabase'
import { Database } from '@/types/database.types'

type DatabaseSettings = Database['public']['Tables']['settings']['Row']

export const dataService = {
  // Settings
  async getSettings() {
    const { data, error } = await supabase
      .from('settings')
      .select('*, story_badge, story_quote, story_subtitle')
      .single()
    if (error) {
      console.error('Error fetching settings:', error);
      return null;
    }
    return data as DatabaseSettings;
  },

  // Hero Content
  async getHeroContent() {
    const { data, error } = await supabase
      .from('hero_content')
      .select('*')
      .single()
    if (error) throw error
    return data
  },

  // Story Sections (Multiple)
  async getStorySections() {
    const { data, error } = await supabase
      .from('story_sections')
      .select('*, story_pillars(*)')
      .order('sort_order', { ascending: true })
    if (error) {
      console.error('Error fetching story sections:', error);
      return [];
    }
    // Map to ensure pillars are also ordered by sort_order
    return (data as any[]).map((section: any) => ({
      ...section,
      story_pillars: section.story_pillars.sort((a: any, b: any) => a.sort_order - b.sort_order)
    }));
  },

  // Story Pillars (Legacy/Single - keep for compatibility if needed, but we'll move to sections)
  async getStoryPillars() {
    const { data, error } = await supabase
      .from('story_pillars')
      .select('*')
      .order('sort_order', { ascending: true })
    if (error) throw error
    return data
  },

  // Categories
  async getCategories() {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('sort_order', { ascending: true })
    if (error) throw error
    return data
  },

  // Products
  async getProducts() {
    const { data, error } = await supabase
      .from('products')
      .select('*, categories(*)')
      .order('sort_order', { ascending: true })
    if (error) throw error
    return data
  },

  // Opening Hours
  async getOpeningHours() {
    const { data, error } = await supabase
      .from('opening_hours')
      .select('*')
      .order('day_of_week', { ascending: true })
    if (error) throw error
    return data
  },

  // Extras (Toppings & Doughs)
  async getExtras() {
    const { data, error } = await supabase
      .from('extras')
      .select('*')
      .order('sort_order', { ascending: true })
    if (error) throw error
    return data
  },

  // Delivery Zones
  async getDeliveryZones() {
    const { data, error } = await supabase
      .from('delivery_zones')
      .select('*')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
    if (error) throw error
    return data
  }
}
