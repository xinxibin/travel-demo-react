import React from 'react'
import { Divider, Row, Col, Typography } from 'antd'

import image1 from '../../assets/images/facebook-807588_640.png'
import image2 from '../../assets/images/follow-826033_640.png'
import image3 from '../../assets/images/icon-720944_640.png'
import image4 from '../../assets/images/microsoft-80658_640.png'

const listArr = [
  { src: image1, title: 'facebook' },
  { src: image2, title: 'Ins' },
  { src: image3, title: 'Youtube' },
  { src: image4, title: 'microsoft' },
]

export const BusinessPartner: React.FC = () => {
  return (
    <div>
      <Divider orientation={'left'}>
        <Typography.Title level={3}>合作企业</Typography.Title>
      </Divider>
      <Row>
        {listArr.map((res, index) => (
          <Col span={6} key={`business-partner-${index}`}>
            <img
              src={res.src}
              alt=""
              style={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '80%',
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}
