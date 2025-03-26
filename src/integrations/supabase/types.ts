export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      academic_results: {
        Row: {
          class_name: string
          created_at: string | null
          id: string
          image_url: string | null
          school_average: number
          students_above_90: number
          top_scorer_name: string
          top_scorer_percentage: number
          total_students: number
          updated_at: string | null
          year: number
        }
        Insert: {
          class_name: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          school_average: number
          students_above_90: number
          top_scorer_name: string
          top_scorer_percentage: number
          total_students: number
          updated_at?: string | null
          year: number
        }
        Update: {
          class_name?: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          school_average?: number
          students_above_90?: number
          top_scorer_name?: string
          top_scorer_percentage?: number
          total_students?: number
          updated_at?: string | null
          year?: number
        }
        Relationships: []
      }
      beyond_academic_content: {
        Row: {
          content: string
          created_at: string | null
          id: string
          image_url: string | null
          section_name: string
          updated_at: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          section_name: string
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          section_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      competition_results: {
        Row: {
          achievement_details: string | null
          competition_name: string
          created_at: string | null
          first_place: string | null
          id: string
          image_url: string | null
          participating_teams: number | null
          special_awards: string[] | null
          updated_at: string | null
          year: number
        }
        Insert: {
          achievement_details?: string | null
          competition_name: string
          created_at?: string | null
          first_place?: string | null
          id?: string
          image_url?: string | null
          participating_teams?: number | null
          special_awards?: string[] | null
          updated_at?: string | null
          year: number
        }
        Update: {
          achievement_details?: string | null
          competition_name?: string
          created_at?: string | null
          first_place?: string | null
          id?: string
          image_url?: string | null
          participating_teams?: number | null
          special_awards?: string[] | null
          updated_at?: string | null
          year?: number
        }
        Relationships: []
      }
      entrance_results: {
        Row: {
          achievement_details: string | null
          created_at: string | null
          exam_name: string
          id: string
          image_url: string | null
          qualified_students: number
          rank_under_1000: number
          rank_under_5000: number
          top_rank: number | null
          updated_at: string | null
          year: number
        }
        Insert: {
          achievement_details?: string | null
          created_at?: string | null
          exam_name: string
          id?: string
          image_url?: string | null
          qualified_students: number
          rank_under_1000: number
          rank_under_5000: number
          top_rank?: number | null
          updated_at?: string | null
          year: number
        }
        Update: {
          achievement_details?: string | null
          created_at?: string | null
          exam_name?: string
          id?: string
          image_url?: string | null
          qualified_students?: number
          rank_under_1000?: number
          rank_under_5000?: number
          top_rank?: number | null
          updated_at?: string | null
          year?: number
        }
        Relationships: []
      }
      essential_info_content: {
        Row: {
          content: string
          created_at: string | null
          id: string
          image_url: string | null
          section_name: string
          slug: string | null
          updated_at: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          section_name: string
          slug?: string | null
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          image_url?: string | null
          section_name?: string
          slug?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      olympiad_results: {
        Row: {
          achievement_details: string | null
          bronze_medals: number
          competition_name: string
          created_at: string | null
          gold_medals: number
          id: string
          image_url: string | null
          silver_medals: number
          top_achiever: string | null
          updated_at: string | null
          year: number
        }
        Insert: {
          achievement_details?: string | null
          bronze_medals: number
          competition_name: string
          created_at?: string | null
          gold_medals: number
          id?: string
          image_url?: string | null
          silver_medals: number
          top_achiever?: string | null
          updated_at?: string | null
          year: number
        }
        Update: {
          achievement_details?: string | null
          bronze_medals?: number
          competition_name?: string
          created_at?: string | null
          gold_medals?: number
          id?: string
          image_url?: string | null
          silver_medals?: number
          top_achiever?: string | null
          updated_at?: string | null
          year?: number
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
