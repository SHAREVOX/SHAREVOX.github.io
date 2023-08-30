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
import AbeHirohaImage from '@/public/characters_data/abe-hiroha.png'
import DeveloperImage from '@/public/characters_data/developer.png'
import HakuchiImage from '@/public/characters_data/hakuchi.png'
import kazahanaYukiImage from '@/public/characters_data/kazahana-yuki.png'
import KoharuneAmiImage from '@/public/characters_data/koharune-ami.png'
import LagopusBlackImage from '@/public/characters_data/lagopus-black.png'
import LagopusWhiteImage from '@/public/characters_data/lagopus-white.png'
import SuzunoImage from '@/public/characters_data/suzuno.png'
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
  const lagopusWhitePolicy = await markdownToHtml(
    fs.readFileSync('public/characters_data/lagopus-white-policy.md', 'utf8')
  )
  const lagopusBlackPolicy = await markdownToHtml(
    fs.readFileSync('public/characters_data/lagopus-black-policy.md', 'utf8')
  )
  const kazahanaYukiPolicy = await markdownToHtml(
    fs.readFileSync('public/characters_data/kazahana-yuki-policy.md', 'utf8')
  )
  const abeHirohaPolicy = await markdownToHtml(
    fs.readFileSync('public/characters_data/abe-hiroha-policy.md', 'utf8')
  )
  const suzunoPolicy = await markdownToHtml(
    fs.readFileSync('public/characters_data/suzuno-policy.md', 'utf8')
  )
  return {
    props: {
      amiPolicy,
      tsukuyomiPolicy,
      hakuchiPolicy,
      developerPolicy,
      lagopusWhitePolicy,
      lagopusBlackPolicy,
      kazahanaYukiPolicy,
      abeHirohaPolicy,
      suzunoPolicy,
    },
  }
}

type Props = {
  amiPolicy: string
  tsukuyomiPolicy: string
  hakuchiPolicy: string
  developerPolicy: string
  lagopusWhitePolicy: string
  lagopusBlackPolicy: string
  kazahanaYukiPolicy: string
  abeHirohaPolicy: string
  suzunoPolicy: string
}

const Characters: NextPage<Props> = ({
  amiPolicy,
  tsukuyomiPolicy,
  hakuchiPolicy,
  developerPolicy,
  lagopusWhitePolicy,
  lagopusBlackPolicy,
  kazahanaYukiPolicy,
  abeHirohaPolicy,
  suzunoPolicy,
}) => {
  const koharuneAmiSamples: AudioSamples = [
    {
      style: 'ノーマルv3',
      samples: [
        'characters_data/14_001.wav',
        'characters_data/14_002.wav',
        'characters_data/14_003.wav',
      ],
    },
    {
      style: '喜びv3',
      samples: [
        'characters_data/15_001.wav',
        'characters_data/15_002.wav',
        'characters_data/15_003.wav',
      ],
    },
    {
      style: '怒りv3',
      samples: [
        'characters_data/16_001.wav',
        'characters_data/16_002.wav',
        'characters_data/16_003.wav',
      ],
    },
    {
      style: '悲しみv3',
      samples: [
        'characters_data/17_001.wav',
        'characters_data/17_002.wav',
        'characters_data/17_003.wav',
      ],
    },
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
      style: 'おしとやかv3',
      samples: [
        'characters_data/18_001.wav',
        'characters_data/18_002.wav',
        'characters_data/18_003.wav',
      ],
    },
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
      style: '虚偽v3',
      samples: [
        'characters_data/20_001.wav',
        'characters_data/20_002.wav',
        'characters_data/20_003.wav',
      ],
    },
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
      style: 'ノーマルv3',
      samples: [
        'characters_data/19_001.wav',
        'characters_data/19_002.wav',
        'characters_data/19_003.wav',
      ],
    },
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
  const lagopusWhiteSamples: AudioSamples = [
    {
      style: 'ノーマル',
      samples: [
        'characters_data/22_001.wav',
        'characters_data/22_002.wav',
        'characters_data/22_003.wav',
      ],
    },
  ]
  const lagopusBlackSamples: AudioSamples = [
    {
      style: 'ノーマル',
      samples: [
        'characters_data/21_001.wav',
        'characters_data/21_002.wav',
        'characters_data/21_003.wav',
      ],
    },
  ]
  const kazahanaYukiSamples: AudioSamples = [
    {
      style: 'ノーマル',
      samples: [
        'characters_data/23_001.wav',
        'characters_data/23_002.wav',
        'characters_data/23_003.wav',
      ],
    },
  ]
  const abeHirohaSamples: AudioSamples = [
    {
      style: 'ノーマル',
      samples: [
        'characters_data/24_001.wav',
        'characters_data/24_002.wav',
        'characters_data/24_003.wav',
      ],
    },
  ]
  const suzunoSamples: AudioSamples = [
    {
      style: 'ノーマル',
      samples: [
        'characters_data/25_001.wav',
        'characters_data/25_002.wav',
        'characters_data/25_003.wav',
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
          name="白痴ー/黒聡鵜月"
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
        <CharacterCard
          name="らごぱすホワイト"
          image={LagopusWhiteImage}
          imageAlt="lagopus-white"
          audioSamples={lagopusWhiteSamples}
          policy={lagopusWhitePolicy}
          openModal={openModal}
        />
        <CharacterCard
          name="らごぱすブラック"
          image={LagopusBlackImage}
          imageAlt="lagopus-black"
          audioSamples={lagopusBlackSamples}
          policy={lagopusBlackPolicy}
          openModal={openModal}
        />
        <CharacterCard
          name="風花ゆき"
          image={kazahanaYukiImage}
          imageAlt="kazahana-yuki"
          audioSamples={kazahanaYukiSamples}
          policy={kazahanaYukiPolicy}
          openModal={openModal}
        />
        <CharacterCard
          name="安倍広葉"
          image={AbeHirohaImage}
          imageAlt="abe-hiroha"
          audioSamples={abeHirohaSamples}
          policy={abeHirohaPolicy}
          openModal={openModal}
        />
        <CharacterCard
          name="鈴乃"
          image={SuzunoImage}
          imageAlt="suzuno"
          audioSamples={suzunoSamples}
          policy={suzunoPolicy}
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
