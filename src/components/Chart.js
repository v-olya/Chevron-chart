import { useEffect, useRef} from 'react';
import styles from '../styles/Chart.module.css';
import { baseHSL } from '../constants.js';

export function Chart({selections}) {
  //selections props = full-size array [true, false..., false]

  const selectedOnly = selections.map((checked,i)=> checked ? i+1 : 0).filter(x=>x);
  const [length, selectedLength] = [selections.length, selectedOnly.length];
  const ref = useRef(null);

  useEffect(()=> {
    const existingStyle = document.getElementById("chevronChart");
    const styleTag = existingStyle ? existingStyle : document.createElement("style");
    styleTag.id = "chevronChart";

    let chartWidth = ref.current && ref.current.offsetWidth;
    let chevronWidth = 0;
    if (chartWidth) {
      chevronWidth = ref.current.querySelector("div:last-child").offsetWidth;
    };

    let chevronStyling = `
      .${styles.chart} div {
        width: calc(100%/${selectedLength});
      }
    `;
    let color;
    [0, ...selectedOnly].forEach( i=> {
      color = i ? `hsl(${baseHSL[0]} ${baseHSL[1]}% ${baseHSL[2] + (100-baseHSL[2])*(i-1)/length}%)`: '#fff';
      chevronStyling +=`
        .${styles.chart} .color_${i} {
          z-index: ${(selectedLength - i +1)*100};
          background: ${color};
        }
        .${styles.chart} .color_${i}::before {
          border-left-color: ${color};
        }
      `
    });
    if (chartWidth && chartWidth < chevronWidth*(selectedLength)) {
      chevronStyling +=`
        .${styles.chart} {
          transform: scale(${(chartWidth/(chevronWidth*(selectedLength+1/2)))});
          transform-origin: left bottom;
        }
      `;
    }
    styleTag.innerHTML = chevronStyling;
    document.head.appendChild(styleTag);
  }, [selectedLength]);
  
  const chart= [0, ...selectedOnly].map(item=> <div key={item} className={`color_${item}`}></div>);

  return <div className={styles.chart} ref={ref}>{chart}</div>;
}

