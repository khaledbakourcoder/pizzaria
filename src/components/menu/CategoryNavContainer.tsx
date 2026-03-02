// components/menu/CategoryNavContainer.tsx
"use client";

import useScrollSpy from "@/hooks/useScrollSpy";
import CategoryNav from "./CategoryNav";

export default function CategoryNavContainer({
  categories,
}: {
  categories: any[];
}) {
  const { activeCategory, scrollToCategory } = useScrollSpy(categories);

  return (
    <CategoryNav
      categories={categories}
      activeCategory={activeCategory}
      onCategoryClick={scrollToCategory}
    />
  );
}
