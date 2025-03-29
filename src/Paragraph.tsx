import { useState } from 'react';
import styles from './Paragraph.module.css';

function Paragraph() {
  return (
    <div className={styles.container}>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere esse optio qui est, sequi asperiores veritatis in eveniet, adipisci architecto ratione eum! Itaque ipsa maiores vel sed, culpa eveniet.
        </p>
    </div>
  )
}

export default Paragraph;
