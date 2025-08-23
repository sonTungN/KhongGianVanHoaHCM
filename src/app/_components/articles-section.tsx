import { ArticleCard } from "@/components/custom/article-card";

export default function ArticlesSection() {
  const articles = [
    {
      id: 1,
      title: "Getting Started with Next.js 15: A Complete Guide",
      description:
        "Learn how to build modern web applications with the latest features in Next.js 15, including the new App Router and Server Components.",
      imageUrl: "/placeholder.svg",
      href: "/articles/nextjs-15-guide",
    },
    {
      id: 2,
      title: "Mastering TypeScript for React Development",
      description:
        "Discover advanced TypeScript patterns and best practices that will make your React applications more robust and maintainable.",
      imageUrl: "/placeholder.svg",
      href: "/articles/typescript-react",
    },
    {
      id: 3,
      title: "Building Responsive Layouts with Tailwind CSS",
      description:
        "Create beautiful, responsive designs efficiently using Tailwind CSS utility classes and modern layout techniques.",
      imageUrl: "/placeholder.svg",
      href: "/articles/tailwind-responsive",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="w-full text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Bài viết mới nhất</h1>
        <p className="text-muted-foreground text-lg">
          Khám phá các bài viết mới nhất về không gian văn hoá Hồ Chí Minh
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            href={article.href}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
            imageAlt={article.title}
          />
        ))}
      </div>
    </section>
  );
}
