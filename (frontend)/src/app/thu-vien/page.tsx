import { BookOpen } from "lucide-react";
import SlidingBookCarousel from "../../../components/custom/sliding-book-carousel";

// TODO: Replace with actual data
const bacWorks = [
  {
    id: 1,
    title: "Đường Kách mệnh",
    description:
      "Tác phẩm kinh điển về con đường cách mạng của dân tộc Việt Nam",
    year: "1927",
    pages: "156",
    category: "Chính trị",
    coverUrl: "/placeholder.svg",
    downloadUrl: "/downloads/duong-kach-menh.pdf",
  },
  {
    id: 2,
    title: "Nhật ký trong tù",
    description:
      "Những bài thơ bất hủ được viết trong thời gian bị giam cầm tại Trung Quốc",
    year: "1942-1943",
    pages: "89",
    category: "Thơ văn",
    coverUrl: "/placeholder.svg",
    downloadUrl: "/downloads/nhat-ky-trong-tu.pdf",
  },
  {
    id: 3,
    title: "Bản di chúc",
    description:
      "Lời dặn cuối cùng của Bác Hồ gửi đến Đảng, nhân dân và thế hệ mai sau",
    year: "1969",
    pages: "12",
    category: "Chính trị",
    coverUrl: "/placeholder.svg",
    downloadUrl: "/downloads/ban-di-chuc.pdf",
  },
  {
    id: 4,
    title: "Tuyên ngôn Độc lập",
    description:
      "Bản tuyên ngôn lịch sử khai sinh nước Việt Nam Dân chủ Cộng hòa",
    year: "1945",
    pages: "8",
    category: "Chính trị",
    coverUrl: "/placeholder.svg",
    downloadUrl: "/downloads/tuyen-ngon-doc-lap.pdf",
  },
  {
    id: 5,
    title: "Bác Hồ với miền Nam",
    description:
      "Tình cảm sâu sắc của Bác Hồ dành cho đồng bào miền Nam thân yêu",
    year: "1945",
    pages: "8",
    category: "Chính trị",
    coverUrl: "/placeholder.svg",
    downloadUrl: "/downloads/tuyen-ngon-doc-lap.pdf",
  },
  {
    id: 6,
    title: "Hồ Chí Minh - Lời vàng ngọc",
    description:
      "Tuyển tập những câu nói bất hủ và tư tưởng sâu sắc của Chủ tịch Hồ Chí Minh",
    year: "1945",
    pages: "8",
    category: "Chính trị",
    coverUrl: "/placeholder.svg",
    downloadUrl: "/downloads/tuyen-ngon-doc-lap.pdf",
  },
  {
    id: 7,
    title: "Bác Hồ với miền Nam",
    description:
      "Tình cảm sâu sắc của Bác Hồ dành cho đồng bào miền Nam thân yêu",
    year: "1945",
    pages: "8",
    category: "Chính trị",
    coverUrl: "/placeholder.svg",
    downloadUrl: "/downloads/tuyen-ngon-doc-lap.pdf",
  },
  {
    id: 8,
    title: "Bác Hồ với miền Nam",
    description:
      "Tình cảm sâu sắc của Bác Hồ dành cho đồng bào miền Nam thân yêu",
    year: "1945",
    pages: "8",
    category: "Chính trị",
    coverUrl: "/placeholder.svg",
    downloadUrl: "/downloads/tuyen-ngon-doc-lap.pdf",
  },
  {
    id: 9,
    title: "Bác Hồ với miền Nam",
    description:
      "Tình cảm sâu sắc của Bác Hồ dành cho đồng bào miền Nam thân yêu",
    year: "1945",
    pages: "8",
    category: "Chính trị",
    coverUrl: "/placeholder.svg",
    downloadUrl: "/downloads/tuyen-ngon-doc-lap.pdf",
  },
  {
    id: 10,
    title: "Bác Hồ với miền Nam",
    description:
      "Tình cảm sâu sắc của Bác Hồ dành cho đồng bào miền Nam thân yêu",
    year: "1945",
    pages: "8",
    category: "Chính trị",
    coverUrl: "/placeholder.svg",
    downloadUrl: "/downloads/tuyen-ngon-doc-lap.pdf",
  },
];

const aboutBacBooks = [
  {
    id: 5,
    title: "Bác Hồ với miền Nam",
    description:
      "Tình cảm sâu sắc của Bác Hồ dành cho đồng bào miền Nam thân yêu",
    author: "Nhiều tác giả",
    year: "2020",
    pages: "324",
    category: "Tiểu sử",
    coverUrl: "/placeholder.svg",
    downloadUrl: "/downloads/bac-ho-mien-nam.pdf",
  },
  {
    id: 6,
    title: "Hồ Chí Minh - Lời vàng ngọc",
    description:
      "Tuyển tập những câu nói bất hủ và tư tưởng sâu sắc của Chủ tịch Hồ Chí Minh",
    author: "Viện Hồ Chí Minh",
    year: "2019",
    pages: "456",
    category: "Tư tưởng",
    coverUrl: "/placeholder.svg",
    downloadUrl: "/downloads/loi-vang-ngoc.pdf",
  },
  {
    id: 7,
    title: "Hồ Chí Minh - Biểu tượng hòa bình",
    description:
      "Vai trò của Chủ tịch Hồ Chí Minh trong việc xây dựng hòa bình thế giới",
    author: "GS. Nguyễn Văn Huyên",
    year: "2021",
    pages: "278",
    category: "Lịch sử",
    coverUrl: "/placeholder.svg",
    downloadUrl: "/downloads/bieu-tuong-hoa-binh.pdf",
  },
];

const academicResearch = [
  {
    id: 8,
    title: "Tư tưởng Hồ Chí Minh về xây dựng Đảng",
    description:
      "Nghiên cứu chuyên sâu về quan điểm xây dựng và chỉnh đốn Đảng của Bác Hồ",
    author: "TS. Trần Văn Minh",
    year: "2022",
    pages: "512",
    category: "Nghiên cứu",
    coverUrl: "/placeholder.svg",
    downloadUrl: "/downloads/tu-tuong-xay-dung-dang.pdf",
  },
  {
    id: 9,
    title: "Phong cách Hồ Chí Minh trong lãnh đạo",
    description:
      "Phân tích phong cách lãnh đạo độc đáo và hiệu quả của Chủ tịch Hồ Chí Minh",
    author: "PGS. Lê Thị Hoa",
    year: "2023",
    pages: "389",
    category: "Nghiên cứu",
    coverUrl: "/placeholder.svg",
    downloadUrl: "/downloads/phong-cach-lanh-dao.pdf",
  },
];

export default function DigitalLibraryPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="size-12 text-primary mr-4" />
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
                Thư viện Văn học Số
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Kho tàng tri thức văn học về Chủ tịch Hồ Chí Minh, bao gồm các tác
              phẩm gốc đến các nghiên cứu học thuật.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12">
        <div className="px-4">
          <div className="container mx-auto mb-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
              Tác phẩm của Chủ tịch Hồ Chí Minh
            </h2>
            <p className="text-muted-foreground">
              Những tác phẩm kinh điển do chính Bác Hồ sáng tác, thể hiện tư
              tưởng và tầm nhìn của Người
            </p>
          </div>
          <SlidingBookCarousel bookList={bacWorks} className="mb-8" />

          <div className="container mx-auto mb-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
              Sách viết về Chủ tịch Hồ Chí Minh
            </h2>
            <p className="text-muted-foreground">
              Các tác phẩm nghiên cứu, tiểu sử và hồi ký về cuộc đời, sự nghiệp
              của Bác Hồ
            </p>
          </div>
          <SlidingBookCarousel bookList={aboutBacBooks} className="mb-8" />

          <div className="container mx-auto mb-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
              Nghiên cứu học thuật
            </h2>
            <p className="text-muted-foreground">
              Các công trình nghiên cứu chuyên sâu về tư tưởng, phong cách và di
              sản của Chủ tịch Hồ Chí Minh
            </p>
          </div>
          <SlidingBookCarousel bookList={academicResearch} className="mb-8" />
        </div>
      </section>
    </div>
  );
}
