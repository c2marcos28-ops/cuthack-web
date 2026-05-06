// Cut Hack グローバル定数
// このファイルはサイト全体で参照されるブランド情報・カテゴリマスタを管理する

export const SITE_TITLE = 'Cut Hack';
export const SITE_TAGLINE = '動画編集を、ハックしろ。';
export const SITE_DESCRIPTION =
	'動画編集を効率化するAI・ツール・テクニックを毎日アップデート。現役動画編集者の視点で、本当に使えるものだけを紹介。';
export const SITE_URL = 'https://cuthack.io';

// 記事カテゴリマスタ（コア6 + サブ2 = 8カテゴリ）
export const CATEGORIES = [
	{
		slug: 'ai-video-tools',
		name: 'AI動画編集ツール',
		description: 'Pika / Runway / Sora など、動画生成・編集を変えるAIツール',
		emoji: '🎬',
	},
	{
		slug: 'ai-thumbnails',
		name: 'AIサムネ生成',
		description: 'Midjourney / DALL-E / Canva AI など、YouTubeサムネを爆速で作るAI',
		emoji: '🖼️',
	},
	{
		slug: 'ai-audio',
		name: 'AI字幕・音声ツール',
		description: 'Vrew / Whisper / ElevenLabs など、字幕・音声を自動化するAI',
		emoji: '🎙️',
	},
	{
		slug: 'plugins',
		name: 'プラグイン・スクリプト',
		description: 'Premiere / DaVinci / AfterEffects の編集を爆速化するプラグイン',
		emoji: '🔧',
	},
	{
		slug: 'tips',
		name: '編集テクニック',
		description: 'カット作業・ショートカット・小技で編集スピードを上げる',
		emoji: '⚡',
	},
	{
		slug: 'workflow',
		name: 'ワークフロー・効率化術',
		description: '案件管理・編集フロー・チーム制作の効率化術',
		emoji: '🗂️',
	},
	{
		slug: 'review',
		name: '実体験レビュー',
		description: '現役動画編集者・SEED代表マルコスの本気レビュー',
		emoji: '✍️',
	},
	{
		slug: 'trends',
		name: 'トレンド・ニュース',
		description: 'AI×動画編集の最新動向・業界トピック',
		emoji: '📡',
	},
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

// カテゴリslug→名前への変換ヘルパ
export const getCategoryName = (slug: CategorySlug): string =>
	CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;

export const getCategory = (slug: CategorySlug) =>
	CATEGORIES.find((c) => c.slug === slug);
