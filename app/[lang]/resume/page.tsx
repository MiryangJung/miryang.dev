import { Card, CardContent, CardHeader } from "@/components/ui/card";
import metadata from "@/util/metadata";
import { ArrowUpRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import resume from "./data/resume";

export default function ResumePage() {
	return (
		<>
			<div className="flex justify-between">
				<h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
					정미량
				</h1>
				<Link
					href="https://read.cv/miryang"
					target="_blank"
					className="text-sm"
				>
					Resume (English Version)
				</Link>
			</div>
			<p className="text-lg text-gray-700 dark:text-gray-300">
				Frontend Engineer
			</p>

			<Link href="mailto:miryang.dev@gmail.com" className="my-3 text-sm">
				miryang.dev@gmail.com
			</Link>

			<p className="text-sm font-light text-gray-700 dark:text-gray-300 gap-0.5 break-keep whitespace-pre-wrap flex flex-col">
				{resume.about.map((item, index) => (
					<Fragment key={index}>
						<span className="font-semibold text-gray-900 dark:text-gray-100">
							{item.title}
						</span>
						<span className="mb-2">{item.description}</span>
					</Fragment>
				))}
			</p>

			<section className="my-5 pt-10 border-t">
				<h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
					Work Experience
				</h2>

				{resume.experience.map((item) => (
					<Card
						className="mb-6 bg-white dark:bg-gray-900 border-none shadow-none"
						key={item.company}
					>
						<CardHeader className="flex flex-col px-0">
							<h3
								className="text-base font-bold text-gray-900 dark:text-gray-100"
								style={{ color: item.companyColor }}
							>
								{item.company}
							</h3>
							<p className="text-zinc-500 dark:text-gray-400 text-xs">
								{item.position} | {item.period}
							</p>
						</CardHeader>
						<CardContent className="text-[#555555] dark:text-gray-300 flex flex-col gap-4">
							{item.content.map((content) => (
								<div
									key={content.title}
									className="break-keep flex flex-col mb-2 gap-1"
								>
									<div className="flex items-center gap-1">
										<span className="font-bold text-sm">{content.title}</span>
										{content.link && (
											<Link href={content.link} target="_blank">
												<ArrowUpRightIcon width={12} height={12} />
											</Link>
										)}
									</div>
									{content.description && (
										<span className="text-slate-500 font-light text-xs mb-2">
											{content.description}
										</span>
									)}

									{content.do?.map((doItem, index) => {
										return (
											<div
												key={index}
												className="flex items-center gap-1 text-sm mb-1"
											>
												<span>·</span>
												<span className=" dark:text-gray-300 break-keep">
													{doItem}
												</span>
											</div>
										);
									})}

									<p className="text-xs text-zinc-400 font-extralight">
										<span className="font-medium">
											{content.techHighlight?.join(", ")}
										</span>
										{content.tech && ", "}

										<span>{content.tech?.join(", ")}</span>
									</p>
								</div>
							))}
						</CardContent>
					</Card>
				))}
			</section>

			<section className="my-5">
				<h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
					Other Experience
				</h2>

				{resume.otherExperience.map((item) => (
					<div className="flex flex-col gap-1 mb-5" key={item.name}>
						<h3 className="text font-bold text-gray-900 dark:text-white">
							{item.name}
						</h3>
						<p className="text-sm text-gray-600 dark:text-gray-300 flex flex-col gap-1">
							{item.content.map(({ url, title }) =>
								url ? (
									<Link
										href={url}
										key={title}
										className="text-sky-800 dark:text-sky-300 hover:underline"
										target="_blank"
									>
										· {title}
									</Link>
								) : (
									<span key={title}>· {title}</span>
								),
							)}
						</p>
					</div>
				))}
			</section>
		</>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	return metadata({
		title: "정미량 이력서",
		description: "프론트엔드 개발자 이력서",
		path: "/resume",
	});
}
