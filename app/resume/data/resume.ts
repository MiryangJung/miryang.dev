import type { Resume } from "./resume.type";

const resume: Resume = {
	name: "정미량",
	job: "Frontend Engineer",
	contact: "Email: miryang.dev@gmail.com",
	about: [
		{
			title: "비즈니스 성과로 연결합니다.",
			description:
				"단순 구현을 넘어 제품의 지표 변화에 집중합니다. 유저 데이터를 분석해 '개인 맞춤형 스킨 리포트'를 직접 기획·개발하여 전체 유저 20% 사용률을 기록, 정식 기능으로 채택시켰으며, 서비스 피보팅 과정에서 핵심 기능을 적기 출시해 누적 다운로드 134% 성장을 이끌었습니다.",
		},
		{
			title: "역할 확장에 주저하지 않습니다.",
			description:
				"배포한 서비스에 유입이 없자 직접 마케팅 캠페인을 설계하고, 조직에 AI가 필요하자 전사 AX 프로그램을 기획·운영하는 등 문제 해결에 필요하다면 역할의 경계를 넘습니다.",
		},
		{
			title: "고객 경험의 완결성을 추구합니다.",
			description:
				"'동작하는 코드'를 넘어 '고객에게 닿는 가치'를 책임집니다. 기획 단계에서 기술적 제약과 엣지케이스를 선제적으로 공유해 재작업을 최소화하고, 배포 후에도 실사용 환경의 오류와 UX 이슈를 직접 모니터링하여 고객 딜리버리의 완결성을 높여가고 있습니다. 또한, 기술 부채 해결 및 성능 최적화를 주도하여 서비스의 장기적인 안정성과 쾌적한 사용자 경험을 동시에 확보합니다.",
		},
	],

	experience: [
		{
			company: "그란데클립",
			position: "Senior Frontend Engineer · AX Partner",
			period: "24.10 ~",
			content: [
				{
					title: "Magazine C",
					description:
						"체어 다큐멘터리 매거진 C의 브랜드 사이트 및 자사몰입니다.",
					link: "https://chairmagazine-c.com/ko",
					do: [
						"브랜드 사이트와 자사몰(커머스)을 단독 개발 및 구축",
						"PG사 및 카드사 심사, 면세 처리 등 커머스 오픈에 필요한 실무를 직접 처리",
						"개발을 넘어 제품 오너십을 가지고 매거진 C팀과 직접 커뮤니케이션하며 사이트 구축부터 운영 및 마케팅까지 전 과정 주도",
						"오픈 직후 유입 부재를 해결하기 위해 UTM/쿠폰 추적을 갖춘 인플루언서 캠페인을 직접 기획 및 실행",
					],
				},
				{
					title: "AI 도구 설계·개발",
					do: [
						"회사 스타일 장표 생성 플러그인 '그란데피피티'를 제작해 사내에 v2.0 배포",
						"Magazine C 영문판 출간을 위해 사람+AI 하이브리드 번역 워크플로우를 설계 — 스타일가이드·용어집 일관성·검수 프로세스를 정의하고 번역가와 협업하여 진행",
						"멀티 에이전트 오케스트레이션 도구(Paperclip) 도입 PoC — 역할 기반(CEO/CTO/CDO) 에이전트로 자연어 지시부터 기능 구현까지 검증",
					],
				},
				{
					title: "AX 프로그램 설계·운영",
					link: "https://luma.com/calendar/manage/cal-a7cWEDWYmLzHwvy?period=past",
					do: [
						"AX Meetup — 사례 공유를 위한 외부 오픈 AI 밋업 기획·개최(1회 신청 310명 / 2회 약 400명, 참여 만족도 대부분 5점)",
						"AI 버디 프로그램 — 멘토–사내 멘티 매칭형 AI 실력 향상 프로그램 기획·운영하여 사내 AI 능력 향상",
						"AI 자랑대회 — AI로 만든 것·해본 것을 공유하는 사내 발표 대회 기획·개최하여 활용 사례 공유 및 AI 사용 독려",
						"AI 핸즈온 — 실습 중심의 비개발 직군 대상 AI 학습 세션 기획·운영",
					],
				},
				{
					title: "POUCH-it",
					description:
						"[서비스 종료] 이미지 기반 뷰티 제품 관리 및 검색을 제공하는 앱입니다.",
					link: null,
					do: [
						"서비스 피보팅의 핵심 기능(자동 업로드, 타임라인 뷰)을 적기 구현하여 프로젝트 완수를 주도했으며, 피보팅 기간 중 평균 대비 1.5배의 작업량을 소화하며 누적 다운로드 134% 증가 및 WAU 역대 최고치 달성에 기여",
						"사용자 데이터 분석을 통해 '개인 맞춤형 스킨 리포트'를 직접 기획·개발하여 베타 배포 후 전체 유저 20% 사용률을 기록, 정식 기능으로 채택 및 고도화",
						"대량 이미지 렌더링 시 메모리 사용량 이슈를 진단하고, 점진적 개선을 통해 메모리 점유를 90% 절감(2GB→200MB)하여 앱 크래시를 해결 (FOSSASIA Summit 2026 발표 사례)",
						"LLM 기반 어드민과 Slack AI 봇(PIM)을 직접 설계·구축하여 비개발 직군의 데이터 접근성을 크게 개선하고 의사결정 속도를 높였으며, 사내 AI 경진대회 및 타운홀 발표를 통해 조직 내 AI 활용 문화 전파",
						"미국 시장 진출을 위한 인플루언서 인터뷰 및 광고 소재 제작에 직접 참여하여 CPI $5.98의 최고 효율 광고를 제작",
						"Cursor, Claude Code 등 AI 코딩 도구의 Rule·Skill·Hook 등 팀 맞춤 환경을 설계하여 AI 기반 개발 워크플로우를 구축하고 팀 내 개발 생산성 향상을 주도",
					],
					techHighlight: ["Claude Code", "Cursor", "Expo (React Native)"],
					tech: [
						"Next.js(App Router)",
						"TypeScript",
						"Amplitude",
						"gemini",
						"Linear",
					],
				},
				{
					title: "신규 사업 기회 발굴 팀",
					link: null,
					do: [
						"신규 비즈니스 모델 개발을 위해 시장 조사 및 데이터 분석 수행",
						"경쟁사 및 트렌드 분석을 통해 전략적 인사이트를 도출하여 사업 전략 수립 지원",
					],
				},
				{
					title: "CHAAK",
					description: "[서비스 종료] 스티커로 노는 SNS입니다.",
					link: null,
					do: [
						"웹사이트 국제화, 메타데이터 수정 및 검색 엔진 등록을 통해 SEO 최적화 수행",
						"핀치줌과 드래그로 스티커를 붙이는 기능을 포함한 신규 유저 유입 이벤트 개발 및 런칭 후 주간 가입자 수 평균 대비 1300% 증가",
					],
					techHighlight: ["Next.js(App Router)", "TypeScript"],
					tech: [
						"Tailwind",
						"Git",
						"StoryBook",
						"Vercel",
						"Amplitude",
						"Notion",
					],
				},
			],
		},
		{
			company: "언컷젬스컴퍼니",
			companyColor: "#D35A46",
			position: "Frontend Engineer Lead",
			period: "23.07 ~ 24.10",
			content: [
				{
					title: "페이브릴",
					description: "세컨핸즈 명품 주얼리 전문 거래 커머스 플랫폼입니다.",
					do: [
						"초기 멤버이자 리드로서 스택 선정부터 풀스택 개발, 배포 및 운영 전 과정을 주도하여 MAU 2.5만 달성 및 월 운영 비용 $150 이하 유지",
						"카카오톡 로그인 지원을 위해 Supabase 오픈소스에 직접 기여하여 기술적 제약을 해결했으며, 이를 통해 신규 가입 유저 수 80% 증가 견인",
						"OpenAI 임베딩 모델을 활용한 AI 기반 상품 추천 시스템 구축으로 클릭률(CTR)을 5%에서 36.8%로 7배 이상 향상",
						"Streaming SSR 도입으로 진입 속도를 1.5초 단축하고, 분할 결제 기능 등 구매 편의성을 개선하여 주문 건수 30% 증가 달성",
						"데이터 기반의 상품 등록 UX 개선(자동 입력)을 주도하여 등록 수 50% 증가 및 관련 문의 100% 감소 성과 창출 (FECONF2024, FOSSASIA 2025 발표)",
						"Growthbook을 통한 A/B 테스트 환경 및 Storybook·shadcn-ui 기반 디자인 시스템 구축으로 데이터 기반 의사결정과 개발 생산성 향상에 기여",
						"WebView 앱의 안정적 운영(CodePush, 유니버셜 링크 등)과 Slack Bot 알림 자동화를 통해 서비스 운영 효율 최적화",
						"마케팅 부서와 협업하여 data attribute 기반 GTM 가이드 및 트래킹 체계를 구축함으로써 마케팅 팀의 자체적인 데이터 분석 역량 지원",
					],
					techHighlight: [
						"Next14",
						"TypeScript",
						"Supabase",
						"ReactNative Webview",
						"shadcn-ui",
						"Zod",
						"React Hook Form",
						"Vitest",
						"GTM",
					],
					tech: [
						"Zustand",
						"Cloudflare Images",
						"Cloudflare Workers",
						"Tailwind",
						"Git",
						"Retool",
						"StoryBook",
						"App Center CodePush",
						"Vercel",
						"Google Analytics",
						"Linear",
					],
					link: "https://fabrill.co.kr",
				},
			],
		},
		{
			company: "그린랩스",
			companyColor: "#0BB25F",
			position: "Frontend Engineer",
			period: "22.02 ~ 23.07",
			content: [
				{
					title: "팜모닝",
					description:
						"농업에 종사하는 모든 사람들을 위한 커뮤니티 서비스입니다.",
					do: [
						"농가 생산성 향상을 위한 서비스인 '영농 일지' 및 '영농 장부'를 기획 단계부터 참여하여 개발",
						"웹뷰 기반 앱을 React Native 네이티브 앱으로 성공적으로 재구축(Rewrite)하여 서비스 안정성 및 사용자 경험 고도화",
						"기존 코드베이스의 모듈화 및 홈 화면 개편을 주도하여 사용자 접근성 및 개발 생산성 향상",
						"농산물 및 농기계 직거래 마켓플레이스를 개발하여 서비스의 이커머스 영역 확장",
						"웹뷰 연동 가이드라인을 작성하여 팀 내 협업 효율 향상",
						"앱 빌드 및 스토어 심사·배포를 관리하여 안정적인 서비스 딜리버리 수행",
					],
					tech: ["Tailwind", "Git"],
					techHighlight: [
						"ReScript",
						"Relay",
						"React",
						"Next.js",
						"React Native",
					],
					link: "https://play.google.com/store/apps/details?id=com.greenlabs.smartfarm&hl=ko",
				},
				{
					title: "Farmmy",
					description: "[서비스 종료] 팜모닝의 리뉴얼 및 글로벌 서비스입니다.",
					do: [
						"앱 기능을 웹뷰에서 사용하기 위한 React Native 개발",
						"자연스러운 UX를 위한 웹뷰 네비게이션 개선 작업",
						"AppCenter를 사용한 테스터 관리 및 앱 배포",
						"Github Wiki를 사용해 앱 로컬 실행 환경 구축 가이드라인 작성 및 구조 플로우 차트 작성",
					],
					tech: ["AppCenter", "Git"],
					techHighlight: ["ReScript", "React Native", "Next.js"],
					link: null,
				},
				{
					title: "rescript-bindings",
					description:
						"ReScript를 사용하기 위한 외부 라이브러리 바인딩 모음이며 오픈소스 프로젝트",
					do: ["모노레포 구성", "Github Action을 사용한 npm 자동 배포"],
					tech: ["ReScript"],
					techHighlight: ["lerna", "Github Action"],
					link: "https://github.com/green-labs/rescript-bindings",
				},
			],
		},
		{
			company: "라온스토리",
			position: "FullStack Engineer",
			period: "21.06 ~ 21.11",
			content: [
				{
					title: "블록체인 기반 서비스 개발",
					do: [
						"하이퍼레저 ARIES를 활용한 INDY 원장 연결, 에이전트 및 Mediator 작성 등 블록체인 백엔드 API 개발",
						"React 기반 공식 홈페이지 개발 및 기존 프론트엔드 레이아웃 리팩토링",
					],
					techHighlight: ["React", "Aries Framework", "Node.js"],
					tech: ["Typescript", "Express.js", "Swagger", "Javascript", "Git"],
				},
			],
		},
		{
			company: "AiRISS",
			companyColor: "#365ec3",
			position: "FullStack Engineer",
			period: "20.04 ~ 21.05",
			content: [
				{
					title: "관세청 AIXAC 시스템",
					description:
						"관세청 AI 기반 화물 판독 시스템의 포털, 뷰어, 시뮬레이터 등 다수의 모듈을 설계 및 개발했습니다.",
					do: [
						"AI가 식별한 화물의 바운딩 박스 시각화 및 웹소켓 기반 실시간 데이터 전송을 구현하여 판독관용 뷰어 개발",
						"AIXAC 포털의 실시간 서버 성능 관제 화면 설계 및 개발",
						"기존 C# 시스템의 잦은 장애를 해결하기 위해 Python 기반 재설계를 제안하고 초기 개발 방향 수립",
						"폐쇄망 환경의 개발용 시뮬레이터를 구축(MSSQL, TCP 통신, 파일 생성 흐름 구현)",
					],
					techHighlight: ["Go", "Python", "Javascript"],
					tech: ["Flask", "Node.js", "Express.js", "MSSQL", "jQuery", "Git"],
					link: "https://blog.naver.com/k_customs/221835330899",
				},
			],
		},
		{
			company: "IGLOO Corporation",
			position: "Security Consulting Intern",
			period: "19.08 ~ 20.02",
			content: [
				{
					title: "보안 컨설팅 및 업무 자동화",
					description:
						"주요정보통신기반시설 대상 웹 취약점 이행 점검 및 업무 자동화 도구를 개발했습니다.",
					do: [
						"주요 정보 통신 기반 시설 웹 취약점 이행 점검 수행",
						"Node.js 및 VBA를 활용한 공고 메일링 시스템과 보고서 작성 매크로 구축으로 업무 효율화",
					],
					techHighlight: ["Burp Suite"],
					tech: ["Node.js", "VBA", "Wireshark"],
					link: null,
				},
			],
		},
	],
	otherExperience: [
		{
			name: "발표",
			content: [
				{
					title:
						"FOSSASIA Summit 2026 - Taming Large Image Lists in React Native",
					url: "https://eventyay.com/ev/88882f3e/talk/GZNFD0RK8SDA",
				},
				{
					title:
						"Supabase Launch Week 15 Seoul - Supercharging Kakao Login on Supabase",
					url: "https://www.meetup.com/dev-korea/events/308860015/",
				},
				{
					title:
						"FOSSASIA Summit 2025 - Enhancing Form Usability through UI Changes: Reducing Complexity",
					url: "https://eventyay.com/ev/4c0e0c27/talk/WXPS2KVG2W7N",
				},
				{
					title:
						"FECONF2024 - 프론트엔드 주도로 커머스 서비스 개발하기: 효율적 도구 활용",
					url: "https://2024.feconf.kr/",
				},
				{
					title: "2023펜지니어콘 - 솔플 프로젝트 두려워 마세요",
				},
				{
					title: "System.out.Girls - 실수해도 괜찮아!",
				},
				{
					title: "FECONF2022 - ReScript 같이 해요",
					url: "https://www.youtube.com/watch?v=208ZBisLuXw",
				},
				{
					title:
						"소주콘 Shot 1 : 진로 빨간 뚜껑 - 좋은 질문은 좋은 대답을 만든다. with relay",
				},
			],
		},
		{
			name: "오픈소스",
			content: [
				{
					title: "supabase/supabase",
					url: "https://github.com/supabase/supabase/pulls?q=is%3Apr+author%3AMiryangJung+is%3Aclosed",
				},
				{
					title: "supabase/auth",
					url: "https://github.com/supabase/auth/pulls?q=is%3Apr+author%3AMiryangJung+is%3Aclosed",
				},
				{
					title: "projectdiscovery/nuclei",
					url: "https://github.com/projectdiscovery/nuclei/pulls?q=is%3Apr+is%3Aclosed+author%3AMiryangJung",
				},
				{
					title: "EveryAnalytics/react-analytics-provider",
					url: "https://github.com/EveryAnalytics/react-analytics-provider/pulls?q=is%3Apr+author%3AMiryangJung+is%3Aclosed",
				},
				{
					title: "EveryAnalytics/web-analytics-handbook",
					url: "https://github.com/EveryAnalytics/web-analytics-handbook/pulls?q=is%3Apr+author%3AMiryangJung+is%3Aclosed",
				},
			],
		},
		{
			name: "커뮤니티",
			content: [
				{
					title: "Korean FE Article Team",
				},
				{
					title: "DEFY DEFAULT - Co-Founder",
				},
				{
					title: "Women Who Code - Local Organizer of Seoul Chapter",
				},
			],
		},
		{
			name: "자격증",
			content: [
				{
					title: "ISO 27001 Lead Auditor Course",
				},
				{
					title: "리눅스마스터 2급",
				},
			],
		},
	],
};

export default resume;
