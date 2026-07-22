import { Link, useParams, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import LeadForm from '../sections/LeadForm'
import { getPostBySlug, articleSchema } from '../content/blog'

const dateFmt = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

function Block({ block }) {
  if (block.h) return <h2 className="mt-10 text-2xl font-bold tracking-tight text-heading">{block.h}</h2>
  if (block.ul) {
    return (
      <ul className="mt-4 space-y-3">
        {block.ul.map((li) => (
          <li key={li} className="flex items-start gap-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="mt-1 h-4 w-4 shrink-0 text-accent"
            >
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="leading-relaxed text-ink/75">{li}</span>
          </li>
        ))}
      </ul>
    )
  }
  return <p className="mt-4 leading-relaxed text-ink/75">{block.p}</p>
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)
  if (!post) return <Navigate to="/blog" replace />

  return (
    <>
      <Seo
        title={`${post.title} | PowerSmith Energy Blog`}
        description={post.description}
        path={`/blog/${post.slug}`}
        jsonLd={articleSchema(post)}
      />

      <section className="border-b border-line/10 bg-gradient-to-b from-sky-soft to-paper pb-16 pt-36">
        <div className="mx-auto max-w-3xl px-5">
          <Link to="/blog" className="text-sm font-semibold text-accent hover:underline">
            ← Back to the blog
          </Link>
          <div className="mt-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-accent">
            <span>{post.category}</span>
            <span className="text-ink/30">·</span>
            <span className="text-ink/45">{dateFmt(post.date)}</span>
            <span className="text-ink/30">·</span>
            <span className="text-ink/45">{post.readMins} min read</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-16">
        <Reveal>
          {post.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </Reveal>
      </article>

      <LeadForm />
    </>
  )
}
