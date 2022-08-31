import Link from 'next/link'
import React from 'react'

import config from '@/config'

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap-reverse gmd:justify-center bg-primary text-white pt-12 pb-4 px-10 md:px-40 2xl:text-xl">
      <div className="flex items-end justify-start mr-auto">
        <p className="opacity-60">&copy; 2022 SHAREVOX</p>
      </div>
      <div className="md:ml-auto flex flex-row">
        <div className="mr-10 my-2 text-left">
          <p className="opacity-40 mb-4">Menu</p>
          <div className="flex flex-col">
            <Link href="/terms" className="">
              利用規約
            </Link>
            <a href="#" className="">
              キャラクター一覧
            </a>
            <a href="#" className="">
              更新履歴
            </a>
          </div>
        </div>
        <div className="ml-10 my-2 text-left">
          <p className="opacity-40 mb-4">Links</p>
          <div className="flex flex-col">
            <a href={config.GITHUB_ORG_URL} className="">
              GitHub
            </a>
            <a href={config.OFFICIAL_TWITTER_URL} className="">
              公式Twitter
            </a>
            <a href={config.DEVELOPER_TWITTER_URL} className="">
              開発者Twitter
            </a>
            <a href={config.FANBOX_URL} className="">
              pixivFANBOX
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
