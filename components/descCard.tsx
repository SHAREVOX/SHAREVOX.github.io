import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
  title: string
  titleEn: string
  image: StaticImageData
  imageAlt: string
  children?: React.ReactNode
}

// eslint-disable-next-line react/display-name
const descCard = React.forwardRef<HTMLDivElement, Props>(
  ({ title, titleEn, image, imageAlt, children }, ref) => {
    return (
      <div className="mx-8 my-4 desc-card-w" ref={ref}>
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
          <Image
            className="rounded-xl"
            src={image.src}
            alt={imageAlt}
            width={image.width}
            height={image.height}
          />
        </div>
      </div>
    )
  }
)

export default descCard
