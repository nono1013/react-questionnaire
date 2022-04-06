import { FC } from 'react'

// Tailwind implementation from https://flowbite.com/docs/components/spinner/

interface Props {
  onClick: () => void
  reversed?: boolean
}

const NextButton: FC<Props> = ({ onClick, reversed = false }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg
        className="w-4 h-4"
        style={reversed ? { transform: 'scale(-1)' } : {}}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  )
}

export default NextButton
