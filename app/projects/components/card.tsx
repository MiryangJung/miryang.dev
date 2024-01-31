import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Project } from "../data/projects";
import Image from "next/image";
import { GithubIcon, LinkIcon } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  url,
  image,
  github,
}: Project) {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-1 items-start justify-between">
          <CardTitle className="break-all flex-1">{title}</CardTitle>
          {github && (
            <Link href={github} target="_blank" className="p-0.5">
              <GithubIcon width={12} height={12} className="text-stone-600" />
            </Link>
          )}
          {url && (
            <Link href={url} target="_blank" className="p-0.5">
              <LinkIcon width={12} height={12} className="text-blue-500" />
            </Link>
          )}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image
          width={200}
          height={100}
          src={image}
          alt={title}
          className="rounded object-cover"
        />
      </CardContent>
    </Card>
  );
}
