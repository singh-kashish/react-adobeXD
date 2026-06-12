import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Home.module.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      {/* Text + CTA — positioned at y≈549 per XD spec */}
      <div className={styles.content}>
        <h2 className={styles.heading}>Welcome to PopX</h2>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
        <div className={styles.actions}>
          {/* Interaction: Tap → Login screen */}
          <Button variant="primary" fullWidth onClick={() => navigate('/signup')}>
            Create Account
          </Button>
          {/* Interaction: Tap → Signup screen */}
          <Button variant="purple" fullWidth onClick={() => navigate('/login')}>
            Already Registered? Login
          </Button>
      </div>
    </div>
  );
}
