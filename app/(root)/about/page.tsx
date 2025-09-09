import Image from "next/image";
import PageHeader from "@/components/common/page-header";

<PageHeader
  title="About Me"
  description="A little more about my background, interests, and what I&rsquo;ve been up to outside of class and research."
/>


export default function AboutPage() {
  return (
    <main className="container py-10">
      <PageHeader
        title="About Me"
        description="A little more about my background, interests, and what I’ve been up to outside of class and research."
      />

      {/* Photo gallery (optional, add more images to /public/about) */}
      <section className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border bg-muted">
            <Image
              src="/about/zoe-1.jpeg"
              alt="Zoe backpacking"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border bg-muted">
            <Image
              src="/about/zoe-2.jpeg"
              alt="Zoe running"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border bg-muted">
            <Image
              src="/about/zoe-3.jpeg"
              alt="Zoe traveling"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
        </div>
      </section>

      {/* Bio + hobbies */}
      <section className="prose dark:prose-invert max-w-none mb-10">
        <h2>Hi, I&apos;m Zoe</h2>
        <p>
          I&apos;m a Mechanical Engineering PhD student at Penn State, where my research focuses on ergonomics, inclusive design, and developing AI-driven tools that translate human data into better products. Outside of work, I love spending time backpacking, running, baking, and building things in the makerspace.
        </p>
      </section>

      {/* Leadership roles */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Leadership & Service</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Vice President, Graduate Women in Engineering (GradWIE)</li>
          <li>Vice President, Graduate Outreach and Leadership Club</li>
          <li>Manager, Learning Factory Makerspace</li>
          <li>Mentor, Undergraduate Researchers</li>
        </ul>
      </section>

      {/* Awards */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">Awards & Honors</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>
            2023–24 Faculty Senior Scholar, NC State Engineering Department —{" "}
            <a
              href="https://engr.ncsu.edu/news/2023/04/24/mae-student-selected-coe-faculty-senior-scholar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              article link
            </a>
          </li>
          <li>NSF Graduate Research Fellowship Program (GRFP), Honorable Mention</li>
        </ul>
      </section>
    </main>
  );
}
