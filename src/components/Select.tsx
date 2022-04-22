import { PropsWithChildren, useState } from "react";

const Select = (props: PropsWithChildren<any>) => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div>
        <select onChange={(e) => setIndex(Number(e.target.value))}>
          {props.children.map((child: JSX.Element, i: number) => {
            return (
              <option key={i} value={i}>
                {child.type.name}
              </option>
            );
          })}
        </select>
        <span style={{ marginLeft: "1em" }}>
          View{" "}
          <strong>/src/components/{props.children[index].type.name}.tsx</strong>{" "}
          for instructions
        </span>
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>{props.children[index]}</div>
    </div>
  );
};

export default Select;
