import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Icons } from "@/components/common/icons";
import ProjectDescription from "@/components/projects/project-description";
import { buttonVariants } from "@/components/ui/button";
import ChipContainer from "@/components/ui/chip-container";
import CustomTooltip from "@/components/ui/custom-tooltip";
import { Projects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { cn, formatDateFromObj } from "@/lib/utils";
import profileImg from "@/public/ProfilePic.jpg";

interface ProjectPageProps {
  params: { projectId: string };
}

// Robust date parser with type guards
const toValidDate = (v: unknown): Date | null => {
  if (!v) return null;
  if (v instanceof Date) return isNaN(v.getTime()) ? null : v;
  if (typeof v === "string") {
    const d = new Date(v);
    return isNaN(d.getTime()) ? null : d;
  }
  return null;
};

export default function Project({ params }: ProjectPageProps) {
  const project = Projects.find((p) => p.id === params.projectId);
  if (!project) redirect("/projects");

  // Start date
  const startDt = toValidDate((project as any).startDate);

  // End date: treat literal "Present" as ongoing (null date)
  let endDt: Date | null = null;
  const rawEnd = (project as any).endDate as unknown;
  if (rawEnd !== "Present") {
    endDt = toValidDate(rawEnd);
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        All Projects
      </Link>

      <div>
        {/* Dates */}
        {startDt && (
          <time
            dateTime={startDt.toISOString()}
            className="block text-sm text-muted-foreground"
          >
            {formatDateFromObj(startDt)}
            {rawEnd
              ? ` – ${endDt ? formatDateFromObj(endDt) : "Present"}`
              : ""}
          </time>
        )}

        {/* Title + external links */}
        <h1 className="flex items-center justify-between mt-2 font-heading text-4xl leading-tight lg:text-5xl">
          {project.companyName}
          <div className="flex items-center">
            {project.githubLink && (
              <CustomTooltip text="Link to the source code.">
                <Link href={project.githubLink} target="_blank">
                  <Icons.gitHub className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
            {project.websiteLink && (
              <CustomTooltip text="Open project website.">
                <Link href={project.websiteLink} target="_blank">
                  <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground" />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>

        {/* Categories */}
        {project.category?.length ? (
          <ChipContainer textArr={project.category} />
        ) : null}

        {/* Author blurb */}
        <div className="mt-4 flex space-x-4">
          <Link
            href={siteConfig.links?.Linkedin ?? "/"}
            className="flex items-center space-x-2 text-sm"
          >
            <Image
              src={profileImg}
              alt="Zoe Marazita"
              width={42}
              height={42}
              className="rounded-full bg-background"
            />
            <div className="flex-1 text-left leading-tight">
              <p className="font-medium">Zoe Marazita</p>
              <p className="text-[12px] text-muted-foreground">
                @{siteConfig.username}
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Hero image */}
      {project.companyLogoImg && (
        <Image
          src={project.companyLogoImg}
          alt={project.companyName}
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}

      {/* Engineering Skills (formerly Tech Stack) */}
      {(project as any).skillsApplied?.length ? (
        <div className="mb-7">
          <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
            Engineering Skills Applied
          </h2>
          <ChipContainer textArr={(project as any).skillsApplied} />
        </div>
      ) : null}

      {/* Description */}
      {project.descriptionDetails && (
        <div className="mb-7">
          <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
            Description
          </h2>
          <ProjectDescription
            paragraphs={project.descriptionDetails.paragraphs ?? []}
            bullets={project.descriptionDetails.bullets ?? []}
          />
        </div>
      )}

      {/* Pages / Gallery */}
      {project.pagesInfoArr?.length ? (
        <div className="mb-7">
          <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-5">
            Page Info
          </h2>
          {project.pagesInfoArr.map((page, ind) => (
            <div key={ind}>
              <h3 className="flex items-center font-heading text-xl leading-tight lg:text-xl mt-3">
                <Icons.star className="h-5 w-5 mr-2" /> {page.title}
              </h3>
              <div>
                <p>{page.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {page.imgArr?.map((img, j) => (
                    <Image
                      src={img}
                      key={j}
                      alt={`${page.title}-${j}`}
                      width={720}
                      height={405}
                      className="my-4 rounded-md border bg-muted transition-colors"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}

      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link href="/projects" className={cn(buttonVariants({ variant: "ghost" }))}>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          All Projects
        </Link>
      </div>
    </article>
  );
}
