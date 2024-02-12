import React from "react";
import { TabButton, TabButtonProps } from "~/components/tabs/Tab";
import { useTabsContext } from "~/components/tabs/TabGroup";
import clsx from "clsx";

export const InterfaceTabButton: React.FC<TabButtonProps> = ({
  className,
  children,
  tabId,
  ...rest
}) => {
  const { activeTabId } = useTabsContext();
  const isActive = activeTabId === tabId;
  return (
    <TabButton
      tabId={tabId}
      className={clsx(
        "p-2 border rounded-lg hover:bg-zinc-900 hover:border-neutral-900 transition",
        {
          "bg-zinc-900 border-neutral-900": isActive,
          "bg-transparent border-neutral-950": !isActive,
        },
        className
      )}
      {...rest}
    >
      {children}
    </TabButton>
  );
};
