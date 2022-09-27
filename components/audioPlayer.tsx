import React, { useEffect, useState } from 'react'
import { HiPlay, HiStop } from 'react-icons/hi'

type Props = {
  audioSrc: string
}

const AudioPlayer: React.FC<Props> = ({ audioSrc }) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setAudio(new Audio('data:audio/wav;base64,' + audioSrc))
  }, [audioSrc])

  useEffect(() => {
    if (!audio) return
    audio.load()

    const onPlayCallback = () => {
      setIsPlaying(true)
    }
    const onPauseCallback = () => {
      setIsPlaying(false)
    }
    const onReady = () => {
      setIsReady(true)
    }
    audio.addEventListener('play', onPlayCallback)
    audio.addEventListener('pause', onPauseCallback)
    audio.addEventListener('canplaythrough', onReady)
    return () => {
      audio.removeEventListener('play', onPlayCallback)
      audio.removeEventListener('pause', onPauseCallback)
      audio.removeEventListener('canplaythrough', onReady)
    }
  }, [audio])

  useEffect(() => {
    return () => {
      if (!audio) return

      audio.pause()
      setIsPlaying(false)
      setIsReady(false)
    }
  }, [audio])

  const play = () => {
    audio!.play()
  }

  const stop = () => {
    audio!.pause()
    audio!.currentTime = 0
  }

  return (
    <>
      <button onClick={isPlaying ? stop : play} disabled={!isReady}>
        <p className="text-5xl text-primary m-0">
          {!isPlaying ? <HiPlay /> : <HiStop />}
        </p>
      </button>
    </>
  )
}

export default AudioPlayer
