import React, { useEffect } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { mobile } from "../helpers/constants";
import { lightenHSL } from "../helpers/functions";
import * as styles from "../styles/Chart.module.css";

// selections = [true, false..., false, ?true]. If ends with 'true', we must increase the total length by 1.

export function Chart({
  selections,
}: {
  selections: Array<boolean>;
}): JSX.Element {
  const length = selections.length;
  const totalLength = selections[length - 1] ? length + 1 : length;
  const selectedOnly = selections
    .map((checked: boolean, i: number): number => (checked ? i + 1 : 0))
    .filter((x) => x);
  const selectedLength = selectedOnly.length;

  const isMobile = useMediaQuery(mobile);

  function getStyleTag(id: string): HTMLElement {
    const existingStyle = document.getElementById(id);
    const style = existingStyle
      ? existingStyle
      : document.createElement("style");
    style.id = id;
    return style;
  }

  useEffect(() => {
    const styleTag = getStyleTag("chevronChart");

    let styling = "";
    let color, zIndex;

    [0, ...selectedOnly].forEach((i: number, ind: number): void => {
      color = i ? lightenHSL(i - 1, totalLength) : "#fff";
      zIndex = (selectedLength - ind + 1) * 100;

      styling += `
        .${styles.chart} .color_${i} {
          z-index: ${zIndex};
          background: ${color};
        }
        .${styles.chart} .color_${i}::before {
          border-left-color: ${color};
        }
      `;
    });
    styleTag.innerHTML = styling;
    document.head.appendChild(styleTag);
  }, [selectedLength]);

  const chart = [0, ...selectedOnly].map(
    (item: number): JSX.Element => (
      <div key={item} className={`flex color_${item}`}>
        {<span>{item ? item : " "}</span>}
      </div>
    ),
  );

  return (
    <div
      className={`${styles.chart} flex ${isMobile ? `${styles.chart}-mobile` : ""}`}
    >
      {chart}
    </div>
  );
}
