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
      birth_flowers: {
        Row: {
          day: number
          flower: string
          id: number
          image: string
          meaning: string
          month: number
        }
        Insert: {
          day: number
          flower: string
          id?: number
          image: string
          meaning: string
          month: number
        }
        Update: {
          day?: number
          flower?: string
          id?: number
          image?: string
          meaning?: string
          month?: number
        }
        Relationships: []
      }
      birth_stones: {
        Row: {
          en_stone: string
          id: number
          image: string
          meaning: string
          month: number
          stone: string
        }
        Insert: {
          en_stone: string
          id?: number
          image: string
          meaning: string
          month: number
          stone: string
        }
        Update: {
          en_stone?: string
          id?: number
          image?: string
          meaning?: string
          month?: number
          stone?: string
        }
        Relationships: []
      }
      guestbook: {
        Row: {
          color: string
          created_at: string
          id: number
          message: string
          pinned: boolean | null
        }
        Insert: {
          color: string
          created_at?: string
          id?: number
          message: string
          pinned?: boolean | null
        }
        Update: {
          color?: string
          created_at?: string
          id?: number
          message?: string
          pinned?: boolean | null
        }
        Relationships: []
      }
      "reflection-progress": {
        Row: {
          created_at: string
          id: string
          job: string
          nickname: string
          result: Json
          setbacks: string[]
          successes: string[]
        }
        Insert: {
          created_at?: string
          id?: string
          job: string
          nickname: string
          result: Json
          setbacks: string[]
          successes: string[]
        }
        Update: {
          created_at?: string
          id?: string
          job?: string
          nickname?: string
          result?: Json
          setbacks?: string[]
          successes?: string[]
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
      [_ in never]: never
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
