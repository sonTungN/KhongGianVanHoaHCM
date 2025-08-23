import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, GraduationCap, MapPin, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    icon: BookOpen,
    title: "Thư viện Số",
    description: "Tác phẩm của Bác, sách viết về Bác và các nghiên cứu học thuật",
    href: "/thu-vien",
    color: "text-primary",
  },
  {
    icon: MapPin,
    title: "Di tích & Không gian",
    description: "Pác Bó, Làng Sen, Nhà sàn Bác Hồ và các địa điểm lịch sử",
    href: "/di-tich",
    color: "text-secondary",
  },
  {
    icon: Camera,
    title: "Kỷ vật & Tác phẩm",
    description: "Hiện vật quý giá và những kỷ vật gắn liền với cuộc đời Bác",
    href: "/ky-vat",
    color: "text-accent",
  },
  {
    icon: GraduationCap,
    title: "Học tập & Làm theo",
    description: "Tài liệu hướng dẫn học tập tấm gương đạo đức Hồ Chí Minh",
    href: "/hoc-tap",
    color: "text-primary",
  },
];

const quotes = [
  {
    text: "Không có gì quý hơn độc lập, tự do.",
    context: "Tuyên ngôn Độc lập, 1945",
  },
  {
    text: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",
    context: "Lời dặn cuối cùng",
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      <section className="min-h-[95vh] relative bg-gradient-to-br from-background to-muted/20 py-16 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 max-w-2xl">
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

            <div className="relative">
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

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Khám phá Di sản Văn hoá
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tìm hiểu về cuộc đời, sự nghiệp và tư tưởng của Chủ tịch Hồ Chí
              Minh qua các bộ sưu tập phong phú
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border/50"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <CardTitle className="font-serif text-xl">
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

      {/* Quotes Section */}
      <section className="py-16">
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
    </div>
  );
}
