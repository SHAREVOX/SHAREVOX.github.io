import fs from 'fs'
import { NextPage } from 'next'
import React, { useState } from 'react'
import { useModal } from 'react-hooks-use-modal'

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
  const tsukuyomiNormal1 = fs.readFileSync(
    'public/chatacters/official_4_001.wav',
    'base64'
  )
  const tsukuyomiNormal2 = fs.readFileSync(
    'public/chatacters/official_4_002.wav',
    'base64'
  )
  const tsukuyomiNormal3 = fs.readFileSync(
    'public/chatacters/official_4_003.wav',
    'base64'
  )
  const hakuchiNormal1 = fs.readFileSync(
    'public/chatacters/official_5_001.wav',
    'base64'
  )
  const hakuchiNormal2 = fs.readFileSync(
    'public/chatacters/official_5_002.wav',
    'base64'
  )
  const hakuchiNormal3 = fs.readFileSync(
    'public/chatacters/official_5_003.wav',
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
      tsukuyomiNormal: [tsukuyomiNormal1, tsukuyomiNormal2, tsukuyomiNormal3],
      hakuchiNormal: [hakuchiNormal1, hakuchiNormal2, hakuchiNormal3],
      developerNormal: [developerNormal1, developerNormal2, developerNormal3],
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
  tsukuyomiNormal: AudioSampleArray
  hakuchiNormal: AudioSampleArray
  developerNormal: AudioSampleArray
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
  tsukuyomiNormal,
  hakuchiNormal,
  developerNormal,
  amiPolicy,
  tsukuyomiPolicy,
  hakuchiPolicy,
  developerPolicy,
}) => {
  const koharuneAmiSamples: AudioSamples = [
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
      style: 'ノーマル',
      samples: tsukuyomiNormal,
    },
  ]
  const hakuchiSamples: AudioSamples = [
    {
      style: 'ノーマル',
      samples: hakuchiNormal,
    },
  ]
  const developerSamples: AudioSamples = [
    {
      style: 'ノーマル',
      samples: developerNormal,
    },
  ]

  const [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
  })
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
      <main
        className="pt-20 pb-10 2xl:py-24 flex flex-wrap justify-center"
        id="root"
      >
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
          name="開発者"
          image={DeveloperImage}
          imageAlt="developer"
          audioSamples={developerSamples}
          policy={developerPolicy}
          openModal={openModal}
        />
        <Modal>
          <div
            className="justify-center bg-white px-10 py-6 rounded-2xl w-3/4 m-auto"
            dangerouslySetInnerHTML={{ __html: showingPolicy }}
          />
        </Modal>
      </main>
      <Footer />
    </>
  )
}

export default Characters
