import type { Resume } from "./resume.type";

const resumeEn: Resume = {
	name: "Miryang Jung",
	job: "Frontend Engineer",
	contact: "miryang.dev@gmail.com",
	about: [
		{
			title: "I've built commerce three times.",
			description:
				"I'm a frontend engineer who has spent six years building products with React, Next.js, and React Native. I developed a direct-trade produce marketplace at Farmmorning; led 'Fabrill', a secondhand luxury jewelry commerce platform, as a founding member and FE lead from stack selection to operations, reaching 25K MAU; and single-handedly built the Magazine C store — from payment integration to back office — launching it in about two months. I've moved commerce metrics directly: a listing UX improvement grew product listings by 50%, and AI-powered recommendations lifted CTR 7x.",
		},
		{
			title: "I don't hesitate to expand my role.",
			description:
				"I take ownership of operations and marketing after launch, and have initiated and run company-wide AI training and mentoring programs. I extend product engineering into workplace improvements by building slide-generation tools for non-engineering teams. Selected for Grandeclip's outstanding employee recognition for the first half of 2026.",
		},
		{
			title: "I pursue completeness in the customer experience.",
			description:
				"I work to the standard of value that reaches customers, not just code that works. I proactively surface technical constraints and edge cases at the planning stage to reduce rework, and after release I monitor real-world errors and UX issues myself. I also lead performance and stability improvements, such as cutting the memory footprint of large image lists by 90% to eliminate app crashes.",
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
						"Used Claude Code to build the Supabase database, brand site, e-commerce store, and content admin as the sole full-stack developer; launched in about two months, establishing a direct sales channel for magazines and merchandise (Jun 2026)",
						"Integrated PortOne/KCP payments, Naver Pay, Kakao Pay, Toss Pay, and VAT-exempt book sales; handled gateway and card issuer reviews through order fulfillment and refunds",
						"Aligned requirements and page layouts directly with the Magazine C team and led QA to launch without a dedicated product manager or designer",
						"Built welcome and product-specific coupons, plus Cici, a daily Slack briefing bot that automates visitor and order reporting",
						"Proposed and designed an influencer campaign, then collaborated with seven creators in H2 to generate 212K cumulative content views, 1,350 saves, and 533 shares (Jul–Sep 2026 posts, measured in October)",
						"Built organic acquisition channels through SEO optimization and Google Shopping feed integration to expand search visibility",
					],
					techHighlight: ["Claude Code", "Next.js(App Router)"],
					tech: ["TypeScript", "Supabase", "PortOne", "Google Analytics"],
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
					tech: ["Next.js(App Router)", "TypeScript", "Amplitude", "Gemini"],
				},
				{
					title: "Glowbeast",
					description:
						"Brand site for Glowbeast, an active beauty brand for people who work out.",
					link: "https://glowbeast.co/",
					do: [
						"Built and handed over the Home, About, and Lineup pages with responsive layouts supporting screens down to 320px",
						"Laid the groundwork for organic search traffic with SEO meta tag optimization and Google Search Console registration",
						"Implemented SMTP in-house for welcome emails",
					],
					techHighlight: ["Next.js(App Router)", "TypeScript"],
				},
				{
					title: "AI Tooling Design & Development",
					do: [
						"Redesigned GrandePPT 2.0, a company-branded slide-generation plugin, for non-engineering users and released it on the internal marketplace (May 2026)",
						"Designed a human–AI translation workflow using the Claude API for Magazine C's English edition, defining the style guide, glossary, review process, and collaboration standards with an external translator",
						"Defined evaluation criteria for a Paperclip multi-agent orchestration proof of concept—real-time behavior, usability for non-specialists, and deployment reliability—and owned CDO-role tests and demo scenarios to support an adoption decision",
					],
				},
				{
					title: "AX Program Design & Operation",
					link: "https://luma.com/grandeclip?period=past",
					do: [
						"Initiated company-wide AI meetups, mentoring, demo contests, and hands-on sessions; built an operating process from proposals and internal approval through delivery and retrospectives",
						"Led two public AX meetups with 310 and 367 registrations respectively; handled speaker recruitment, sponsorships, and event delivery",
						"Designed mentor–mentee matching, team support, and retrospectives for the first AI Buddy cohort; personally mentored a team that won the audience vote at the third AI demo contest",
						"Planned, ran, and hosted the second and third AI demo contests to share practical use cases from non-engineering teams; taught hands-on AI sessions rated 5/5 for satisfaction and 4.5/5 for practical usefulness",
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
					tech: ["Tailwind", "Storybook", "Vercel", "Amplitude"],
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
						"Led data-driven improvements to the product listing UX (auto-fill), increasing listings by 50% and reducing related inquiries to zero (presented at FECONF2024 and FOSSASIA Summit 2025)",
						"Cut page entry time by 1.5 seconds by adopting Streaming SSR",
						"Improved purchase convenience with features like split payments, achieving a 30% increase in orders",
						"Set up an A/B testing environment with Growthbook and a design system based on Storybook and shadcn-ui, contributing to data-driven decision-making and developer productivity",
						"Kept the WebView app running reliably (CodePush, universal links) and automated Slack bot notifications to streamline service operations",
						"Built a data-attribute-based GTM guide and tracking system in collaboration with the marketing team, enabling them to run their own analyses",
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
					tech: ["Tailwind"],
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
					tech: ["AppCenter"],
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
					techHighlight: ["Lerna", "GitHub Actions"],
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
					tech: ["TypeScript", "Express.js", "Swagger", "JavaScript"],
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
					techHighlight: ["Go", "Python", "JavaScript"],
					tech: ["Flask", "Node.js", "Express.js", "MSSQL", "jQuery"],
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
			name: "Awards",
			content: [
				{
					title: "Grandeclip Outstanding Employee Recognition — H1 2026",
				},
			],
		},
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
