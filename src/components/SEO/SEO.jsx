import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({ title, description, image, article }) => {
    const { i18n } = useTranslation();
    const siteName = "Sai Sri Rama Khandavilli | Portfolio";
    const defaultDescription = "Java Full Stack Developer & AI Engineer Portfolio. Specialized in Spring Boot, React, and AI-powered solutions.";
    const url = "https://saisrirama.github.io/";

    const seoTitle = title ? `${title} | ${siteName}` : siteName;
    const seoDescription = description || defaultDescription;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <html lang={i18n.language} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={article ? 'article' : 'website'} />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:url" content={url} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Sai Sri Rama Khandavilli",
                    "url": url,
                    "jobTitle": "Java Full Stack Engineer",
                    "sameAs": [
                        "https://github.com/saisrirama",
                        "https://www.linkedin.com/in/sai-sri-rama-k/"
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
