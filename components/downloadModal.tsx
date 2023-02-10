import React, { useEffect, useState } from 'react'
import { useModal } from 'react-hooks-use-modal'
import { MdClose } from 'react-icons/md'

import SpBreak from '@/components/spBreak'
import config from '@/config'

type ModelResult = [
  downloadModal: React.FC,
  open: () => void,
  close: () => void,
  isOpen: boolean
]

const linuxInstallScript = (both: boolean) => {
  return URL.createObjectURL(
    new Blob(
      [
        `#!/usr/bin/env bash

## ファイルの内容
# このファイルはLinux用のSHAREVOXインストールスクリプトです。
# 実行権限を与えてからこのファイルをダブルクリックするか、後述の方法を使ってターミナルで実行してください。

## ダブルクリックでインストールを実行する方法
# 1. このファイルを閉じる
# 2. ローンチ左上の「ファイル」→「設定」→「動作」→「実行可能なテキストファイル」を「どうするか確認する」にする
# 3. ファイルを右クリック→「プロパティ」→「アクセス権」→「プログラムとして実行可能」にチェックを入れる
# 4. ファイルをタブルクリックする

## ターミナルでインストールを実行する
# 1. ターミナルを起動する
# 2. 次のように入力して実行する
#    chmod +x [ファイル名].sh
#    ./[ファイル名].sh

set -euo pipefail

if ! command -v curl &>/dev/null; then
    cat <<'EOS'
* curl コマンドが見つかりません。
以下のコマンドを実行してください。
Ubuntu/Debian:
    sudo apt install curl
CentOS/Fedora:
    sudo dnf install curl
もしくは
    sudo yum install curl
EOS
    sleep 365d
    exit 1
fi

curl -fsSL https://raw.githubusercontent.com/SHAREVOX/sharevox/${
          config.RELEASED_VERSION
        }/build/installer_linux.sh > tmp_sharevox_installer.sh
VERSION=${config.RELEASED_VERSION} NAME=${
          both ? 'linux-nvidia-appimage' : 'linux-cpu-appimage'
        } bash tmp_sharevox_installer.sh
rm tmp_sharevox_installer.sh
`,
      ],
      { type: 'text/plain' }
    )
  )
}

const downloadUrls = {
  installer: {
    win: {
      both: config.WINDOWS_DIRECTML_DOWNLOAD_URL,
      cpu: config.WINDOWS_CPU_DOWNLOAD_URL,
    },
    mac: {
      both: null,
      cpu: config.MAC_CPU_DOWNLOAD_URL,
    },
    linux: {
      both: '',
      cpu: '',
    },
  },
  vvpp: {
    win: {
      both: config.WINDOWS_DIRECTML_VVPP_DOWNLOAD_URL,
      cpu: config.WINDOWS_CPU_VVPP_DOWNLOAD_URL,
    },
    mac: {
      both: null,
      cpu: config.MAC_CPU_VVPP_DOWNLOAD_URL,
    },
    linux: {
      both: config.LINUX_CUDA_VVPP_DOWNLOAD_URL,
      cpu: config.LINUX_CPU_VVPP_DOWNLOAD_URL,
    },
  },
}

const DownloadModal = () => {
  const [Modal, open, close, isOpen] = useModal('root')
  const [packageType, setPackageType] =
    useState<keyof typeof downloadUrls>('installer')
  const [osType, setOsType] =
    useState<keyof typeof downloadUrls.installer>('win')
  const [supportMode, setSupportMode] =
    useState<keyof typeof downloadUrls.installer.win>('both')

  const buttonBaseClass =
    'py-1.5 px-2 mx-4 rounded-lg border-solid border-[0.5px] '
  const selectedButtonClass =
    buttonBaseClass + ' text-white border-primary bg-primary'
  const unselectedButtonClass =
    buttonBaseClass + ' text-primary border-primary bg-white'
  const disabledButtonClass =
    buttonBaseClass + ' text-gray-400 border-gray-400 bg-white cursor-no-drop'

  useEffect(() => {
    downloadUrls.installer.linux.both = linuxInstallScript(true)
    downloadUrls.installer.linux.cpu = linuxInstallScript(false)
  })

  const downloadModal: React.FC = () => {
    return (
      <>
        <Modal>
          <div className="flex flex-col justify-center bg-white px-6 py-4 rounded-2xl max-h-[90vh] w-[90vw] lg:max-w-screen-lg m-auto">
            <div className="flex flex-row text-2xl">
              <div className="text-center mx-auto">ダウンロード選択</div>
              <div className="flex items-center">
                <button onClick={close}>
                  <MdClose />
                </button>
              </div>
            </div>
            <div className="text-center justify-center m-4">
              <div className="flex flex-row my-1.5">
                <div className="flex text-xl w-full">
                  <div className="flex items-center justify-center my-3 w-1/4">
                    パッケージ
                  </div>
                  <div className="flex flex-col text-xl w-3/4">
                    <div className="flex h-full items-center flex-row flex-wrap mx-auto">
                      <button
                        className={
                          packageType === 'installer'
                            ? selectedButtonClass
                            : unselectedButtonClass
                        }
                        onClick={() => setPackageType('installer')}
                      >
                        インストーラー
                      </button>
                      <button
                        className={
                          packageType === 'vvpp'
                            ? selectedButtonClass
                            : unselectedButtonClass
                        }
                        onClick={() => setPackageType('vvpp')}
                      >
                        VVPP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row my-1.5">
                <div className="flex text-xl w-full">
                  <div className="flex items-center justify-center my-3 w-1/4">
                    OS
                  </div>
                  <div className="flex flex-col text-xl w-3/4">
                    <div className="flex flex-row flex-wrap mx-auto">
                      <button
                        className={
                          osType === 'win'
                            ? selectedButtonClass
                            : unselectedButtonClass
                        }
                        onClick={() => {
                          setOsType('win')
                          setSupportMode('both')
                        }}
                      >
                        Windows
                      </button>
                      <button
                        className={
                          osType === 'mac'
                            ? selectedButtonClass
                            : unselectedButtonClass
                        }
                        onClick={() => {
                          setOsType('mac')
                          setSupportMode('cpu')
                        }}
                      >
                        Mac
                      </button>
                      <button
                        className={
                          osType === 'linux'
                            ? selectedButtonClass
                            : unselectedButtonClass
                        }
                        onClick={() => {
                          setOsType('linux')
                          setSupportMode('both')
                        }}
                      >
                        Linux
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row my-1.5">
                <div className="flex text-xl w-full">
                  <div className="flex items-center justify-center my-3 w-1/4">
                    対応
                    <SpBreak />
                    モード
                  </div>
                  <div className="flex flex-col text-xl w-3/4">
                    <div className="flex h-full items-center flex-row flex-wrap mx-auto">
                      <button
                        className={
                          osType === 'mac'
                            ? disabledButtonClass
                            : supportMode === 'both'
                            ? selectedButtonClass
                            : unselectedButtonClass
                        }
                        disabled={osType === 'mac'}
                        onClick={() => setSupportMode('both')}
                      >
                        GPU / CPU
                      </button>
                      <button
                        className={
                          supportMode === 'cpu'
                            ? selectedButtonClass
                            : unselectedButtonClass
                        }
                        onClick={() => setSupportMode('cpu')}
                      >
                        CPU
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row text-sm">
              <div className="flex flex-col mr-auto">
                <span>※Mac版はGPUモード未対応です</span>
                <span>
                  ※GPUモードの方が高速・快適に動作しますが、対応するGPUが必要です。
                </span>
              </div>
            </div>
            <div className="flex flex-row text-xl font-bold">
              <div className="flex ml-auto items-center">
                <a
                  href={downloadUrls[packageType][osType][supportMode]!}
                  className={selectedButtonClass}
                  download={
                    osType === 'linux'
                      ? `sharevox_installer_${
                          supportMode == 'cpu' ? 'cpu' : 'nvidia'
                        }_${config.RELEASED_VERSION}.sh`
                      : undefined
                  }
                  onClick={close}
                >
                  ダウンロード
                </a>
              </div>
            </div>
          </div>
        </Modal>
      </>
    )
  }
  return [downloadModal, open, close, isOpen] as ModelResult
}

export default DownloadModal
