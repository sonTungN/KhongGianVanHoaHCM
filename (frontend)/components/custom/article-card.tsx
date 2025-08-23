import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
  href: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
}

export function ArticleCard({
  href,
  title,
  description,
  imageUrl,
  imageAlt,
  className,
}: ArticleCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className
      )}
    >
      <div className="aspect-video overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          width={400}
          height={225}
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
}
