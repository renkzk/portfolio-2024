import { HeroParallax } from "@/components/ui/hero-parallax"
import { NavigationBar } from "@/components/ui/navigation-bar"
import { products } from "@/components/ui/products.placeholder"
import React from "react"

export default function Projects() {
  return (
    <>
      <NavigationBar />
      <HeroParallax products={products} />
    </>
  )
}
