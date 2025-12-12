---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
I am a Researcher at [TikTok](https://www.tiktok.com/en/), specializing in **Multi-Modal Generation**. Previously, I worked as a Senior Researcher at [Tencent Youtu Lab](https://open.youtu.qq.com) and a Graphics Algorithm Engineer at [Kwai](https://www.kuaishou.com/en). Prior to my full-time career, I completed research internships at [Kwai](https://www.kuaishou.com/en) (mentored by [Haibin Huang](https://brotherhuang.github.io/) and [Chongyang Ma](http://chongyangma.com/)) and [Tencent AI Lab](https://ailab.tencent.com/ailab/zh/index). I received my B.S. and M.S. degrees from Huazhong University of Science and Technology ([HUST](https://english.hust.edu.cn/)) in 2018 and 2021, respectively, under the supervision of [Prof. Nong Sang](https://scholar.google.com/citations?user=ky_ZowEAAAAJ&hl).

📢 **I am looking for self-motivated interns to work on **Multi-Modal Generation** and related topics.** If you are passionate about research and have strong coding skills, please drop me an [email](moranli.aca@gmail.com) with your CV.

News
====
- Awarded 2nd Place ("XuanYuan" on [Leaderboard](https://hidream-ai.github.io/ipvg-challenge.github.io/#results)) in ACM MM Identity-Preserving Video Generation (IPVG) Challenge, 2025.

Publications
======
<table width="100%" border="0" align="center" cellpadding="5" cellspacing="5" style="border-collapse: collapse; font-size: 12pt; border: none">
{% assign sorted_pubs = site.publications | sort: "year" | reverse %}
{% for pub in sorted_pubs %}
  {% assign year = pub.name | split: "_" | first %}
  {{ pub.content | markdownify }}
{% endfor %}
</table>

Professional Services
======
- Conference Reviewer: NeurIPS/ECCV/ICCV/AAAI/ACM'MM; SIGGRAPH/Eurographics
- Journal Reviewer: TVC (The Visual Computer)/TVCJ (The Visual Computer Journal)

Honors & Awards
======
- Outstanding Graduate, 2018/2021
- National Scholarship <span style="color: red;">(top 2%)</span>, 2017

Education
======
- 2018.09 ~ 2021.07, HUST, AIA Dept, Master
  - Supervisor: [Prof. Nong Sang](https://scholar.google.com/citations?user=ky_ZowEAAAAJ&hl)
- 2014.09 ~ 2018.07, HUST, OEI Dept and Qiming College, Bachelor
