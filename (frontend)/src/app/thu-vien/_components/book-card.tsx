import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Download } from "lucide-react";

function BookCard({ book, className }: { book: any; className?: string }) {
  return (
    <Card
      className={cn(
        "group hover:shadow-lg transition-all duration-300 h-fit pt-0 min-w-[300px] gap-4",
        className
      )}
    >
      <div className="bg-muted rounded-t-lg overflow-hidden relative aspect-[5/4] w-full">
        <Image
          src={book.coverUrl || "/placeholder.svg"}
          alt={book.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>

      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-1">
          <Badge variant="secondary" className="text-xs">
            {book.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{book.year}</span>
        </div>
        <CardTitle className="font-serif text-lg leading-tight line-clamp-1">
          {book.title}
        </CardTitle>
        {book.author && (
          <p className="text-sm text-muted-foreground">
            Tác giả: {book.author}
          </p>
        )}
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="line-clamp-2 mb-4 leading-relaxed">
          {book.description}
        </CardDescription>
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <span>{book.pages} trang</span>
          <span>PDF</span>
        </div>
        <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Tải xuống
        </Button>
      </CardContent>
    </Card>
  );
}

export default BookCard;
