import Particles from "@/components/ui/particles"
import { AppRoute } from "@/enums/app-routes.enum"
import Link from "next/link"

export default function Home() {
  // get AppRoute enum values and filter out home route
  const appRoutes = Object.values(AppRoute).filter((route) => route !== AppRoute.Home)

  return (
    <main className="relative h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/25 to-black">
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <div className="h-screen flex justify-center items-center gap-3">
        {appRoutes.map((route) => (
          <Link key={route} href={route}>
            {route}
          </Link>
        ))}
      </div>
    </main>
  )
}
