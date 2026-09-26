---
title: "In-Context Forcing: Uncovering Context Effects in Autoregressive Video Diffusion"
collection: publications
category: conferences
permalink: /publication/2026-in-context-forcing
excerpt: 'A progressive autoregressive video diffusion paradigm that improves temporal consistency and motion dynamics while enabling cross-frame parallel denoising.'
date: 2026-08-05
venue: 'arxiv , 2026'
paperurl: 'https://arxiv.org/abs/2608.05237'
header:
  teaser: 'arxiv26_incontext_forcing.png'
authors: 'Lingxiao Yang*, Liu Liu*, <strong>Moran Li*</strong>, Han Feng, Wenjian Cao, Jiangning Zhang, Ye Shi<br>'
---

Lingxiao Yang*, Liu Liu*, <strong>Moran Li*</strong>, Han Feng, Wenjian Cao, Jiangning Zhang, Ye Shi<br>

* Equal contribution.

[Paper](https://arxiv.org/abs/2608.05237)

In-Context Forcing introduces a progressive autoregressive paradigm for few-step video diffusion. It conditions each frame on preceding frames with decreasing noise levels, reducing local-detail leakage while preserving temporal consistency and motion dynamics.

The method further introduces a step-wise rolling KV cache for train-test-consistent training and cross-frame causal attention for parallel denoising, substantially accelerating inference without sacrificing generation quality.
