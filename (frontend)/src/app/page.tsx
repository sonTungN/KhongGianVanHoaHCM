import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, GraduationCap, MapPin, Camera } from "lucide-react";
import Link from "next/link";
import HeroSection from "./_components/hero-section";
import StatsSection from "./_components/stats-section";
import QuoteSection from "./_components/quote-section";

const highlights = [
  {
    icon: BookOpen,
    title: "Thư viện Số",
    description:
      "Tác phẩm của Bác, sách viết về Bác và các nghiên cứu học thuật",
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

export default function HomePage() {
  return (
    <div className="bg-background">
      <HeroSection />

      <StatsSection highlights={highlights} />

      <QuoteSection quotes={quotes} />
    </div>
  );
}
