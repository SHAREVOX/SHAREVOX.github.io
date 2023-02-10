import fs from 'fs'
import { NextPage } from 'next'
import React, { useState } from 'react'
import { useModal } from 'react-hooks-use-modal'
import { MdClose } from 'react-icons/md'

import CharacterCard, {
  AudioSampleArray,
  AudioSamples,
} from '@/components/characterCard'
import Footer from '@/components/footer'
import Header from '@/components/header'
import markdownToHtml from '@/lib/markdownTranslator'
import DeveloperImage from '@/public/chatacters/developer.png'
import HakuchiImage from '@/public/chatacters/hakuchi.png'
import KoharuneAmiImage from '@/public/chatacters/koharune-ami.png'
import TsukuyomiChanImage from '@/public/chatacters/tsukuyomi-chan.png'

export const getStaticProps = async () => {
  const amiNormal1 = fs.readFileSync(
    'public/chatacters/official_0_001.wav',
    'base64'
  )
  const amiNormal2 = fs.readFileSync(
    'public/chatacters/official_0_002.wav',
    'base64'
  )
  const amiNormal3 = fs.readFileSync(
    'public/chatacters/official_0_003.wav',
    'base64'
  )
  const amiNormal1V2 = fs.readFileSync('public/chatacters/7_001.wav', 'base64')
  const amiNormal2V2 = fs.readFileSync('public/chatacters/7_002.wav', 'base64')
  const amiNormal3V2 = fs.readFileSync('public/chatacters/7_003.wav', 'base64')
  const amiJoy1 = fs.readFileSync(
    'public/chatacters/official_1_001.wav',
    'base64'
  )
  const amiJoy2 = fs.readFileSync(
    'public/chatacters/official_1_002.wav',
    'base64'
  )
  const amiJoy3 = fs.readFileSync(
    'public/chatacters/official_1_003.wav',
    'base64'
  )
  const amiJoy1V2 = fs.readFileSync('public/chatacters/8_001.wav', 'base64')
  const amiJoy2V2 = fs.readFileSync('public/chatacters/8_002.wav', 'base64')
  const amiJoy3V2 = fs.readFileSync('public/chatacters/8_003.wav', 'base64')
  const amiAngry1 = fs.readFileSync(
    'public/chatacters/official_2_001.wav',
    'base64'
  )
  const amiAngry2 = fs.readFileSync(
    'public/chatacters/official_2_002.wav',
    'base64'
  )
  const amiAngry3 = fs.readFileSync(
    'public/chatacters/official_2_003.wav',
    'base64'
  )
  const amiAngry1V2 = fs.readFileSync('public/chatacters/9_001.wav', 'base64')
  const amiAngry2V2 = fs.readFileSync('public/chatacters/9_002.wav', 'base64')
  const amiAngry3V2 = fs.readFileSync('public/chatacters/9_003.wav', 'base64')
  const amiSadness1 = fs.readFileSync(
    'public/chatacters/official_3_001.wav',
    'base64'
  )
  const amiSadness2 = fs.readFileSync(
    'public/chatacters/official_3_002.wav',
    'base64'
  )
  const amiSadness3 = fs.readFileSync(
    'public/chatacters/official_3_003.wav',
    'base64'
  )
  const amiSadness1V2 = fs.readFileSync(
    'public/chatacters/10_001.wav',
    'base64'
  )
  const amiSadness2V2 = fs.readFileSync(
    'public/chatacters/10_002.wav',
    'base64'
  )
  const amiSadness3V2 = fs.readFileSync(
    'public/chatacters/10_003.wav',
    'base64'
  )
  const tsukuyomiOshitoyaka1 = fs.readFileSync(
    'public/chatacters/official_4_001.wav',
    'base64'
  )
  const tsukuyomiOshitoyaka2 = fs.readFileSync(
    'public/chatacters/official_4_002.wav',
    'base64'
  )
  const tsukuyomiOshitoyaka3 = fs.readFileSync(
    'public/chatacters/official_4_003.wav',
    'base64'
  )
  const tsukuyomiOshitoyaka1V2 = fs.readFileSync(
    'public/chatacters/11_001.wav',
    'base64'
  )
  const tsukuyomiOshitoyaka2V2 = fs.readFileSync(
    'public/chatacters/11_002.wav',
    'base64'
  )
  const tsukuyomiOshitoyaka3V2 = fs.readFileSync(
    'public/chatacters/11_003.wav',
    'base64'
  )
  const hakuchiKyogi1 = fs.readFileSync(
    'public/chatacters/official_5_001.wav',
    'base64'
  )
  const hakuchiKyogi2 = fs.readFileSync(
    'public/chatacters/official_5_002.wav',
    'base64'
  )
  const hakuchiKyogi3 = fs.readFileSync(
    'public/chatacters/official_5_003.wav',
    'base64'
  )
  const hakuchiKyogi1V2 = fs.readFileSync(
    'public/chatacters/13_001.wav',
    'base64'
  )
  const hakuchiKyogi2V2 = fs.readFileSync(
    'public/chatacters/13_002.wav',
    'base64'
  )
  const hakuchiKyogi3V2 = fs.readFileSync(
    'public/chatacters/13_003.wav',
    'base64'
  )
  const developerNormal1 = fs.readFileSync(
    'public/chatacters/official_6_001.wav',
    'base64'
  )
  const developerNormal2 = fs.readFileSync(
    'public/chatacters/official_6_002.wav',
    'base64'
  )
  const developerNormal3 = fs.readFileSync(
    'public/chatacters/official_6_003.wav',
    'base64'
  )
  const developerNormal1V2 = fs.readFileSync(
    'public/chatacters/12_001.wav',
    'base64'
  )
  const developerNormal2V2 = fs.readFileSync(
    'public/chatacters/12_002.wav',
    'base64'
  )
  const developerNormal3V2 = fs.readFileSync(
    'public/chatacters/12_003.wav',
    'base64'
  )

  const amiPolicy = await markdownToHtml(
    fs.readFileSync('public/chatacters/koharune-ami-policy.md', 'utf8')
  )
  const tsukuyomiPolicy = await markdownToHtml(
    fs.readFileSync('public/chatacters/tsukuyomi-chan-policy.md', 'utf8')
  )
  const hakuchiPolicy = await markdownToHtml(
    fs.readFileSync('public/chatacters/hakuchi-policy.md', 'utf8')
  )
  const developerPolicy = await markdownToHtml(
    fs.readFileSync('public/chatacters/developer-policy.md', 'utf8')
  )
  return {
    props: {
      amiNormal: [amiNormal1, amiNormal2, amiNormal3],
      amiJoy: [amiJoy1, amiJoy2, amiJoy3],
      amiAngry: [amiAngry1, amiAngry2, amiAngry3],
      amiSadness: [amiSadness1, amiSadness2, amiSadness3],
      tsukuyomiOshitoyaka: [
        tsukuyomiOshitoyaka1,
        tsukuyomiOshitoyaka2,
        tsukuyomiOshitoyaka3,
      ],
      hakuchiKyogi: [hakuchiKyogi1, hakuchiKyogi2, hakuchiKyogi3],
      developerNormal: [developerNormal1, developerNormal2, developerNormal3],
      amiNormalV2: [amiNormal1V2, amiNormal2V2, amiNormal3V2],
      amiJoyV2: [amiJoy1V2, amiJoy2V2, amiJoy3V2],
      amiAngryV2: [amiAngry1V2, amiAngry2V2, amiAngry3V2],
      amiSadnessV2: [amiSadness1V2, amiSadness2V2, amiSadness3V2],
      tsukuyomiOshitoyakaV2: [
        tsukuyomiOshitoyaka1V2,
        tsukuyomiOshitoyaka2V2,
        tsukuyomiOshitoyaka3V2,
      ],
      hakuchiKyogiV2: [hakuchiKyogi1V2, hakuchiKyogi2V2, hakuchiKyogi3V2],
      developerNormalV2: [
        developerNormal1V2,
        developerNormal2V2,
        developerNormal3V2,
      ],
      amiPolicy,
      tsukuyomiPolicy,
      hakuchiPolicy,
      developerPolicy,
    },
  }
}

type Props = {
  amiNormal: AudioSampleArray
  amiJoy: AudioSampleArray
  amiAngry: AudioSampleArray
  amiSadness: AudioSampleArray
  tsukuyomiOshitoyaka: AudioSampleArray
  hakuchiKyogi: AudioSampleArray
  developerNormal: AudioSampleArray
  amiNormalV2: AudioSampleArray
  amiJoyV2: AudioSampleArray
  amiAngryV2: AudioSampleArray
  amiSadnessV2: AudioSampleArray
  tsukuyomiOshitoyakaV2: AudioSampleArray
  hakuchiKyogiV2: AudioSampleArray
  developerNormalV2: AudioSampleArray
  amiPolicy: string
  tsukuyomiPolicy: string
  hakuchiPolicy: string
  developerPolicy: string
}

const Characters: NextPage<Props> = ({
  amiNormal,
  amiJoy,
  amiAngry,
  amiSadness,
  tsukuyomiOshitoyaka,
  hakuchiKyogi,
  developerNormal,
  amiNormalV2,
  amiJoyV2,
  amiAngryV2,
  amiSadnessV2,
  tsukuyomiOshitoyakaV2,
  hakuchiKyogiV2,
  developerNormalV2,
  amiPolicy,
  tsukuyomiPolicy,
  hakuchiPolicy,
  developerPolicy,
}) => {
  const koharuneAmiSamples: AudioSamples = [
    {
      style: 'ノーマルv2',
      samples: amiNormalV2,
    },
    {
      style: '喜びv2',
      samples: amiJoyV2,
    },
    {
      style: '怒りv2',
      samples: amiAngryV2,
    },
    {
      style: '悲しみv2',
      samples: amiSadnessV2,
    },
    {
      style: 'ノーマル',
      samples: amiNormal,
    },
    {
      style: '喜び',
      samples: amiJoy,
    },
    {
      style: '怒り',
      samples: amiAngry,
    },
    {
      style: '悲しみ',
      samples: amiSadness,
    },
  ]
  const tsukuyomiChanSamples: AudioSamples = [
    {
      style: 'おしとやかv2',
      samples: tsukuyomiOshitoyakaV2,
    },
    {
      style: 'おしとやか',
      samples: tsukuyomiOshitoyaka,
    },
  ]
  const hakuchiSamples: AudioSamples = [
    {
      style: '虚偽v2',
      samples: hakuchiKyogiV2,
    },
    {
      style: '虚偽',
      samples: hakuchiKyogi,
    },
  ]
  const developerSamples: AudioSamples = [
    {
      style: 'ノーマルv2',
      samples: developerNormalV2,
    },
    {
      style: 'ノーマル',
      samples: developerNormal,
    },
  ]

  const [Modal, open, close, isOpen] = useModal('root')
  const [showingPolicy, setShowingPolicy] = useState<string>('')
  const openModal = (policy: string) => {
    setShowingPolicy(policy)
    open()
  }

  return (
    <>
      {/* 常時ヘッダーを表示していたいので、常にfalseにしておく */}
      <Header mainPageHeader={false} title="キャラクター一覧" />

      {/* ref: https://tailwindcss.com/docs/installation */}
      <main className="pt-20 pb-10 2xl:py-24 flex flex-wrap justify-center">
        <CharacterCard
          name="小春音アミ"
          image={KoharuneAmiImage}
          imageAlt="koharune-ami"
          audioSamples={koharuneAmiSamples}
          policy={amiPolicy}
          openModal={openModal}
        />
        <CharacterCard
          name="つくよみちゃん"
          image={TsukuyomiChanImage}
          imageAlt="tsukuyomi-chan"
          audioSamples={tsukuyomiChanSamples}
          policy={tsukuyomiPolicy}
          openModal={openModal}
        />
        <CharacterCard
          name="白痴ー"
          image={HakuchiImage}
          imageAlt="hakuchi-"
          audioSamples={hakuchiSamples}
          policy={hakuchiPolicy}
          openModal={openModal}
        />
        <CharacterCard
          name="Yくん/開発者"
          image={DeveloperImage}
          imageAlt="developer"
          audioSamples={developerSamples}
          policy={developerPolicy}
          openModal={openModal}
        />
        <Modal>
          <div className="flex flex-col justify-center bg-white px-6 py-4 rounded-2xl max-h-[90vh] w-[90vw] lg:w-3/4 m-auto">
            <div className="text-right">
              <button onClick={close}>
                <MdClose />
              </button>
            </div>
            <div
              className="overflow-y-auto mb-2"
              dangerouslySetInnerHTML={{ __html: showingPolicy }}
            />
          </div>
        </Modal>
      </main>
      <Footer />
    </>
  )
}

export default Characters
