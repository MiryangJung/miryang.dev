import type { Resume } from "./resume.type";

const resumeEn: Resume = {
	name: "Miryang Jung",
	job: "Frontend Engineer",
	contact: "miryang.dev@gmail.com",
	about: [
		{
			title: "I connect engineering to business outcomes.",
			description:
				"I focus on moving product metrics, not just shipping code. By analyzing user data, I planned and built a 'Personalized Skin Report' that reached 20% adoption across all users and was promoted to an official feature, and I drove 134% growth in cumulative downloads by shipping key features on time during a service pivot.",
		},
		{
			title: "I don't hesitate to expand my role.",
			description:
				"When a newly launched service had no traffic, I designed the marketing campaign myself; when the organization needed AI, I planned and ran a company-wide AI transformation (AX) program. I cross role boundaries whenever the problem calls for it.",
		},
		{
			title: "I pursue completeness in the customer experience.",
			description:
				"I take responsibility for the value that reaches customers, beyond code that merely works. I proactively surface technical constraints and edge cases at the planning stage to minimize rework, and after release I monitor real-world errors and UX issues myself to raise the quality of what we deliver. I also lead technical-debt reduction and performance optimization to secure long-term stability and a smooth user experience.",
		},
	],

	experience: [
		{
			company: "Grandeclip",
			position: "Senior Frontend Engineer · AX Partner",
			period: "Oct 2024 ~",
			content: [
				{
					title: "Magazine C",
					description:
						"Brand site and direct-to-consumer store for Magazine C, a documentary magazine about chairs.",
					link: "https://chairmagazine-c.com/en",
					do: [
						"Single-handedly built the brand site, e-commerce store, and back office as a full-stack developer",
						"Handled the practical work required to launch commerce, including payment gateway and card issuer reviews and duty-free processing",
						"Owned the product beyond development, communicating directly with the Magazine C team and leading the entire journey from site build to operations and marketing",
						"Planned and ran an influencer campaign with UTM and coupon tracking to solve the lack of traffic right after launch",
						"Built organic acquisition channels through SEO optimization and Google Shopping feed integration to expand search visibility",
					],
				},
				{
					title: "AI Tooling Design & Development",
					do: [
						"Built 'GrandePPT', a plugin that generates slide decks in the company style, and shipped v2.0 internally",
						"Designed a human+AI hybrid translation workflow for the English edition of Magazine C — defined the style guide, glossary consistency, and review process while collaborating with a translator",
						"Ran a proof of concept for a multi-agent orchestration tool (Paperclip) — validated role-based (CEO/CTO/CDO) agents from natural-language instructions to feature implementation",
					],
				},
				{
					title: "AX Program Design & Operation",
					link: "https://luma.com/grandeclip?period=past",
					do: [
						"AX Meetup — planned and hosted an open external AI meetup for case sharing (310 sign-ups for the 1st edition, ~400 for the 2nd, with most satisfaction ratings at 5/5)",
						"AI Buddy Program — designed and ran a mentor–mentee matching program to level up AI skills across the company",
						"AI Show & Tell — planned and hosted an internal demo contest for sharing things built with AI, spreading use cases and encouraging adoption",
						"AI Hands-on — planned and ran practice-oriented AI learning sessions for non-engineering roles",
					],
				},
				{
					title: "POUCH-it",
					description:
						"[Discontinued] An app for image-based beauty product management and search.",
					link: null,
					do: [
						"Led the completion of a service pivot by shipping its key features (auto upload, timeline view) on time, handling 1.5x the average workload during the pivot and contributing to a 134% increase in cumulative downloads and an all-time-high WAU",
						"Planned and built a 'Personalized Skin Report' based on user data analysis; it reached 20% adoption across all users after the beta release and was adopted and expanded as an official feature",
						"Diagnosed memory issues when rendering large image lists and cut memory usage by 90% (2GB → 200MB) through incremental improvements, eliminating app crashes (presented at FOSSASIA Summit 2026)",
						"Designed and built an LLM-based admin and a Slack AI bot (PIM), significantly improving data accessibility for non-engineering roles and speeding up decision-making",
						"Participated directly in influencer interviews and ad creative production for US market entry, producing the best-performing ad at $5.98 CPI",
						"Designed team-tailored setups (Rules, Skills, Hooks) for AI coding tools such as Cursor and Claude Code, building an AI-powered development workflow and driving team productivity",
					],
					techHighlight: ["Claude Code", "Cursor", "Expo (React Native)"],
					tech: [
						"Next.js(App Router)",
						"TypeScript",
						"Amplitude",
						"Gemini",
						"Linear",
					],
				},
				{
					title: "New Business Discovery Team",
					link: null,
					do: [
						"Conducted market research and data analysis to develop new business models",
						"Derived strategic insights from competitor and trend analysis to support business strategy",
					],
				},
				{
					title: "CHAAK",
					description:
						"[Discontinued] A social network for playing with stickers.",
					link: null,
					do: [
						"Optimized SEO through website internationalization, metadata fixes, and search engine registration",
						"Built and launched a new-user acquisition event featuring pinch-zoom and drag sticker placement, increasing weekly sign-ups by 1,300% over the average after launch",
					],
					techHighlight: ["Next.js(App Router)", "TypeScript"],
					tech: [
						"Tailwind",
						"Git",
						"Storybook",
						"Vercel",
						"Amplitude",
						"Notion",
					],
				},
			],
		},
		{
			company: "Uncutgems Company",
			companyColor: "#D35A46",
			position: "Frontend Engineer Lead",
			period: "Jul 2023 ~ Oct 2024",
			content: [
				{
					title: "Fabrill",
					description:
						"A commerce platform specializing in second-hand luxury jewelry.",
					do: [
						"As a founding member and lead, drove everything from stack selection to full-stack development, deployment, and operations — reaching 25K MAU while keeping monthly operating costs under $150",
						"Contributed directly to the Supabase open source project to unblock Kakao login, driving an 80% increase in new sign-ups",
						"Built an AI-powered product recommendation system using OpenAI embedding models, improving click-through rate more than 7x (5% → 36.8%)",
						"Cut page entry time by 1.5 seconds with Streaming SSR and improved purchase convenience with features like split payments, achieving a 30% increase in orders",
						"Led data-driven improvements to the product listing UX (auto-fill), increasing listings by 50% and reducing related inquiries by 100% (presented at FECONF2024 and FOSSASIA Summit 2025)",
						"Set up an A/B testing environment with Growthbook and a design system based on Storybook and shadcn-ui, contributing to data-driven decision-making and developer productivity",
						"Kept the WebView app running reliably (CodePush, universal links) and automated Slack bot notifications to streamline service operations",
						"Built a data-attribute-based GTM guide and tracking system in collaboration with the marketing team, enabling them to run their own analyses",
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
						"Storybook",
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
			company: "Greenlabs",
			companyColor: "#0BB25F",
			position: "Frontend Engineer",
			period: "Feb 2022 ~ Jul 2023",
			content: [
				{
					title: "Farmmorning",
					description:
						"A community service for everyone working in agriculture.",
					do: [
						"Developed 'Farming Diary' and 'Farming Ledger', productivity services for farms, participating from the planning stage",
						"Successfully rewrote a WebView-based app as a native React Native app, improving service stability and user experience",
						"Led modularization of the existing codebase and a home screen revamp, improving user accessibility and developer productivity",
						"Built a direct-trade marketplace for produce and farm machinery, expanding the service into e-commerce",
						"Wrote WebView integration guidelines to improve team collaboration",
						"Managed app builds, store reviews, and releases for stable service delivery",
					],
					tech: ["Tailwind", "Git"],
					techHighlight: [
						"ReScript",
						"Relay",
						"React",
						"Next.js",
						"React Native",
					],
					link: "https://play.google.com/store/apps/details?id=com.greenlabs.smartfarm&hl=en",
				},
				{
					title: "Farmmy",
					description:
						"[Discontinued] A renewal and global version of Farmmorning.",
					do: [
						"Developed React Native features to expose native app capabilities to the WebView",
						"Improved WebView navigation for a more natural UX",
						"Managed testers and app distribution with AppCenter",
						"Wrote a local development setup guide and architecture flow charts on the GitHub Wiki",
					],
					tech: ["AppCenter", "Git"],
					techHighlight: ["ReScript", "React Native", "Next.js"],
					link: null,
				},
				{
					title: "rescript-bindings",
					description:
						"An open source collection of external library bindings for ReScript.",
					do: [
						"Set up the monorepo",
						"Automated npm publishing with GitHub Actions",
					],
					tech: ["ReScript"],
					techHighlight: ["lerna", "Github Action"],
					link: "https://github.com/green-labs/rescript-bindings",
				},
			],
		},
		{
			company: "Raonstory",
			position: "FullStack Engineer",
			period: "Jun 2021 ~ Nov 2021",
			content: [
				{
					title: "Blockchain-based Service Development",
					do: [
						"Developed blockchain backend APIs using Hyperledger Aries, including Indy ledger connections, agents, and mediators",
						"Built the official React-based website and refactored existing frontend layouts",
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
			period: "Apr 2020 ~ May 2021",
			content: [
				{
					title: "Korea Customs Service AIXAC System",
					description:
						"Designed and developed multiple modules — portal, viewer, and simulator — for the Korea Customs Service's AI-based cargo inspection system.",
					do: [
						"Built the inspector-facing viewer, implementing bounding-box visualization of AI-identified cargo and real-time data delivery over WebSocket",
						"Designed and developed the real-time server performance monitoring screens for the AIXAC portal",
						"Proposed a Python-based redesign to resolve frequent failures in the legacy C# system and set the initial development direction",
						"Built a development simulator for the air-gapped environment (MSSQL, TCP communication, file generation flows)",
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
			period: "Aug 2019 ~ Feb 2020",
			content: [
				{
					title: "Security Consulting & Work Automation",
					description:
						"Performed web vulnerability remediation checks for critical ICT infrastructure and built work automation tools.",
					do: [
						"Performed web vulnerability remediation checks on critical information and communications infrastructure",
						"Built a notice mailing system and report-writing macros with Node.js and VBA, streamlining routine work",
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
			name: "Talks",
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
						"FECONF2024 - Frontend-led Commerce Service Development: Making the Most of Tools",
					url: "https://2024.feconf.kr/",
				},
				{
					title: "2023 Fengineer Con - Don't Be Afraid of Solo Projects",
				},
				{
					title: "System.out.Girls - It's Okay to Make Mistakes!",
				},
				{
					title: "FECONF2022 - Let's ReScript Together",
					url: "https://www.youtube.com/watch?v=208ZBisLuXw",
				},
				{
					title:
						"SojuCon Shot 1 - Good Questions Make Good Answers, with Relay",
				},
			],
		},
		{
			name: "Open Source",
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
			name: "Community",
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
			name: "Certifications",
			content: [
				{
					title: "ISO 27001 Lead Auditor Course",
				},
				{
					title: "Linux Master Level 2",
				},
			],
		},
	],
};

export default resumeEn;
