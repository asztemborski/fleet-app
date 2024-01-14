import type { HTMLAttributes } from "react";

import styles from "./StatisticCard.module.scss";

type StatisticsCardProps = HTMLAttributes<HTMLElement> & {
  header: string;
  value: string;
};

export default function StatisticCard({
  header,
  value,
  ...props
}: StatisticsCardProps) {
  return (
    <div {...props} className={styles.StatisticsCard}>
      <h4 className={styles.Header}>{header}</h4>
      <p className={styles.Value}>{value}</p>
    </div>
  );
}
