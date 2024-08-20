import Modal from "@/components/ui/Modal";
import React, { memo } from "react";
import { Example } from "@/types/Example";

interface ExampleModalProps {
  selectedExample: Example | null;
  closeModal: () => void;
}
const ExampleModal: React.FC<ExampleModalProps> = memo(
  ({ selectedExample, closeModal }) => {
    return (
      <>
        {selectedExample && (
          <Modal closeModal={closeModal}>
            <div className="bg-foreground rounded-lg p-6 max-w-lg w-full shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-accent">
                  {selectedExample.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-200 transition-all"
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
              <div className="space-y-2">
                <p className="text-muted">
                  <strong>Duration:</strong> {selectedExample.duration}
                </p>
                <p className="text-muted">
                  <strong>Tag:</strong> {selectedExample.tag}
                </p>
              </div>
            </div>
          </Modal>
        )}
      </>
    );
  }
);

ExampleModal.displayName = "Card";

export { ExampleModal };
