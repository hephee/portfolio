"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "소개", href: "#about" },
  { label: "프로젝트", href: "#projects" },
  { label: "스킬", href: "#skills" },
  { label: "연락처", href: "#contact" },
];

const PROJECTS = [
  {
    title: "병원 예약 자동화 Agent",
    description:
      "LangGraph 기반 멀티 에이전트 시스템으로 병원 예약 과정을 자동화. 자연어로 요청하면 적합한 병원을 검색하고 예약까지 완료하는 엔드투엔드 AI Agent.",
    tags: ["LangGraph", "LangChain", "FastAPI", "Python", "RAG"],
    color: "from-blue-500 to-cyan-500",
    icon: "🏥",
  },
  {
    title: "의미 기반 취업 공고 추천 서비스",
    description:
      "단순 키워드 매칭을 넘어 벡터 임베딩과 RAG를 활용해 구직자의 역량과 경험을 의미적으로 분석하여 최적의 취업 공고를 추천하는 서비스.",
    tags: ["RAG", "QdrantDB", "Python", "Streamlit", "LangChain"],
    color: "from-violet-500 to-purple-500",
    icon: "💼",
  },
  {
    title: "공실랩 프로젝트",
    description:
      "공실 데이터를 분석하여 상권 활성화 방안을 도출하는 데이터 분석 프로젝트. SQL과 Python으로 공공 데이터를 수집·정제하고 인사이트를 시각화.",
    tags: ["Python", "SQL", "데이터 분석", "공공데이터", "Streamlit"],
    color: "from-emerald-500 to-teal-500",
    icon: "🏢",
  },
  {
    title: "기후동행카드 확장 프로젝트",
    description:
      "기후동행카드의 이용 데이터를 분석하여 교통 수요 패턴을 파악하고, AI 기반으로 카드 혜택 확장 방안과 정책 제안을 도출한 프로젝트.",
    tags: ["Python", "SQL", "데이터 분석", "정책 제안", "시각화"],
    color: "from-green-500 to-lime-500",
    icon: "🚌",
  },
  {
    title: "야간 버스 노선 확대 프로젝트",
    description:
      "심야 시간대 대중교통 공백 지역을 데이터로 분석하여 야간 버스 노선 최적화 방안을 제안. 공공 교통 데이터와 유동 인구 데이터를 결합하여 수요 예측.",
    tags: ["Python", "SQL", "공간 데이터", "수요 예측", "정책 분석"],
    color: "from-indigo-500 to-blue-500",
    icon: "🌙",
  },
  {
    title: "전세사기 방지 앱 개발",
    description:
      "전세 계약 시 사기 위험을 사전에 탐지하는 AI 앱. 등기부등본, 건축물대장 등 공공 데이터를 AI로 분석하여 위험 지표를 자동 감지하고 경고.",
    tags: ["FastAPI", "Python", "AWS S3", "EC2", "AI 분석"],
    color: "from-orange-500 to-red-500",
    icon: "🛡️",
  },
];

const SKILL_CATEGORIES = [
  {
    category: "AI / ML",
    icon: "🤖",
    skills: ["LangChain", "LangGraph", "RAG", "Vector DB", "Prompt Engineering"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Python", "FastAPI", "SQL", "REST API"],
  },
  {
    category: "Database",
    icon: "🗄️",
    skills: ["QdrantDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Cloud / Infra",
    icon: "☁️",
    skills: ["AWS S3", "AWS EC2", "Vercel", "Docker"],
  },
  {
    category: "Data Analysis",
    icon: "📊",
    skills: ["Pandas", "NumPy", "Matplotlib", "공공 데이터 분석"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: ["Streamlit", "Git", "GitHub", "Jupyter Notebook"],
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
          >
            김은희
          </a>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              연락하기
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            AI Engineer
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
              김은희
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-4 font-medium leading-relaxed">
            정확히 문제를 정의하여
          </p>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 font-medium leading-relaxed">
            이를{" "}
            <span className="text-blue-600 font-semibold">Data</span>와{" "}
            <span className="text-cyan-500 font-semibold">AI</span>로 해결합니다
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-200"
            >
              프로젝트 보기
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-blue-400 hover:text-blue-600 transition-all duration-200"
            >
              연락하기
            </a>
          </div>
          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href="https://github.com/hephee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/은희-김-8a04a9310"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="mailto:kehkeh0709@gmail.com"
              className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                안녕하세요, AI Engineer{" "}
                <span className="font-semibold text-slate-900">김은희</span>입니다.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                저는 단순히 기술을 구현하는 것에 그치지 않고,{" "}
                <span className="font-semibold text-blue-600">문제의 본질을 정확히 정의</span>하는 것을
                가장 중요하게 여깁니다. 올바른 문제 정의 위에서 Data와 AI가 진정한 가치를 만들어낼 수 있다고 믿습니다.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                LangChain, LangGraph, RAG 등 최신 AI 기술을 활용하여 실제 문제를 해결하는
                프로젝트들을 진행해왔으며, 공공 데이터 분석을 통한 사회 문제 해결에도 깊은 관심을 갖고 있습니다.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "진행 프로젝트", value: "6+", icon: "🚀", desc: "AI · 데이터 분석" },
                { label: "주요 기술", value: "10+", icon: "⚡", desc: "Python · AI · Cloud" },
                { label: "관심 분야", value: "AI", icon: "🤖", desc: "LLM · Agent · RAG" },
                { label: "목표", value: "임팩트", icon: "🎯", desc: "데이터 기반 문제 해결" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors duration-200 border border-slate-100 hover:border-blue-200"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{item.value}</div>
                  <div className="text-sm font-semibold text-slate-700 mb-1">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-4" />
            <p className="text-slate-500">문제를 정의하고, Data와 AI로 해결한 프로젝트들</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <div className="p-6">
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-4" />
            <p className="text-slate-500">문제 해결에 활용하는 기술 스택</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category) => (
              <div
                key={category.category}
                className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="font-bold text-slate-800">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            함께{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              만들어요
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-6" />
          <p className="text-slate-300 text-lg mb-12 leading-relaxed">
            AI와 데이터로 해결하고 싶은 문제가 있으신가요?
            <br />
            언제든지 편하게 연락해주세요.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:kehkeh0709@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-900/50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              kehkeh0709@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-8">
            <a
              href="https://github.com/hephee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/은희-김-8a04a9310"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-slate-950 text-center text-slate-500 text-sm">
        © 2025 김은희. All rights reserved.
      </footer>
    </div>
  );
}
