import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 記事コレクション（Cut Hack のメインコンテンツ）
// 記事フォーマットテンプレ A（自動記事）/ B（実体験記事）の両方を扱う
const articles = defineCollection({
	loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			// 必須・SEO最重要
			title: z.string().max(60, 'タイトルは60文字以内推奨'),
			description: z
				.string()
				.min(60, 'メタディスクリプションは60文字以上推奨')
				.max(200, 'メタディスクリプションは200文字以内推奨'),

			// カテゴリ（コア6 + サブ2 = 8）
			category: z.enum([
				'ai-video-tools',
				'ai-thumbnails',
				'ai-audio',
				'plugins',
				'tips',
				'workflow',
				'review',
				'trends',
			]),

			// タグ（自由）
			tags: z.array(z.string()).default([]),

			// 日付
			publishedAt: z.coerce.date(),
			updatedAt: z.coerce.date().optional(),

			// 著者・記事タイプ（E-E-A-T担保）
			author: z.enum(['marcos', 'ai']).default('ai'),
			authorType: z.enum(['auto', 'experience']).default('auto'),
			isExperienceArticle: z.boolean().default(false),

			// ツール紹介記事用（任意）
			toolUrl: z.string().url().optional(),

			// 出典（自動記事は2つ以上推奨、実体験記事は任意）
			sourceUrls: z.array(z.string().url()).default([]),

			// アイキャッチ画像
			heroImage: z.optional(image()),
			heroImageAlt: z.string().optional(),

			// 下書きフラグ（true なら本番ビルドから除外）
			draft: z.boolean().default(false),
		}),
});

export const collections = { articles };
