import React from 'react'
import { Image, Typography } from 'antd'

interface PropsType {
  title: string
  size: 'large' | 'small'
  id: string
  price: string | number
  imageSrc: string
}

export const ProductImage: React.FC<PropsType> = ({
  title,
  price,
  imageSrc,
  size,
}) => {
  return (
    <>
      {size === 'large' ? (
        <Image src={imageSrc} height={285} width={490} />
      ) : (
        <Image src={imageSrc} height={120} width={240} />
      )}
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger" strong>
          ￥{price} 起
        </Typography.Text>
      </div>
    </>
  )
}
