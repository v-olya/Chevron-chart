import styles from '../styles/Chart.module.css';

export function Chart({selections}) {
  const countSelected = selections.filter(x=>x).length;

  const chart= Array(countSelected+1).fill(1).map((item,index)=> <div key={index}></div>);

  return <div className={styles.chevronChart}>{chart}</div>;
}

