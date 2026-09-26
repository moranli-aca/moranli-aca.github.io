---
permalink: /
title: ""
author_profile: true
classes:
  - home-page
redirect_from: 
  - /about/
  - /about.html
---
<section class="home-intro">
  <p class="home-intro__eyebrow">GRAPHICS · MULTI-MODAL GENERATION · AGENT</p>
  <div class="home-intro__summary" markdown="1">
I am a Researcher at [TikTok](https://www.tiktok.com/en/), specializing in **Multi-Modal Generation and Agent**. Previously, I worked as a Senior Researcher at [Tencent Youtu Lab](https://open.youtu.qq.com) and a Graphics Algorithm Engineer at [Kwai](https://www.kuaishou.com/en). Prior to my full-time career, I completed research internships at [Kwai](https://www.kuaishou.com/en) (mentored by [Haibin Huang](https://brotherhuang.github.io/) and [Chongyang Ma](http://chongyangma.com/)) and [Tencent AI Lab](https://ailab.tencent.com/ailab/zh/index). I received my B.S. and M.S. degrees from Huazhong University of Science and Technology ([HUST](https://english.hust.edu.cn/)) in 2018 and 2021, respectively, under the supervision of [Prof. Nong Sang](https://scholar.google.com/citations?user=ky_ZowEAAAAJ&hl).
  </div>
  <div class="home-intro__callout" markdown="1">
📢 I am looking for self-motivated interns to work on **Multi-Modal Generation** and related topics. If you are passionate about research and have strong coding skills, please drop me an [email](mailto:moranli.aca@gmail.com) with your CV.
  </div>
</section>

<section id="research-journey" class="home-section home-journey">
  <div class="home-section__heading">
    <h2>Research Journey</h2>
    <span class="home-journey__caption"><em>Try something new</em><span aria-hidden="true"> · </span>2020 → 2026</span>
  </div>
  <div class="research-river" role="group" aria-label="Research journey from computer graphics through generative media to multimodal agent, 2020 to 2026">
    <svg class="research-river__flow" viewBox="0 0 760 190" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="research-river-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#dbeafe"></stop>
          <stop offset="48%" stop-color="#c7e9f8"></stop>
          <stop offset="73%" stop-color="#ccf5e7"></stop>
          <stop offset="100%" stop-color="#e9ddff"></stop>
        </linearGradient>
      </defs>
      <path d="M8 84 C110 30 182 63 266 97 C356 134 405 55 492 75 C572 94 624 36 752 63 L752 149 C632 124 574 173 486 145 C402 119 353 176 260 142 C173 111 99 95 8 145 Z"></path>
      <path class="research-river__glint" d="M22 92 C116 49 184 75 265 106 C354 140 409 72 490 88 C572 105 631 55 738 75"></path>
    </svg>

    <div class="research-river__chapters">
      <article class="research-river__chapter research-river__chapter--graphics">
        <header><span>2020–2024</span><strong>Computer Graphics</strong></header>
        <ul>
          <li><b>Hand</b><small>3D Pose</small></li>
          <li><b>Face</b><small>Sparse-view 3D; SDF</small></li>
          <li><b>Cloth</b><small>Neural Deformation</small></li>
          <li class="research-river__hair"><b>Hair</b><small>Reconstruction · Generation · Simulation</small></li>
        </ul>
      </article>

      <article class="research-river__chapter research-river__chapter--media">
        <header><span>2023–2025</span><strong>Generative Content</strong></header>
        <ul>
          <li><b>3D Gen</b><small>Hair · Motion · Cloth</small></li>
          <li><b>VideoGen</b><small>Identity · Editing</small></li>
        </ul>
      </article>

      <article class="research-river__chapter research-river__chapter--mm">
        <header><span>2026 →</span><strong>Multimodal Agent</strong></header>
        <ul>
          <li><time>2026</time><b>MM Generation</b><small>Controllable Synthesis</small></li>
        </ul>
      </article>
    </div>

    <img class="research-river__person" src="{{ '/images/research-journey-girl-v3.png' | relative_url }}" alt="" aria-hidden="true">

    <div class="research-river__foundation">
      <span>Core Threads</span>
      <strong>3D Digital Humans · Controllable Generation · Multimodal Agents</strong>
    </div>
  </div>
</section>

<section class="home-section home-news">
  <div class="home-section__heading">
    <h2>News</h2>
  </div>
  <ul class="home-news__list">
    <li><time datetime="2026-09">Sep 2026</time><span>Our papers <a href="https://zengkaiya.github.io/SteerVTE/">SteerVTE</a> and <a href="{{ '/publication/2026-conformal-cache' | relative_url }}">Conformal Cache</a> were accepted to <strong>NeurIPS 2026</strong>!</span></li>
    <li><time datetime="2025">2025</time><span>Awarded 2nd Place ("XuanYuan" on <a href="https://hidream-ai.github.io/ipvg-challenge.github.io/#results">Leaderboard</a>) in ACM MM Identity-Preserving Video Generation (IPVG) Challenge.</span></li>
  </ul>
</section>

<section class="home-section home-publications">
  <div class="home-section__heading">
    <h2>Selected Publications</h2>
    <a class="home-section__more" href="{{ '/publications/' | relative_url }}">View All <span aria-hidden="true">→</span></a>
  </div>
{% assign sorted_pubs = site.publications | sort: "date" | reverse %}
{% for pub in sorted_pubs limit: 6 %}
  {% assign post = pub %}
  {% include archive-single-publication.html %}
{% endfor %}
</section>

<section class="home-section home-service" markdown="1">
## Professional Services

- **Conference Reviewer:** NeurIPS, ECCV, ICCV, AAAI, ACM MM, SIGGRAPH, Eurographics
- **Journal Reviewer:** TVC, TVCJ
</section>

<section class="home-section home-honors" markdown="1">
## Honors & Awards

- Outstanding Graduate, 2018 & 2021
- National Scholarship <span class="home-highlight">Top 2%</span>, 2017
</section>

<section class="home-section home-education" markdown="1">
## Education

- 2018.09 ~ 2021.07, HUST, AIA Dept, Master
  - Supervisor: [Prof. Nong Sang](https://scholar.google.com/citations?user=ky_ZowEAAAAJ&hl)
- 2014.09 ~ 2018.07, HUST, OEI Dept and Qiming College, Bachelor
</section>
