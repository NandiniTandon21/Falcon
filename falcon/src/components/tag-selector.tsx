import React from "react";
import { RxCrossCircled } from "react-icons/rx";

import Tag from "./tag";

interface Tag {
  label: string;
  icon?: React.ReactNode;
  className?: string;
  selectedClassName?: string;
}

interface TagSelectorProps {
  tags: Tag[];
  multiSelect?: boolean;
}

const TagSelector: React.FC<TagSelectorProps> = ({
  tags,
  multiSelect = false,
}) => {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    if (multiSelect) {
      setSelectedTags((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
      );
    } else {
      setSelectedTags([tag]);
    }
  };

  const clearTags = () => {
    setSelectedTags([]);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((tag) => (
        <Tag
          key={tag.label}
          label={tag.label}
          icon={tag.icon}
          className={tag.className}
          selectedClassName={tag.selectedClassName}
          selected={selectedTags.includes(tag.label)}
          onClick={() => handleTagClick(tag.label)}
        />
      ))}
      <button
        className="flex items-center text-gray-500 hover:text-red-400"
        onClick={clearTags}
      >
        <RxCrossCircled size={18} />
      </button>
    </div>
  );
};

export default TagSelector;
