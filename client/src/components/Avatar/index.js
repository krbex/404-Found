import { BigHead } from "@bigheads/core";

import {
  generateDiceBearGridy,

} from "../../utils/randomAvatar";

export default function Avatar() {
  const array = [0];

  return (
    <div style={{ display: "flex", height: "100%" }}>
      {array.map((_, index) => (
        <div
          key={index}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <img
            src={generateDiceBearGridy(Math.random())}
            width="200"
            alt="bottts_avatar"
          />
        </div>
      ))}
    </div>
  );
}
