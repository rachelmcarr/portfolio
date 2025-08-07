import Head from 'next/head'

export default function Meta({ title, description, image }) {
  const defaultTitle = "Your Portfolio"
  const defaultDescription = "Portfolio of Your Name"
  const defaultImage = "/images/hero.jpg"

  return (
    <Head>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
