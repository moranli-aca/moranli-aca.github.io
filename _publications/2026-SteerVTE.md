---
title: "SteerVTE: Seamless Video Text Editing with Style and Glyph Control"
collection: publications
category: conferences
permalink: /publication/2026-steervte
excerpt: 'A unified framework for precise video text editing with style preservation, dual-granularity glyph control, and temporally coherent generation.'
date: 2026-09-02
venue: 'Neural Information Processing Systems <strong>(NeurIPS)</strong> , 2026 <font color="red">[CCF A]</font>'
paperurl: 'https://arxiv.org/abs/2606.23254'
projecturl: 'https://zengkaiya.github.io/SteerVTE/'
codeurl: 'https://github.com/zengkaiya/SteerVTE'
modelurl: 'https://huggingface.co/MewtwoX23/SteerVTE'
benchmarkurl: 'https://huggingface.co/datasets/MewtwoX23/VTE-Bench'
header:
  teaser: 'neurips26_steervte.png'
authors: 'Kai Zeng, <strong>Moran Li</strong>, Zhengwei Wang, Yingchen Yu, Yiheng Lin, Ruichuan An, Ming Lu, Qi She, Wentao Zhang<br>'
---

Kai Zeng, <strong>Moran Li</strong>, Zhengwei Wang, Yingchen Yu, Yiheng Lin, Ruichuan An, Ming Lu, Qi She, Wentao Zhang<br>

[Project Page](https://zengkaiya.github.io/SteerVTE/) · [Paper](https://arxiv.org/abs/2606.23254) · [Code](https://github.com/zengkaiya/SteerVTE) · [Model](https://huggingface.co/MewtwoX23/SteerVTE) · [Benchmark](https://huggingface.co/datasets/MewtwoX23/VTE-Bench)

SteerVTE is a unified framework for precise video text editing that preserves the original text style while maintaining temporal coherence. It augments a frozen video diffusion transformer with a lightweight Text Context Adapter that combines mask-guided localization, native-resolution style encoding, and dual-granularity glyph control.

The work introduces the **Glyph-Aware Spatial-Focal (GLAS) Loss**, a progressive image-to-video training curriculum, the **SteerVTE-1M** training dataset, and **VTE-Bench** for evaluating text accuracy, style consistency, temporal coherence, and background preservation.
