import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import type { Resume } from "../data/resume.type";
import PrintButton from "./PrintButton";

type LangSwitch = {
	href: string;
	label: string;
};

export default function ResumeView({
	resume,
	langSwitch,
	printLabel,
}: {
	resume: Resume;
	langSwitch: LangSwitch;
	printLabel: string;
}) {
	return (
		<>
			<div className="flex justify-between">
				<h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
					{resume.name}
				</h1>
				<div className="flex items-center gap-3 print:hidden">
					<PrintButton label={printLabel} />
					<Link href={langSwitch.href} className="text-sm hover:underline">
						{langSwitch.label}
					</Link>
				</div>
			</div>
			<p className="text-lg text-gray-700 dark:text-gray-300">{resume.job}</p>

			<Link href={`mailto:${resume.contact}`} className="my-3 text-sm">
				{resume.contact}
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
				<h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4 print:break-after-avoid">
					Work Experience
				</h2>

				{resume.experience.map((item) => (
					<Card
						className="mb-6 bg-white dark:bg-stone-900 border-none shadow-none"
						key={item.company}
					>
						<CardHeader className="flex flex-col px-0 print:break-inside-avoid print:break-after-avoid">
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
									className="break-keep flex flex-col mb-2 gap-1 print:break-inside-avoid"
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
