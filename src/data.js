// Rui Hu / 胡瑞 — academic homepage content
// This file contains the visible content for the homepage.
// Based on the academic-homepage template README.zh-CN.md.
//
// Before deployment:
// 1. Replace src/assets/photo.jpg with your own portrait.
// 2. Put the actual CV PDF in public/ as Rui_Hu_CV_Oct2026.pdf,
//    or change CV_URL below to the filename you actually use.
// 3. Update src/site.config.js separately (demoNotice, URL, SEO metadata).

import photo from "./assets/photo.jpg";

// Path to the CV PDF inside public/.
export const CV_URL = "Rui_Hu_CV_Oct2026.pdf";

export const profile = {
  nameEn: "Rui Hu",
  nameCn: "胡瑞",
  role: [
    "云南民族大学讲师（生物数学方向）",
    "Lecturer in Mathematical Biology, Yunnan Minzu University",
  ],
  location: "昆明，云南，中国 / Kunming, Yunnan, China",
  photo,
  links: [
    { label: "GitHub", href: "https://github.com/harry91900" },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com.hk/citations?user=V-4PPD0AAAAJ&hl=en",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0009-0008-0843-3552",
    },
    { label: "CV (PDF)", href: CV_URL, newTab: true },
  ],
};

export const about = [
  `我现任云南民族大学讲师，研究方向为数学生物学、数学建模与传染病动力学。2026 年 7 月，我在马来亚大学获得应用数学博士学位；此前分别于云南民族大学获得计算数学硕士学位、于广西师范大学获得数学与应用数学学士学位。<br><em>I am a Lecturer at Yunnan Minzu University, working in mathematical biology, mathematical modelling, and infectious-disease dynamics. I received my Ph.D. in Applied Mathematics from <a href="https://www.um.edu.my/">Universiti Malaya</a> in July 2026, following an M.Sc. in Computational Mathematics from Yunnan Minzu University and a B.Sc. in Mathematics and Applied Mathematics from Guangxi Normal University.</em>`,

  `我的博士研究聚焦马来西亚 COVID-19 的分数阶流行病建模，考察媒体影响、时滞、个体防护意识和检测机制对疾病传播的作用，并开展基本再生数、平衡点稳定性、Hopf 分岔、参数估计、数值模拟与最优控制分析。<br><em>My doctoral research focused on fractional-order epidemic modelling of COVID-19 in Malaysia. I studied the effects of media coverage, time delays, individual protective awareness, and testing, alongside the basic reproduction number, equilibrium stability, Hopf bifurcation, parameter estimation, numerical simulation, and optimal control.</em>`,

  `我的研究还涉及数据驱动建模，包括基于马来西亚 COVID-19 数据的 PINNs–SEIHR 模型拟合与预测。早期研究还涉及基于 ARIMA–SVM 的流感新增病例预测、随机传染病模型，以及 SEIQR 模型稳定性分析与数值模拟。未来，我计划进一步结合分数阶动力系统与物理信息神经网络（PINNs），开展参数估计、反问题与可辨识性分析，并探索样条函数及数值方法在复杂动力系统中的应用。<br><em>My research also includes data-driven modelling, including PINN-based SEIHR model fitting and forecasting with Malaysian COVID-19 data. Earlier work addressed ARIMA–SVM forecasting of new influenza cases, stochastic epidemic models, and stability analysis and numerical simulation of SEIQR models. Future work will integrate fractional-order dynamical systems with physics-informed neural networks (PINNs) for parameter estimation, inverse problems, and identifiability analysis, while exploring spline-based numerical methods for complex dynamical systems.</em>`,

  `我欢迎围绕分数阶微分方程、数学流行病学、动力系统与数据驱动建模开展学术交流。我的论文信息可通过 <a href="https://scholar.google.com.hk/citations?user=V-4PPD0AAAAJ&hl=en">Google Scholar</a> 和 <a href="https://orcid.org/0009-0008-0843-3552">ORCID</a> 查看，相关复现代码见 <a href="https://github.com/harry91900/covid19-malaysia-fractional-thesis-reproducibility">GitHub</a>。<br><em>I welcome academic exchange on fractional differential equations, mathematical epidemiology, dynamical systems, and data-driven modelling. My publications are listed on <a href="https://scholar.google.com.hk/citations?user=V-4PPD0AAAAJ&hl=en">Google Scholar</a> and <a href="https://orcid.org/0009-0008-0843-3552">ORCID</a>; reproducibility materials are available on <a href="https://github.com/harry91900/covid19-malaysia-fractional-thesis-reproducibility">GitHub</a>.</em>`,
];

// Short, dated updates. Keep the newest first.
export const news = [
  {
    date: "2026",
    text: `开始在云南民族大学担任讲师，研究方向为数学生物学。<br><em>Joined Yunnan Minzu University as a Lecturer in Mathematical Biology.</em>`,
  },
  {
    date: "Jul 2026",
    text: `完成马来亚大学应用数学博士学位，博士论文聚焦马来西亚 COVID-19 的分数阶流行病建模。<br><em>Completed a Ph.D. in Applied Mathematics at Universiti Malaya, with a thesis on fractional-order epidemic modelling of COVID-19 in Malaysia.</em>`,
  },
  {
    date: "Jul 2025",
    text: `关于媒体影响及时滞的分数阶 SEIHRM 流行病模型的论文发表于 <a href="https://doi.org/10.1038/s41598-025-99389-8"><em>Scientific Reports</em></a>。<br><em>Published a paper on a delayed fractional-order SEIHRM epidemic model with media coverage in <a href="https://doi.org/10.1038/s41598-025-99389-8"><em>Scientific Reports</em></a>.</em>`,
  },
  {
    date: "Jul 2025",
    text: `关于检测机制、个体防护意识与最优控制的研究发表于 <a href="https://doi.org/10.3934/math.2025724"><em>AIMS Mathematics</em></a>。<br><em>Published research on testing, individual protective awareness, and optimal control in <a href="https://doi.org/10.3934/math.2025724"><em>AIMS Mathematics</em></a>.</em>`,
  },
  {
    date: "2025",
    text: `关于媒体报道影响下 COVID-19 分数阶流行病模型的研究发表于 <a href="https://doi.org/10.1016/j.aej.2025.06.057"><em>Ain Shams Engineering Journal</em></a>。<br><em>Published research on a fractional-order COVID-19 epidemic model with media coverage in <a href="https://doi.org/10.1016/j.aej.2025.06.057"><em>Ain Shams Engineering Journal</em></a>.</em>`,
  },
];

// Institution URLs are optional. Logos are omitted until real institutional
// logo files are added to src/assets/logos/.
export const education = [
  {
    org: "马来亚大学 / Universiti Malaya",
    role: "应用数学博士 / Ph.D. in Applied Mathematics",
    date: "Oct 2022 – Jul 2026",
    desc:
      "博士研究指导教师：Dr. Elayaraja Aruchunan、Dr. Nur Anisah Mohamed、Dr. Muhamad Hifzhudin Noor Aziz。 / Ph.D. supervisory team: Dr. Elayaraja Aruchunan, Dr. Nur Anisah Mohamed, and Dr. Muhamad Hifzhudin Noor Aziz.",
    url: "https://www.um.edu.my/",
  },
  {
    org: "云南民族大学 / Yunnan Minzu University",
    role: "计算数学硕士 / M.Sc. in Computational Mathematics",
    date: "Sep 2019 – Jun 2022",
  },
  {
    org: "广西师范大学 / Guangxi Normal University",
    role: "数学与应用数学学士 / B.Sc. in Mathematics and Applied Mathematics",
    date: "Sep 2015 – Jun 2019",
    url: "https://www.gxnu.edu.cn/",
  },
];

// Published papers. Article titles and bibliographic details retain their
// official English wording; Chinese titles and summaries are translations.
export const publications = [
  {
    title:
      "媒体报道影响下分数阶 COVID-19 流行病模型的动力学行为建模与分析（马来西亚案例） | Modeling and analysis of dynamical behavior in a fractional-order COVID-19 epidemic model with media coverage: A case study of Malaysia",
    authors:
      "<strong>Rui Hu</strong>, Muhamad Hifzhudin Noor Aziz, Nur Anisah Mohamed, and Elayaraja Aruchunan",
    venue:
      "<em>Ain Shams Engineering Journal</em>, Volume 127 (2025), pp. 1081–1095",
    abstract:
      "中文摘要：建立考虑媒体报道影响的分数阶 COVID-19 模型，并以马来西亚疫情数据开展分析，研究媒体干预对传播动态及感染峰值的影响。 English summary: Develops a fractional-order COVID-19 model incorporating media coverage and analyses Malaysian data to examine how media interventions affect transmission dynamics and infection peaks.",
    bibtex: `@article{hu2025media,
  title   = {Modeling and analysis of dynamical behavior in a fractional-order COVID-19 epidemic model with media coverage: A case study of Malaysia},
  author  = {Hu, Rui and Aziz, Muhamad Hifzhudin Noor and Mohamed, Nur Anisah and Aruchunan, Elayaraja},
  journal = {Ain Shams Engineering Journal},
  volume  = {127},
  pages   = {1081--1095},
  year    = {2025},
  doi     = {10.1016/j.aej.2025.06.057}
}`,
    links: [
      {
        label: "Paper / DOI",
        href: "https://doi.org/10.1016/j.aej.2025.06.057",
      },
    ],
  },
  {
    title:
      "媒体报道影响下具有时滞的分数阶 COVID-19 SEIHRM 模型的建模与分析（马来西亚案例） | Modeling and analysis of a delayed fractional order COVID-19 SEIHRM model with media coverage in Malaysia",
    authors:
      "<strong>Rui Hu</strong>, Muhamad Hifzhudin Noor Aziz, Elayaraja Aruchunan, and Nur Anisah Mohamed",
    venue: "<em>Scientific Reports</em>, 15, Article 25305 (2025)",
    abstract:
      "中文摘要：构建包含媒体影响与时滞机制的分数阶 SEIHRM 模型，分析平衡点稳定性和时滞诱导的动力学变化，并利用马来西亚 COVID-19 数据检验模型拟合表现。 English summary: Develops a delayed fractional-order SEIHRM model with media coverage, analyses equilibrium stability and delay-induced dynamics, and evaluates model fitting using Malaysian COVID-19 data.",
    bibtex: `@article{hu2025delayed,
  title   = {Modeling and analysis of a delayed fractional order COVID-19 SEIHRM model with media coverage in Malaysia},
  author  = {Hu, Rui and Aziz, Muhamad Hifzhudin Noor and Aruchunan, Elayaraja and Mohamed, Nur Anisah},
  journal = {Scientific Reports},
  volume  = {15},
  pages   = {25305},
  year    = {2025},
  doi     = {10.1038/s41598-025-99389-8}
}`,
    links: [
      {
        label: "Paper / DOI",
        href: "https://doi.org/10.1038/s41598-025-99389-8",
      },
    ],
  },
  {
    title:
      "考虑核酸检测与个体防护意识的分数阶流行病模型动力学分析与最优控制（马来西亚案例） | Dynamic analysis and optimal control of a fractional-order epidemic model with nucleic acid detection and individual protective awareness: A Malaysian case study",
    authors:
      "<strong>Rui Hu</strong>, Elayaraja Aruchunan, Muhamad Hifzhudin Noor Aziz, Cheng Cheng, and Benchawan Wiwatanapataphee",
    venue:
      "<em>AIMS Mathematics</em>, 10(7) (2025), pp. 16157–16199",
    abstract:
      "中文摘要：研究同时考虑核酸检测与个体防护意识的 Caputo 分数阶 COVID-19 模型，开展动力学稳定性、参数估计及最优控制分析，并比较不同干预策略的成本效果。 English summary: Studies a Caputo fractional-order COVID-19 model with nucleic acid testing and individual protective awareness, including stability analysis, parameter estimation, optimal control, and cost-effectiveness comparisons.",
    bibtex: `@article{hu2025optimalcontrol,
  title   = {Dynamic analysis and optimal control of a fractional-order epidemic model with nucleic acid detection and individual protective awareness: A Malaysian case study},
  author  = {Hu, Rui and Aruchunan, Elayaraja and Aziz, Muhamad Hifzhudin Noor and Cheng, Cheng and Wiwatanapataphee, Benchawan},
  journal = {AIMS Mathematics},
  volume  = {10},
  number  = {7},
  pages   = {16157--16199},
  year    = {2025},
  doi     = {10.3934/math.2025724}
}`,
    links: [
      {
        label: "Paper / DOI",
        href: "https://doi.org/10.3934/math.2025724",
      },
    ],
  },
];

// Leave empty until a manuscript title and public status can be listed
// accurately. Empty arrays automatically hide their sections.
export const workingPapers = [];

export const experience = [
  {
    org: "分数阶流行病建模与动力学分析 / Fractional-Order Epidemic Modelling",
    desc:
      "博士研究围绕马来西亚 COVID-19 传播过程，涉及分数阶 SEIHRM 模型、媒体影响、时滞、检测与个体防护意识、稳定性分析、Hopf 分岔、参数拟合和最优控制。 / Doctoral research on COVID-19 transmission in Malaysia, covering fractional-order SEIHRM models, media effects, delays, testing and protective awareness, stability, Hopf bifurcation, parameter fitting, and optimal control.",
    role: "博士研究 / Doctoral research; Universiti Malaya",
    date: "Oct 2022 – Jul 2026",
  },
  {
    org: "基于 PINNs 的数据驱动流行病建模 / PINN-Based Data-Driven Epidemic Modelling",
    desc:
      "结合马来西亚 COVID-19 数据，将物理信息神经网络与 SEIHR 模型结合，开展模型拟合、短期预测及与数据驱动基准方法的比较。 / Combines physics-informed neural networks with an SEIHR model and Malaysian COVID-19 data for model fitting, short-term forecasting, and comparison with data-driven baselines.",
    role: "研究方向 / Research direction",
    date: "2025–2026",
  },
];

export const projects = [
  {
    org:
      "马来西亚 COVID-19 分数阶建模复现材料 / COVID-19 Malaysia Fractional Thesis Reproducibility",
    desc:
      "提供博士论文相关分数阶 COVID-19 流行病模型的代码与复现材料。 / Reproducibility code and materials for fractional-order COVID-19 epidemic models developed during the doctoral research.",
    role: "开源科研代码 / Open-source research code",
    date: "2025–2026",
    links: [
      {
        label: "Code",
        href: "https://github.com/harry91900/covid19-malaysia-fractional-thesis-reproducibility",
      },
    ],
  },
  {
    org:
      "媒体影响与 PINNs–SEIHR 建模 / Media Influence Integrated PINNs–SEIHR",
    desc:
      "探索将媒体影响机制融入基于 PINNs 的 SEIHR 流行病模型，用于疾病传播动力学建模与预测。 / Explores integrating media influence into a PINN-based SEIHR epidemic model for transmission modelling and forecasting.",
    role:
      "FSICG 2025 研究合作（马来亚大学与阿德莱德大学） / FSICG 2025 research collaboration (Universiti Malaya and the University of Adelaide)",
    date: "2025",
  },
  {
    org: "软件著作权（3 项） / Software Copyrights (3 Registrations)",
    desc:
      "《疾病传播模拟与分析 V1.0》《校园传染病建模 V1.0》《舆情治理软件 V1.0》。登记号：2021SR1383604、2021SR1383603、2021SR1383602。 / Disease Transmission Simulation and Analysis V1.0; Campus Infectious Disease Modelling V1.0; Public Opinion Governance Software V1.0. Registration numbers: 2021SR1383604, 2021SR1383603, and 2021SR1383602.",
    role: "软件著作权登记 / Software copyright registrations",
    date: "2021",
  },
];

// No awards were added because no verified award records were available.
export const awards = [];

export const teaching = [
  {
    org: "线性代数与数值计算方法 / Linear Algebra and Numerical Methods",
    desc:
      "本科数学课程教学与课程材料建设。 / Undergraduate mathematics teaching and course-material development.",
    role: "讲师，云南民族大学 / Lecturer, Yunnan Minzu University",
    date: "2026–Present",
  },
];

export const lastUpdated = "October 2026";
