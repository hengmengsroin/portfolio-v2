import { type CareerProps } from '@/types'
import { ButtonViewMore } from './ui/button-view-more'

export function CareerItem({
  link,
  company,
  title,
  start,
  end,
  description
}: CareerProps) {
  return (
    <>
      <div className='absolute w-3 h-3 bg-gray-100 rounded-full mt-1.5 -start-1.5 border border-white' />
      <time className='text-lg font-normal leading-none text-gray-200'>
        {start} - {end}
      </time>
      <h3 className='text-xl md:text-2xl mt-4 mb-2 font-bold text-blue-100'>
        {company}
      </h3>
      <div className='flex items-center gap-x-2 my-2'>
        <span>{'->'}</span>
        <h4 className='text-lg md:text-xl font-bold text-white'>{title}</h4>
      </div>
      <p className='text-lg md:text-xl font-normal text-gray-200 text-pretty'>
        {description}
      </p>
      {link && <ButtonViewMore href={link} />}
    </>
  )
}
