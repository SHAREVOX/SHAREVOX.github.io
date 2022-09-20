import React, { useState } from 'react'
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

const downloadUrls = {
  win: {
    both: config.WINDOWS_DIRECTML_DOWNLOAD_URL,
    cpu: config.WINDOWS_CPU_DOWNLOAD_URL,
  },
  mac: {
    both: null,
    cpu: config.MAC_CPU_DOWNLOAD_URL,
  },
  linux: {
    both: config.LINUX_CUDA_DOWNLOAD_URL,
    cpu: config.LINUX_CPU_DOWNLOAD_URL,
  },
}

const DownloadModal = () => {
  const [Modal, open, close, isOpen] = useModal('root')
  const [osType, setOsType] = useState<keyof typeof downloadUrls>('win')
  const [supportMode, setSupportMode] =
    useState<keyof typeof downloadUrls.win>('both')

  const buttonBaseClass =
    'py-1.5 px-2 mx-4 rounded-lg border-solid border-[0.5px] '
  const selectedButtonClass =
    buttonBaseClass + ' text-white border-primary bg-primary'
  const unselectedButtonClass =
    buttonBaseClass + ' text-primary border-primary bg-white'
  const disabledButtonClass =
    buttonBaseClass + ' text-gray-400 border-gray-400 bg-white cursor-no-drop'

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
                  href={downloadUrls[osType][supportMode]!}
                  className={selectedButtonClass}
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
