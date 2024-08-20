import React from "react";

export const Header = () => (
  <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
    <h1 className="text-4xl text-foreground mb-4 sm:mb-0">Test task</h1>
    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
      <button className="bg-foreground hover:bg-muted-foreground transition-colors px-6 py-3 rounded-lg text-sm text-accent-foreground">
        Get 6 new tips in your inbox every Monday
      </button>
      <button className="bg-accent transition-colors px-6 py-3 rounded-lg text-sm font-semibold text-accent-foreground">
        {"Yes Please :)"}
      </button>
    </div>
  </header>
);
