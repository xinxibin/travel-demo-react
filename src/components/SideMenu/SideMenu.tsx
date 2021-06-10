import React from 'react'
// import { styles } from './SideMenu.module.css'
import { sideMenuList } from './mockup'
import { Menu } from 'antd'
import styles from './SideMenu.module.css'
import { GiftOutlined } from '@ant-design/icons'
export const SideMenu: React.FC = () => {
  return (
    <Menu mode="vertical" className={styles['side-menu']}>
      {sideMenuList.map((item, index) => (
        <Menu.SubMenu
          key={`side-menu-${index}`}
          title={
            <span>
              <GiftOutlined style={{ marginRight: '10px' }} />
              {item.title}
            </span>
          }
        >
          {item.subMenu.map((m, subindex) => (
            <Menu.SubMenu
              key={`side-sub-menu-${subindex}`}
              title={
                <span>
                  <GiftOutlined style={{ marginRight: '10px' }} />
                  {m.title}
                </span>
              }
            >
              {m.subMenu.map((m2, subsubIndex) => (
                <Menu.Item key={`sub-menu-${subsubIndex}`}>
                  <span>
                    <GiftOutlined style={{ marginRight: '10px' }} />
                    {m2}
                  </span>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  )
}

export default SideMenu
