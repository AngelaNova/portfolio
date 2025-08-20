// app/projects/[projectName]/page.tsx
import ProjectPage from "@/components/ProjectPage";
import { learnOrgoChem, financeTracker } from "@/data/project";

interface Props {
  params: Promise<{ projectName: string }>;
}

export default async function Project({ params }: Props) {
  const { projectName } = await params;

  const projectsMap: Record<string, any> = {
    "finance-tracker": financeTracker,
    "learn-orgo-chem": learnOrgoChem,
  };

  const project = projectsMap[projectName];

  if (!project) return <p className="text-center py-12">Project not found</p>;

  return <ProjectPage project={project} />;
}
