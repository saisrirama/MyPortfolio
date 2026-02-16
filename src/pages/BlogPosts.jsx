import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

const BlogPosts = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { i18n } = useTranslation();
    const [content, setContent] = useState('');
    const [metadata, setMetadata] = useState(null);

    useEffect(() => {
        // In a real app, you would load the markdown file based on the ID and Current Language
        // For this demo, I will embed the content directly to ensure it works in the static build
        const posts = {
            'java-backend-best-practices': {
                title: 'Scalable Java Backend Best Practices',
                date: '2026-02-10',
                author: 'Sai Sri Rama',
                readTime: '5 min',
                content: `
# Scalable Java Backend Best Practices

Building scalable enterprise applications requires more than just knowing syntax. It requires a deep understanding of architectural patterns and system design.

## 1. Microservices and Spring Boot
Spring Boot has revolutionized Java development by providing a streamlined way to build standalone, production-grade Spring-based Applications.

### Key Considerations:
* **Statelessness**: Ensure your services are stateless to allow horizontal scaling.
* **Service Discovery**: Utilize tools like Eureka or Consul for managing service instances.
* **Circuit Breakers**: Implement Resilience4j to handle service failures gracefully.

## 2. Optimized Database Design
Relational databases like PostgreSQL remain the backbone of many systems. Using Hibernate correctly is crucial for performance.

\`\`\`java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
}
\`\`\`

## 3. CI/CD Integration
Automation is key. Reducing manual release effort by 30-40% (as I achieved at TCS) requires robust pipelines in GitLab or Jenkins.

Conclusion: Quality code + Automation = Reliable Systems.
        `
            },
            'ai-integration-future': {
                title: 'AI統合の未来：業務自動化への道',
                date: '2026-02-15',
                author: 'Sai Sri Rama',
                readTime: '8 分',
                content: `
# AI統合の未来：業務自動化への道

現代のビジネスにおいて、AI（人工知能）の活用はもはやオプションではなく、競争力の源泉となっています。特にLLM（大規模言語モデル）の台頭により、これまで困難だった高度な業務の自動化が可能になりました。

## 業務自動化の3つの柱

1.  **自動応答システム**: Azure Bot ServiceやPython Djangoを活用したチャットボットにより、問い合わせ対応を30-40%削減。
2.  **インテリジェント・ドキュメント解析**: NLP技術を用いて大量の書類から必要な情報を抽出。
3.  **予測分析**: TensorFlowやKerasを用いた予測モデルにより、意思決定を加速。

## 実装における課題と解決策

AIを導入する際、最も重要なのは「データの質」と「プロンプトエンジニアリング」です。適切なコンテキストを提供することで、AIの回答精度は飛躍的に向上します。

### 技術スタックの例:
*   **Backend**: Java / Spring AI
*   **Model**: Ollama / Gemma / Azure OpenAI
*   **Frontend**: React

技術は常に進化していますが、その中心にあるのは常に「人間の課題をどう解決するか」という視点です。
        `
            }
        };

        if (posts[id]) {
            setMetadata(posts[id]);
            setContent(posts[id].content);
        } else {
            navigate('/blog');
        }
    }, [id, navigate]);

    if (!metadata) return null;

    return (
        <div className="min-h-screen bg-site-bg py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <button
                        onClick={() => navigate('/blog')}
                        className="flex items-center space-x-3 text-charcoal/30 hover:text-secondary mb-16 transition-all uppercase text-xs font-bold tracking-[0.2em]"
                    >
                        <ArrowLeft size={18} />
                        <span>Back to Blog</span>
                    </button>

                    <header className="mb-12 border-b border-charcoal/5 pb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
                            {metadata.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-sm text-body/60">
                            <div className="flex items-center space-x-2">
                                <User size={16} />
                                <span className="font-medium">{metadata.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Calendar size={16} />
                                <span>{metadata.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock size={16} />
                                <span>{metadata.readTime}</span>
                            </div>
                        </div>
                    </header>

                    <div className="prose prose-lg max-w-none text-charcoal/80 prose-headings:text-charcoal prose-headings:font-bold prose-pre:bg-charcoal prose-pre:text-white prose-a:text-authority prose-a:font-bold prose-strong:text-charcoal uppercase-prose">
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>

                    <div className="mt-24 pt-16 border-t-2 border-charcoal/5 flex justify-center">
                        <div className="text-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <div className="w-16 h-16 border-2 border-charcoal/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-highlight/10 group-hover:border-secondary transition-all">
                                <ArrowLeft size={24} className="rotate-90 group-hover:-translate-y-2 transition-transform text-charcoal/20 group-hover:text-secondary" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/20 group-hover:text-secondary transition-colors">Back to Top</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BlogPosts;
