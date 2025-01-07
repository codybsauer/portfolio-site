import { SkillBarProps, SkillStatus } from "./types";

export const SkillBar: React.FC<SkillBarProps> = ({ name, level, status }) => {
  const getStatusColor = (status: SkillStatus): string => {
    switch (status) {
      case "proficient":
        return "bg-green-500";
      case "learning":
        return "bg-yellow-500";
      case "future":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const showBar = status !== "future";

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-mono text-blue-200">{name}</span>
        <span
          className={`px-2 rounded-md text-xs ${getStatusColor(
            status
          )} text-black`}
        >
          {status.toUpperCase()}
        </span>
      </div>
      {showBar ? (
        <div className="h-4 bg-gray-700 rounded-full overflow-hidden border border-indigo-500">
          <div
            className={`h-full ${getStatusColor(
              status
            )} transition-all duration-500`}
            style={{ width: `${level}%` }}
          />
        </div>
      ) : (
        <div className="h-4 bg-gray-700 rounded-full overflow-hidden border border-indigo-500 flex items-center justify-center">
          <span className="text-xs text-blue-200 font-mono animate-pulse">
            TODO
          </span>
        </div>
      )}
    </div>
  );
};
