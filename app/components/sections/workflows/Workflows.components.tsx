import { BasicLink, BasicLinkProps } from "~/components/shared/BasicLink";
import { cn } from "~/lib/utils";
import { TabButton, TabButtonProps } from "~/components/tabs/Tab";
import { useTabsContext } from "~/components/tabs/TabGroup";
import { Button } from "~/components/shared/New-button";

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
      variant={activeTabId === tabId ? "default" : "ghost"}
      size="xl"
      className={cn("rounded-xl", className)}
      {...props}
    >
      <TabButton tabId={tabId}>{children}</TabButton>
    </Button>
  );
}
