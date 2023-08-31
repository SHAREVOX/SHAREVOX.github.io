const RELEASED_VERSION = '0.2.1'

const config = {
  GITHUB_ORG_URL: 'https://github.com/SHAREVOX',
  GITHUB_EDITOR_URL: 'https://github.com/SHAREVOX/sharevox',
  GITHUB_ENGINE_URL: 'https://github.com/SHAREVOX/sharevox_engine',
  GITHUB_CORE_URL: 'https://github.com/SHAREVOX/sharevox_core',
  RELEASED_VERSION,
  RELEASE_NOTE_URL: `https://raw.githubusercontent.com/SHAREVOX/sharevox/${RELEASED_VERSION}/public/updateInfos.json`,
  WINDOWS_CPU_DOWNLOAD_URL: `https://github.com/SHAREVOX/sharevox/releases/download/${RELEASED_VERSION}/SHAREVOX-CPU.Web.Setup.${RELEASED_VERSION}.exe`,
  WINDOWS_CUDA_DOWNLOAD_URL: `https://github.com/SHAREVOX/sharevox/releases/download/${RELEASED_VERSION}/SHAREVOX-CUDA.Web.Setup.${RELEASED_VERSION}.exe`,
  WINDOWS_DIRECTML_DOWNLOAD_URL: `https://github.com/SHAREVOX/sharevox/releases/download/${RELEASED_VERSION}/SHAREVOX.Web.Setup.${RELEASED_VERSION}.exe`,
  MAC_CPU_DOWNLOAD_URL: `https://github.com/SHAREVOX/sharevox/releases/download/${RELEASED_VERSION}/SHAREVOX.${RELEASED_VERSION}.dmg`,
  // LINUX_CPU_DOWNLOAD_URL: `https://github.com/SHAREVOX/sharevox/releases/download/${RELEASED_VERSION}/sharevox-linux-cpu-${RELEASED_VERSION}.tar.gz`,
  // LINUX_CUDA_DOWNLOAD_URL: `https://github.com/SHAREVOX/sharevox/releases/download/${RELEASED_VERSION}/sharevox-linux-nvidia-${RELEASED_VERSION}.tar.gz`,
  WINDOWS_CPU_VVPP_DOWNLOAD_URL: `https://github.com/SHAREVOX/sharevox_engine/releases/download/${RELEASED_VERSION}/sharevox_engine-windows-cpu-${RELEASED_VERSION}.vvpp`,
  WINDOWS_CUDA_VVPP_DOWNLOAD_URL: `https://github.com/SHAREVOX/sharevox_engine/releases/download/${RELEASED_VERSION}/sharevox_engine-windows-nvidia-${RELEASED_VERSION}.vvpp`,
  WINDOWS_DIRECTML_VVPP_DOWNLOAD_URL: `https://github.com/SHAREVOX/sharevox_engine/releases/download/${RELEASED_VERSION}/sharevox_engine-windows-directml-${RELEASED_VERSION}.vvpp`,
  MAC_CPU_VVPP_DOWNLOAD_URL: `https://github.com/SHAREVOX/sharevox_engine/releases/download/${RELEASED_VERSION}/sharevox_engine-macos-x64-${RELEASED_VERSION}.vvpp`,
  LINUX_CPU_VVPP_DOWNLOAD_URL: `https://github.com/SHAREVOX/sharevox_engine/releases/download/${RELEASED_VERSION}/sharevox_engine-linux-cpu-${RELEASED_VERSION}.vvpp`,
  LINUX_CUDA_VVPP_DOWNLOAD_URL: `https://github.com/SHAREVOX/sharevox_engine/releases/download/${RELEASED_VERSION}/sharevox_engine-linux-nvidia-${RELEASED_VERSION}.vvpp`,
  OFFICIAL_TWITTER_URL: 'https://twitter.com/sharevox_pj',
  DEVELOPER_TWITTER_URL: 'https://twitter.com/y_chan_dev',
  FANBOX_URL: 'https://y-chan.fanbox.cc',
}

export default config
