export type Project = {
	title: string;
	description: string;
	url?: string;
	github?: string;
	image: string;
};

export const projects: Project[] = [
	{
		title: "모바일 청첩장",
		description: "나의 결혼식을 위한 모바일 청첩장",
		url: "https://wedding.beomyeong.miryang.dev",
		github: "https://github.com/MiryangJung/wedding-invitation",
		image: "/projects/wedding.png",
	},
	{
		title: "2023 펜지니어 컨퍼런스",
		description: "'솔플 프로젝트 두려워 마세요'라는 주제로 발표",
		image: "/projects/fengineercon1.jpeg",
	},
	{
		title: "System.out.Girls 오프라인 네트워킹",
		description: "'실수해도 괜찮아!'라는 주제로 발표",
		url: "https://twitter.com/Systemoutgirls/status/1597930747624841216?s=20&t=NdKLP7oU00T9I_f3wfUNcw",
		image: "/projects/systemoutgirls-net.jpg",
	},
	{
		title: "FECONF2022",
		description: "'ReScript 같이 해요'라는 주제로 발표",
		url: "https://www.youtube.com/watch?v=208ZBisLuXw",
		github:
			"https://github.com/MiryangJung/2022-feconf-slides-rescript-together",
		image: "/projects/feconf-rescript.webp",
	},
	{
		title: "projectdiscovery/nuclei",
		description: "ProjectDiscovery의 nuclei 프로젝트의 README를 번역",
		github:
			"https://github.com/projectdiscovery/nuclei/blob/master/README_KR.md",
		image: "/projects/nuclei.png",
	},
	{
		title: "소주콘 Shot 1 : 진로 빨간 뚜껑",
		description: "'좋은 질문은 좋은 대답을 만든다. with relay'라는 주제로 발표",
		url: "https://docs.google.com/presentation/d/1OQmPNj3v_w3iMXYCir6gAvZIAvFjm9zI8Z2BTGY7q54/edit?usp=sharing",
		image: "/projects/sojucon-1st.png",
	},
	{
		title: "XXIT 스트리트 데브 우먼 파이터",
		description: "'개발자의 외주'라는 주제로 발표",
		url: "https://twitter.com/officialXXIT/status/1470682191999168512?s=20",
		image: "/projects/sdf.gif",
	},
	{
		title: "miryang.dev",
		description: "My personal website written with Next.js",
		github: "https://github.com/MiryangJung/miryang.dev",
		image: "/projects/miryangdev.gif",
	},
];
