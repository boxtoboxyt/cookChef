import styles from './Recipe.module.scss';
import recette1 from '../assets/images/boeufOrange.png'
 

function Recipe() {
  return (
    <div className={styles.recipe}>
        <div className={styles.imgContainer}>
            <img src={recette1} alt="recette boeuf"/>
        </div>
        <div className={`${styles.recipeTitle} d-flex flex-row justify-content align-items`}>
            <h3>Boeuf Orange</h3>
        </div>
    </div>
  )
}

export default Recipe