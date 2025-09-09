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
  params: {
    projectId: string;
  };
}

// helper to safely turn anything into a Date
const toDate = (d: any) => {
  const dt = d instanceof Date ? d : new Date(d);
  return isNaN(dt.getTime()) ? null : dt;
};

export default function Project({ params }: ProjectPageProps) {
  const project = Projects.find((val) => val.id === params.projectId);
  if (!project) {
    redirect("/projects");
  }

  const startDt = project?.startDate ? toDate(project.startDate) : null;
  const endDt =
    project?.endDate && project.endDate !== "Present"
      ? toDate(project.endDate)
      : null;

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
        {/* date block */}
        {startDt && (
          <time
            dateTime={startDt.toISOString()}
            className="block text-sm text-muted-foreground"
          >
            {formatDateFromObj(startDt)}
            {project?.endDate
              ? ` – ${endDt ? formatDateFromObj(endDt) : "Present"}`
              : ""}
          </time>
        )}

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
                  <Icons.externalLink className="w-6 ml-4 text-muted-foreground hover:text-foreground " />
                </Link>
              </CustomTooltip>
            )}
          </div>
        </h1>

        {project.category?.length ? (
          <ChipContainer textArr={project.category} />
        ) : null}

        <div className="mt-4 flex space-x-4">
          <Link
            href={siteConfig.links?.Linkedin ?? "/"}
            className="flex items-center space-x-2 text-sm"
          >
            <Image
              src={profileImg}
              alt={"Zoe Marazita"}
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

      {/* Engineering Skills section (renamed from Tech Stack) */}
      {project.skillsApplied?.length ? (
        <div className="mb-7">
          <h2 className="inline-block font-heading text-3xl leading-tight lg:text-3xl mb-2">
            Engineering Skills Applied
          </h2>
          <ChipContainer textArr={project.skillsApplied} />
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

      {/* Pages / gallery */}
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
