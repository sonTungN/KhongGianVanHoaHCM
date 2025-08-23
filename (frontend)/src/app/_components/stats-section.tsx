import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import React from 'react'

interface StatsSectionProps {
  highlights: {
    icon: React.ElementType;
    title: string;
    description: string;
    href: string;
    color: string;
  }[];
}

function StatsSection({ highlights }: StatsSectionProps) {
  return (
    <section className="py-8 lg:py-16 bg-muted/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Khám phá Di sản Văn hoá
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tìm hiểu về cuộc đời, sự nghiệp và tư tưởng của Chủ tịch Hồ Chí Minh
            qua các bộ sưu tập phong phú
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 gap-2"
            >
              <CardHeader className="text-center lg:pb-4">
                <div
                  className={`size-12 mx-auto mb-2 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <item.icon className={`size-6 ${item.color}`} />
                </div>
                <CardTitle className="font-serif text-lg lg:text-xl">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-4 leading-relaxed">
                  {item.description}
                </CardDescription>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  <Link href={item.href}>Khám phá</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection