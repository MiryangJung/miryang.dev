import {
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import resume from "./data/resume";
import Link from "next/link";
import { LinkIcon } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="flex flex-col w-full px-8 py-10 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        정미량
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Frontend Engineer
      </p>

      <Link href="mailto:miryang.dev@gmail.com" className="my-3 text-sm">
        miryang.dev@gmail.com
      </Link>

      <p className="text-sm font-light text-gray-600 dark:text-gray-300 flex flex-col gap-2 break-keep whitespace-pre-wrap">
        {resume.about.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </p>

      <section className="my-5 py-10 border-t">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Experience
        </h2>

        {resume.experience.map((item) => (
          <Card className="mb-6 bg-white/50" key={item.company}>
            <CardHeader className="flex flex-col">
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100">
                {item.company}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.position} | {item.period}
              </p>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 flex flex-col gap-3">
              {item.content.map((content) => (
                <div
                  key={content.title}
                  className="break-keep flex flex-col mb-2 gap-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">{content.title}</span>
                    {content.link && (
                      <LinkIcon
                        width={12}
                        height={12}
                        className="text-blue-800"
                      />
                    )}
                  </div>
                  <span className="text-slate-500 text-xs mb-2">
                    {content.description}
                  </span>
                  {content.do.map((doItem) => (
                    <span key={doItem} className="text-[13px] font-medium">
                      · {doItem}
                    </span>
                  ))}

                  <p className="text-xs text-gray-400 font-light mt-0.5">
                    <span className="font-medium">{content.techHighlight.join(", ")}</span>
                    <span>{content.tech.join(", ")}</span>
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
