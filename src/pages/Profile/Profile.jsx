// Profile.tsx
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Profile.module.css';
import profilePic from '../../assets/profile-picture.png';
import iconSvg from '../../assets/Group 1585.svg';

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.headerTitle}>Account Settings</p>
      </div>

      <section className={styles.infoSection}>
        <div className={styles.card}>
          <div className={styles.avatarWrapper}>
            <img src={profilePic} className={styles.profileImage} alt="Profile" />
            <img src={iconSvg} className={styles.iconOverlay} alt="" />
          </div>

          <div>
            <p className={styles.title}>Mary Doe</p>
            <p className={styles.email}>Marry@Gmail.com</p>
          </div>
        </div>

        <div className={styles.lorem}>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
            Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>

        {/* first dashed line, 2rem below lorem, 2rem below itself */}
        <div className={styles.topSeparator} />

        {/* bottom dashed line that sits near bottom of screen */}
        <div className={styles.bottomSeparator} />
      </section>
    </div>
  );
}
