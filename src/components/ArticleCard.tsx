import Image from 'next/image'
import Link from 'next/link'
import type { Article } from '@/data/articles'

interface ArticleCardProps {
  article: Article
  priority?: boolean
}

export default function ArticleCard({ article, priority = false }: ArticleCardProps) {
  return (
    <article className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <Link href={`/articulos/${article.slug}`} aria-label={`Leer artículo: ${article.title}`}>
        <div className="relative w-full h-48">
          <Image
            src={article.imageUrl}
            alt={article.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {article.category}
          </span>
          <time
            dateTime={article.date}
            className="text-xs text-gray-500"
          >
            {new Date(article.date).toLocaleDateString('es-AR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
          <Link
            href={`/articulos/${article.slug}`}
            className="hover:text-blue-600 transition-colors"
          >
            {article.title}
          </Link>
        </h2>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{article.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">Por {article.author}</span>
          <Link
            href={`/articulos/${article.slug}`}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            aria-label={`Leer más sobre: ${article.title}`}
          >
            Leer más →
          </Link>
        </div>
      </div>
    </article>
  )
}
