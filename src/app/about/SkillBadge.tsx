import React from "react";

type SkillBadgeProps = {
  name: string;
  Icon: React.ComponentType<any>;
};

export default function SkillBadge({ name, Icon }: SkillBadgeProps) {
  return (
    <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:scale-105 transition-transform">
      {Icon && <Icon className="text-lg" />}
      {name}
    </span>
  );
}