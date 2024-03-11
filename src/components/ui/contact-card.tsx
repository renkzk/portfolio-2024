import { LucideIcon } from "lucide-react"
import React from "react"

export default function ContactCard({
  title,
  icon,
}: {
  title: string
  icon: JSX.Element
}) {
  return (
    <div className="sm:w-[20rem] sm:h-[20rem] w-[10rem] h-[10rem] flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2  text-center">
      <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-200">{title}</h3>
      <div className="flex justify-center items-center flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-slate-400 via-slate-700 to-slate-900">
        {icon}
      </div>
    </div>
  )
}
