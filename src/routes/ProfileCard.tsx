import styles from './ProfileCard.module.scss'
import victorUrl from '@/assets/images/image-victor.jpg'

export default function ProfileCard() {
  return (
    <div className={styles.profileCard}>
      <main className={styles.profileCardContainer}>
        <img
          src={victorUrl}
          alt=""
        />
        <h1>
          <span className={styles.name}>Victor Crest</span>
          <span className={styles.age}>26</span>
        </h1>

        <h2>London</h2>

        <div className={styles.social}>
          <div className={styles.stat}>
            <div>80k</div>
            <div>Followers</div>
          </div>

          <div className={styles.stat}>
            <div>803k</div>
            <div>Likes</div>
          </div>

          <div className={styles.stat}>
            <div>1.4k</div>
            <div>Photos</div>
          </div>
        </div>
      </main>
    </div>
  )
}
