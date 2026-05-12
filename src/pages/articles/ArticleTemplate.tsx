import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

interface ArticleTemplateProps {
  title: string;
  category: string;
  date?: string;
  heroImage?: string;
  children: ReactNode;
}

const ArticleTemplate = ({
  title,
  category,
  date = new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' }),
  heroImage,
  children
}: ArticleTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <article className="pt-8 pb-16" style={{ fontFamily: 'Georgia, serif' }}>
        <div className="container mx-auto max-w-3xl px-6" style={{ fontSize: '19px', lineHeight: '1.8', color: '#000000' }}>
          {/* Article Header */}
          <header className="mb-10">
            <div className="text-xs text-abbrivio-orange font-semibold mb-5 uppercase tracking-widest">
              {category}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-10 leading-tight font-serif">
              {title}
            </h1>
          </header>

          {/* Article Hero Image */}
          {heroImage && (
            <div className="mb-12 rounded-lg overflow-hidden">
              <img 
                src={heroImage} 
                alt="" 
                className="w-full h-auto object-cover" 
              />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none font-serif [&_p]:mb-[40px]
            prose-headings:text-black prose-headings:font-bold prose-headings:font-serif
            prose-h2:text-[40px] prose-h2:mt-16 prose-h2:mb-8 prose-h2:leading-[1.3]
            prose-h3:text-[28px] prose-h3:mt-12 prose-h3:mb-6 prose-h3:leading-[1.3]
            [&_p]:text-[19px] [&_p]:leading-[1.8] [&_p]:text-black [&_p]:font-serif
            prose-strong:text-black prose-strong:font-bold prose-strong:font-serif
            prose-ul:my-8 prose-ul:list-disc prose-ul:pl-6
            prose-li:text-[19px] prose-li:leading-[1.8] prose-li:text-black prose-li:mb-4 prose-li:font-serif
            prose-img:rounded-lg prose-img:my-10 prose-img:shadow-sm
            prose-a:text-abbrivio-orange prose-a:no-underline hover:prose-a:underline prose-a:font-normal prose-a:font-serif">
            {children}
          </div>

          {/* Back to Blog */}
          <div className="mt-20 pt-10 border-t border-gray-200 text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Torna al Blog
              </Link>
            </Button>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default ArticleTemplate;