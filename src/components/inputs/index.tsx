import { FC } from 'react'

interface Props {
  id: string
  label: string

  placeholder?: string
  values?: string[]
  selected?: string

  onUpdate?: (value: string) => void
}

/// Tailwind implementation from https://flowbite.com/docs/components/forms/

const TextInput: FC<Props> = ({ id, label, placeholder = ' ' }) => {
  return (
    <div className="relative z-0 mb-6 w-full group">
      <input
        type="text"
        id={id}
        name={id}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder={placeholder}
        required
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  )
}

const TextareaInput: FC<Props> = ({ id, label, placeholder = '' }) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      ></textarea>
    </>
  )
}

const RadioInput: FC<Props> = ({ id, label, values, selected }) => {
  return (
    <fieldset className="px-2 py-4">
      <legend className="sr-only">{label}</legend>

      {values?.map((value, i) => (
        <div className="flex items-center mb-2" key={`id-${i}`}>
          <input
            id={`id-${i}`}
            type="radio"
            value={value}
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            aria-labelledby="country-option-1"
            aria-describedby="country-option-1"
            checked={selected === value}
          />
          <label
            htmlFor="country-option-1"
            className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {value}
          </label>
        </div>
      ))}
    </fieldset>
  )
}

export { TextInput, TextareaInput, RadioInput }
