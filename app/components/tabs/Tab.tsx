import React, { PropsWithChildren, useCallback } from "react";
import { useTabsContext } from "~/components/tabs/TabGroup";

interface TabProps extends PropsWithChildren {
  tabId: string;
}
export const Tab: React.FC<TabProps> = ({ children, tabId }) => {
  const { activeTabId } = useTabsContext();

  if (activeTabId !== tabId) return;
  return <div>{children}</div>;
};

export interface TabButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  tabId: string;
}
export const TabButton = React.forwardRef<HTMLButtonElement, TabButtonProps>(
  ({ children, className, tabId, onClick, ...rest }, ref) => {
    const { setActiveTab } = useTabsContext();

    const handleSetActiveTab = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        setActiveTab(tabId);
        onClick?.(e);
      },
      [setActiveTab, tabId, onClick]
    );

    return (
      <button
        type="button"
        className={className}
        onClick={handleSetActiveTab}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

TabButton.displayName = "TabButton";
