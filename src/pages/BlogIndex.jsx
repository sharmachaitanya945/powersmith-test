import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import LeadForm from '../sections/LeadForm'
import { blogPosts } from '../content/blog'

const dateFmt = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

export default function BlogIndex() {
  return (
    <>
      <Seo
        title="Solar Blog | San Diego Solar, Batteries & Incentives | PowerSmith Energy"
        description="Straight answers on solar cost, NEM 3.0, the federal tax credit, battery backup and more — written for San Diego homeowners and businesses by PowerSmith Energy."
        path="/blog"
      />
      <PageHero
        title="The PowerSmith"
        highlight="Energy Blog"
        subtitle="Straight answers on solar cost, incentives, batteries and going solar in San Diego — no jargon, no sales script."
      />

      <section className="mx-auto max-w-wrap px-5 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 100}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line/10 bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-navy/10"
              >
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
                  <span>{post.category}</span>
                  <span className="text-ink/30">·</span>
                  <span className="text-ink/45">{post.readMins} min read</span>
                </div>
                <h2 className="mt-4 text-xl font-bold leading-snug text-heading group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-ink/45">
                  <span>{dateFmt(post.date)}</span>
                  <span className="font-semibold text-accent">Read more →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <LeadForm />
    </>
  )
}
