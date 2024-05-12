import { FunctionComponent } from 'react';
import styles from './Group.module.css';
import Rectangle from '../assets/Rectangle11.svg';

interface GroupProps {
  data: {
    Title: string;
    Dormtype: string;
    Now_Num: number;
    Max_Num: number;
    Gender: string;
    Date: string;
    Tag1: string;
    Tag2: string;
  };
}

const Group: FunctionComponent<GroupProps> = ({ data }) => {
  return (
    <div className={styles.div}>
      <div className={styles.child} />
      <div className={styles.item} />
      <b className={styles.b}>{data.Now_Num}/{data.Max_Num}</b>
      <div className={styles.title}>{data.Title}</div>
      <img className={styles.inner} alt="" src={Rectangle} />
      <b className={styles.b1}>{data.Dormtype}</b>
      <div className={styles.div1}>{data.Date}</div>
      <div className={styles.rectangleDiv} />
      <img className={styles.rectangleIcon} alt="" src={Rectangle} />
      <b className={styles.b2}>{data.Gender}</b>
      <img className={styles.child1} alt="" src={Rectangle} />
      <b className={styles.b3}>{data.Tag1}</b>
      <b className={styles.b4}># {data.Tag2}</b>
    </div>
  );
};

export default Group;
