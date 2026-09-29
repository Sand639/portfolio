---
title: "ハック＆スラッシュ"
order: 23
category: game
tags: [C言語, C++, Siv3D, 2D, アクション, 個人制作]
summary: "右クリックで移動し、バット・弓・爆撃で戦う 2D アクション。デザインパターンを学ぶ課題で制作。"
period: "2024年1月（2週間）"
hours: 15
genre: "2Dアクション"
engine: "Visual Studio 2022 / Siv3D"
language: "C言語 / C++"
team: "個人制作"
youtube: "https://youtu.be/PT4lN7MfAXQ"
links:
  - label: "ソースコード（GitHub）"
    url: "https://github.com/Sand639/hal-game-works/tree/main/023-hack-and-slash"
---

## 概要

授業でデザインパターン、クラス図、シーケンス図、STL コンテナ、Siv3D を学び、それらを使って C++ に慣れるという課題で制作しました。

## 操作方法

| 操作 | 内容 |
|---|---|
| 右クリック | クリックした地点へ移動 |
| Q | バット攻撃 |
| W | 弓攻撃 |
| E | 爆撃攻撃 |
| S | その場で停止 |

## 工夫した点

- vector や unique_ptr を使ったり、クラスをワールドに登録してまとめて処理したりと、C++ らしいコードの書き方にしました
- lol風の操作方法で作成して見ました。

## 学んだこと

- STL コンテナ
- デザインパターン
- デコレーターの考え方

<!-- 未記入: 苦労した点と解決 -->
