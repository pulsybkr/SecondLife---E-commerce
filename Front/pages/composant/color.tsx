import styles from '../../styles/Home.module.css'

export default function Color(props) {
  return (
    <div className={styles.color}>
      <div style={props.colorrouge} className={styles.contcolor}>
        <div className={styles.rouge}></div>
        <p>Rouge</p>
      </div>
      <div style={props.colorblanc} className={styles.contcolor}>
        <div className={styles.blanc}></div>
        <p>Blanc</p>
      </div>
      <div style={props.colorvert} className={styles.contcolor}>
        <div className={styles.vert}></div>
        <p>Vert</p>
      </div>
      <div style={props.colorbleu} className={styles.contcolor}>
        <div className={styles.bleu}></div>
        <p>Bleu</p>
      </div>
      <div style={props.colornoir} className={styles.contcolor}>
        <div className={styles.noir}></div>
        <p>Noir</p>
      </div>
      <div style={props.colorjaune} className={styles.contcolor}>
        <div className={styles.jaune}></div>
        <p>Jaune</p>
      </div>
      <div style={props.colorrose} className={styles.contcolor}>
        <div className={styles.rose}></div>
        <p>Rose</p>
      </div>
    </div>
  )
}
