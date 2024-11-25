import { BasicLink, BasicLinkProps } from "~/components/shared/BasicLink";
import { cn } from "~/lib/utils";
import { TabButton, TabButtonProps } from "~/components/tabs/Tab";
import { useTabsContext } from "~/components/tabs/TabGroup";
import { Button } from "~/components/shared/Button";

export function WorkflowTabLink({
  className,
  children,
  ...rest
}: BasicLinkProps) {
  return (
    <BasicLink
      className={cn(
        "w-fit block mx-auto text-base md:text-xl underline hover:no-underline",
        className
      )}
      {...rest}
    >
      {children}
    </BasicLink>
  );
}

export function WorkflowTabContent({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <p
      className={cn(
        "text-center text-foreground mx-auto text-base md:text-xl max-w-[650px] mb-4 md:mb-10",
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
}

export function WorkflowTabButton({
  tabId,
  children,
  className,
  ...props
}: TabButtonProps) {
  const { activeTabId } = useTabsContext();

  return (
    <Button
      asChild
      variant="ghost"
      size="lg"
      className={cn(
        "w-full flex flex-col gap-1 md:gap-2 py-4 px-4 md:px-10 md:py-6 md:h-[205px] lg:h-[166px] items-start border rounded-xl hover:bg-indigo-500/5 h-full grow",
        {
          "bg-indigo-500/5 border-indigo-500/50": activeTabId === tabId,
        },
        className
      )}
      {...props}
    >
      <TabButton tabId={tabId}>{children}</TabButton>
    </Button>
  );
}

export function WorkflowTabButtonHeading({
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn("text-lg md:text-xl flex gap-2 items-center", className)}
      {...rest}
    />
  );
}

export function WorkflowTabButtonParagraph({
  className,
  ...rest
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm text-muted-foreground font-normal md:text-base whitespace-pre-wrap text-left",
        className
      )}
      {...rest}
    />
  );
}
