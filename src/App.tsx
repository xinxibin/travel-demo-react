import React from 'react'
import styles from './App.module.css'
import { Header, Footer, SideMenu, Carousel } from './components'
import { Row, Col } from 'antd'

// import {} from '@antd'
const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles['page-content']}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
