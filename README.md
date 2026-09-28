# portfolio

大槻 海斗の作品集サイト。ゲーム・技術・CG の制作物を一覧で見られるようにする。

- 公開 URL: https://sand639.github.io/portfolio/
- 技術: Astro + TypeScript（静的サイト）。GitHub Pages に GitHub Actions で自動デプロイ
- 旧サイト（Sand639/sand639.github.io）とは別のリポジトリとして作り直したもの（2026-09-28）

## 開発

```sh
npm install
npm run dev       # http://localhost:4321/portfolio/
npm run build     # 型チェック + dist/ に書き出し
```

公開前のため、デプロイは今は手動実行のみ（`.github/workflows/deploy.yml` 参照）。公開後は `main` への push で自動更新する。

## 作品を書く・追加する

作品1本 = `src/content/works/` の Markdown 1ファイル。

- **既存の作品を埋める**: 該当ファイル（例 `024-toryumon.md`）の `#` を外して値を書き、`---` の下に本文を書く
- **新しい作品を足す**: `_template.md` をコピーして `番号-英字名.md` にする（例 `029-new-game.md`）

| 項目 | 内容 |
|---|---|
| `title` | 作品名 |
| `order` | 制作順。大きいほど新しく、一覧の上に来る |
| `category` | `game` / `tech` / `cg` |
| `tags` | 絞り込み用タグ（例 `[Unity, C#, チーム制作]`） |
| `summary` | 一覧に出す一文。**書くと「準備中」が外れる** |
| `period` / `team` / `role` / `hours` | 制作時期・体制・担当・制作時間。書いた項目だけ詳細ページに出る |
| `thumbnail` | `src/assets/works/` に置いた画像のパス。未指定なら YouTube のサムネイルを使う |
| `youtube` | YouTube の URL（限定公開で OK）。詳細ページに埋め込まれる |
| `links` | GitHub などのリンク |

本文（`---` の下）が空のあいだは、詳細ページに「準備中」と表示される。

## サイトの機能

- 一覧: カテゴリ切替、キーワード検索、複数タグの AND 絞り込み、並べ替え（新しい順 / 古い順 / 作品名順）
- 絞り込み状態は URL に残るので、そのまま共有できる（例 `/portfolio/?tags=Unity,C%23`）
- 詳細: YouTube 埋め込み、制作情報、前後の作品、同じタグの作品

## 公開方針（2026-09-28 本人確認）

- 載せる: 本名（大槻 海斗 / Ohtsuki Kaito）、GitHub リンク、資格
- 載せない: 顔写真、連絡先、入社予定の企業名、スキル表、受賞歴
