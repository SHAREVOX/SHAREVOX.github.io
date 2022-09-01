// よほど重要でない限り、型だけのファイルはない方が良いのでここに書く
export type ReleaseData = {
  version: string
  descriptions: string[]
  contributors: string[]
}

type Props = {
  data: ReleaseData
}

const ReleaseCard: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h2>{data.version}</h2>
      <hr />
      {data.descriptions && data.descriptions.length > 0 && (
        <>
          <h3>変更点</h3>
          <ul>
            {data.descriptions.map((v, idx) => (
              <li key={idx}>{v}</li>
            ))}
          </ul>
        </>
      )}
      {data.contributors && data.contributors.length > 0 && (
        <>
          <h3>コントリビューター</h3>
          <p>{data.contributors.join(' / ')}</p>
        </>
      )}
    </div>
  )
}

export default ReleaseCard
