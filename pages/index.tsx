import type { NextPage } from 'next'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Link as Scroll } from 'react-scroll'

import DescCard from '@/components/descCard'
import DownloadModal from '@/components/downloadModal'
import Footer from '@/components/footer'
import Header from '@/components/header'
import SpBreak from '@/components/spBreak'
import config from '@/config'
import backImage from '@/public/backimage.png'
import createModelImage from '@/public/create-model.png'
import decoration0Image from '@/public/decoration-0.svg'
import decoration1Image from '@/public/decoration-1.svg'
import deepLearningImage from '@/public/deep-learning.png'
import developerFriendlyImage from '@/public/developer-friendly.png'
import freedomSpeechImage from '@/public/freedom-speech.png'
import mainImage from '@/public/sharevox-first-view.png'

const Home: NextPage = () => {
  const [absoluteHeader, setAbsoluteHeader] = useState(true)
  // ファーストビュー用のビューを超えたらヘッダーを表示する
  const firstViewRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!firstViewRef.current) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setAbsoluteHeader(entry.isIntersecting)
      })
    })
    observer.observe(firstViewRef.current)
  }, [firstViewRef])
  const imageDivRef = useRef<HTMLDivElement>(null)
  const decoration0DivRef = useRef<HTMLDivElement>(null)
  const decoration1DivRef = useRef<HTMLDivElement>(null)
  const finalFeatureCardRef = useRef<HTMLDivElement>(null)
  const [featurePaddingSize, setFeaturePaddingSize] = useState(50)
  const [decoration0Top, setDecoration0Top] = useState(0)
  const [decoration0Left, setDecoration0Left] = useState(0)
  const [decoration1Left, setDecoration1Left] = useState(50)
  const [decoration3Left, setDecoration3Left] = useState(0)

  const [mainImageWidth, setMainImageWidth] = useState(500)
  const [mainImageHeight, setMainImageHeight] = useState(
    mainImage.height / (mainImage.width / mainImageWidth)
  )

  useEffect(() => {
    const onResize = () => {
      const image = imageDivRef.current
      const firstView = firstViewRef.current
      const decoration0 = decoration0DivRef.current
      const decoration1 = decoration1DivRef.current
      const finalFeatureCard = finalFeatureCardRef.current
      if (
        !image ||
        !firstView ||
        !decoration0 ||
        !decoration1 ||
        !finalFeatureCard
      )
        return

      const { bottom: firstViewBottom, width: displayWidth } =
        firstView.getBoundingClientRect()

      const newMainImageWidth =
        window.innerWidth * (displayWidth > 1980 ? 0.5 : 0.7)
      const newMainImageHeight =
        mainImage.height * (newMainImageWidth / mainImage.width)
      setMainImageWidth(newMainImageWidth)
      setMainImageHeight(newMainImageHeight)

      const { top: imageTop } = image.getBoundingClientRect()
      const imageBottom = imageTop + newMainImageHeight
      const imageLeft = (window.innerWidth - newMainImageWidth) / 2
      setDecoration0Left(imageLeft)
      if (firstViewBottom < imageBottom) {
        setFeaturePaddingSize(imageBottom - firstViewBottom + 50)
        setDecoration0Top(-15)
      } else if (displayWidth >= 1980) {
        setFeaturePaddingSize(100)
        setDecoration0Top(0)
      } else {
        setFeaturePaddingSize(50)
        setDecoration0Top(0)
      }
      const { left: finalFeatureCardLeft, width: finalFeatureCardWidth } =
        finalFeatureCard.getBoundingClientRect()
      setDecoration1Left(finalFeatureCardLeft + finalFeatureCardWidth - 50)
      setDecoration3Left(window.innerWidth - 400)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const [DownloadModalComponent, open, close, isOpen] = DownloadModal()

  return (
    <>
      {/* トップページはヘッダの扱いが特殊なので、Layoutを利用しない */}
      <Header mainPageHeader={absoluteHeader} />

      <main>
        <div
          ref={firstViewRef}
          style={{
            height: '100vh',
          }}
          className="relative"
        >
          <div className="w-full">
            <Image src={backImage.src} alt="back image" layout="fill" />
          </div>
          <p
            className="relative text-center text-2xl md:text-3xl 2xl:text-5xl font-bold"
            style={{
              paddingTop: '20vh',
            }}
          >
            あなたの声で、誰かの声で
            <br />
            自分の好きな声で創造しよう
          </p>
          <div className="relative flex flex-col md:flex-row mx-8 mt-8 2xl:text-2xl">
            <button
              className="md:ml-auto md:mr-2 2xl:mr-4 gmd:my-1 2xl:my-2 mx-auto rounded font-semibold px-4 py-2 2xl:px-6 2xl:py-3 text-white bg-primary"
              onClick={open}
            >
              ダウンロード
            </button>
            <Scroll
              className="md:ml-2 2xl:ml-4 md:mr-auto gmd:mt-1 2xl:mt-2 mx-auto rounded font-semibold px-4 py-2 2xl:px-6 2xl:py-3 text-primary bg-white cursor-pointer"
              to="feature"
              smooth={true}
              duration={1000}
              offset={1}
            >
              詳しくみる
            </Scroll>
          </div>
          <div className="relative text-center mb-8">
            Version {config.RELEASED_VERSION}
          </div>
          <DownloadModalComponent />
          <div className="flex mt-20 mx-12 sm:mx-20 md:mx-36 xl:mx-60">
            <div
              ref={imageDivRef}
              className={`flex justify-center mx-auto h-[${mainImageHeight}px]`}
            >
              <Image
                src={mainImage.src}
                width={mainImageWidth}
                height={mainImageHeight}
                alt="first view"
                objectFit="contain"
                className="rounded-xl"
              />
            </div>
          </div>
          <div
            ref={decoration0DivRef}
            style={{
              top: `${decoration0Top}%`,
              left: `calc(${decoration0Left}px - 10%)`,
            }}
            className={
              (decoration0Top === 0 ? 'hidden' : 'relative') + ' w-1/6'
            }
          >
            <Image
              src={decoration0Image.src}
              alt="decoration0"
              width={decoration0Image.width}
              height={decoration0Image.height}
            />
          </div>
        </div>
        <div
          id="feature"
          className="text-center"
          style={{
            paddingTop: featurePaddingSize,
            paddingBottom: 30,
          }}
        >
          <p className="text-3xl md:text-4xl 2xl:text-5xl font-semibold">
            特徴
          </p>
          <p className="text-xl 2xl:text-2xl font-semibold">FEATURE</p>
        </div>
        <div>
          <div
            className="flex flex-wrap justify-center items-center m-auto gxl:max-w-screen-lg"
            style={{
              alignItems: 'stretch',
            }}
          >
            <DescCard
              title="中品質な音声合成システム"
              titleEn="middle level tts system"
              image={deepLearningImage}
              imageAlt="middle level ui"
            >
              SHAREVOXはディープラーニングを用いた音声合成システムを採用し、中品質な音声合成を実現しています。
            </DescCard>
            <DescCard
              title="自由度の高い調声機能"
              titleEn="freedom"
              image={freedomSpeechImage}
              imageAlt="freedom ui"
            >
              イントネーションや音の長さ、全体の抑揚や音高、話速の変更が可能な、自由度の高い調声システムを提供します。
            </DescCard>
            <DescCard
              title="合成音声になる"
              titleEn="become"
              image={createModelImage}
              imageAlt="become ui"
            >
              あなたの声を元に、Google
              Colaboratoryを用いて自由に話せる音声ライブラリを作ることが可能です。
              <SpBreak />
              また、これを他の人に配布することもできます。 (※今後実装されます)
            </DescCard>
            <DescCard
              title="デベロッパーフレンドリー"
              titleEn="developer friendly"
              image={developerFriendlyImage}
              imageAlt="friendly image"
              ref={finalFeatureCardRef}
            >
              開発者はREST
              APIを利用したり、低レベルな動的ライブラリのAPIを用いてSHAREVOXと連携したアプリケーションを構築可能です。
            </DescCard>
          </div>
          <div className="h-0">
            <div
              ref={decoration1DivRef}
              className="relative w-1/4 lg:w-1/6"
              style={{
                top: `-200px`,
                left: decoration1Left,
              }}
            >
              <Image
                src={decoration0Image.src}
                alt="decoration1"
                width={decoration0Image.width}
                height={decoration0Image.height}
              />
            </div>
          </div>
        </div>
        <div className="py-20">
          <div
            className="relative z-10 p-10 mx-auto my-4 bg-white rounded-3xl text-center"
            style={{
              width: 'calc(66.666667% + 4rem)',
            }}
          >
            <p className="text-xl md:text-3xl 2xl:text-4xl font-bold my-2 p-4">
              自由な合成音声で、
              <SpBreak />
              自由な創作を
            </p>
            <p className="my-2 2xl:text-xl 2xl:h-16">
              自由度の高い合成音声で動画や音声作品を作ったり、
              自分自身が合成音声になったり、使い方は様々です。
              <br />
              あなたの創作活動にSHAREVOXを使ってみませんか？
            </p>
            <div className="flex flex-col md:flex-row mx-8 mt-8 2xl:text-2xl">
              <button
                className="mx-auto rounded font-semibold px-4 py-2 2xl:px-6 2xl:py-3 text-white bg-primary"
                onClick={open}
              >
                ダウンロード
              </button>
            </div>
          </div>
          <div className="h-0">
            <div
              className="relative z-0 w-[100%] sm:w-[75%] md:w-1/2 lg:w-1/3 overflow-x-hidden"
              style={{
                top: -380,
                left: 0,
              }}
            >
              <Image
                src={decoration1Image.src}
                alt="decoration2"
                width={decoration1Image.width}
                height={decoration1Image.height}
              />
            </div>
          </div>
          <div className="h-0">
            <div
              className="relative z-0 gmd:hidden md:w-1/3 lg:w-1/4 overflow-x-hidden"
              style={{
                top: -200,
                left: decoration3Left,
              }}
            >
              <Image
                src={decoration1Image.src}
                alt="decoration3"
                width={decoration1Image.width}
                height={decoration1Image.height}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home
