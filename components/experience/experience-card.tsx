"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { ExperienceInterface } from "@/config/experience";

// Helper function to extract year from date
const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

// Helper function to get duration text
const getDurationText = (
  startDate: Date,
  endDate: Date | "Present"
): string => {
  const startYear = getYearFromDate(startDate);
  const endYear =
    typeof endDate === "string" ? "Present" : getYearFromDate(endDate);
  return `${startYear} - ${endYear}`;
};

interface ExperienceCardProps {
  experience: ExperienceInterface;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  // Determine which list to show: Publications (preferred) or Achievements (fallback)
  const publications = (experience as any).publications as string[] | undefined;
  const achievements = experience.achievements;
  const hasPublications = Array.isArray(publications) && publications.length > 0;
  const hasAchievements = Array.isArray(achievements) && achievements.length > 0;

  // Show only a couple of items on the card to keep it compact
  const previewItems = hasPublications
    ? publications!.slice(0, 2)
    : hasAchievements
    ? achievements!.slice(0, 2)
    : [];

  const sectionTitle = hasPublications
    ? "Publications"
    : hasAchievements
    ? "Achievements"
    : null;

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-4 sm:p-6 transition-all duration-300">
      <div className="flex items-start gap-3 sm:gap-4">
        {experience.logo && (
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
            <Image
              src={experience.logo}
              alt={experience.company}
              width={48}
              height={48}
              className="w-full h-full object-contain p-2"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-1 sm:gap-2">
            {/* Title row (no cramped icons here) */}
            <div className="flex items-start sm:items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-foreground line-clamp-2 sm:line-clamp-1">
                {experience.position}
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-muted-foreground">
              <span className="font-medium">
                {/* If multiple lab/company URLs exist */}
                {experience.companyUrls?.length ? (
                  <>
                    {experience.companyUrls.map((c, i) => (
                      <React.Fragment key={i}>
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {c.label}
                        </a>
                        {i < experience.companyUrls.length - 1 && <span>, </span>}
                      </React.Fragment>
                    ))}
                  </>
                ) : experience.companyUrl ? (
                  // If only one URL
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {experience.company}
                  </a>
                ) : (
                  // If no URL
                  experience.company
                )}
              </span>
              <span className="hidden sm:inline">•</span>
              <span>{experience.location}</span>
            </div>


            {/* Duration pill */}
            <div className="flex items-center gap-2 mt-1">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {getDurationText(experience.startDate, experience.endDate)}
              </span>
            </div>
          </div>

          {/* First description line */}
          <p className="mt-2 sm:mt-3 text-sm text-muted-foreground line-clamp-2">
            {experience.description[0]}
          </p>

          {/* Skills chips */}
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1">
            {experience.skills.slice(0, 2).map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
              >
                {skill}
              </span>
            ))}
            {experience.skills.length > 2 && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                +{experience.skills.length - 2} more
              </span>
            )}
          </div>

          {/* Publications/Achievements preview (conditional) */}
          {sectionTitle && previewItems.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-1">{sectionTitle}</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {previewItems.map((item, i) => (
                  <li key={i} className="line-clamp-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-3 sm:mt-4 flex justify-end">
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg w-full sm:w-auto"
          asChild
        >
          <Link href={`/experience/${experience.id}`}>
            View Details
            <Icons.chevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ExperienceCard;
