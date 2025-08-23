import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-[95vh] relative bg-gradient-to-br from-background to-muted/20 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Không gian Văn hoá{" "}
                <span className="text-primary">Hồ Chí Minh</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nơi lưu giữ và lan toả tư tưởng, đạo đức, phong cách của Người
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Link href="/thu-vien">Khám phá Thư viện</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/di-tich">Xem Di tích</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/multimedia">Xem Video</Link>
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden flex justify-center items-center">
              <Image
                src="/images/portrait/chu-tich-hcm-landing.jpg"
                alt="Chân dung Chủ tịch Hồ Chí Minh"
                className="rounded-lg object-cover"
                width={600}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>

            <div className="absolute -top-10 right-2 w-24 h-24 bg-secondary/20 rounded-full" />
            <div className="absolute -bottom-8 left-7 w-16 h-16 bg-accent/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
