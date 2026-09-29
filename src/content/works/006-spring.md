---
title: "Spring"
order: 6
category: game
tags: [Unity, C#, 2D, アクション, 個人制作]
summary: "プレイヤーを操作してゴールを目指す 2D アクション。夏休み課題として企画から一人で制作。"
period: "2023年9月（10日間）"
hours: 40
genre: "2Dアクション"
engine: "Unity 2021.3.23f1"
language: "C#"
team: "個人制作"
youtube: "https://youtu.be/1OPreINTjTQ"
links:
  - label: "ソースコード（GitHub）"
    url: "https://github.com/Sand639/hal-game-works/tree/main/006-spring"
---

## 概要

学校の夏休み課題です。Unity を使って企画から制作まで一人で行うのは初めてでした。

## 操作方法

| キー | 操作 |
|---|---|
| A / D | 左 / 右に移動 |
| Space | ジャンプ |

## 工夫した点

「Unity ゲーム制作専科で習った技術を全部入れること」と「+α の処理を入れること」を目標に制作しました。+α として、YouTube で調べながら次の処理を追加しています。

- 敵を上から踏むと倒し、横から当たるとダメージを受ける処理（`player.cs` の `HitEnemy` 関数）
- ダメージを受けたときの画面シェイク（`CameraManager.cs` の `Shake` 関数）

## 苦労した点と解決

はじめは2D謎解き脱出ゲームに挑戦しようとしましたが断念し、提出まで残り10日の時点で2Dアクションに切り替えました。

## 学んだこと

この制作を通して、作りたい仕様を自分の知識でプログラムに落とし込めるようになり、素早くプロトタイプを作れるようになりました。

- Inspector 上に変数の説明を表示する方法
