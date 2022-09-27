import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import Select from 'react-select'

import AudioPlayer from '@/components/audioPlayer'

export type AudioSampleArray = [string, string, string]

export type AudioSamples = {
  style: string
  samples: AudioSampleArray
}[]

type Props = {
  name: string
  image: StaticImageData
  imageAlt: string
  audioSamples: AudioSamples
  policy: string
  openModal: (policy: string) => void
}

// eslint-disable-next-line react/display-name
const characterCard = React.forwardRef<HTMLDivElement, Props>(
  ({ name, image, imageAlt, audioSamples, policy, openModal }, ref) => {
    const [selectedStyleIndex, setSelectedStyleIndex] = useState<number>(0)
    const styleOptions = audioSamples.map((v, index) => {
      return {
        value: index,
        label: v.style,
      }
    })

    const imageWidth = image.width / (image.height / 500)
    return (
      <div
        className="mx-8 my-4 w-3/4 md:w-1/3 xl:w-1/4 2xl:w-1/5 bg-white rounded-3xl flex flex-col justify-center text-center"
        ref={ref}
      >
        <div className="flex justify-center max-h-full p-6 h-[500px]">
          <Image
            src={image.src}
            alt={imageAlt}
            width={imageWidth}
            height={500}
            objectFit="contain"
          />
        </div>
        <p className="font-semibold text-2xl 2xl:text-3xl my-2">{name}</p>
        <div className="flex flex-row justify-center items-center">
          <p className="text-lg 2xl:text-xl mr-2 my-0">サンプル音声</p>
          {audioSamples[selectedStyleIndex].samples.map((value) => {
            return <AudioPlayer audioSrc={value} key={value} />
          })}
        </div>
        <div
          className={`flex flex-row justify-center items-center ${
            styleOptions.length === 1 && 'hidden'
          }`}
        >
          <p className="text-lg 2xl:text-xl mr-2 my-0">スタイル</p>
          <Select
            value={styleOptions[selectedStyleIndex]}
            options={styleOptions}
            onChange={(newValue) => {
              if (newValue) setSelectedStyleIndex(newValue.value)
            }}
          />
        </div>
        <div className="mb-4 mt-2">
          <button
            className="text-xl 2xl:text-2xl py-2 px-4 border-black border-solid border-[1px] rounded-3xl"
            onClick={() => openModal(policy)}
          >
            利用規約
          </button>
        </div>
      </div>
    )
  }
)

export default characterCard
