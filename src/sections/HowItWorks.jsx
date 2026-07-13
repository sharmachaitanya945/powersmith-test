import { steps } from '../content/site'
import Reveal from '../components/Reveal'

export default function HowItWorks() {
  return (
    <section id="process" className="mx-auto max-w-wrap px-5 py-24">
      <Reveal className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Your solar journey in <span className="text-accent">six steps</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/60">
          We handle everything — you just flip the switch.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={(i % 3) * 120}>
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 bg-accent/10 text-lg font-bold text-accent">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
