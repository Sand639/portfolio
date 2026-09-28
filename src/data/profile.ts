// プロフィールページに出す情報。本人が公開を了承した項目だけを置く（2026-09-28 確認）。
// 掲載しない: 顔写真、連絡先、入社予定の企業名、スキル表、受賞歴
export const profile = {
  name: '大槻 海斗',
  nameEn: 'Ohtsuki Kaito',
  github: 'https://github.com/Sand639',
  // 出典: 旧ポートフォリオ PDF（004_ポートフォリオ.pdf）の Experience 欄
  certifications: [
    { date: '2024年12月', name: 'CGエンジニア検定 エキスパート 合格' },
    { date: '2024年4月', name: '基本情報技術者試験 合格' },
    { date: '2024年3月', name: '情報検定（J検）情報システム試験 プログラミングスキル 合格' },
    { date: '2023年12月', name: 'CGエンジニア検定 ベーシック 合格' },
    { date: '2023年10月', name: '情報検定（J検）情報システム試験 基本スキル 合格' },
    { date: '2021年4月', name: 'ロボット検定 準2級 合格' },
  ],
} as const;
