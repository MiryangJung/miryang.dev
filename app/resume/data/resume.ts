import type { Resume } from "./resume.type";

const resume: Resume = {
	name: "정미량",
	job: "Frontend Engineer",
	contact: "miryang.dev@gmail.com",
	about: [
		{
			title: "커머스를 세 번 만들었습니다.",
			description:
				"React·Next.js·React Native로 웹과 앱을 개발해 온 프론트엔드 엔지니어입니다. 팜모닝, 페이브릴, 매거진 C에서 커머스를 개발했으며, 초기 설계부터 결제·백오피스·운영까지 맡았습니다. 상품 등록 UX 개선으로 등록 수 50% 증가, 추천 시스템으로 CTR 5%→36.8% 향상을 이끌었습니다.",
		},
		{
			title: "제품 출시와 운영을 함께 책임집니다.",
			description:
				"매거진 C 자사몰을 단독 개발해 약 두 달 만에 출시하고, 정산·콘텐츠 편집·번역 도구까지 구축했습니다. 사업팀과 요구사항을 정리하고 출시 이후 운영과 유입 확보까지 담당했습니다. 2026년 상반기 그란데클립 우수인재로 선정되었습니다.",
		},
		{
			title: "사용자의 문제를 기술로 해결합니다.",
			description:
				"대량 이미지 렌더링의 메모리 사용량을 2GB에서 200MB로 줄여 앱 크래시를 해결했습니다. 사내 사용자를 위해서는 출처를 확인할 수 있는 지식 검색과 AI 번역 검수 도구를 개발하고, 교육·멘토링을 통해 실제 업무에 활용하도록 지원했습니다.",
		},
	],

	experience: [
		{
			company: "그란데클립",
			position: "Senior Frontend Engineer · AX Partner",
			period: "2024.10 ~",
			content: [
				{
					title: "Magazine C",
					description:
						"체어 다큐멘터리 매거진 C의 브랜드 사이트 및 자사몰입니다.",
					link: "https://chairmagazine-c.com/ko",
					do: [
						"브랜드 사이트·자사몰·콘텐츠 어드민과 DB를 단독 설계·개발해 약 두 달 만에 정식 출시하고, 매거진·굿즈의 직접 판매 채널 구축(2026.06)",
						"PortOne·KCP 및 간편결제 3종, 도서 면세, 회원·비회원 쿠폰을 구현하고 결제 심사부터 주문·배송·환불까지 운영 흐름 구축",
						"전담 기획자·디자이너 없이 사업팀과 요구사항·화면 구성을 구체화하고 QA와 출시 일정 조율",
						"결제·배송 기준일, 할인·환불을 반영한 주문·상품별 정산 화면과 CSV 내보내기를 개발하고, 공통 조회 로직으로 화면·다운로드 간 집계 기준 통일",
						"콘텐츠 편집기의 미저장 상태 표시와 저장·번역 충돌 방어를 구현해 원고 유실·덮어쓰기 위험을 줄이고, 모바일 미리보기 개선",
						"방문·주문 데이터의 일일 Slack 보고를 자동화하고, SEO·쇼핑 피드 연동으로 검색 유입 기반 구축",
						"인플루언서 캠페인을 제안·운영해 7명과 협업하고 콘텐츠 조회 21.2만 회·저장 1,350건·공유 533건 기록(2026.07~09 게시, 10월 집계)",
					],
					techHighlight: ["Next.js", "TypeScript", "Supabase"],
					tech: ["PortOne", "Google Analytics"],
				},
				{
					title: "POUCH-it",
					description:
						"[서비스 종료] 이미지 기반 뷰티 제품 관리 및 검색을 제공하는 앱입니다.",
					link: null,
					do: [
						"대량 이미지 목록의 렌더링을 개선해 메모리 사용량 90% 절감(2GB→200MB) 및 앱 크래시 해결; FOSSASIA Summit 2026에서 사례 발표",
						"사용자 데이터 분석을 바탕으로 '개인 맞춤형 스킨 리포트'를 기획·개발해 베타 배포 후 전체 사용자의 20%가 이용해 정식 기능으로 확대",
						"서비스 피보팅의 핵심 기능인 자동 업로드·타임라인 뷰를 구현해 전환 일정을 맞추고, 누적 다운로드 134% 증가 및 WAU 역대 최고치 달성에 기여",
						"LLM 기반 어드민과 Slack AI 봇(PIM)을 설계·개발해 비개발 직군이 업무 데이터를 조회할 수 있는 인터페이스 제공",
						"미국 시장 검증을 위한 인플루언서 인터뷰·광고 소재 제작에 참여하고 제작 소재에서 CPI $5.98 기록",
						"AI 코딩 도구의 프로젝트 규칙·재사용 스킬·자동 실행 훅을 구성해 팀 개발 워크플로우 표준화",
					],
					techHighlight: ["Expo (React Native)", "TypeScript"],
					tech: ["Next.js", "Amplitude", "Gemini"],
				},
				{
					title: "Magazine C 번역·검수 도구",
					description:
						"편집자와 번역가가 함께 사용하는 AI 번역 작업 도구입니다.",
					do: [
						"스타일가이드·용어집을 반영한 AI 초안 생성, 문단별 수정안 비교·선택 적용, 변경 이력, Word 내보내기를 연결해 원고 준비부터 번역 검수까지의 작업 흐름 구현",
						"AI 응답과 수동 편집 간 충돌을 감지하고 오래된 응답의 덮어쓰기를 차단하도록 저장 로직을 설계해 편집 내용 보존",
						"번역가 전용 접근 권한과 가이드 버전 이력을 구현하고, 외부 번역가와 검수·협업 기준 수립",
					],
					techHighlight: ["Next.js", "TypeScript", "Supabase"],
				},
				{
					title: "Pulse — 사내 지식 검색·질의응답",
					description:
						"회의록과 Slack 대화에서 업무 맥락과 출처를 찾는 사내 파일럿 서비스입니다.",
					do: [
						"Drive 회의록·Slack 대화 수집부터 검색·답변 생성·출처 표시까지 연결하는 질의응답 기능 개발 및 파일럿 배포",
						"키워드·의미·시간 정보를 결합한 검색과 Slack 직접 검색을 구성하고, 후보 재정렬·출처 검증으로 답변 근거를 확인할 수 있도록 설계",
						"사용자 인증·파일럿 접근 제어·작업 기한·웹훅 서명 검증을 구현하고 배포·장애 대응·권한 관리 절차 문서화",
					],
					techHighlight: ["Python", "Supabase", "Paperclip"],
				},
				{
					title: "AX 프로그램 설계·운영",
					link: "https://luma.com/grandeclip?period=past",
					do: [
						"비개발 직군을 위한 장표 생성 플러그인 '그란데피피티 2.0'을 개발·배포하고, AI 교육·버디·자랑대회를 직접 제안해 사내 활용 지원",
						"외부 공개 AX 밋업 2회의 기획·연사 섭외·협찬·진행 총괄; 1회 310명·2회 367명 신청",
						"AI 버디 1기의 멘토 매칭·팀별 지원·회고를 설계하고 직접 멘토링; 담당 팀이 AI 자랑대회 3회 대중투표 1위 수상",
						"AI 자랑대회 2·3회 운영 및 핸즈온 강의 진행; 핸즈온 만족도 5/5·실습 유용도 4.5/5 기록",
					],
				},
				{
					title: "글로우비스트",
					description:
						"운동하는 사람들을 위한 액티브 뷰티 브랜드 글로우비스트의 브랜드 사이트입니다.",
					link: "https://glowbeast.co/",
					do: [
						"반응형 브랜드 사이트의 홈·브랜드 소개·제품 라인업을 개발하고 운영 인수인계",
						"SEO 메타태그 최적화 및 Google Search Console 등록으로 검색 유입 기반 구축",
						"SMTP 기반 웰컴 이메일 발송 기능 구현",
					],
					techHighlight: ["Next.js", "TypeScript"],
				},
				{
					title: "CHAAK",
					description: "[서비스 종료] 스티커로 노는 SNS입니다.",
					link: null,
					do: [
						"웹사이트 국제화, 메타데이터 수정 및 검색 엔진 등록을 통해 SEO 최적화 수행",
						"핀치줌과 드래그로 스티커를 붙이는 기능을 포함한 신규 유저 유입 이벤트 개발 및 런칭 후 주간 가입자 수 평균 대비 1300% 증가",
					],
					techHighlight: ["Next.js", "TypeScript"],
					tech: ["Tailwind", "Storybook", "Vercel", "Amplitude"],
				},
			],
		},
		{
			company: "언컷젬스컴퍼니",
			companyColor: "#D35A46",
			position: "Frontend Engineer Lead",
			period: "2023.07 ~ 2024.10",
			content: [
				{
					title: "페이브릴",
					description: "세컨핸즈 명품 주얼리 전문 거래 커머스 플랫폼입니다.",
					do: [
						"초기 멤버이자 리드로서 스택 선정부터 풀스택 개발, 배포 및 운영 전 과정을 주도하여 MAU 2.5만 달성 및 월 운영 비용 $150 이하 유지",
						"카카오톡 로그인 지원을 위해 Supabase 오픈소스에 직접 기여하여 기술적 제약을 해결했으며, 이를 통해 신규 가입 유저 수 80% 증가 견인",
						"OpenAI 임베딩 모델을 활용한 AI 기반 상품 추천 시스템 구축으로 클릭률(CTR)을 5%에서 36.8%로 7배 이상 향상",
						"데이터 기반의 상품 등록 UX 개선(자동 입력)을 주도하여 등록 수 50% 증가 및 관련 문의 0건 달성 (FECONF2024, FOSSASIA 2025 발표)",
						"Streaming SSR 도입으로 페이지 진입 속도 1.5초 단축",
						"분할 결제 기능 등 구매 편의성 개선으로 주문 건수 30% 증가 달성",
						"Growthbook을 통한 A/B 테스트 환경 및 Storybook·shadcn-ui 기반 디자인 시스템 구축으로 데이터 기반 의사결정과 개발 생산성 향상에 기여",
						"WebView 앱의 안정적 운영(CodePush, 유니버셜 링크 등)과 Slack Bot 알림 자동화를 통해 서비스 운영 효율 최적화",
						"마케팅 부서와 협업하여 data attribute 기반 GTM 가이드 및 트래킹 체계를 구축함으로써 마케팅 팀의 자체적인 데이터 분석 역량 지원",
					],
					techHighlight: [
						"Next.js 14",
						"TypeScript",
						"Supabase",
						"React Native WebView",
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
						"Retool",
						"Storybook",
						"App Center CodePush",
						"Vercel",
						"Google Analytics",
					],
					link: "https://fabrill.co.kr",
				},
			],
		},
		{
			company: "그린랩스",
			companyColor: "#0BB25F",
			position: "Frontend Engineer",
			period: "2022.02 ~ 2023.07",
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
					tech: ["Tailwind"],
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
						"GitHub Wiki를 사용해 앱 로컬 실행 환경 구축 가이드라인 작성 및 구조 플로우 차트 작성",
					],
					tech: ["AppCenter"],
					techHighlight: ["ReScript", "React Native", "Next.js"],
					link: null,
				},
				{
					title: "rescript-bindings",
					description:
						"ReScript를 사용하기 위한 외부 라이브러리 바인딩 모음이며 오픈소스 프로젝트",
					do: ["모노레포 구성", "GitHub Actions를 사용한 npm 자동 배포"],
					tech: ["ReScript"],
					techHighlight: ["Lerna", "GitHub Actions"],
					link: "https://github.com/green-labs/rescript-bindings",
				},
			],
		},
		{
			company: "라온스토리",
			position: "FullStack Engineer",
			period: "2021.06 ~ 2021.11",
			content: [
				{
					title: "블록체인 기반 서비스 개발",
					do: [
						"하이퍼레저 ARIES를 활용한 INDY 원장 연결, 에이전트 및 Mediator 작성 등 블록체인 백엔드 API 개발",
						"React 기반 공식 홈페이지 개발 및 기존 프론트엔드 레이아웃 리팩토링",
					],
					techHighlight: ["React", "Aries Framework", "Node.js"],
					tech: ["TypeScript", "Express.js", "Swagger", "JavaScript"],
				},
			],
		},
		{
			company: "AiRISS",
			companyColor: "#365ec3",
			position: "FullStack Engineer",
			period: "2020.04 ~ 2021.05",
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
					techHighlight: ["Go", "Python", "JavaScript"],
					tech: ["Flask", "Node.js", "Express.js", "MSSQL", "jQuery"],
					link: "https://blog.naver.com/k_customs/221835330899",
				},
			],
		},
		{
			company: "IGLOO Corporation",
			position: "Security Consulting Intern",
			period: "2019.08 ~ 2020.02",
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
			name: "수상",
			content: [
				{
					title: "2026년 상반기 그란데클립 우수인재 선정",
				},
			],
		},
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
