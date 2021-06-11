import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'

import { Layout, Typography, Input, Button, Menu, Dropdown } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'

import { withRouter, RouteComponentProps } from 'react-router-dom'

export class HeaderComponent extends React.Component<RouteComponentProps> {
  render() {
    const history = this.props // 导航操作
    return (
      <div className={styles['app-header']}>
        {/* top header  */}
        <div className={styles['top-header']}>
          <div className={styles.inner}>
            <Typography.Text>让旅游更幸福</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu>
                  <Menu.Item>中文</Menu.Item>
                  <Menu.Item>English</Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              语言
            </Dropdown.Button>
            <Button.Group className={styles['button-group']}>
              <Button onClick={() => history.push(`register`)}>注册</Button>
              <Button onClick={() => history.push(`signIn`)}>登录</Button>
            </Button.Group>
          </div>
        </div>

        <Layout.Header className={styles['main-header']}>
          <span onClick={() => history.push('/')}>
            <img className={styles['App-logo']} src={logo} alt="logo" />
            <Typography.Title className={styles.title} level={3}>
              React 旅游网
            </Typography.Title>
          </span>
          <Input.Search
            className={styles['search-input']}
            placeholder={'请输入旅游目的地、主题、或关键字'}
          ></Input.Search>
        </Layout.Header>
        <Menu mode={'horizontal'} className={styles['main-menu']}>
          <Menu.Item key={1}>旅游首页</Menu.Item>
          <Menu.Item key={2}>周末游</Menu.Item>
          <Menu.Item key={3}>跟团游</Menu.Item>
          <Menu.Item key="4"> 自由行 </Menu.Item>
          <Menu.Item key="5"> 私家团 </Menu.Item>
          <Menu.Item key="6"> 邮轮 </Menu.Item>
          <Menu.Item key="7"> 酒店+景点 </Menu.Item>
          <Menu.Item key="8"> 当地玩乐 </Menu.Item>
          <Menu.Item key="9"> 主题游 </Menu.Item>
          <Menu.Item key="10"> 定制游 </Menu.Item>
          <Menu.Item key="11"> 游学 </Menu.Item>
          <Menu.Item key="12"> 签证 </Menu.Item>
          <Menu.Item key="13"> 企业游 </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export const Header = withRouter(HeaderComponent)
