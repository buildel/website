import { cn } from "~/lib/utils";

export function WhatsNewBadge({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-white shadow-xl w-fit rounded-lg text-sm px-2 py-0.5 flex items-center gap-1 border text-muted-foreground",
        className
      )}
      {...rest}
    >
      <div className="bg-indigo-700/10 w-3 h-3 rounded-full flex justify-center items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-700 animate-pulse" />
      </div>

      {children}
    </div>
  );
}
