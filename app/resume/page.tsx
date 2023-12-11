import { CardHeader, CardContent, Card } from "@/components/ui/card";
import resume from "./data/resume";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import { Metadata } from "next";
import metadata from "@/util/metadata";

export default function ResumePage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        정미량
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Frontend Engineer
      </p>

      <Link href="mailto:miryang.dev@gmail.com" className="my-3 text-sm">
        miryang.dev@gmail.com
      </Link>

      <p className="text-[13px] font-light text-gray-600 dark:text-gray-300 flex flex-col gap-2 break-keep whitespace-pre-wrap">
        {resume.about.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </p>

      <section className="my-5 pt-10 border-t">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          👩🏻‍💻 Experience
        </h2>

        {resume.experience.map((item) => (
          <Card className="mb-6 bg-white/70" key={item.company}>
            <CardHeader className="flex flex-col">
              <h3 className="text-[22px] font-extrabold text-gray-900 dark:text-gray-100">
                {item.company}
              </h3>
              <p className="text-zinc-500 dark:text-gray-400 text-sm font-medium">
                {item.position} | {item.period}
              </p>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 flex flex-col gap-4">
              {item.content.map((content) => (
                <div
                  key={content.title}
                  className="break-keep flex flex-col mb-2 gap-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-slate-900">
                      {content.title}
                    </span>
                    {content.link && (
                      <LinkIcon
                        width={12}
                        height={12}
                        className="text-blue-800"
                      />
                    )}
                  </div>
                  <span className="text-slate-500 font-light text-xs mb-2">
                    {content.description}
                  </span>
                  {content.do.map((doItem) => (
                    <span key={doItem} className="text-[13px]">
                      · {doItem}
                    </span>
                  ))}

                  <p className="text-xs text-zinc-400 font-extralight mt-0.5">
                    <span className="font-medium">
                      {content.techHighlight.join(", ")}
                    </span>
                    <span>{content.tech.join(", ")}</span>
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="my-5">
        <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          💻 Other Experience
        </h2>

        {resume.otherExperience.map((item) => (
          <div className="flex flex-col gap-1 mb-5" key={item.name}>
            <h3 className="text font-bold text-gray-900 dark:text-white">
              {item.name}
            </h3>
            <p className="text-[13px] text-gray-600 dark:text-gray-300 flex flex-col gap-1">
              {item.content.map(({ url, title }) =>
                url ? (
                  <Link
                    href={url}
                    key={title}
                    className="text-sky-800 hover:underline"
                  >
                    · {title}
                  </Link>
                ) : (
                  <span key={title}>· {title}</span>
                )
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
    path: `/resume`,
  });
}
