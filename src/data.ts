import type { LucideIcon } from "lucide-react";
import {
  Building2,
  ChartColumnIncreasing,
  Eye,
  FileText,
  Flame,
  MessageSquareMore,
  Mic,
  Repeat,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Video,
  Zap,
} from "lucide-react";

export const meta = {
  team: "캡스톤디자인 54팀",
  course: "국민대학교 소프트웨어학부 캡스톤디자인 2026",
  projectName: "미핏",
  projectEnglish: "meFit",
  oneLiner: "未fit, 미핏. 면접에 맞는 나로.",
  tagline:
    "이력서·채용공고 기반 AI 가상 면접과 음성·영상 분석 리포트로\n면접 준비를 완성하는 자기주도형 면접 트레이닝 플랫폼입니다.",
  github: "github.com/kmu-aws-capstone-team-4",
  demoSite: "mefit.kr",
  apiSite: "api.mefit.kr",
};

export const sectionDescriptions = {
  target:
    "혼자서 빠르게 면접을 연습하고 싶지만 비용·정보 격차로 막막한 구직자를 위해 만들었습니다. ChatGPT 만으로 해결 안 되는 비언어 분석을 더합니다.",
  flow:
    "유저가 들어와서 → 이력서·채용공고 선택 → AI 면접 → 분석 리포트 확인. 4단계가 전부입니다. 모든 비동기 처리는 백그라운드에서 자동 진행됩니다.",
  comparison:
    "기존 ChatGPT 챗봇 / 학교 모의면접 대비 미핏의 차별점. 본인 이력서·공고 학습, 음성·표정 분석, 정량 점수까지 한 플랫폼에서 합리적 비용으로 제공됩니다.",
  features:
    "이력서 분석 · AI 화상 면접 · 표정 / 발화 분석 · 6 카테고리 LLM 리포트 · 게이미피케이션. 6 가지가 유기적으로 맞물려 학습 루프를 만듭니다.",
  screens:
    "mefit.kr 에서 실제 운영 중인 화면. 메인 대시보드부터 이력서 분석, 채용공고 수집, AI 면접 진행, 6 카테고리 리포트, 스트릭 게이미피케이션까지 모든 흐름을 한 페이지에서 확인할 수 있습니다.",
  architecture:
    "Django 코어 + 7 마이크로서비스 + AWS Lambda 5종이 k3s 클러스터 위에서 운영됩니다. 영상은 이벤트 기반 파이프라인으로 비동기 처리되어 사용자 대기 시간이 최소화됩니다.",
  techStack:
    "학생 캡스톤이지만 운영 환경 수준의 도구 조합. 프론트엔드부터 모니터링·CI/CD 까지 6개 영역으로 분류했습니다.",
  effects:
    "취준생 1인의 면접 준비 비용·시간·기회 비대칭을 측정 가능한 수준으로 줄입니다. 카테고리별 정량 피드백이 약점 파악 시간을 즉시화합니다.",
};

export interface ScreenItem {
  image: string;
  badge: string;
  title: string;
  desc: string;
  url: string;
}

export const screens: ScreenItem[] = [
  {
    image: "screens/00-landing.png",
    badge: "LANDING",
    title: "랜딩 페이지",
    desc: "未fit, meFit 의 핵심 가치를 한 화면에 압축한 메인 진입점. 회원가입 / 로그인 흐름.",
    url: "mefit.kr",
  },
  {
    image: "screens/01-home.png",
    badge: "DASHBOARD",
    title: "홈 대시보드",
    desc: "AI 면접 시작 CTA · 통계 카드 · 최근 활동 타임라인을 한 번에 모은 메인 진입.",
    url: "mefit.kr/home",
  },
];

export const members = [
  { studentId: "20191564", name: "김신건", role: "PM" },
  { studentId: "20225224", name: "김석준", role: "Backend" },
  { studentId: "20223059", name: "김유진", role: "Backend" },
  { studentId: "20222684", name: "이주현", role: "Frontend" },
];

export const heroStats = [
  { label: "마이크로서비스", value: "7" },
  { label: "AWS Lambda", value: "5" },
  { label: "면접 모드", value: "2" },
  { label: "분석 영역", value: "6" },
];

export const keywords = [
  "AI 가상 면접",
  "맞춤 질문 생성",
  "꼬리질문 LLM",
  "표정 · 발화 분석",
  "이력서 · 채용공고 매칭",
  "6 카테고리 리포트",
  "스트릭 · 게이미피케이션",
  "마이크로서비스",
  "이벤트 기반 영상 처리",
  "LangChain · LiteLLM",
];

export const heroHashtags = [
  "#AI가상면접",
  "#맞춤질문생성",
  "#꼬리질문LLM",
  "#표정발화분석",
  "#이력서채용공고매칭",
  "#6카테고리리포트",
  "#스트릭게이미피케이션",
  "#마이크로서비스",
  "#이벤트기반영상처리",
  "#LangChain",
  "#LiteLLM",
];

export const target = {
  primary: "취업 / 이직을 준비하는 취준생 · 현직자",
  problems: [
    {
      title: "혼자 연습할 곳이 없다",
      desc: "학교 / 유료 모의면접은\n인원 제한 · 비용 부담이 크다.",
    },
    {
      title: "ChatGPT만으로는 부족하다",
      desc: "표정 · 목소리 톤 같은\n비언어적 분석은 확인 불가.",
    },
    {
      title: "맞춤 질문이 필요하다",
      desc: "내 이력서 · 내 지원 공고에\n맞춰진 질문이 필요.",
    },
  ],
  experience: [
    "이력서 + 채용공고 기반 맞춤 질문",
    "영상 + 음성 분석 정량 피드백",
    "스트릭 · 보상으로 매일 한 면접 습관화",
    "지방 / 비명문대 / 직무 전환자도 동일 품질",
  ],
};

export type CompareCell = boolean | string;

export const comparison = {
  columns: ["ChatGPT", "학교 모의면접", "미핏"],
  rows: [
    { label: "본인 이력서 학습", values: [false, true, true] as CompareCell[] },
    { label: "본인 지원 공고 학습", values: [false, false, true] as CompareCell[] },
    { label: "꼬리 질문 (LLM)", values: ["일반론", true, true] as CompareCell[] },
    { label: "음성 / 표정 분석", values: [false, "사람", true] as CompareCell[] },
    { label: "정량 점수 리포트", values: [false, false, true] as CompareCell[] },
    { label: "무한 반복", values: [true, false, true] as CompareCell[] },
    { label: "회당 비용", values: ["저렴", "5~15만원", "5~10 티켓"] as CompareCell[] },
  ],
};

export interface FeatureItem {
  Icon: LucideIcon;
  title: string;
  desc: string;
  badge?: string;
}

export interface FeatureItem {
  Icon: LucideIcon;
  title: string;
  desc: string;
  badge?: string;
  bullets?: string[];
}

export const features: FeatureItem[] = [
  {
    Icon: FileText,
    title: "이력서 · 채용공고 분석",
    desc: "PDF · DOCX 업로드 즉시 텍스트 추출 → 임베딩 → LLM 파싱. 사람인 / 잡코리아 / 잡플래닛 URL은 Playwright 스크래핑 + GPT-4o Vision 폴백으로 이미지 공고까지 구조화합니다.",
    badge: "LangChain · OpenAI",
    bullets: [
      "텍스트 추출 + OpenAI Embedding",
      "사이트별 플러그인 + 봇 우회",
      "이미지 공고 GPT-4o Vision 폴백",
    ],
  },
  {
    Icon: Video,
    title: "AI 가상 화상 면접",
    desc: "꼬리질문형(5티켓) / 전체 프로세스(8티켓) + 친근·일반·압박 3 면접관 + 연습/실전 모드. WebSocket 양방향 통신과 MediaRecorder + S3 멀티파트 업로드로 끊김 없는 녹화를 보장합니다.",
    badge: "WebSocket · MediaRecorder",
    bullets: [
      "FOLLOWUP / FULL_PROCESS 2 모드",
      "EASY / MEDIUM / HARD 난이도",
      "Precheck → Q&A → 분석 자동 흐름",
    ],
  },
  {
    Icon: Eye,
    title: "표정 분석 (face-analyzer)",
    desc: "추출된 1FPS 프레임을 MediaPipe Face Landmarker 가 분석하여 positive · negative · neutral · no_face 4 카테고리로 분류. 면접 중 시선·표정 일관성을 정량화합니다.",
    badge: "MediaPipe · Lambda",
    bullets: [
      "Face blendshape 기반 분류",
      "프레임별 emotion timeline",
      "리포트의 비언어 점수에 반영",
    ],
  },
  {
    Icon: Mic,
    title: "발화 · 음성 분석",
    desc: "Whisper STT 로 발화 텍스트화 + voice-analyzer Lambda 가 말하기 속도(WPM), 필러 단어 빈도, 침묵 구간, 음량 변화를 측정해 답변 전달력을 수치화합니다.",
    badge: "Whisper · Lambda",
    bullets: [
      "WPM · 필러 단어 · 침묵 분석",
      "Turn 단위 voice-analyzer 병렬",
      "발화 점수 → 유창성 카테고리",
    ],
  },
  {
    Icon: ChartColumnIncreasing,
    title: "6 카테고리 LLM 리포트",
    desc: "직무 적합 · 구체성 · 의사소통 · 일관성 · 유창성 · 답변 분량의 6개 카테고리를 0~100 점으로 채점. 질문별 강점·개선점·모범답안과 종합 등급을 제공합니다.",
    badge: "Hypothesis 검증",
    bullets: [
      "0~100 점 + Excellent~Poor 등급",
      "질문별 모범 답안 + 근거",
      "Property-based Test 7 시나리오",
    ],
  },
  {
    Icon: Flame,
    title: "스트릭 · 업적 · 티켓",
    desc: "매일 10/30 티켓 자동 충전 + 면접 1회당 최대 5 티켓 보상. 일일 면접 참여로 스트릭 기록, 면접·연속·프로필·이벤트 4 종 업적으로 학습 루프를 만듭니다.",
    badge: "게이미피케이션",
    bullets: [
      "Free 10 / Pro 30 일일 충전",
      "FOLLOWUP 5 · FULL_PROCESS 10 차감",
      "면접·스트릭·프로필·이벤트 업적",
    ],
  },
];

export interface UserFlowStep {
  num: string;
  title: string;
  desc: string;
  detail: string;
  meta: string;
}

export const userFlow: UserFlowStep[] = [
  {
    num: "01",
    title: "이력서 등록",
    desc: "PDF · DOCX 업로드 또는 직접 입력으로 이력서 생성.",
    detail:
      "S3 업로드 → analysis-resume Worker 가 텍스트 추출 + OpenAI Embedding + LLM 파싱을 병렬 수행. SSE 로 실시간 진행 상태를 전달합니다.",
    meta: "POST /api/v1/resumes/ · 평균 30~60s",
  },
  {
    num: "02",
    title: "채용공고 등록",
    desc: "URL 입력 → 자동 스크래핑 또는 직접 입력.",
    detail:
      "Scraping Worker(Playwright + GPT) 가 사이트별 플러그인으로 추출. 봇 차단 시 Vision 폴백, 이미지 공고도 구조화. 사람인 / 잡코리아 / 잡플래닛 검증 완료.",
    meta: "Celery scraping 큐 · 평균 10~30s",
  },
  {
    num: "03",
    title: "면접 진행",
    desc: "Precheck 3단계 → 모드/난이도 선택 → AI 면접관과 Q&A.",
    detail:
      "WebSocket /ws/interviews/ 로 양방향 통신. FollowupQuestionGenerator 가 답변에서 키워드 추출해 즉석 후속 질문 생성. MediaRecorder + S3 멀티파트로 끊김 없는 녹화.",
    meta: "FOLLOWUP 5티켓 · FULL_PROCESS 10티켓",
  },
  {
    num: "04",
    title: "분석 리포트",
    desc: "S3 영상 → AWS Lambda 5종 → LLM 종합 분석.",
    detail:
      "frame-extractor → face-analyzer + audio-extractor → voice-analyzer + Whisper STT → LLMAnalyzer 가 6 카테고리 채점. SSE 로 진행 상태 실시간 표시.",
    meta: "TICKET_COST_ANALYSIS_REPORT 차감 · 평균 60~120s",
  },
];

export interface ArchLayer {
  Icon: LucideIcon;
  title: string;
  items: string[];
}

export const architectureLayers: ArchLayer[] = [
  {
    Icon: Building2,
    title: "프론트엔드",
    items: [
      "React 19 + TypeScript",
      "Vite + Bun + Tailwind 4",
      "Zustand · React Reducer",
      "MediaRecorder + S3 멀티파트 업로드",
      "WebSocket / SSE 클라이언트",
      "Feature-Sliced Design",
    ],
  },
  {
    Icon: Server,
    title: "백엔드 코어 (Django)",
    items: [
      "Django 6 + DRF 3.16 (Python 3.12+)",
      "Celery (default / analysis / scraping 큐)",
      "Channels — WebSocket(면접) + SSE(상태)",
      "BaseService / BaseQueryService 패턴",
      "LangChain + LiteLLM Gateway 통합",
      "TokenUsage 추적 + 비용 모니터링",
    ],
  },
  {
    Icon: MessageSquareMore,
    title: "마이크로서비스 (7)",
    items: [
      "scraping (Playwright + GPT)",
      "analysis-resume (Embedding + LLM)",
      "analysis-stt (Whisper)",
      "interview-analysis-report (LLM)",
      "voice-api (FastAPI + edge-tts)",
      "face-analyzer (MediaPipe Lambda)",
      "infra (k3s 매니페스트)",
    ],
  },
  {
    Icon: ShieldCheck,
    title: "인프라 · 모니터링",
    items: [
      "k3s on EC2 + Traefik Ingress",
      "AWS RDS PostgreSQL · S3 다중 버킷",
      "AWS SNS → SQS Fan-out → Lambda 5종",
      "Grafana + Prometheus + Loki",
      "Flower (Celery 모니터링)",
      "GitHub Actions + deploy.sh 무중단",
    ],
  },
];

export const dataPipeline = [
  "S3 ( .webm 업로드 )",
  "→ SNS video-uploaded",
  "→ SQS Fan-out (큐별 DLQ 격리)",
  "├─ Lambda video-converter   ( .mp4 변환 )",
  "├─ Lambda frame-extractor   ( .jpg 프레임 )",
  "├─ Lambda audio-extractor   ( .wav 16kHz )",
  "└─ Lambda face-analyzer     ( 표정 분류 )",
  "→ SQS video-step-complete (kombu long polling)",
  "→ Celery SQS Worker → InterviewRecording 갱신",
  "→ analysis 큐 → interview-analysis-report Worker",
  "→ Lambda voice-analyzer × N (병렬) + LLMAnalyzer",
  "→ TokenUsage 기록 + 6 카테고리 리포트 저장",
];

export interface TechGroup {
  Icon: LucideIcon;
  group: string;
  items: string[];
}

export const techStack: TechGroup[] = [
  {
    Icon: Zap,
    group: "프론트엔드",
    items: [
      "React 19",
      "TypeScript",
      "Vite",
      "Bun",
      "Tailwind 4",
      "Zustand",
      "MediaRecorder",
    ],
  },
  {
    Icon: Server,
    group: "백엔드",
    items: [
      "Python 3.12",
      "Django 6",
      "DRF",
      "Celery",
      "Channels",
      "FastAPI",
      "LangChain",
      "Pydantic",
    ],
  },
  {
    Icon: Sparkles,
    group: "AI / LLM",
    items: [
      "OpenAI GPT-4o",
      "Embedding",
      "Whisper STT",
      "MediaPipe",
      "LiteLLM Gateway",
      "AWS Bedrock",
    ],
  },
  {
    Icon: ChartColumnIncreasing,
    group: "모니터링 · 품질",
    items: [
      "Grafana",
      "Prometheus",
      "Loki",
      "Flower",
      "Hypothesis",
      "pytest",
      "Jest",
      "ruff · mypy",
    ],
  },
  {
    Icon: ChartColumnIncreasing,
    group: "관측 · 품질",
    items: [
      "Grafana",
      "Prometheus",
      "Loki",
      "Flower",
      "Hypothesis",
      "pytest",
      "Jest",
      "ruff · mypy",
    ],
  },
  {
    Icon: Repeat,
    group: "CI / CD",
    items: [
      "GitHub Actions",
      "Docker Hub",
      "deploy.sh 무중단",
      "롤백 자동화",
      "pre-commit hooks",
    ],
  },
];

export interface EffectItem {
  Icon: LucideIcon;
  title: string;
  metric: string;
  desc: string;
  bullets: string[];
}

export const expectedEffects: EffectItem[] = [
  {
    Icon: Target,
    title: "면접 1회당 비용",
    metric: "5~15만원 → 5~10 티켓",
    desc: "유료 면접 컨설팅 1회 비용으로 5~10 회 반복 연습이 가능합니다. Free 플랜도 매일 10 티켓이 자동 충전되고 면접 완료 시 최대 5 티켓을 보상으로 돌려받습니다.",
    bullets: [
      "Free 매일 10 / Pro 30 티켓 자동 충전",
      "면접 완료 시 최대 5 티켓 / 회 보상",
      "FOLLOWUP 5 · FULL_PROCESS 10 차감",
    ],
  },
  {
    Icon: ChartColumnIncreasing,
    title: "약점 파악 시간",
    metric: "주관 → 6 카테고리 정량",
    desc: "면접 종료 후 60~120 초 내에 6 영역의 0~100 점 점수와 등급이 자동 산출. 질문별 강점·개선점·모범 답안으로 자가 진단의 주관성을 정량화합니다.",
    bullets: [
      "Excellent / Good / Average / Below / Poor",
      "질문 단위 강점·개선점·모범 답안",
      "음성 분석(WPM·필러·침묵) 자동 반영",
    ],
  },
  {
    Icon: Users,
    title: "기회 비대칭 해소",
    metric: "24/7 무한 반복",
    desc: "지방·비명문·직무 전환자도 본인 이력서와 지원 공고만 등록하면 동일 품질의 면접 연습이 가능. 시간·장소·인력 의존도가 사라져 정보 격차가 줄어듭니다.",
    bullets: [
      "오프라인 모의면접 · 인력 의존 X",
      "이력서 · 지원 공고 기반 맞춤 질문",
      "스트릭 + 업적으로 학습 습관 형성",
    ],
  },
];
