import { useEffect } from 'react'

// Canonical/OG base — update to the production domain at launch.
const SITE_URL = 'https://powersmithsolar.com'

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Per-page SEO: unique title tag, meta description, canonical URL, OpenGraph
// tags, and optional JSON-LD structured data. Fixes the audit's "no optimized
// title tags / meta descriptions / schema" findings.
export default function Seo({ title, description, path = '/', jsonLd }) {
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : null

  useEffect(() => {
    if (title) {
      document.title = title
      upsertMeta('property', 'og:title', title)
    }
    if (description) {
      upsertMeta('name', 'description', description)
      upsertMeta('property', 'og:description', description)
    }
    const canonical = SITE_URL + path
    upsertLink('canonical', canonical)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:type', 'website')

    let script
    if (jsonLdString) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo', 'page')
      script.text = jsonLdString
      document.head.appendChild(script)
    }
    return () => {
      if (script) script.remove()
    }
  }, [title, description, path, jsonLdString])

  return null
}

// Helper: build a BreadcrumbList schema for an inner page.
export function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: SITE_URL + it.path,
    })),
  }
}
