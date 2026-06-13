import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Home.module.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <h1 className={styles.heading}>Welcome to PopX</h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </section>

      <div className={styles.actions}>
        <Button 
          variant="primary" 
          onClick={() => navigate('/signup')} 
          className={styles.createAccount}
        >
          Create Account
        </Button>
        <Button 
          variant="purple" 
          onClick={() => navigate('/login')}
          className={styles.loginBtn}
        >
          Already Registered? Login
        </Button>
      </div>
    </main>
  );
}