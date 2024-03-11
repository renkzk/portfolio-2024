"use client"
import React from "react"
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Project } from "@prisma/client"

export const HeroParallax = ({ products }: { products: Project[] }) => {
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const thirdRow = products.slice(10, 15)

  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  )
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, i) => (
            <ProductCard product={product} translate={translateX} key={i} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product, i) => (
            <ProductCard product={product} translate={translateXReverse} key={i} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, i) => (
            <ProductCard product={product} translate={translateX} key={i} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="animate-fade-right animate-duration-[4000ms] max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        renkzk/ <br /> Developer Portfolio
      </h1>
      <p className=" max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Fueled by a passion for innovation, I craft digital experiences through meticulous
        code and creative problem-solving. Elevating ideas to reality with a commitment to
        excellence in every line of code.
      </p>
    </div>
  )
}

export const ProductCard = ({
  product,
  translate,
}: {
  product: Project
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product h-96 w-[33rem] relative flex-shrink-0"
    >
      <Link href={String(product.id)} className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.thumbnail}
          height="1000"
          width="1000"
          className="object-cover object-center absolute h-full w-full inset-0"
          alt={product.title}
          quality={100}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  )
}
