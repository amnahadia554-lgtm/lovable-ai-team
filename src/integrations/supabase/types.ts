export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      ai_agents: {
        Row: {
          avatar: string | null
          business_type: string
          created_at: string
          description: string | null
          greeting: string | null
          id: string
          language: string
          last_error: string | null
          name: string
          organization_id: string
          personality: string | null
          role: string | null
          status: string
          system_prompt: string | null
          vapi_assistant_id: string | null
          voice: string
        }
        Insert: {
          avatar?: string | null
          business_type?: string
          created_at?: string
          description?: string | null
          greeting?: string | null
          id?: string
          language?: string
          last_error?: string | null
          name: string
          organization_id: string
          personality?: string | null
          role?: string | null
          status?: string
          system_prompt?: string | null
          vapi_assistant_id?: string | null
          voice?: string
        }
        Update: {
          avatar?: string | null
          business_type?: string
          created_at?: string
          description?: string | null
          greeting?: string | null
          id?: string
          language?: string
          last_error?: string | null
          name?: string
          organization_id?: string
          personality?: string | null
          role?: string | null
          status?: string
          system_prompt?: string | null
          vapi_assistant_id?: string | null
          voice?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_agents_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      appointments: {
        Row: {
          agent_id: string | null
          created_at: string
          customer_name: string
          email: string | null
          id: string
          lead_id: string | null
          organization_id: string
          phone: string | null
          purpose: string | null
          scheduled_date: string
          scheduled_time: string
          status: string
        }
        Insert: {
          agent_id?: string | null
          created_at?: string
          customer_name: string
          email?: string | null
          id?: string
          lead_id?: string | null
          organization_id: string
          phone?: string | null
          purpose?: string | null
          scheduled_date: string
          scheduled_time: string
          status?: string
        }
        Update: {
          agent_id?: string | null
          created_at?: string
          customer_name?: string
          email?: string | null
          id?: string
          lead_id?: string | null
          organization_id?: string
          phone?: string | null
          purpose?: string | null
          scheduled_date?: string
          scheduled_time?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointments_agent_id_organization_id_fkey"
            columns: ["agent_id", "organization_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id", "organization_id"]
          },
          {
            foreignKeyName: "appointments_lead_id_organization_id_fkey"
            columns: ["lead_id", "organization_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id", "organization_id"]
          },
          {
            foreignKeyName: "appointments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      calls: {
        Row: {
          agent_id: string | null
          appointment_id: string | null
          caller_name: string | null
          caller_number: string | null
          direction: string
          duration_seconds: number | null
          ended_at: string | null
          handoff_status: string | null
          id: string
          lead_id: string | null
          organization_id: string
          outcome: string | null
          phone_number_id: string | null
          recording_url: string | null
          started_at: string | null
          status: string
          summary: string | null
          tools_used: Json | null
          transcript: string | null
          vapi_call_id: string | null
        }
        Insert: {
          agent_id?: string | null
          appointment_id?: string | null
          caller_name?: string | null
          caller_number?: string | null
          direction?: string
          duration_seconds?: number | null
          ended_at?: string | null
          handoff_status?: string | null
          id?: string
          lead_id?: string | null
          organization_id: string
          outcome?: string | null
          phone_number_id?: string | null
          recording_url?: string | null
          started_at?: string | null
          status?: string
          summary?: string | null
          tools_used?: Json | null
          transcript?: string | null
          vapi_call_id?: string | null
        }
        Update: {
          agent_id?: string | null
          appointment_id?: string | null
          caller_name?: string | null
          caller_number?: string | null
          direction?: string
          duration_seconds?: number | null
          ended_at?: string | null
          handoff_status?: string | null
          id?: string
          lead_id?: string | null
          organization_id?: string
          outcome?: string | null
          phone_number_id?: string | null
          recording_url?: string | null
          started_at?: string | null
          status?: string
          summary?: string | null
          tools_used?: Json | null
          transcript?: string | null
          vapi_call_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "calls_agent_id_organization_id_fkey"
            columns: ["agent_id", "organization_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id", "organization_id"]
          },
          {
            foreignKeyName: "calls_appointment_id_organization_id_fkey"
            columns: ["appointment_id", "organization_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id", "organization_id"]
          },
          {
            foreignKeyName: "calls_lead_id_organization_id_fkey"
            columns: ["lead_id", "organization_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id", "organization_id"]
          },
          {
            foreignKeyName: "calls_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calls_phone_number_id_organization_id_fkey"
            columns: ["phone_number_id", "organization_id"]
            isOneToOne: false
            referencedRelation: "phone_numbers"
            referencedColumns: ["id", "organization_id"]
          },
        ]
      }
      knowledge_base: {
        Row: {
          agent_id: string | null
          content: string | null
          created_at: string
          file_name: string | null
          file_type: string | null
          file_url: string | null
          id: string
          organization_id: string
          source_type: string
          status: string
          title: string
        }
        Insert: {
          agent_id?: string | null
          content?: string | null
          created_at?: string
          file_name?: string | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          organization_id: string
          source_type?: string
          status?: string
          title: string
        }
        Update: {
          agent_id?: string | null
          content?: string | null
          created_at?: string
          file_name?: string | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          organization_id?: string
          source_type?: string
          status?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "knowledge_base_agent_id_organization_id_fkey"
            columns: ["agent_id", "organization_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id", "organization_id"]
          },
          {
            foreignKeyName: "knowledge_base_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          agent_id: string | null
          call_id: string | null
          created_at: string
          email: string | null
          id: string
          interested_in: string | null
          name: string
          notes: string | null
          organization_id: string
          phone: string | null
          source: string | null
          status: string
        }
        Insert: {
          agent_id?: string | null
          call_id?: string | null
          created_at?: string
          email?: string | null
          id?: string
          interested_in?: string | null
          name: string
          notes?: string | null
          organization_id: string
          phone?: string | null
          source?: string | null
          status?: string
        }
        Update: {
          agent_id?: string | null
          call_id?: string | null
          created_at?: string
          email?: string | null
          id?: string
          interested_in?: string | null
          name?: string
          notes?: string | null
          organization_id?: string
          phone?: string | null
          source?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "leads_agent_id_organization_id_fkey"
            columns: ["agent_id", "organization_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id", "organization_id"]
          },
          {
            foreignKeyName: "leads_call_tenant"
            columns: ["call_id", "organization_id"]
            isOneToOne: false
            referencedRelation: "calls"
            referencedColumns: ["id", "organization_id"]
          },
          {
            foreignKeyName: "leads_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      migration_identities: {
        Row: {
          cloud_user_id: string | null
          import_verified_at: string | null
          original_user_id: string
          verified_email: string
        }
        Insert: {
          cloud_user_id?: string | null
          import_verified_at?: string | null
          original_user_id: string
          verified_email: string
        }
        Update: {
          cloud_user_id?: string | null
          import_verified_at?: string | null
          original_user_id?: string
          verified_email?: string
        }
        Relationships: []
      }
      org_settings: {
        Row: {
          business_hours: Json | null
          created_at: string
          default_greeting: string | null
          default_handoff_rules: Json | null
          default_language: string | null
          default_voice: string | null
          email: string | null
          fallback_behavior: string | null
          handoff_conditions: Json | null
          human_handoff_phone: string | null
          id: string
          industry: string | null
          notifications: Json | null
          organization_id: string
          phone: string | null
          timezone: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          business_hours?: Json | null
          created_at?: string
          default_greeting?: string | null
          default_handoff_rules?: Json | null
          default_language?: string | null
          default_voice?: string | null
          email?: string | null
          fallback_behavior?: string | null
          handoff_conditions?: Json | null
          human_handoff_phone?: string | null
          id?: string
          industry?: string | null
          notifications?: Json | null
          organization_id: string
          phone?: string | null
          timezone?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          business_hours?: Json | null
          created_at?: string
          default_greeting?: string | null
          default_handoff_rules?: Json | null
          default_language?: string | null
          default_voice?: string | null
          email?: string | null
          fallback_behavior?: string | null
          handoff_conditions?: Json | null
          human_handoff_phone?: string | null
          id?: string
          industry?: string | null
          notifications?: Json | null
          organization_id?: string
          phone?: string | null
          timezone?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "org_settings_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: true
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organizations: {
        Row: {
          created_at: string
          id: string
          name: string
          owner_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          owner_id?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          owner_id?: string
        }
        Relationships: []
      }
      phone_numbers: {
        Row: {
          agent_id: string | null
          created_at: string
          direction: string
          id: string
          organization_id: string
          phone_number: string | null
          provider: string
          status: string
          vapi_phone_id: string | null
        }
        Insert: {
          agent_id?: string | null
          created_at?: string
          direction?: string
          id?: string
          organization_id: string
          phone_number?: string | null
          provider?: string
          status?: string
          vapi_phone_id?: string | null
        }
        Update: {
          agent_id?: string | null
          created_at?: string
          direction?: string
          id?: string
          organization_id?: string
          phone_number?: string | null
          provider?: string
          status?: string
          vapi_phone_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "phone_numbers_agent_id_organization_id_fkey"
            columns: ["agent_id", "organization_id"]
            isOneToOne: false
            referencedRelation: "ai_agents"
            referencedColumns: ["id", "organization_id"]
          },
          {
            foreignKeyName: "phone_numbers_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          full_name: string
          id: string
          organization_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          full_name?: string
          id?: string
          organization_id: string
          user_id?: string
        }
        Update: {
          created_at?: string
          full_name?: string
          id?: string
          organization_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      bootstrap_organization: {
        Args: { business_name: string; display_name: string }
        Returns: string
      }
      owns_org: { Args: { org: string }; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
