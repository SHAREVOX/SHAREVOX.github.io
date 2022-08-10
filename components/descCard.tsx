import { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
  title: string
  titleEn: string
  image: StaticImageData
  imageAlt: string
  children?: React.ReactNode
}

const descCard: React.FC<Props> = ({
  title,
  titleEn,
  image,
  imageAlt,
  children,
}) => {
  return (
    <div className="mx-8 my-4 desc-card-w">
      <p className="text-left text-primary font-semibold my-2 2xl:text-xl">
        {titleEn.toUpperCase()}
      </p>
      <p className="text-left font-semibold text-2xl 2xl:text-3xl my-2">
        {title}
      </p>
      {children && (
        <p className="text-left 2xl:text-xl md:h-20 2xl:h-16">{children}</p>
      )}
      <div>
        <img className="rounded-xl" src={image.src} alt={imageAlt} />
      </div>
    </div>
  )
}

export default descCard
