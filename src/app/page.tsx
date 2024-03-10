import Particles from "@/components/ui/particles"
import { AppRoute } from "@/enums/app-routes.enum"
import { ChevronsDown } from "lucide-react"
import Link from "next/link"

export default function Home() {
  // get AppRoute enum values and filter out home route
  const appRoutes = Object.values(AppRoute).filter((route) => route !== AppRoute.Home)

  return (
    <main className="relative h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/25 to-black">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 -z-10 animate-delayed-fade-in"
        quantity={100}
      />
      <div className="flex flex-col justify-center items-center h-full gap-16">
        {/* Navigation */}
        <nav className="animate-delayed-fade-in flex gap-8">
          {appRoutes.map((route) => (
            <Link
              key={route}
              href={route}
              className="capitalize text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {route}
            </Link>
          ))}
        </nav>

        {/* Title */}
        <div className="text-center">
          <div className="hidden w-screen h-px md:block animate-delayed-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <h1 className="z-10 font-calsans text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
            renkzk
          </h1>
          <div className="hidden w-screen h-px md:block animate-delayed-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        </div>

        {/* Scroll down button */}
        <div className="animate-delayed-fade-in">
          <button className="animate-bounce flex text-sm duration-500 text-zinc-500 hover:text-zinc-300">
            {/* Scroll down <ChevronsDown /> */}
          </button>
        </div>
      </div>
    </main>
  )
}
