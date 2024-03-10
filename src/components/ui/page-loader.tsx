import { LoaderCircle } from "lucide-react"
import React from "react"

export default function PageLoader() {
  return (
    <div className="h-screen grid place-items-center">
      <LoaderCircle size={60} strokeWidth={0.5} className="text-zinc-500 animate-spin" />
    </div>
  )
}
