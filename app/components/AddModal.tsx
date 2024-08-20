"use client";

import Modal from "@/components/ui/Modal";
import React, { ChangeEvent, memo, useMemo, useState } from "react";
import { Category } from "@/types/Categories";
import { Example } from "@/types/Example";

interface AddModalProps {
  isAdding: boolean;
  closeAddModal: () => void;
  categories: Category[];
  setExamples: React.Dispatch<React.SetStateAction<Example[]>>;
}

const AddModal: React.FC<AddModalProps> = memo(
  ({ isAdding, closeAddModal, categories, setExamples }) => {
    const [selectedSubcategory, setSelectedSubcategory] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newDuration, setNewDuration] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const readyToAdd = useMemo(
      () => !!(newTitle && newDuration && selectedSubcategory),
      [newDuration, newTitle, selectedSubcategory]
    );

    const currentCategory = categories.find(
      (cat) => cat.title === selectedCategory
    );

    const subcategories = currentCategory ? currentCategory.items : [];

    const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setSelectedCategory(event.target.value);
      setSelectedSubcategory("");
    };

    const handleSubcategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setSelectedSubcategory(event.target.value);
    };

    const addNewExample = () => {
      if (readyToAdd) {
        setExamples((prevExamples: Example[]) => [
          {
            title: newTitle,
            duration: newDuration,
            tag: selectedSubcategory,
          },
          ...prevExamples,
        ]);
        closeAddModal();
      }
    };

    return (
      <>
        {isAdding && (
          <Modal closeModal={closeAddModal}>
            <div className="bg-foreground rounded-lg p-6 max-w-lg w-full shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-accent">
                  Add new example
                </h2>
                <button
                  onClick={closeAddModal}
                  className="text-gray-400 hover:text-gray-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    className="bg-input px-4 py-2 rounded-lg text-sm text-foreground w-full placeholder-foreground"
                    placeholder="Title"
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-1">
                    Duration
                  </label>
                  <input
                    type="text"
                    className="bg-input  px-4 py-2 rounded-lg text-sm text-foreground w-full placeholder-foreground"
                    placeholder="Duration"
                    onChange={(e) => setNewDuration(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    id="cat"
                    className="bg-input px-4 py-2 rounded-lg text-sm text-foreground w-full"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat.title} value={cat.title}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>
                {selectedCategory && (
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-1">
                      Subcategory
                    </label>
                    <select
                      name="subcategory"
                      id="subcat"
                      className="bg-input  px-4 py-2 rounded-lg text-sm text-foreground w-full"
                      value={selectedSubcategory}
                      onChange={handleSubcategoryChange}
                    >
                      <option value="">Select a Tag</option>
                      {subcategories.map((sub) => (
                        <option key={sub} value={sub}>
                          {sub}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <button
                  onClick={addNewExample}
                  className="bg-accent px-4 py-2 rounded-[6px] text-sm font-semibold text-white disabled:accent-muted w-full mt-4"
                  disabled={!readyToAdd}
                >
                  Add
                </button>
              </div>
            </div>
          </Modal>
        )}
      </>
    );
  }
);

AddModal.displayName = "Card";

export { AddModal };
