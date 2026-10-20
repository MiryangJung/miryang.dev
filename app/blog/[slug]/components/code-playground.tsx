"use client";

import { useCallback, useRef } from "react";

interface CodePlaygroundProps {
  code: string;
}

export function CodePlayground({ code }: CodePlaygroundProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // 트로피 이미지(400px 높이)가 포함된 경우 더 큰 높이 필요
  const hasTrophy = code.includes("trophy");
  const minHeight = hasTrophy ? 440 : 200;

  const srcdoc = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #1e1e2e;
  padding: 16px;
  overflow: hidden;
  gap: 12px;
}
.wrapper {
  width: 60%;
  height: 24px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  border: 2px solid #333;
}
.bar {
  height: 100%;
  background: #e74c3c;
}
p { color: #9ca3af; font-family: sans-serif; font-size: 14px; text-align: center; }
</style>
</head>
<body>
${code}
</body>
</html>`;

  const refreshPreview = useCallback(() => {
    if (iframeRef.current) {
      iframeRef.current.srcdoc = srcdoc;
    }
  }, [srcdoc]);

  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-gray-700 bg-[#1e1e2e]">
      {/* 헤더 */}
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
        <span className="text-sm text-gray-400">Code Playground</span>
      </div>

      <div className="flex flex-col md:flex-row" style={{ minHeight }}>
        {/* 코드 영역 */}
        <div
          className="min-w-0 overflow-hidden border-b border-gray-700 md:border-b-0 md:border-r"
          style={{ flex: "1 1 50%", maxWidth: "50%" }}
        >
          <div className="flex border-b border-gray-700">
            <span className="px-4 py-2 text-sm font-bold text-white">
              HTML
            </span>
          </div>
          <pre className="overflow-hidden p-4 text-[13px] leading-relaxed">
            <code className="whitespace-pre text-gray-300">{code}</code>
          </pre>
        </div>

        {/* 결과 영역 */}
        <div className="flex flex-col" style={{ flex: "1 1 50%" }}>
          <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
            <span className="text-sm font-bold text-white">RESULT</span>
            <button
              type="button"
              onClick={refreshPreview}
              className="text-gray-400 hover:text-white"
              aria-label="Refresh"
            >
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
              </svg>
            </button>
          </div>

          <iframe
            ref={iframeRef}
            srcDoc={srcdoc}
            className="w-full flex-1 border-0"
            style={{ background: "#1e1e2e", minHeight }}
            title="Preview"
            sandbox="allow-scripts"
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
}
