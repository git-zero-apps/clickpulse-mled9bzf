// Auto-generated database types from ZERO Builder
// Do not edit manually
export interface Profiles {
  id: string;
  full_name: string;
  email: string;
  role: string;
  subscription_plan: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  default_domain?: string | null;
  monthly_link_count: number;
  monthly_limit_reset_date: string;
  created_at: string;
  updated_at: string;
}

export interface ProfilesInsert {
  full_name: string;
  email: string;
  role?: string;
  subscription_plan?: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  default_domain?: string | null;
  monthly_link_count?: number;
  monthly_limit_reset_date?: string;
}

export interface ShortLinks {
  id?: string;
  user_id: string;
  original_url: string;
  short_code: string;
  custom_alias: string | null;
  title: string | null;
  domain: string;
  click_count: number;
  status: string;
  expiry_date: string | null;
  qr_code_url: string | null;
  tags?: unknown | null;
  campaign_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface ShortLinksInsert {
  user_id: string;
  original_url: string;
  short_code: string;
  custom_alias: string | null;
  title: string | null;
  domain?: string;
  click_count?: number;
  status?: string;
  expiry_date: string | null;
  qr_code_url: string | null;
  tags?: unknown | null;
  campaign_id: string | null;
}

export interface ClickEvents {
  id?: string;
  link_id: string;
  clicked_at: string;
  referrer_url: string | null;
  country: string | null;
  city: string | null;
  device_type: string | null;
  browser: string | null;
  os: string | null;
  ip_address: string | null;
  user_agent: string | null;
  created_at: string;
  updated_at: string;
}

export interface ClickEventsInsert {
  link_id: string;
  clicked_at?: string;
  referrer_url: string | null;
  country: string | null;
  city: string | null;
  device_type: string | null;
  browser: string | null;
  os: string | null;
  ip_address: string | null;
  user_agent: string | null;
}

export interface Campaigns {
  id?: string;
  user_id: string;
  name: string;
  description: string | null;
  total_clicks: number;
  created_at: string;
  updated_at: string;
}

export interface CampaignsInsert {
  user_id: string;
  name: string;
  description: string | null;
  total_clicks?: number;
}

export interface Tags {
  id?: string;
  user_id: string;
  name: string;
  color?: string | null;
  link_count: number;
  created_at: string;
  updated_at: string;
}

export interface TagsInsert {
  user_id: string;
  name: string;
  color?: string | null;
  link_count?: number;
}

export interface LinkInBioPages {
  id?: string;
  user_id: string;
  slug: string;
  title: string;
  bio: string | null;
  avatar_url: string | null;
  theme: string;
  link_ids?: unknown | null;
  view_count: number;
  created_at: string;
  updated_at: string;
}

export interface LinkInBioPagesInsert {
  user_id: string;
  slug: string;
  title: string;
  bio: string | null;
  avatar_url: string | null;
  theme?: string;
  link_ids?: unknown | null;
  view_count?: number;
}

export interface TeamMembers {
  id?: string;
  owner_id: string;
  member_id: string | null;
  email: string;
  status: string;
  invited_at: string;
  accepted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface TeamMembersInsert {
  owner_id: string;
  member_id: string | null;
  email: string;
  status?: string;
  invited_at?: string;
  accepted_at: string | null;
}
