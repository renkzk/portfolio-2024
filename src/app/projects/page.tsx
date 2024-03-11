import { HeroParallax } from "@/components/ui/hero-parallax"
import NavigationBar from "@/components/ui/navigation-bar"
import prisma from "@/prisma/database"
import { duplicateArrayUntilMinimumLength } from "@/utils/array-utils"

export default async function Projects() {
  let projects = await prisma.project.findMany()

  // Projects should be at least 15 in length
  if (projects.length < 15) {
    projects = duplicateArrayUntilMinimumLength(projects, 15)
  }

  return (
    <>
      <NavigationBar />
      <HeroParallax products={projects} />
    </>
  )
}
