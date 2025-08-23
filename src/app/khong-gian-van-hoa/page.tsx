import React from "react";
import SearchForm from "../_components/search/search-form";
import ArticlesSection from "../_components/articles-section";
import { BookCarousel } from "../_components/carousel-section";

function KhongGianVanHoa() {
  return (
    <div className="flex-1 flex flex-col">
      <BookCarousel />

      <SearchForm />

      <ArticlesSection />
    </div>
  );
}

export default KhongGianVanHoa;
