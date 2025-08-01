export type Project = {
	title: string;
	description?: string;
	link: string;
};

export const projects: Array<{
	section: string;
	data: Project[];
}> = [
	{
		section: "오픈소스 기여",
		data: [
			{
				title: "supabase/auth",
				link: "https://github.com/supabase/auth/pulls?q=is%3Apr+author%3AMiryangJung+is%3Aclosed",
			},
			{
				title: "supabase/supabase",
				link: "https://github.com/supabase/supabase/pulls?q=is%3Apr+author%3AMiryangJung+is%3Aclosed",
			},
			{
				title: "projectdiscovery/nuclei",
				link: "https://github.com/projectdiscovery/nuclei/pulls?q=is%3Apr+is%3Aclosed+author%3AMiryangJung",
			},
		],
	},
	{
		section: "발표",
		data: [
			{
				title: "Supabase Launch Week 15 Seoul",
				description: "Supercharging Kakao Login on Supabase",
				link: "https://www.meetup.com/dev-korea/events/308860015",
			},
			{
				title: "FOSSASIA Summit 2025",
				description:
					"Enhancing Form Usability through UI Changes: Reducing Complexity",
				link: "https://eventyay.com/e/4c0e0c27/session/9465",
			},
			{
				title: "FECONF2024",
				description:
					"프론트엔드 주도로 커머스 서비스 개발하기: 효율적 도구 활용",
				link: "https://2024.feconf.kr",
			},
			{
				title: "System.out.Girls 오프라인 네트워킹",
				description: "실수해도 괜찮아!",
				link: "https://twitter.com/Systemoutgirls/status/1597930747624841216?s=20&t=NdKLP7oU00T9I_f3wfUNcw",
			},
			{
				title: "2023 펜지니어 컨퍼런스",
				description: "솔플 프로젝트 두려워 마세요",
				link: "https://www.instagram.com/p/CvECzhEy_t7/?utm_source=ig_web_copy_link",
			},
			{
				title: "FECONF2022",
				description: "ReScript 같이 해요",
				link: "https://www.youtube.com/watch?v=208ZBisLuXw",
			},
			{
				title: "2022 소주콘 Shot 1 : 진로 빨간 뚜껑",
				description: "좋은 질문은 좋은 대답을 만든다",
				link: "https://festa.io/events/2433",
			},
			{
				title: "XXIT 스트리트 데브 우먼 파이터",
				description: "개발자의 외주",
				link: "https://twitter.com/officialXXIT/status/1470682191999168512?s=20",
			},
		],
	},
	{
		section: "사이드 프로젝트",
		data: [
			{
				title: "개발 블로그",
				description: "miryang.dev",
				link: "https://github.com/MiryangJung/miryang.dev",
			},
			{
				title: "탄생 조각 모으기",
				description: "내 생일의 특별한 의미는?",
				link: "https://birth.bitbits.app/",
			},
			{
				title: "모바일 청첩장",
				description: "나의 결혼식을 위한",
				link: "https://github.com/MiryangJung/wedding-invitation",
			},
		],
	},
];
