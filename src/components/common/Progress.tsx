import { FC } from 'react'

interface Props {
  current: number
  total: number
}

const Progress: FC<Props> = ({ current, total }) => {
  return (
    <div className="p-2 text-xl text-gray-600 dark:text-gray-400">
      <p>{`${current} / ${total}`}</p>
    </div>
  )
}

export default Progress
