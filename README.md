# Cut Hack

> 動画編集を、ハックしろ。

動画編集の **最新情報** と **効率化のためのテク** を、ひとつにまとめるメディアサイト。

- 🌐 サイト: [https://cuthack.io](https://cuthack.io)
- 🏢 運営: 株式会社LunoX
- 🛠️ 技術: Astro + Cloudflare Pages

---

## 開発

```bash
# 開発サーバ起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

ローカル開発: <http://localhost:4321/>

---

## ディレクトリ構造

```
src/
├── components/       共通コンポーネント
├── content/
│   └── articles/     記事Markdown
├── layouts/          レイアウト
├── pages/            ページルーティング
│   ├── articles/     記事一覧・個別記事
│   ├── about.astro
│   └── index.astro
├── styles/           グローバルCSS
├── consts.ts         サイト定数（ブランド・カテゴリマスタ）
└── content.config.ts コンテンツスキーマ
```

---

## 記事カテゴリ

| Slug | 名前 | 内容 |
|---|---|---|
| `ai-video-tools` | AI動画編集ツール | Pika / Runway / Sora 等 |
| `ai-thumbnails` | AIサムネ生成 | Midjourney / DALL-E / Canva AI |
| `ai-audio` | AI字幕・音声ツール | Vrew / Whisper / ElevenLabs |
| `plugins` | プラグイン・スクリプト | Premiere / DaVinci 効率化 |
| `tips` | 編集テクニック | カット・ショートカット・小技 |
| `workflow` | ワークフロー・効率化術 | 案件管理・編集フロー |
| `review` | 実体験レビュー | マルコスの本気レビュー |
| `trends` | トレンド・ニュース | AI×動画編集の最新動向 |

---

## 記事の追加方法

`src/content/articles/[slug].md` を新規作成。

```markdown
---
title: "記事タイトル"
description: "メタディスクリプション（60〜200文字）"
category: ai-video-tools
tags: ["タグ1", "タグ2"]
publishedAt: 2026-05-15
author: ai            # marcos | ai
authorType: auto      # auto | experience
isExperienceArticle: false
sourceUrls:
  - https://example.com/...
---

本文をMarkdownで...
```

---

## デプロイ

`main` ブランチに push すると Cloudflare Pages が自動デプロイ。

---

## ライセンス

(c) 2026 株式会社LunoX
