
// Rui Hu / 胡瑞 — Academic Homepage Data
// File: src/data.js
// English first, Chinese second.
// Body text uses normal, upright fonts.
//
// Before deployment:
// 1. Replace src/assets/photo.jpg with your own portrait.
// 2. Put your CV PDF in public/Rui_Hu_CV_Oct2026.pdf.
// 3. Update src/site.config.js separately.

import photo from "./assets/photo.jpg";
import UM from "./assets/logos/UM02.png";
import YMU from "./assets/logos/YMU.png";
import GXNU from "./assets/logos/GXNU.png";

export const CV_URL = "Rui_Hu_CV_Oct2026.pdf";

// ============================================================
// 1. PROFILE
// ============================================================

export const profile = {
  nameEn: "Rui Hu",
  nameCn: "胡瑞",

  role: [
    "Lecturer in Mathematical Biology, Yunnan Minzu University",
    "讲师 云南民族大学",
  ],

  location: "Kunming, Yunnan, China / 中国云南省昆明市",

  photo,

  links: [
    {
      label: "GitHub",
      href: "https://github.com/harry91900",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.com.hk/citations?hl=zh-CN&view_op=list_works&gmla=AEk_c1vWRl52X6-79DDA7TMYoOYYzrqPY39ikv9SZ8H-szRcak0nFgI54hMd9W3JLt5jjPT9RX2dvBudZQrEk4iQ5V4&user=lQPHsuYAAAAJ",
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0009-0008-0843-3552",
    },
    {
      label: "CV (PDF)",
      href: CV_URL,
      newTab: true,
    },
  ],
};

// ============================================================
// 2. ABOUT
// English first, Chinese second.
// ============================================================

export const about = [
  `I am a Lecturer at Yunnan Minzu University, China, working in mathematical biology, mathematical modelling, and infectious-disease dynamics. I received my Ph.D. in Applied Mathematics from <a href="https://www.um.edu.my/">Universiti Malaya</a> in July 2026. Previously, I received an M.Sc. in Computational Mathematics from Yunnan Minzu University and a B.Sc. in Mathematics and Applied Mathematics from Guangxi Normal University.<br><br>我现任云南民族大学讲师，研究方向为数学生物学、数学建模与传染病动力学。2026 年 7 月，我在马来亚大学获得应用数学博士学位。此前，我分别获得云南民族大学计算数学硕士学位和广西师范大学数学与应用数学学士学位。`,

  `My academic research focuses on mathematical modelling and computational methods for complex biological systems. My previous work includes fractional-order epidemic models, media effects, time delays, individual protective awareness, testing mechanisms, stability analysis, parameter estimation, numerical simulation, and optimal control.<br><br>我的研究主要围绕复杂生物系统的数学建模与计算方法展开。此前的研究涉及分数阶流行病模型、媒体影响、时滞、个体防护意识、检测机制、稳定性分析、参数估计、数值模拟与最优控制。`,

  `My future research will explore the integration of fractional-order differential equations with physics-informed neural networks (PINNs) for epidemic forecasting, parameter estimation, and inverse problems. I am also interested in parameter identifiability, scientific machine learning, and spline-based numerical methods for differential equations and complex dynamical systems.<br><br>未来，我计划探索分数阶微分方程与物理信息神经网络（PINNs）的融合，开展传染病预测、参数估计与反问题研究。同时，我也关注参数可辨识性、科学机器学习，以及样条数值方法在微分方程和复杂动力系统中的应用。`,

  `I welcome academic exchange and research collaboration in fractional differential equations, mathematical epidemiology, dynamical systems, and data-driven modelling. My publications and research materials can be accessed through <a href="https://scholar.google.com.hk/citations?user=V-4PPD0AAAAJ&hl=en">Google Scholar</a>, <a href="https://orcid.org/0009-0008-0843-3552">ORCID</a>, and <a href="https://github.com/harry91900/covid19-malaysia-fractional-thesis-reproducibility">GitHub</a>.<br><br>欢迎围绕分数阶微分方程、数学流行病学、动力系统和数据驱动建模开展学术交流与科研合作。相关论文及科研资料可通过 <a href="https://scholar.google.com.hk/citations?user=V-4PPD0AAAAJ&hl=en">Google Scholar</a>、<a href="https://orcid.org/0009-0008-0843-3552">ORCID</a> 和 <a href="https://github.com/harry91900/covid19-malaysia-fractional-thesis-reproducibility">GitHub</a> 查看。`,
];

// ============================================================
// 3. NEWS
// ============================================================

export const news = [
  {
    date: "2026",
    text: `Joined Yunnan Minzu University as a Lecturer in Mathematical Biology.<br><br>入职云南民族大学，担任生物数学方向讲师。`,
  },
  {
    date: "Jul 2026",
    text: `Completed a Ph.D. in Applied Mathematics at Universiti Malaya, Malaysia.<br><br>获得马来亚大学应用数学博士学位。`,
  },
  {
    date: "2025",
    text: `Published research on fractional-order epidemic modelling in Ain Shams Engineering Journal, Scientific Reports, and AIMS Mathematics.<br><br>在 Ain Shams Engineering Journal、Scientific Reports 和 AIMS Mathematics 发表分数阶流行病建模相关研究成果。`,
  },
];

// ============================================================
// 4. EDUCATION
// ============================================================

export const education = [
  {
    org: "Universiti Malaya / 马来亚大学",
    role: "Ph.D. in Applied Mathematics / 应用数学博士",
    date: "Oct 2022 – Jul 2026",
    logo: UM,
    url: "https://www.um.edu.my/",
  },
  {
    org: "Yunnan Minzu University / 云南民族大学",
    role: "M.Sc. in Computational Mathematics / 计算数学硕士",
    date: "Sep 2019 – Jun 2022",
    logo: YMU,
    url: "https://www.ymu.edu.cn/",
  },
  {
    org: "Guangxi Normal University / 广西师范大学",
    role: "B.Sc. in Mathematics and Applied Mathematics / 数学与应用数学学士",
    date: "Sep 2015 – Jun 2019",
    logo: GXNU,
    url: "https://www.gxnu.edu.cn/",
  },
];

// ============================================================
// 5. SUPERVISORY TEAM
// ============================================================

export const supervisors = [
  {
    org: "Dr. Elayaraja Aruchunan",
    role: "Principal Supervisor / 主导师",
    desc: "Doctoral supervisor at Universiti Malaya.<br><br>马来亚大学博士研究主导师。",
    url: "https://umexpert.um.edu.my/elayarajah.html",
  },
  {
    org: "Dr. Nur Anisah Mohamed",
    role: "Co-supervisor / 联合导师",
    desc: "Doctoral supervisor at Universiti Malaya.<br><br>马来亚大学博士研究导师。",
    url: "https://umexpert.um.edu.my/nuranisah_mohamed.html",
  },
  {
    org: "Dr. Muhamad Hifzhudin Noor Aziz",
    role: "Co-supervisor / 联合导师",
    desc: "Doctoral supervisor at Universiti Malaya.<br><br>马来亚大学博士研究导师。",
    url: "https://umexpert.um.edu.my/hifz_din.html",
  },
];

// ============================================================
// 6. PUBLICATIONS
// ============================================================

export const publications = [
  {
    title:
      "Modeling and analysis of dynamical behavior in a fractional-order COVID-19 epidemic model with media coverage: A case study of Malaysia / 媒体报道影响下分数阶 COVID-19 流行病模型的动力学行为建模与分析：马来西亚案例研究",

    authors:
      "<strong>Rui Hu</strong>, Muhamad Hifzhudin Noor Aziz, Nur Anisah Mohamed, and Elayaraja Aruchunan",

    venue:
      "Ain Shams Engineering Journal, Volume 127 (2025), pp. 1081–1095",

    abstract:
      "English summary: Develops a fractional-order COVID-19 model incorporating media coverage and analyses Malaysian data to investigate the effects of media interventions on epidemic dynamics.<br><br>中文摘要：建立考虑媒体报道影响的分数阶 COVID-19 模型，并利用马来西亚疫情数据分析媒体干预对疾病传播动态的影响。",

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
      "Modeling and analysis of a delayed fractional order COVID-19 SEIHRM model with media coverage in Malaysia / 媒体报道影响下具有时滞的分数阶 COVID-19 SEIHRM 模型的建模与分析：马来西亚案例研究",

    authors:
      "<strong>Rui Hu</strong>, Muhamad Hifzhudin Noor Aziz, Elayaraja Aruchunan, and Nur Anisah Mohamed",

    venue:
      "Scientific Reports, Volume 15 (2025), Article 25305",

    abstract:
      "English summary: Develops a delayed fractional-order SEIHRM epidemic model with media coverage and investigates equilibrium stability and delay-induced dynamics.<br><br>中文摘要：构建考虑媒体影响与时滞机制的分数阶 SEIHRM 流行病模型，研究平衡点稳定性与时滞引起的动力学变化。",

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
      "Dynamic analysis and optimal control of a fractional-order epidemic model with nucleic acid detection and individual protective awareness: A Malaysian case study / 考虑核酸检测与个体防护意识的分数阶流行病模型动力学分析与最优控制：马来西亚案例研究",

    authors:
      "<strong>Rui Hu</strong>, Elayaraja Aruchunan, Muhamad Hifzhudin Noor Aziz, Cheng Cheng, and Benchawan Wiwatanapataphee",

    venue:
      "AIMS Mathematics, Volume 10, Issue 7 (2025), pp. 16157–16199",

    abstract:
      "English summary: Studies a fractional-order epidemic model incorporating testing and individual protective awareness, with emphasis on stability analysis, optimal control, and cost-effectiveness.<br><br>中文摘要：研究同时考虑检测机制与个体防护意识的分数阶流行病模型，重点分析模型稳定性、最优控制及不同干预策略的成本效果。",

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

// ============================================================
// 7. WORKING PAPERS
// ============================================================

export const workingPapers = [];

// ============================================================
// 8. RESEARCH EXPERIENCE
// ============================================================

export const experience = [
  {
    org: "Fractional-Order Epidemic Modelling and Dynamical Analysis / 分数阶流行病建模与动力学分析",

    desc:
      "Research on COVID-19 transmission in Malaysia, covering fractional-order SEIHRM models, media effects, time delays, testing, protective awareness, stability analysis, Hopf bifurcation, parameter fitting, and optimal control.<br><br>围绕马来西亚 COVID-19 传播过程开展研究，涉及分数阶 SEIHRM 模型、媒体影响、时滞、检测、个体防护意识、稳定性分析、Hopf 分岔、参数拟合与最优控制。",

    role: "Doctoral Research / 博士研究",

    date: "Oct 2022 – Jul 2026",
  },

  {
    org: "PINN-Based Data-Driven Epidemic Modelling / 基于 PINNs 的数据驱动流行病建模",

    desc:
      "Combines physics-informed neural networks with an SEIHR model and Malaysian COVID-19 data for model fitting, short-term forecasting, and comparison with data-driven baseline methods.<br><br>结合物理信息神经网络、SEIHR 模型与马来西亚 COVID-19 数据，开展模型拟合、短期预测及与数据驱动基准方法的比较。",

    role: "Research Direction / 研究方向",

    date: "2025–2026",
  },
];

// ============================================================
// 9. PROJECTS AND SOFTWARE COPYRIGHTS
// ============================================================

export const projects = [
  {
    org: "COVID-19 Malaysia Fractional Thesis Reproducibility / 马来西亚 COVID-19 分数阶建模复现项目",

    desc:
      "Reproducibility code and materials for fractional-order COVID-19 epidemic models developed during doctoral research.<br><br>提供博士研究期间建立的分数阶 COVID-19 流行病模型相关代码与复现材料。",

    role: "Open-Source Research Code / 开源科研代码",

    date: "2025–2026",

    links: [
      {
        label: "Code",
        href: "https://github.com/harry91900/covid19-malaysia-fractional-thesis-reproducibility",
      },
    ],
  },

  {
    org: "Media Influence Integrated PINNs–SEIHR / 媒体影响与 PINNs–SEIHR 建模",

    desc:
      "Explores the integration of media influence into a PINN-based SEIHR epidemic model for disease transmission modelling and forecasting.<br><br>探索将媒体影响机制融入基于 PINNs 的 SEIHR 流行病模型，用于疾病传播建模与预测。",

    role:
      "FSICG 2025 Research Collaboration, Universiti Malaya and the University of Adelaide / FSICG 2025 研究合作，马来亚大学与阿德莱德大学",

    date: "2025",
  },

  {
    org: "Software Copyright Registrations (3) / 软件著作权（3 项）",

    desc:
      "Disease Transmission Simulation and Analysis V1.0; Campus Infectious Disease Modelling V1.0; Public Opinion Governance Software V1.0. Registration numbers: 2021SR1383604, 2021SR1383603, and 2021SR1383602.<br><br>《疾病传播模拟与分析 V1.0》《校园传染病建模 V1.0》《舆情治理软件 V1.0》。登记号：2021SR1383604、2021SR1383603、2021SR1383602。",

    role: "Software Copyright Registrations / 软件著作权登记",

    date: "2021",
  },
];

// ============================================================
// 10. FUNDING
// Add confirmed funding information here.
// Do not invent funding agencies or grant numbers.
// ============================================================

export const funding = [];

// ============================================================
// 11. AWARDS AND HONOURS
// Add verified awards, scholarships, or honours here.
// Do not list publications or software copyrights as awards.
// ============================================================

export const awards = [];

// ============================================================
// 12. TEACHING
// ============================================================

export const teaching = [
  {
    org: "Linear Algebra/ 线性代数",

    date: "2026–Present",
  },
];

// ============================================================
// 13. LAST UPDATED
// ============================================================

export const lastUpdated = "October 2026";
