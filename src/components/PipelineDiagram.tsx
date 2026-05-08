import {
  ArrowDown,
  ArrowRight,
  Cloud,
  Cpu,
  Database,
  FileVideo,
  Image as ImageIcon,
  Mic2,
  Smile,
  Sparkles,
  Workflow,
} from "lucide-react";

interface NodeProps {
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  label: string;
  hint?: string;
  variant?: "input" | "queue" | "lambda" | "storage" | "celery" | "llm";
}

const variantStyle: Record<string, { bg: string; border: string; iconBg: string; text: string }> = {
  input: {
    bg: "bg-amber-50",
    border: "border-amber-300",
    iconBg: "bg-amber-100 text-amber-700",
    text: "text-amber-900",
  },
  queue: {
    bg: "bg-purple-50",
    border: "border-purple-300",
    iconBg: "bg-purple-100 text-purple-700",
    text: "text-purple-900",
  },
  lambda: {
    bg: "bg-orange-50",
    border: "border-orange-300",
    iconBg: "bg-orange-100 text-orange-700",
    text: "text-orange-900",
  },
  storage: {
    bg: "bg-bg-soft",
    border: "border-border",
    iconBg: "bg-gray-100 text-gray-700",
    text: "text-fg",
  },
  celery: {
    bg: "bg-emerald-50",
    border: "border-emerald-300",
    iconBg: "bg-emerald-100 text-emerald-700",
    text: "text-emerald-900",
  },
  llm: {
    bg: "bg-accent-bg",
    border: "border-accent/40",
    iconBg: "bg-accent/15 text-accent-deep",
    text: "text-accent-deep",
  },
};

function Node({ Icon, label, hint, variant = "storage" }: NodeProps) {
  const v = variantStyle[variant];
  return (
    <div
      className={`flex items-center rounded-[2.5mm] border ${v.bg} ${v.border}`}
      style={{ padding: "2mm 3mm", gap: "2.2mm" }}
    >
      <span
        className={`inline-flex items-center justify-center rounded-[1.5mm] ${v.iconBg}`}
        style={{ width: "6mm", height: "6mm" }}
      >
        <Icon size={11} strokeWidth={2.4} />
      </span>
      <div className="min-w-0 flex flex-col">
        <span
          className={`font-display font-bold ${v.text}`}
          style={{ fontSize: "3mm", lineHeight: 1.15, letterSpacing: "-0.01em" }}
        >
          {label}
        </span>
        {hint && (
          <span
            className="font-mono text-muted"
            style={{ fontSize: "2.4mm", lineHeight: 1.3, marginTop: "0.3mm" }}
          >
            {hint}
          </span>
        )}
      </div>
    </div>
  );
}

function StepLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex items-center"
      style={{ gap: "2mm", marginTop: "2mm", marginBottom: "1.5mm" }}
    >
      <span
        className="font-mono font-bold uppercase text-accent"
        style={{ fontSize: "2.6mm", letterSpacing: "0.18em" }}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className="block bg-accent/30"
        style={{ height: "0.3mm", flex: 1 }}
      />
    </div>
  );
}

function ArrowV() {
  return (
    <div className="flex justify-center" style={{ marginTop: "1mm", marginBottom: "1mm" }}>
      <ArrowDown size={11} strokeWidth={2.4} className="text-muted" aria-hidden="true" />
    </div>
  );
}

function ArrowH() {
  return (
    <ArrowRight
      size={10}
      strokeWidth={2.4}
      className="text-muted shrink-0 self-center"
      aria-hidden="true"
    />
  );
}

const PIPELINE_METRICS = [
  { label: "Lambda 5종 병렬", value: "converter / frame / audio / face / voice" },
  { label: "SQS 큐 4 + DLQ 4", value: "fan-out 격리 · redrive 자동" },
  { label: "Celery + kombu", value: "long polling · 무중단 합류" },
  { label: "처리 시간", value: "평균 60~120 초" },
];

export default function PipelineDiagram() {
  return (
    <div
      className="rounded-[3mm] border border-border bg-white"
      style={{ padding: "4mm 5mm" }}
    >
      <div
        className="flex items-baseline justify-between flex-wrap"
        style={{ marginBottom: "3mm", gap: "2mm" }}
      >
        <span
          className="font-display font-bold uppercase text-accent-deep"
          style={{ fontSize: "3.4mm", letterSpacing: "0.12em" }}
        >
          Data Pipeline · 영상 처리 흐름
        </span>
        <span
          className="font-display text-muted"
          style={{ fontSize: "2.7mm", letterSpacing: "0.02em" }}
        >
          이벤트 기반 비동기 · DLQ 격리 · 병렬 처리
        </span>
      </div>

      <p
        className="text-secondary"
        style={{
          fontSize: "2.65mm",
          lineHeight: 1.45,
          marginBottom: "2.5mm",
          letterSpacing: "-0.005em",
        }}
      >
        면접 영상은 S3 업로드 직후 SNS · SQS Fan-out 으로 Lambda 5종이
        병렬 처리. 각 큐는 DLQ 로 격리되어 한 단계 실패가 다른 처리를 막지
        않으며, 모든 결과는 step-complete 큐에 합류해 Celery + LLM 분석
        워커로 단일 흐름이 됩니다.
      </p>

      <div
        className="grid grid-cols-2 rounded-[2mm] border border-border bg-bg-soft"
        style={{ marginBottom: "2.8mm" }}
      >
        {PIPELINE_METRICS.map((m, i) => (
          <div
            key={m.label}
            style={{
              padding: "1.6mm 2.8mm",
              borderRight: i % 2 === 0 ? "1px solid var(--color-border)" : "none",
              borderTop: i >= 2 ? "1px solid var(--color-border)" : "none",
            }}
          >
            <div
              className="font-display font-bold text-fg"
              style={{
                fontSize: "2.85mm",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              {m.label}
            </div>
            <div
              className="font-display text-muted"
              style={{
                fontSize: "2.4mm",
                lineHeight: 1.3,
                marginTop: "0.3mm",
                letterSpacing: "-0.005em",
              }}
            >
              {m.value}
            </div>
          </div>
        ))}
      </div>

      <div>
        <StepLabel>STEP 01 · 사용자 업로드</StepLabel>
        <Node Icon={FileVideo} label="S3 (.webm)" hint="video-files 버킷" variant="input" />

        <ArrowV />

        <StepLabel>STEP 02 · 이벤트 팬아웃</StepLabel>
        <Node Icon={Workflow} label="SNS · video-uploaded" hint="topic 발행 → 3 큐 fan-out" variant="queue" />

        <ArrowV />

        <StepLabel>STEP 03 · 병렬 Lambda 처리</StepLabel>
        <div className="grid grid-cols-3" style={{ gap: "2mm" }}>
          <div className="flex flex-col" style={{ gap: "1.5mm" }}>
            <Node Icon={Cloud} label="video-converter" hint=".webm → .mp4" variant="lambda" />
            <Node Icon={Database} label="S3 .mp4" variant="storage" />
          </div>
          <div className="flex flex-col" style={{ gap: "1.5mm" }}>
            <Node Icon={ImageIcon} label="frame-extractor" hint="1FPS .jpg" variant="lambda" />
            <Node Icon={Database} label="S3 .jpg" variant="storage" />
            <Node Icon={Smile} label="face-analyzer" hint="MediaPipe 표정" variant="lambda" />
          </div>
          <div className="flex flex-col" style={{ gap: "1.5mm" }}>
            <Node Icon={Mic2} label="audio-extractor" hint=".wav 16kHz" variant="lambda" />
            <Node Icon={Database} label="S3 .wav" variant="storage" />
          </div>
        </div>

        <ArrowV />

        <StepLabel>STEP 04 · 완료 합류</StepLabel>
        <div className="flex items-center" style={{ gap: "2.5mm" }}>
          <Node Icon={Workflow} label="SQS video-step-complete" variant="queue" />
          <ArrowH />
          <Node
            Icon={Cpu}
            label="Celery SQS Worker"
            hint="kombu long polling"
            variant="celery"
          />
        </div>

        <ArrowV />

        <StepLabel>STEP 05 · LLM 분석 리포트</StepLabel>
        <div className="flex items-center" style={{ gap: "2.5mm" }}>
          <Node Icon={Workflow} label="analysis 큐" variant="queue" />
          <ArrowH />
          <Node
            Icon={Sparkles}
            label="interview-analysis-report"
            hint="Lambda voice-analyzer × N + LLMAnalyzer"
            variant="llm"
          />
        </div>
      </div>
    </div>
  );
}
