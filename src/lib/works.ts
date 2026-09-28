import { getCollection, type CollectionEntry } from 'astro:content';

export type Work = CollectionEntry<'works'>;

export const CATEGORIES = {
  game: 'ゲーム',
  tech: '技術',
  cg: 'CG・デザイン',
} as const satisfies Record<Work['data']['category'], string>;

/** 新しい順（order の降順）で全作品を返す */
export async function getWorks(): Promise<Work[]> {
  const works = await getCollection('works');
  return works.sort((a, b) => b.data.order - a.data.order);
}

/** summary が未記入の作品は「準備中」として扱う */
export function isPreparing(work: Work): boolean {
  return !work.data.summary?.trim();
}

/** youtu.be / watch?v= / shorts / embed の URL、または ID そのものから動画 ID を取り出す */
export function youtubeId(input: string | undefined): string | undefined {
  if (!input) return undefined;
  const s = input.trim();
  if (/^[\w-]{11}$/.test(s)) return s;
  try {
    const u = new URL(s);
    if (u.hostname === 'youtu.be') return u.pathname.slice(1, 12) || undefined;
    const v = u.searchParams.get('v');
    if (v) return v;
    const m = u.pathname.match(/\/(?:embed|shorts|live)\/([\w-]{11})/);
    return m?.[1];
  } catch {
    return undefined;
  }
}

export function youtubeThumb(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

/** base（/portfolio/）付きのサイト内パスを作る */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/** 作品番号の表示用（#001） */
export function workNumber(work: Work): string {
  return `#${String(work.data.order).padStart(3, '0')}`;
}
