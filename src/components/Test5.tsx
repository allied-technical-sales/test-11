// When clicking the button to increment the count, every components re-renders.
// Can you think of any ways to prevent unnecessary re-renders when incrementing the count?
// 1. Implement some strategies to minimize the rendering when incrementing the count

import { MouseEventHandler, PropsWithChildren, useState } from "react";

const GenericComponent = ({
  children,
  title,
  onClick
}: PropsWithChildren<{
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLHeadingElement>;
}>) => {
  const Component = typeof onClick === "function" ? "button" : "h5";
  const isParent = title.includes("Parent");

  console.log(`Rendering ${title}`);

  return (
    <div
      style={{
        margin: 16,
        textAlign: "left",
        border: isParent ? "1px dotted black" : ""
      }}
    >
      <Component onClick={onClick} style={{ margin: isParent ? 8 : 0 }}>
        {title}
      </Component>
      {children}
    </div>
  );
};

const Test5 = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount((x) => x + 1);

  return (
    <div style={{ padding: 8 }}>
      <GenericComponent title="Parent 1">
        <GenericComponent title={"Parent 2 // Count: " + count}>
          <GenericComponent title="Parent 3">
            <GenericComponent title="Parent 4">
              <GenericComponent title="Child A" />
            </GenericComponent>
            <GenericComponent
              onClick={incrementCount}
              title="Click Here to Increment Count"
            />
          </GenericComponent>
          <GenericComponent title="Child B" />
        </GenericComponent>
        <GenericComponent title="Child C" />
      </GenericComponent>
    </div>
  );
};

Test5.displayName = "Test5";
export default Test5;
