import { Card } from "@/components/ui/Card";
import React, { memo } from "react";
import { Example } from "@/types/Example";

interface CardTableProps {
  addExample: () => void;
  filteredExamples: Example[];
  openModal: (example: Example) => void;
}
const CardTable: React.FC<CardTableProps> = memo(
  ({ addExample, filteredExamples, openModal }) => {
    return (
      <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          onClick={addExample}
          className="bg-foreground hover:bg-gray-700 transition-colors p-6 rounded-xl shadow-lg cursor-pointer flex items-center justify-center"
        >
          <h3 className="font-bold text-lg text-accent">Add new example +</h3>
        </Card>
        {filteredExamples.map((example, index) => (
          <Card
            key={index}
            className="bg-foreground hover:bg-ring transition-colors p-6 rounded-radius shadow-lg cursor-pointer"
            onClick={() => openModal(example)}
          >
            <h3 className="font-bold text-lg mb-3 text-accent">
              {example.title}
            </h3>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{example.duration}</span>
              <span className="bg-accent px-3 py-1 rounded-full text-xs font-semibold text-white">
                {example.tag}
              </span>
            </div>
          </Card>
        ))}
      </div>
    );
  }
);

CardTable.displayName = "CardTable";

export { CardTable };
