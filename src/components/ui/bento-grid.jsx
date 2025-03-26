import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid  grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}>
      {children}
    </div>)
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
    "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black/40 dark:border-white/[0.2] bg-white border border-transparent flex flex-col space-y-4 items-start h-[250px]",
    className
  )}
>
  {header}
  <div className="group-hover/bento:translate-x-2 transition duration-200">
    {icon}
    <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
      {title}
    </div>
    <div className="font-sans font-normal text-neutral-600 text-lg dark:text-neutral-300">
      {description}
    </div>
    {action && (
        <div className="mt-2  w-full">{action}</div>
  )}
  </div>
</div>

  );
};
