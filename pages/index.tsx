import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import { Link as Scroll } from 'react-scroll'

import DescCard from '@/components/descCard'
import Footer from '@/components/footer'
import Header from '@/components/header'
import SpBreak from '@/components/spBreak'
import backImage from '@/public/backimage.png'
import createModelImage from '@/public/create-model.png'
import deepLearningImage from '@/public/deep-learning.png'
import developerFriendlyImage from '@/public/developer-friendly.png'
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
  const imageRef = useRef<HTMLImageElement>(null)
  const [featurePaddingSize, setFeaturePaddingSize] = useState(20)

  useEffect(() => {
    const onResize = () => {
      const image = imageRef.current
      const firstView = firstViewRef.current
      if (!image || !firstView) return
      const { bottom: firstViewBottom, width: displayWidth } =
        firstView.getBoundingClientRect()
      const { bottom: imageBottom } = image.getBoundingClientRect()
      if (firstViewBottom < imageBottom) {
        setFeaturePaddingSize(imageBottom - firstViewBottom + 20)
      } else if (displayWidth >= 1980) {
        setFeaturePaddingSize(40)
      } else {
        setFeaturePaddingSize(20)
      }
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      {/* トップページはヘッダの扱いが特殊なので、Layoutを利用しない */}
      <Head>
        <title>SHAREVOX</title>
        <meta
          name="description"
          content="無料で使える、声を作れるテキスト読み上げソフトウェア、SHAREVOX"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header mainPageHeader={absoluteHeader} />

      <main>
        <div
          ref={firstViewRef}
          style={{
            backgroundImage: `url(${backImage.src})`,
            height: '100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
          }}
        >
          <p
            className="text-center text-2xl md:text-3xl 2xl:text-5xl font-bold"
            style={{
              paddingTop: '20vh',
            }}
          >
            あなたの声で、誰かの声で
            <br />
            自分の好きな声で創造しよう
          </p>
          <div className="flex flex-col md:flex-row m-4 2xl:text-2xl">
            <a className="md:ml-auto md:mr-2 2xl:mr-4 gmd:my-1 2xl:my-2 mx-auto rounded font-semibold px-4 py-2 2xl:px-6 2xl:py-3 text-white bg-primary">
              Coming Soon...
            </a>
            <Scroll
              className="md:ml-2 2xl:ml-4 md:mr-auto gmd:my-1 2xl:my-2 mx-auto rounded font-semibold px-4 py-2 2xl:px-6 2xl:py-3 text-primary bg-white cursor-pointer"
              to="feature"
              smooth={true}
              duration={1000}
              offset={1}
            >
              詳しくみる
            </Scroll>
          </div>
          <div className="flex mt-20 mx-12 sm:mx-20 md:mx-36 xl:mx-60">
            {/* FIXME: Next/Image ではセンタリングに失敗する */}
            <img
              ref={imageRef}
              src={mainImage.src}
              alt="first view"
              className="rounded-xl mx-auto"
            />
          </div>
        </div>
        <div
          id="feature"
          className="text-center"
          style={{
            paddingTop: featurePaddingSize,
          }}
        >
          <p className="text-3xl md:text-4xl 2xl:text-5xl font-semibold">
            特徴
          </p>
          <p className="text-xl 2xl:text-2xl font-semibold">feature</p>
        </div>
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
            image={mainImage}
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
          >
            開発者はREST
            APIを利用したり、低レベルな動的ライブラリのAPIを用いてSHAREVOXと連携したアプリケーションを構築可能です。
          </DescCard>
        </div>
        <div className="py-20">
          <div
            className="p-10 mx-auto my-4 bg-white rounded-3xl text-center"
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
            <div className="mt-8 mb-4">
              <a className="rounded font-semibold px-4 py-2 2xl:px-6 2xl:py-3 text-white bg-primary">
                Coming Soon...
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home
