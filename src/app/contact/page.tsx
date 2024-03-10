import { PinContainer } from "@/components/ui/3d-pin"
import ContactCard from "@/components/ui/contact-card"
import { NavigationBar } from "@/components/ui/navigation-bar"
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

export default function Contact() {
  const iconSize = 100
  const contactOptions = [
    {
      title: "LinkedIn",
      icon: <LinkedinIcon size={iconSize} />,
      link: "https://it.linkedin.com/in/renatokozak",
    },
    {
      title: "Email",
      icon: <MailIcon size={iconSize} />,
      link: "mailto:renkzk.dev@gmail.com",
    },
    {
      title: "GitHub",
      icon: <GithubIcon size={iconSize} />,
      link: "https://github.com/renkzk",
    },
  ]

  return (
    <>
      <NavigationBar />
      <div className="flex flex-wrap justify-center items-center h-screen">
        {contactOptions.map((contact) => (
          <Link target="_blank" key={contact.link} href={contact.link}>
            <PinContainer title={contact.link} href={contact.link}>
              <ContactCard title={contact.title} icon={contact.icon} />
            </PinContainer>
          </Link>
        ))}
      </div>
    </>
  )
}
