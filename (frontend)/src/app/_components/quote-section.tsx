import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface QuoteSectionProps {
  quotes: {
    text: string;
    context: string;
  }[];
}

function QuoteSection({ quotes }: QuoteSectionProps) {
  return (
    <section className="py-8 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Lời Vàng của Bác
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {quotes.map((quote, index) => (
            <Card key={index} className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <blockquote className="font-serif text-xl lg:text-2xl text-foreground mb-4 leading-relaxed">
                  "{quote.text}"
                </blockquote>
                <cite className="text-muted-foreground font-medium">
                  — {quote.context}
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuoteSection;
