export type InfluencerStatus = 'VALIDADO' | 'NUEVO' | 'CONTACTADO';

export interface Influencer {
  id: string;
  name: string;
  handle: string; // @usuario
  avatarUrl: string;
  platform: 'Instagram' | 'TikTok' | 'YouTube';
  followers: number;
  followersFormatted: string; // ej: "145.2k"
  engagement: number; // ej: 4.8
  scoreIA: number; // 1-100
  status: InfluencerStatus;
}