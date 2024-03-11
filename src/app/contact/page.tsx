import { PinContainer } from "@/components/ui/3d-pin"
import ContactCard from "@/components/ui/contact-card"
import NavigationBar from "@/components/ui/navigation-bar"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Contact() {
  const contactOptions = [
    {
      title: "LinkedIn",
      icon: <LinkedinIcon size={100} />,
      link: "https://it.linkedin.com/in/renatokozak",
      backgroundColor: "from-blue-400 via-blue-900 to-blue-900",
    },
    {
      title: "Email",
      icon: <MailIcon size={100} />,
      link: "mailto:renkzk.dev@gmail.com",
      backgroundColor: "from-slate-500 via-slate-800 to-slate-900",
    },
    {
      title: "GitHub",
      icon: <GithubIcon size={100} />,
      link: "https://github.com/renkzk",
      backgroundColor: "from-zinc-700 via-zinc-900 to-slate-900",
    },
  ]

  return (
    <>
      <NavigationBar />
      <div className="flex flex-wrap justify-center items-center h-screen">
        {contactOptions.map((contact) => (
          <Link target="_blank" key={contact.link} href={contact.link}>
            <PinContainer title={contact.link} href={contact.link}>
              <ContactCard
                title={contact.title}
                icon={contact.icon}
                backgroundColor={contact.backgroundColor}
              />
            </PinContainer>
          </Link>
        ))}
      </div>
    </>
  )
}
