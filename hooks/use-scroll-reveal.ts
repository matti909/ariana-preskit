"use client"

import { useEffect, useRef } from "react"

interface UseScrollRevealOptions {
  threshold?: number
  delay?: number
  duration?: number
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.1, delay = 0, duration = 1000 } = options
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-10")
              entry.target.classList.add("opacity-100", "translate-y-0")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, delay, duration])

  return elementRef
}
