import styles from './spinner.module.scss';

const Spinner = () => (
  <div className={styles.SpinnerOverlay}>
    <div className={styles.SpinnerContainer} />
  </div>
);

export default Spinner;