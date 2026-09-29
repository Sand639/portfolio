import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 作品1本 = src/content/works/ の Markdown 1ファイル。
// 書き方は src/content/works/_template.md を参照。
const works = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/works' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** 作品名の読みがな（漢字のタイトルのとき）。詳細ページに表示し、検索にも使う */
      reading: z.string().optional(),
      /** 制作順。大きいほど新しい。一覧の「新しい順」はこの値で並ぶ */
      order: z.number(),
      category: z.enum(['game', 'tech', 'cg']),
      tags: z.array(z.string()).default([]),
      /** 閲覧注意の説明。書くとサムネイルにモザイクがかかり、詳細ページでは確認後に動画を表示する */
      warning: z.string().optional(),
      /** 一覧カードに出す一文。空のあいだは「準備中」と表示する */
      summary: z.string().optional(),
      /** 制作時期（例: 2025年4月〜7月） */
      period: z.string().optional(),
      /** 体制（例: 個人制作 / 8人チーム） */
      team: z.string().optional(),
      /** 担当（例: メインプログラマー） */
      role: z.string().optional(),
      /** 制作時間（時間） */
      hours: z.number().optional(),
      /** src/assets/works/ に置いた画像への相対パス。未指定なら YouTube のサムネイルを使う */
      thumbnail: image().optional(),
      /** YouTube の URL（限定公開でも可） */
      youtube: z.string().optional(),
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
    }),
});

export const collections = { works };
