import styles from './AppLayout.module.css';

export default function AppLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.phoneFrame}>
        {children}
      </div>
    </div>
  );
}