import type { Resume } from "./resume.type";

const resume: Resume = {
	name: "정미량",
	job: "Frontend Engineer",
	contact: "Email: miryang.dev@gmail.com",
	about: [
		{
			title: "저는 열정적으로 일합니다.",
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
			companyColor: "#000000",
			position: "Frontend Engineer",
			period: "24.10 ~",
			content: [
				{
					title: "비공개",
					description: "비공개 프로젝트",
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
						"초기 멤버로 스택 선정부터 전반적인 서비스 풀스택 개발 및 배포, 서비스 출시 및 운영",
						"이미 잘 운영되거나 잘 만들어져있는 것을 잘 사용하는 것을 지향하는 것을 지향하며 전반적인 개발 리드",
						"리소스 및 비용을 고려한 스택 선정으로 개발 및 운영 효율성 극대화",
						"OpenAI text-embedding-3-small을 활용한 AI 상품 추천 시스템 구축으로 서비스 임팩트 증가",
						"Streaming SSR 도입으로 페이지 진입 속도 1.5초 단축",
						"상품 등록 폼 UX 개선을 위해 확보한 데이터를 활용한 자동 입력 기능 제안 및 개발로 상품 등록 및 입력 시간 단축",
						"Growthbook 활용 AB 테스트 도입으로 데이터 기반 의사결정 강화",
						"React Hook Form와 Zod를 활용한 멀티페이지 폼 개발로 개발 및 검증 효율성 향상",
						"Storybook, shadcn-ui 활용 디자인 시스템 구축, 런타임을 확인하지 않고도 쉽게 작성하고 표현할 수 있게 한다는 목표로 진행 중",
						"WebView 앱 개발 및 운영, 스토어 심사 및 배포, 유니버셜링크 구현 및 CodePush 연동, 웹과 앱 기능(이미지뷰어, 권한 등) 연동",
						"주문 결제 시스템 개발, 쿠폰 적용 및 단일 결제 및 분할 결제 개발",
						"거래, 매출, 상품 등록 등의 Slack Bot 알림 자동화로 운영 효율성 향상",
						"컴포넌트 테스트 코드 작성 및 안정성 확보",
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
					description: "팜모닝의 리뉴얼 및 글로벌 서비스입니다.",
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
