// scripts/generate_report.js
import fs from "fs";
import path from "path";

const outputDir = "output";
const reportFile = path.join(outputDir, "report.html");

// 아주 기본적인 인포그래픽 리포트 HTML (나중에 실제 데이터로 채웁니다)
const html = `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>시니어 트렌드 인포그래픽 리포트</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.4/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-50 text-gray-800 p-8">
  <h1 class="text-3xl font-bold mb-4">📰 시니어 트렌드 요약 리포트</h1>
  <p class="text-gray-500 mb-6">자동 생성된 인포그래픽 요약 페이지입니다.</p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="bg-white p-6 rounded-xl shadow">
      <h2 class="text-xl font-semibold mb-2">📈 오늘의 키워드</h2>
      <p>예시: 건강, 시니어, 장수, 운동, 삶의 질</p>
    </div>
    <div class="bg-white p-6 rounded-xl shadow">
      <h2 class="text-xl font-semibold mb-2">🔥 인기 유튜브 트렌드</h2>
      <p>예시: 실버댄스, 건강루틴, 명상음악</p>
    </div>
  </div>

  <footer class="text-center mt-8 text-sm text-gray-500">© 2025 Senior Trend Board</footer>
</body>
</html>
`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(reportFile, html, "utf-8");
console.log("✅ report.html 생성 완료:", reportFile);
