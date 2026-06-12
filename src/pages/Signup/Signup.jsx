import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import  { FloatingInput } from '../../components/Input/Input';
import styles from './Signup.module.css';
import { RadioGroup } from '../../components/RadioGroup/RadioGroup';

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "Marry Doe", email: 'someone@user.com',
     password: '**********',
     phoneNumber: '+9155554 *****',
      companyName: 'Company INC'
    });

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/profile', { state: { name: form.name, email: form.email } });
  };
  const [isMandatory, setIsMandatory] = useState('Yes'); 

  return (
    <main className={styles.page}>
        <h1 className={styles.header}>Create your PopX account</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <FloatingInput
            label="Full Name"
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
          />

          <FloatingInput
            label="Phone number"
            type="text"
            name="Phone number"
            required
            placeholder="Phone number"
            value={form.phoneNumber}
            onChange={handleChange}
          />
          <FloatingInput
            label="Email address"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={form.email}
            onChange={handleChange}
          />
          <FloatingInput
            label="Password"
            type="password"
            name="password"
            required
            placeholder="Set your password"
            value={form.password}
            onChange={handleChange}
          />

          <FloatingInput
            label="Company Name"
            type="text"
            name="companyName"
            placeholder="Enter company name"
            value={form.companyName}
            onChange={handleChange}
          />
        </form>
        <section className={styles.end}>
        <div className={styles.afterForm}>
        <p className={styles.agency}>
          Are you an Agency?
          <span style={{color:'#ef4444'}}>*</span>
        </p>
        
      <RadioGroup 
        name="choice" 
        selectedValue={isMandatory} 
        onChange={setIsMandatory} 
        className={styles.radio}
      />
        </div>
        <Button variant='primary' fullWidth onClick={()=>navigate('/profile')} style={{cursor:"pointer"}}>Create Account</Button>
        </section>
    </main>
  );
}
