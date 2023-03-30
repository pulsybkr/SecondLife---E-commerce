import styles from '../../styles/Home.module.css'

export default function Condition(props) {
  return (
    <div className={styles.condition}>
      <h3 style={props.cond1}>{props.namecond1}</h3>
      <h3 style={props.cond2}>{props.namecond2}</h3>
      <h3 style={props.cond3}>{props.namecond3}</h3>
    </div>
  )
}
