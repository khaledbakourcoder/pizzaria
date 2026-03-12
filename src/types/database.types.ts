export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string
          id: number
          image_url: string | null
          name: string
          slug: string
          sort_order: number
        }
        Insert: {
          created_at?: string
          id?: number
          image_url?: string | null
          name: string
          slug: string
          sort_order?: number
        }
        Update: {
          created_at?: string
          id?: number
          image_url?: string | null
          name: string
          slug: string
          sort_order?: number
        }
        Relationships: []
      }
      hero_content: {
        Row: {
          badge_text: string
          cta_text: string
          description: string
          id: number
          title_line1: string
          title_line2: string
          updated_at: string
        }
        Insert: {
          badge_text?: string
          cta_text?: string
          description?: string
          id?: number
          title_line1?: string
          title_line2?: string
          updated_at?: string
        }
        Update: {
          badge_text?: string
          cta_text?: string
          description?: string
          id?: number
          title_line1?: string
          title_line2?: string
          updated_at?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          category_id: number
          created_at: string
          description: string | null
          id: number
          image_url: string | null
          is_available: boolean
          is_best_seller: boolean
          name: string
          prices: Json
          slug: string
          sort_order: number
        }
        Insert: {
          category_id: number
          created_at?: string
          description?: string | null
          id?: number
          image_url?: string | null
          is_available?: boolean
          is_best_seller?: boolean
          name: string
          prices?: Json
          slug: string
          sort_order?: number
        }
        Update: {
          category_id?: number
          created_at?: string
          description?: string | null
          id?: number
          image_url?: string | null
          is_available?: boolean
          is_best_seller?: boolean
          name: string
          prices?: Json
          slug: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          }
        ]
      }
      settings: {
        Row: {
          address: string
          city: string
          email: string
          id: number
          instagram_url: string | null
          logo_url: string | null
          min_order_value: number | null
          phone: string
          restaurant_name: string
          slogan: string | null
          store_info_text: string | null
          story_badge: string | null
          story_quote: string | null
          story_subtitle: string | null
          hero_image_url: string | null
          updated_at: string
        }
        Insert: {
          address?: string
          city?: string
          email?: string
          id?: number
          instagram_url?: string | null
          logo_url?: string | null
          hero_image_url?: string | null
          min_order_value?: number | null
          phone?: string
          restaurant_name?: string
          slogan?: string | null
          store_info_text?: string | null
          story_badge?: string | null
          story_quote?: string | null
          story_subtitle?: string | null
          updated_at?: string
        }
        Update: {
          address?: string
          city?: string
          email?: string
          id?: number
          instagram_url?: string | null
          logo_url?: string | null
          hero_image_url?: string | null
          min_order_value?: number | null
          phone?: string
          restaurant_name?: string
          slogan?: string | null
          store_info_text?: string | null
          story_badge?: string | null
          story_quote?: string | null
          story_subtitle?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      story_pillars: {
        Row: {
          icon: string
          id: number
          image_url: string | null
          sort_order: number
          subtitle: string
          text: string
          title: string
          story_section_id: number | null
        }
        Insert: {
          icon?: string
          id?: number
          image_url?: string | null
          sort_order?: number
          subtitle: string
          text: string
          title: string
          story_section_id?: number | null
        }
        Update: {
          icon?: string
          id?: number
          image_url?: string | null
          sort_order?: number
          subtitle?: string
          text?: string
          title?: string
          story_section_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "story_pillars_story_section_id_fkey"
            columns: ["story_section_id"]
            isOneToOne: false
            referencedRelation: "story_sections"
            referencedColumns: ["id"]
          }
        ]
      }
      story_sections: {
        Row: {
          id: number
          badge_text: string
          quote_text: string
          subtitle_text: string
          sort_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          badge_text?: string
          quote_text?: string
          subtitle_text?: string
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          badge_text?: string
          quote_text?: string
          subtitle_text?: string
          sort_order?: number
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      opening_hours: {
        Row: {
          id: number
          day_of_week: number
          open_time: string | null
          close_time: string | null
          is_closed: boolean
        }
        Insert: {
          id?: number
          day_of_week: number
          open_time?: string | null
          close_time?: string | null
          is_closed?: boolean
        }
        Update: {
          id?: number
          day_of_week?: number
          open_time?: string | null
          close_time?: string | null
          is_closed?: boolean
        }
        Relationships: []
      }
      extras: {
        Row: {
          allows_multiple: boolean
          category_ids: number[]
          id: number
          is_available: boolean
          is_required: boolean
          name: string
          price: number
          sort_order: number
          type: string
        }
        Insert: {
          allows_multiple?: boolean
          category_ids: number[]
          id?: number
          is_available?: boolean
          is_required?: boolean
          name: string
          price: number
          sort_order?: number
          type: string
        }
        Update: {
          allows_multiple?: boolean
          category_ids?: number[]
          id?: number
          is_available?: boolean
          is_required?: boolean
          name: string
          price: number
          sort_order?: number
          type: string
        }
        Relationships: []
      }
      delivery_zones: {
        Row: {
          created_at: string
          delivery_fee: number
          delivery_time: string
          id: number
          is_active: boolean
          min_order_value: number
          name: string
          postal_codes: string[]
          sort_order: number
        }
        Insert: {
          created_at?: string
          delivery_fee: number
          delivery_time: string
          id?: number
          is_active?: boolean
          min_order_value: number
          name: string
          postal_codes: string[]
          sort_order?: number
        }
        Update: {
          created_at?: string
          delivery_fee?: number
          delivery_time?: string
          id?: number
          is_active?: boolean
          min_order_value?: number
          name?: string
          postal_codes?: string[]
          sort_order?: number
        }
        Relationships: []
      }
    }
  }
}
