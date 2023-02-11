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
import DeveloperImage from '@/public/characters_data/developer.png'
import HakuchiImage from '@/public/characters_data/hakuchi.png'
import KoharuneAmiImage from '@/public/characters_data/koharune-ami.png'
import TsukuyomiChanImage from '@/public/characters_data/tsukuyomi-chan.png'

export const getStaticProps = async () => {
  const amiPolicy = await markdownToHtml(
    fs.readFileSync('public/characters_data/koharune-ami-policy.md', 'utf8')
  )
  const tsukuyomiPolicy = await markdownToHtml(
    fs.readFileSync('public/characters_data/tsukuyomi-chan-policy.md', 'utf8')
  )
  const hakuchiPolicy = await markdownToHtml(
    fs.readFileSync('public/characters_data/hakuchi-policy.md', 'utf8')
  )
  const developerPolicy = await markdownToHtml(
    fs.readFileSync('public/characters_data/developer-policy.md', 'utf8')
  )
  return {
    props: {
      amiPolicy,
      tsukuyomiPolicy,
      hakuchiPolicy,
      developerPolicy,
    },
  }
}

type Props = {
  amiPolicy: string
  tsukuyomiPolicy: string
  hakuchiPolicy: string
  developerPolicy: string
}

const Characters: NextPage<Props> = ({
  amiPolicy,
  tsukuyomiPolicy,
  hakuchiPolicy,
  developerPolicy,
}) => {
  const koharuneAmiSamples: AudioSamples = [
    {
      style: 'ノーマルv2',
      samples: [
        'characters_data/7_001.wav',
        'characters_data/7_002.wav',
        'characters_data/7_003.wav',
      ],
    },
    {
      style: '喜びv2',
      samples: [
        'characters_data/8_001.wav',
        'characters_data/8_002.wav',
        'characters_data/8_003.wav',
      ],
    },
    {
      style: '怒りv2',
      samples: [
        'characters_data/9_001.wav',
        'characters_data/9_002.wav',
        'characters_data/9_003.wav',
      ],
    },
    {
      style: '悲しみv2',
      samples: [
        'characters_data/10_001.wav',
        'characters_data/10_002.wav',
        'characters_data/10_003.wav',
      ],
    },
    {
      style: 'ノーマル',
      samples: [
        'characters_data/official_0_001.wav',
        'characters_data/official_0_002.wav',
        'characters_data/official_0_003.wav',
      ],
    },
    {
      style: '喜び',
      samples: [
        'characters_data/official_1_001.wav',
        'characters_data/official_1_002.wav',
        'characters_data/official_1_003.wav',
      ],
    },
    {
      style: '怒り',
      samples: [
        'characters_data/official_2_001.wav',
        'characters_data/official_2_002.wav',
        'characters_data/official_2_003.wav',
      ],
    },
    {
      style: '悲しみ',
      samples: [
        'characters_data/official_3_001.wav',
        'characters_data/official_3_002.wav',
        'characters_data/official_3_003.wav',
      ],
    },
  ]
  const tsukuyomiChanSamples: AudioSamples = [
    {
      style: 'おしとやかv2',
      samples: [
        'characters_data/11_001.wav',
        'characters_data/11_002.wav',
        'characters_data/11_003.wav',
      ],
    },
    {
      style: 'おしとやか',
      samples: [
        'characters_data/official_4_001.wav',
        'characters_data/official_4_002.wav',
        'characters_data/official_4_003.wav',
      ],
    },
  ]
  const hakuchiSamples: AudioSamples = [
    {
      style: '虚偽v2',
      samples: [
        'characters_data/13_001.wav',
        'characters_data/13_002.wav',
        'characters_data/13_003.wav',
      ],
    },
    {
      style: '虚偽',
      samples: [
        'characters_data/official_5_001.wav',
        'characters_data/official_5_002.wav',
        'characters_data/official_5_003.wav',
      ],
    },
  ]
  const developerSamples: AudioSamples = [
    {
      style: 'ノーマルv2',
      samples: [
        'characters_data/12_001.wav',
        'characters_data/12_002.wav',
        'characters_data/12_003.wav',
      ],
    },
    {
      style: 'ノーマル',
      samples: [
        'characters_data/official_6_001.wav',
        'characters_data/official_6_002.wav',
        'characters_data/official_6_003.wav',
      ],
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
