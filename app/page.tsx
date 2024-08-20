"use client";

import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Example } from "@/types/Example";
import { Header } from "@/app/components/Header";
import { Filter } from "@/app/components/Filter";
import { CardTable } from "@/app/components/CardTable";
import { ExampleModal } from "@/app/components/ExampleModal";
import { AddModal } from "@/app/components/AddModal";

import { categories, initialExamples } from "@/constants/items";

const MarketingDashboard = () => {
  const [examples, setExamples] = useState<Example[]>(initialExamples);
  const [selectedExample, setSelectedExample] = useState<Example | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const addExample = useCallback(() => {
    setIsAdding(true);
  }, []);

  const closeAddModal = () => {
    setIsAdding(false);
  };

  const filteredExamples = useMemo(() => {
    if (!selectedFilter) return examples;
    return examples.filter((example) => example.tag === selectedFilter);
  }, [selectedFilter, examples]);

  const openModal = useCallback(
    (example: Example) => {
      setSelectedExample(example);
      router.push(`?example=${encodeURIComponent(example.title)}`, undefined);
    },
    [router]
  );

  const closeModal = useCallback(() => {
    setSelectedExample(null);
    router.push("/", undefined);
  }, [router]);

  useEffect(() => {
    const exampleTitle = searchParams.get("example");

    if (exampleTitle) {
      const newExample = examples.find(
        (example) => example.title === exampleTitle
      );

      if (newExample && newExample.title !== selectedExample?.title) {
        setSelectedExample(newExample);
      }
    } else if (selectedExample !== null) {
      setSelectedExample(null);
    }
  }, [searchParams, examples, selectedExample]);

  return (
    <div className="p-6 bg-background min-h-screen">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        <Filter
          categories={categories}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <CardTable
          addExample={addExample}
          filteredExamples={filteredExamples}
          openModal={openModal}
        />
      </div>
      <ExampleModal selectedExample={selectedExample} closeModal={closeModal} />
      <AddModal
        isAdding={isAdding}
        closeAddModal={closeAddModal}
        categories={categories}
        setExamples={setExamples}
      />
    </div>
  );
};

export default MarketingDashboard;
