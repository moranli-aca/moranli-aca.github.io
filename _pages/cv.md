---
layout: archive
# title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<div class="cv-page">
  <p class="cv-page__intro">Researcher working across <strong>3D digital humans</strong>, <strong>controllable generation</strong>, and <strong>multimodal agents</strong>.</p>

  <section class="cv-section">
    <h2>Research Focus</h2>
    <div class="cv-focus">
      <div><strong>3D Digital Humans</strong><span>Hand · Face / Head · Hair · Cloth · Motion</span></div>
      <div><strong>Controllable Generation</strong><span>3D Content · Identity · Video Editing</span></div>
      <div><strong>Multimodal Agents</strong><span>Multimodal Generation · Agents</span></div>
    </div>
  </section>

  <section class="cv-section">
    <h2>Experience</h2>
    <div class="cv-experience">
      <div class="cv-experience__entry">
        <strong>Researcher</strong>
        <a class="cv-experience__org" href="https://www.tiktok.com/en/">TikTok</a>
        <time>Current</time>
      </div>
      <div class="cv-experience__entry">
        <strong>Senior Researcher</strong>
        <a class="cv-experience__org" href="https://open.youtu.qq.com">Tencent Youtu Lab</a>
      </div>
      <div class="cv-experience__entry">
        <strong>Graphics Algorithm Engineer</strong>
        <span class="cv-experience__org"><a href="https://www.kuaishou.com/en">Kwai</a> Y-tech</span>
      </div>
      <div class="cv-experience__entry">
        <strong>Research Intern</strong>
        <span class="cv-experience__org"><a href="https://www.kuaishou.com/en">Kwai</a> Y-tech<small> · Supervisors: <a href="https://brotherhuang.github.io/">Haibin Huang</a> and <a href="http://chongyangma.com/">Chongyang Ma</a></small></span>
      </div>
      <div class="cv-experience__entry">
        <strong>Research Intern</strong>
        <a class="cv-experience__org" href="https://ailab.tencent.com/ailab/zh/index">Tencent AI Lab</a>
      </div>
    </div>
  </section>

  <section class="cv-section">
    <h2>Education</h2>
    <div class="cv-entries">
      <div class="cv-entry cv-entry--detail">
        <div><strong>M.S. · Artificial Intelligence and Automation</strong><a href="https://english.hust.edu.cn/">Huazhong University of Science and Technology</a><small>Supervisor: <a href="https://scholar.google.com/citations?user=ky_ZowEAAAAJ&amp;hl">Prof. Nong Sang</a></small></div>
        <time>2018–2021</time>
      </div>
      <div class="cv-entry cv-entry--detail">
        <div><strong>B.S. · Optical and Electronic Information</strong><a href="https://english.hust.edu.cn/">Huazhong University of Science and Technology · Qiming College</a></div>
        <time>2014–2018</time>
      </div>
    </div>
  </section>

  <section class="cv-section">
    <h2>Skills</h2>
    <div class="cv-skills">
      <div><span>3D Production Pipeline</span><strong>Unreal Engine · Blender · Maya · Character Rigging · Animation</strong></div>
    </div>
  </section>

  <div class="cv-section-grid">
    <section class="cv-section">
      <h2>Honors &amp; Awards</h2>
      <ul class="cv-compact-list">
        <li><span>2nd Place · ACM MM IPVG Challenge</span><time>2025</time></li>
        <li><span>Outstanding Graduate</span><time>2018, 2021</time></li>
        <li><span>National Scholarship · Top 2%</span><time>2017</time></li>
      </ul>
    </section>

    <section class="cv-section">
      <h2>Professional Services</h2>
      <dl class="cv-services">
        <dt>Conferences</dt>
        <dd>NeurIPS · ECCV · ICCV · AAAI · ACM MM · SIGGRAPH · Eurographics</dd>
        <dt>Journals</dt>
        <dd>TVC · TVCJ</dd>
      </dl>
    </section>
  </div>

  <section class="cv-section cv-section--publications">
    <h2>Publications</h2>
    <ol class="cv-publications">
    {% assign sorted_publications = site.publications | sort: "date" | reverse %}
    {% for post in sorted_publications %}
      {% include archive-single-cv.html %}
    {% endfor %}
    </ol>
  </section>
</div>
