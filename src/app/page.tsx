import { Navbar } from "./_components/common/navbar";
import { Footer } from "./_components/common/footer";
import { BookNowCarousel } from "./_components/book-now-carousel";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <BookNowCarousel />
        {/* <div className="pt-20 md:pt-16">
          
        </div> */}
      </main>

      <Footer />
    </div>
  );
}
