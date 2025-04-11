import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl w-full px-4 md:px-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};


export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  action
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-white dark:bg-black/40 border border-transparent dark:border-white/20 flex flex-col items-center justify-center sm:items-start sm:justify-between space-y-4 h-auto min-h-[240px] sm:min-h-[260px] text-center sm:text-left",
        className
      )}
    >
      {header}

      <div className="group-hover/bento:translate-x-1 transition duration-200 w-full flex flex-col items-center sm:items-start">
        {icon && <div className="mb-2">{icon}</div>}

        <div className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-neutral-200 mb-1">
          {title}
        </div>

        <div className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
          {description}
        </div>

        {action && (
          <div className="mt-3 w-full flex justify-center sm:justify-start">
            {action}
          </div>
        )}
      </div>
    </div>
  );
};

