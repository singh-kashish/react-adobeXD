import styles from './Button.module.css';

export default function Button({ children, variant = 'primary', fullWidth = false, onClick, type = 'button' }) {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
