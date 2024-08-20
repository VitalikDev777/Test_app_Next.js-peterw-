import React, { memo } from "react";
import { Category } from "@/types/Categories";

interface FilterProps {
  categories: Category[];
  selectedFilter: string | null;
  setSelectedFilter: (item: string | null) => void;
}

const Filter: React.FC<FilterProps> = memo(
  ({ categories, selectedFilter, setSelectedFilter }) => {
    return (
      <div className="lg:col-span-1">
        {categories.map((category, index) => (
          <div key={index} className="mb-6">
            <h2 className="font-semibold text-xl mb-3 text-accent">
              {category.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item, itemIndex) => (
                <span
                  key={itemIndex}
                  className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-colors ${
                    selectedFilter === item
                      ? "bg-accent text-accent-foreground"
                      : "bg-foreground hover:bg-gray-600 text-gray-300"
                  }`}
                  onClick={() =>
                    setSelectedFilter(selectedFilter === item ? null : item)
                  }
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
);

Filter.displayName = "Filter";

export { Filter };
