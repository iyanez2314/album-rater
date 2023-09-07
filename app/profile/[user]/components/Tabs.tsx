import React, { ReactElement, useState } from "react";

interface TabProps {
  label: string;
  children: React.ReactNode;
}

const Tabs: React.FC<{ children: ReactElement<TabProps>[] }> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    newActiveTab: string
  ) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div>
      <div className="mt-3 flex rounded mx-2">
        {children.map((child) => {
          const { label } = child.props;

          return (
            <button
              key={label}
              className={`p-2 rounded font-thin w-full ${
                activeTab === label
                  ? "text-white bg-[#84A59D] underline"
                  : "text-[#84A59D] bg-white"
              }`}
              onClick={(e) => handleClick(e, label)}
            >
              {label}
            </button>
          );
        })}
      </div>
      {children.map((child) => {
        if (child.props.label !== activeTab) return undefined;
        return child.props.children;
      })}
    </div>
  );
};

export default Tabs;
