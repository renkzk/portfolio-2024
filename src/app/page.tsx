import { AppRoute } from "@/enums/app-routes.enum"
import Link from "next/link"

export default function Home() {
  // get AppRoute enum values and filter out home route
  const appRoutes = Object.values(AppRoute).filter((route) => route !== AppRoute.Home)

  return (
    <main className="h-screen flex justify-center items-center gap-3">
      {appRoutes.map((route) => (
        <Link key={route} href={route}>
          {route}
        </Link>
      ))}
    </main>
  )
}
