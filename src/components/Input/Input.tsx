import React from "react";
// @ts-ignore
import styles from './Input.module.css';

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

export const FloatingInput: React.FC<FloatingInputProps> = ({
  label,
  required = false,
  ...props
}) => {
  return (
    <div className={styles.containerStyle}>
      <div className={styles.labelArea}>
        <span className={styles.labelText}>
          {label}
          {required && <span className={styles.asteriskStyle}>*</span>}
        </span>
      </div>

      <input 
        type={props.type || "text"} 
        className={styles.inputStyle} 
        {...props} 
      />
    </div>
  );
};