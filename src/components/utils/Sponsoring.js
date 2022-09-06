import React from "react";
import styles from "./Sponsoring.module.css"
import Button from "./Button";

export default function Sponsoring() {
  return (
    <div className={styles.sponsor}>
      <h2>Training 5 or more people?</h2>
      <p>Get your team access to 17,000+ top Udemy courses anytime, anywhere.</p>
      <Button href='/' size='lg'>Try Udemy Business</Button>
    </div>
  );
}

