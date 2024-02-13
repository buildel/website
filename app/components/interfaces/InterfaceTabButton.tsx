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
        "p-2 rounded-lg hover:bg-neutral-300/10  transition",
        {
          "bg-neutral-300/10": isActive,
        },
        className
      )}
      {...rest}
    >
      {children}
    </TabButton>
  );
};
