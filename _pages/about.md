---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
I am a researcher specializing in **Generative AI** at [Tencent Youtu Lab](https://open.youtu.qq.com). Previously, I worked as a full-time engineer at Kuaishou Technology ([Kwai Inc.](https://www.kuaishou.com/en)) from 2021 to 2023. I also completed research internships at Kwai (mentored by [Haibin Huang](https://brotherhuang.github.io/) and [Chongyang Ma](http://chongyangma.com/)) and at [Tencent AI Lab](https://ailab.tencent.com/ailab/zh/index) (mentored by [Yuan Gao](https://yuan-gao.net/)). I earned my Master’s degree from Department of Artificial Intelligence and Automation ([AIA](https://aia.hust.edu.cn/)) at Huazhong University of Science and Technology (HUST) in 2021, supervised by [Prof. Nong Sang](https://scholar.google.com/citations?user=ky_ZowEAAAAJ&hl), and obtained my Bachelor’s degree in Integrated Circuit (IC) Design from the Department of Optoelectronic and Electronic Information (OEI) at HUST in 2018.

News
====
- Awarded 2ed Place ("XuanYuan" on [Leaderboard](https://hidream-ai.github.io/ipvg-challenge.github.io/#results)) in ACM MM Identity-Preserving Video Generation (IPVG) Challenge, 2025.
- One Paper Accepted by ACM MM 2025.

Publications
======
<table width="100%" border="0" align="center" cellpadding="5" cellspacing="5" style="border-collapse: collapse; font-size: 12pt; border: none">
{% assign sorted_pubs = site.publications | sort: "year" | reverse %}
{% for pub in sorted_pubs %}
  {% assign year = pub.name | split: "_" | first %}
  {{ pub.content | markdownify }}
{% endfor %}
</table>

Honors & Awards
======
- Outstanding Graduate, 2018.06/2021.06
- National Scholarship <span style="color: red;">(top 2%)</span>, 2017.10

Education
======
- 2018/09 ~ 2021/07, HUST, AIA Dept, Master
  - Supervisor: [Prof. Nong Sang](https://scholar.google.com/citations?user=ky_ZowEAAAAJ&hl)
- 2014.09 ~ 2018.07 HUST, OEI Dept, Qiming College, Bachelor