import type { Resume } from "./resume.type";

const resume: Resume = {
	name: "정미량",
	job: "Frontend Engineer",
	contact: "Email: miryang.dev@gmail.com",
	about: [
		{
			title: "저는 프론트엔드 개발자입니다.",
			description:
				"서비스 규모와 기술 변화에 유연하게 대응하며, 문제를 구조적으로 분석하고 개선 프로세스를 설계합니다. 주요 성과 중 하나로 시간과 비용을 고려하며 커머스 플랫폼을 제작했고, 억 단위의 거래액이 만든 경험이 있습니다.",
		},
		{
			title: "열정적으로 일합니다.",
			description:
				"프로젝트 기획 단계부터 적극적으로 참여하여 아이디어 발굴 및 치열한 논의를 거쳐 도출해낸 최적의 결과물을 코드로 구현하는 몰입감과 성취감을 좋아합니다.",
		},
		{
			title: "유저를 생각합니다.",
			description:
				"이러한 열정을 바탕으로 사용자에게 편리하고 즐거운 경험을 제공하고, 서비스 사용 과정에서 긍정적인 영향을 주는 다양한 기능을 만드는 프론트엔드 개발자를 목표로 합니다.",
		},
		{
			title: "제품에 애착을 가집니다.",
			description:
				"사용자와 비즈니스에 실질적인 가치를 제공하는 제품을 만들기 위해 애착을 가지고 임합니다. 이를 위해 기술적 역량을 꾸준히 발전시키고 있습니다. 제품의 성공이 곧 개인의 성장으로 이어지는 선순환을 추구합니다.",
		},
	],

	experience: [
		{
			company: "그란데클립",
			position: "Senior Frontend Engineer",
			period: "24.10 ~",
			content: [
				{
					title: "POUCH-it",
					description:
						"이미지를 통해 화장품을 검색하고, 오거나이징할 수 있는 앱입니다.",
					link: "https://apple.co/4k8Wpwq",
					do: [
						"React Native(Expo)를 사용한 iOS 앱 개발 및 운영, 스토어 심사 및 배포 관리",
						"LLM 친화적인 기술 스택과 프롬프트 엔지니어링을 활용, AI 채팅만으로 코딩이 가능한 백오피스를 구축하여 팀 생산성 증대",
						"DB 및 Amplitude와 연동되는 Slack 기반의 AI 어시스턴트 봇을 개발하여 데이터 기반 의사결정 프로세스 구축에 기여",
						"사용자 데이터 분석을 기반으로 기획 및 개발한 '개인 맞춤형 스킨 리포트' 기능이 베타 배포 후 전체 유저의 20% 사용률을 기록, 정식 기능으로 채택 및 고도화",
						"Expo 및 종속성 버전 최신화를 주도하여, 빌드 오류와 의존성 충돌을 해결",
						"대용량 이미지 업로드 시 유저 경험적 문제를 진단 후, Expo Modules API를 직접 작성하여 백그라운드 업로드 안정성 확보",
					],
					techHighlight: ["Expo (React Native)", "Next.js(App Router)"],
					tech: ["TypeScript"],
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
					description: "[서비스 종료] 스티커로 노는 SNS 입니다.",
					link: null,
					do: [
						"웹사이트 국제화, 메타데이터 수정 및 검색 엔진 등록을 통해 SEO 최적화 수행",
						"10일 동안 핀치줌과 드래그로 스티커를 붙이는 기능을 포함한 신규 유저 유입 이벤트 개발 및 런칭 후 주간 가입자 수 평균 대비 1300% 증가",
					],
					techHighlight: [
						"Next.js(App Router)",
						"TypeScript",
						"Flutter",
						"Dart",
					],
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
						"초기 멤버이자 리드로서, 스택 선정부터 풀스택 개발, 배포, 서비스 출시 및 운영까지 주도하여 2.5만 MAU 달성",
						"리소스와 비용을 고려한 효율적인 스택 선정으로 개발 및 운영 효율성을 극대화하여, 월 운영 비용을 $150 이하로 유지",
						"카카오톡 로그인 지원을 위해 Supabase 오픈소스 프로젝트에 직접 기여하여 호환성을 개선, 이를 통해 신규 가입 유저 수 80% 증가",
						"OpenAI의 text-embedding-3-small 모델을 활용한 AI 기반 상품 추천 시스템을 구축하여 클릭률 5%에서 36.8%로 향상",
						"Streaming SSR 도입으로 페이지 진입 속도 1.5초 단축으로 사용자 이탈률 감소",
						"주문 결제 시스템 및 쿠폰 시스템 개발, 분할 결제 기능을 추가 개발하여 주문 건수 30% 증가(사용자 결제 옵션을 확대로 구매 전환율 향상)",
						"상품 등록 폼의 UX 개선을 위해 확보된 데이터를 기반으로 자동 입력 기능을 제안하고 개발하여, 상품 등록 수 50% 증가 및 사용자 문의 100% 감소",
						"React Hook Form과 Zod를 활용한 폼 개발을 통해 유효성 검사 강화 및 코드 복잡성 감소",
						"폼 컴포넌트에 대한 테스트를 작성하여 버그 발생률 감소",
						"Growthbook을 활용한 A/B 테스트 도입으로 데이터 기반 의사결정 강화, 제품 개선 효과를 검증할 수 있는 체계 마련",
						"Storybook과 shadcn-ui를 활용하여 디자인 시스템을 구축, 손쉽게 컴포넌트를 작성하고 표현할 수 있는 환경 조성",
						"WebView 앱 개발 및 운영, 스토어 심사 및 배포, 유니버셜링크 구현 및 CodePush 연동, 웹과 앱 기능(이미지뷰어, 권한 등) 연동",
						"거래, 매출, 상품 등록 등의 Slack Bot 알림 자동화로 운영 효율성 및 대응 속도 향상",
						"마케팅 부서와 협력하여 data attribute를 활용한 GTM 설정을 용이하게 지원, 이를 위한 작업 및 가이드를 제공하여 마케팅 팀의 데이터 트래킹 구현 도움",
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
						"영농 작업 상황 및 장부 입력을 쉽게 도와주는 서비스인 영농 일지 & 영농 장부 개발",
						"기존 코드를 모듈화하며, 홈개편 작업 시행",
						"농산물 및 농기계를 판매하는 직거래장터 개발",
						"웹뷰 사용 및 외부 SDK 연동을 위한 React Native 개발",
						"웹뷰 앱 빌드 및 스토어 배포, 가이드라인 작성",
						"웹뷰 앱을 ReactNative로 재작성, 네이티브 앱 개발",
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
						"ReScript를 사용하기 위한 외부 라이브러리 바인딩 모음이며 오픈소스 프로젝트입니다.",
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
					title: "Hypercerts Home",
					description: "하이퍼서트 공식홈페이지입니다.",
					do: [],
					tech: ["Typescript", "TSX", "CRA", "Git", "Redux"],
					techHighlight: ["React", "Emotion"],
					link: "https://www.hypercerts.com",
				},
				{
					title: "HCT POC",
					description:
						"블록체인(하이퍼레저 INDY)을 이용한 신원 증명 프로젝트로 " +
						"하이퍼레저 ARIES를 이용한 STEWERD API를 작성했습니다.",
					do: [
						"하이퍼레저 ARIES 로 INDY 원장 연결 및 에이전트 작성",
						"앱을 위한 Mediator 작성",
						"Express.js 로 API 작성 및 Swagger 작성",
					],
					tech: ["Node.js", "Express.js", "Typescript", "Swagger"],
					techHighlight: ["Aries Framework"],
					link: null,
				},
				{
					title: "Qart.art",
					description:
						"QR코드와 블록체인을 이용하여 운영되는 작품 거래 사이트입니다.",
					do: [
						"기존에 이미 개발된 프론트엔드의 잦은 레이아웃 깨짐 현상 및 버그 수정하기 위해 리팩토링",
					],
					tech: ["JSP", "CSS", "AJAX", "Git"],
					techHighlight: ["Javascript"],
					link: "https://qart.art",
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
					title: "관세청 AIXAC Portal",
					description:
						"AIXAC 시스템의 데이터베이스 및 그래프를 보여주고," +
						"서버의 성능을 모니터링하는 화면을 설계 및 개발했습니다.",
					do: [
						"파일 다운로드 시 스트림을 이용하여 프로그레스바 구현",
						"실시간 서버 성능 관제용 화면 설계, 디자인 및 개발",
					],
					tech: ["JSP", "CSS", "tui-chart", "jQuery", "AJAX", "Git"],
					techHighlight: ["Javascript"],
					link: "https://blog.naver.com/k_customs/221835330899",
				},
				{
					title: "화물 판독 및 AI 식별용 뷰어",
					description:
						"인천특송물류센터, 인천항, 평택항에서 판독관들이 보는 AI 식별용 뷰 화면을 개발했습니다.",
					do: [
						"웹소켓으로 실시간 데이터 전송 구현",
						"뷰어 화면 디자인 및 설계 및 개발",
						"AI가 식별한 물품의 바운딩 박스를 이미지에 그리기 구현",
					],
					tech: ["HTML", "CSS", "Javascript"],
					techHighlight: ["Go", "echo"],
					link: null,
				},
				{
					title: "개발용 시뮬레이터",
					description:
						"폐쇄망에 설치되는 SW의 개발을 위해 해당 환경의 시스템 흐름과 유사하게 작동되도록 시뮬레이터를 개발하였습니다.",
					do: [
						"작동시 값을 쉽게 설정할 수 있도록 웹으로 개발",
						"MSSQL 데이터 삽입, TCP 통신, 파일 생성의 흐름을 구현",
						"기존에 Node.js로 개발했으나 유지보수를 위해 Flask로 전환",
					],
					tech: [
						"Javascript",
						"Express.js",
						"HTML",
						"CSS",
						"Python",
						"MSSQL",
						"Git",
					],
					techHighlight: ["Flask", "Node.js"],
					link: null,
				},
				{
					title: "기존 AIXAC 시스템 재설계",
					description:
						"기존 C#으로 개발된 SW의 잦은 문제 발생을 해결하기 위해 재설계를 제안했고, AI 엔진과의 호환성을 위해 언어를 파이썬으로 변경 후 진행했습니다.",
					do: [
						"기존 시스템의 설계, 구조 및 데이터 흐름 파악",
						"재설계 초기의 개발 방향 제시 (이후 팀리더 영입)",
					],
					tech: [],
					techHighlight: [],
					link: null,
				},
			],
		},
		{
			company: "IGLOO Corporation",
			position: "Security Consulting Intern",
			period: "19.08 ~ 20.02",
			content: [
				{
					title: "웹 취약점 이행 점검",
					do: [
						"주요정보통신기반시설 취약점 점검 가이드 기반 웹 취약점 이행 점검",
					],
					tech: ["Wireshark"],
					techHighlight: ["Burp Suite"],
					link: null,
				},
				{
					title: "나라장터 메일링",
					do: [
						"나라장터 API를 이용해 특정 키워드의 공고를 목록화 후 1시간마다 메일로 전송",
					],
					tech: ["Javascript"],
					techHighlight: ["Node.js"],
					link: null,
				},
				{
					title: "엑셀 보고서 자동화",
					do: [
						"취약점 보안점검 실행 결과로 생성되는 txt 파일을 Excel에 자동으로 채워주는 매크로를 VBA를 사용해 작성",
						"수작업으로 작성하던 보고서 작성 시간을 단축",
					],
					tech: ["Excel"],
					techHighlight: ["VBA"],
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
						"Supabase Launch Week 15 Seoul - Supercharging Kakao Login on Supabase",
					url: "https://www.meetup.com/dev-korea/events/308860015/",
				},
				{
					title:
						"FOSSASIA Summit 2025 - Enhancing Form Usability through UI Changes: Reducing Complexity",
					url: "https://eventyay.com/e/4c0e0c27/session/9465",
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
