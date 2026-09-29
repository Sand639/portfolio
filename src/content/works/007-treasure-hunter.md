---
title: "TREASUE HUNTER"
order: 7
category: game
tags: [C言語, コンソール, ダンジョン探索, 個人制作]
summary: "ダンジョンを探索してお宝を手に入れるコンソールゲーム。"
period: "2023年9月（2週間）"
hours: 40
genre: "ダンジョン探索"
engine: "Visual Studio 2022（コンソール）"
language: "C言語"
team: "個人制作"
youtube: "https://youtu.be/Y38zNEiovCQ"
links:
  - label: "ソースコード（GitHub）"
    url: "https://github.com/Sand639/hal-game-works/tree/main/007-treasure-hunter"
---

## 概要

ポケモン不思議のダンジョンを目指して作成しました。授業で配列、キー入力、Sleep 関数による遅延を学び、それらを取り入れた作品です。

## 操作方法

| キー | 操作 |
|---|---|
| W / A / S / D | 上 / 左 / 下 / 右に移動 |
| H | 回復薬を使う |
| B | 聖水を使う |

マップ上の記号: ■ 壁 / Ｅ 敵 / □ 階段

## 工夫した点

今までのコンソールのバトルシステムを引き継ぎ、新しい敵や敵のランダムな移動を追加しました。

## 苦労した点と解決

マップのランダム生成は難易度が高かったため、マップはあらかじめ配列で作成したものになっています。

## 学んだこと

- 配列の使い方
- 乱数・switch 文の理解
- 変数を初期化するタイミング
- 当たり判定の処理
