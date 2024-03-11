import { HeroParallax } from "@/components/ui/hero-parallax"
import NavigationBar from "@/components/ui/navigation-bar"
import prisma from "../../../prisma/database"
import { duplicateArrayUntilMinimumLength } from "@/utils/array-utils"
import { Suspense } from "react"
import PageLoader from "@/components/ui/page-loader"

export default async function Projects() {
  let projects = await prisma.project.findMany()

  // Projects should be at least 15 in length
  if (projects.length < 15) {
    projects = duplicateArrayUntilMinimumLength(projects, 15)
  }

  return (
    <>
      <NavigationBar />
      <Suspense fallback={<PageLoader />}>
        <HeroParallax products={projects} />
      </Suspense>
    </>
  )
}
