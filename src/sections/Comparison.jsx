import { comparison } from '../content/site'
import Reveal from '../components/Reveal'

export default function Comparison() {
  return (
    <section className="border-y border-white/10 bg-panel py-24">
      <div className="mx-auto max-w-wrap px-5">
        <Reveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Solar vs. <span className="text-accent">staying on the grid</span>
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm sm:text-base">
            <thead>
              <tr>
                {comparison.columns.map((col, i) => (
                  <th
                    key={i}
                    className={`border-b border-white/15 px-5 py-4 text-left font-semibold ${
                      i === 1 ? 'text-accent' : 'text-white/60'
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map(([label, ours, theirs]) => (
                <tr key={label} className="border-b border-white/5">
                  <td className="px-5 py-4 font-medium text-white/80">{label}</td>
                  <td className="bg-accent/5 px-5 py-4 text-white">{ours}</td>
                  <td className="px-5 py-4 text-white/45">{theirs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}
