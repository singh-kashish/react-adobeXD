import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import {FloatingInput} from '../../components/Input/Input';
import styles from './Login.module.css';

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // Navigate to profile on successful login
    navigate('/profile', { state: { email: form.email } });
  };

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <h1 className={styles.title}>Signin to your PopX account</h1>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </section>
        <form className={styles.form} onSubmit={handleSubmit}>
          <FloatingInput
            label="Email Address"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />
          <FloatingInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
          />
          <Button type="submit" variant="grey" fullWidth>
            Login
          </Button>
        </form>
    </main>
  );
}
