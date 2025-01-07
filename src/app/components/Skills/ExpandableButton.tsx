import React from "react";

interface Category {
  title: string;
}

interface ExpandedCategories {
  [key: string]: boolean;
}

interface ExpandableButtonProps {
  category: Category;

  expandedCategories: ExpandedCategories;

  toggleCategory: (categoryTitle: string) => void;
}

const ExpandableButton: React.FC<ExpandableButtonProps> = ({
  category,
  expandedCategories,
  toggleCategory,
}) => {
  const baseClassNames = `w-full mt-4 px-6 py-2 font-mono text-sm text-indigo-300 border-2 border-indigo-500 rounded-lg
    bg-gradient-to-r from-indigo-900 to-purple-900 hover:from-indigo-800 hover:to-purple-800
    transition-all duration-300 ease-in-out transform hover:scale-105
    shadow-[0_0_10px_rgba(99,102,241,0.3)] hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`;

  const isExpanded = expandedCategories[category.title];

  const Element = isExpanded ? "a" : "button";

  const elementProps = {
    className: baseClassNames,
    onClick: (e: React.MouseEvent) => {
      if (isExpanded) {
        e.preventDefault();
      }
      toggleCategory(category.title);
    },
    ...(isExpanded && { href: "#skills" }),
  };

  return (
    <Element {...elementProps}>
      <div className="flex items-center justify-center gap-2">
        <span className="animate-pulse">⚡</span>
        {isExpanded ? "SHOW LESS" : "SHOW MORE"}
        <span className="animate-pulse">⚡</span>
      </div>
    </Element>
  );
};

export default ExpandableButton;
