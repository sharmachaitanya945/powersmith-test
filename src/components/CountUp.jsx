import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

// Animates from 0 to `end` once scrolled into view.
export default function CountUp({ end, suffix = '', duration = 1600 }) {
  const [ref, inView] = useInView(0.5)
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = null
    let raf
    const tick = (ts) => {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * end))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  )
}
