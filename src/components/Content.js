import styles from './Content.module.scss';
import Recipe from './Recipe';

function Content() {
  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Dévouvrez nos nouvelles recettes</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
      <div className={styles.grid}>
        <Recipe />
        <div className={styles.elem}>1</div>
        <div className={styles.elem}>1</div>
        <div className={styles.elem}>1</div>
        <div className={styles.elem}>1</div>
        <div className={styles.elem}>1</div>
      </div>
      </div>
    </div>
  )
}

export default Content