import React from 'react';
// @ts-ignore
import styles from './RadioGroup.module.css';

interface RadioGroupProps {
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ name, selectedValue, onChange }) => {
  return (
    <div className={styles.rowContainer}>
      {/* Yes Option */}
      <label className={styles.radioLabel}>
        <input
          type="radio"
          name={name}
          value="Yes"
          checked={selectedValue === 'Yes'}
          onChange={() => onChange('Yes')}
          className={styles.hiddenRadio}
        />
        <span className={styles.customRadio} />
        <span className={styles.labelText}>Yes</span>
      </label>

      {/* No Option */}
      <label className={styles.radioLabel}>
        <input
          type="radio"
          name={name}
          value="No"
          checked={selectedValue === 'No'}
          onChange={() => onChange('No')}
          className={styles.hiddenRadio}
        />
        <span className={styles.customRadio} />
        <span className={styles.labelText}>No</span>
      </label>
    </div>
  );
};