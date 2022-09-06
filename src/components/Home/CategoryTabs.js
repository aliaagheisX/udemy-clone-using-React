import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CategoryContent from './CategoryContent';
import styles from './styles/Category.module.css'


export default function CategoryTabs({ data }) {

  return (
    <Tabs
      transition={false}
      className={styles.categoryNav}
    >

      {
        data.map((cat) => (
          <Tab key={cat.id} eventKey={cat.id} title={cat.title} tabClassName={styles.tabBtn}>
            <CategoryContent data={cat} />
          </Tab>
        ))
      }
    </Tabs>
  )
}
