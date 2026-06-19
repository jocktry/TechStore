import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { articles, getArticleBySlug } from '@/data/articles'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return { title: 'Artículo no encontrado' }
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.imageUrl,
          alt: article.imageAlt,
          width: 800,
          height: 400,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: [article.imageUrl],
    },
  }
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.imageUrl,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'TechStore Blog',
      url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/articulos/${article.slug}`,
    },
  }

  const contentParagraphs = article.content.split('\n').filter((line) => line.trim() !== '')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <nav aria-label="Ruta de navegación" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="hover:text-blue-600 transition-colors" itemProp="item">
                <span itemProp="name">Inicio</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true">/</li>
            <li
              className="text-gray-900 font-medium truncate max-w-xs"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              aria-current="page"
            >
              <span itemProp="name">{article.title}</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {article.category}
              </span>
              <time dateTime={article.date} className="text-sm text-gray-500">
                {new Date(article.date).toLocaleDateString('es-AR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              {article.title}
            </h1>

            <p className="text-lg text-gray-600 mb-6">{article.description}</p>

            <div className="flex items-center gap-3 pb-6 border-b border-gray-200">
              <div
                className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-sm"
                aria-hidden="true"
              >
                {article.author.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{article.author}</p>
                <p className="text-xs text-gray-500">Autor</p>
              </div>
            </div>
          </header>

          <div className="relative w-full h-72 md:h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={article.imageUrl}
              alt={article.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>

          <div className="prose max-w-none">
            {contentParagraphs.map((line, index) => {
              if (line.startsWith('## ')) {
                return <h2 key={index}>{line.replace('## ', '')}</h2>
              }
              if (line.startsWith('### ')) {
                return <h3 key={index}>{line.replace('### ', '')}</h3>
              }
              if (line.startsWith('- ')) {
                return (
                  <ul key={index}>
                    <li>{line.replace('- ', '')}</li>
                  </ul>
                )
              }
              if (line.startsWith('```')) {
                return null
              }
              return <p key={index}>{line}</p>
            })}
          </div>
        </article>

        {relatedArticles.length > 0 && (
          <aside aria-labelledby="related-heading" className="mt-16 pt-8 border-t border-gray-200">
            <h2 id="related-heading" className="text-xl font-semibold text-gray-900 mb-6">
              Artículos relacionados
            </h2>
            <ul className="space-y-4">
              {relatedArticles.map((related) => (
                <li key={related.id}>
                  <Link
                    href={`/articulos/${related.slug}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={related.imageUrl}
                        alt={related.imageAlt}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {related.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{related.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </>
  )
}
