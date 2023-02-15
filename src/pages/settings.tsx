/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import MainLayout from '@/common/layouts/main-layout'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import Datepicker from 'react-tailwindcss-datepicker'
import { ClassNamesTypeProp } from 'react-tailwindcss-datepicker/dist/types'
import { SketchPicker } from 'react-color'
import useClickOutside from '@/common/hooks/use-click-outside'
import { isEqual } from 'lodash'
import classNames from 'classnames'

type FormData = {
  title: string
  background_color: string
  email: string
  active_date: DateData
}

type DateData = {
  startDate: Date | null
  endDate: Date | null
}

const SettingsPage = () => {
  const title = 'Settings'
  const colorPickerContainerRef = React.createRef<HTMLDivElement>()
  const defaultValues = React.useMemo(
    () => ({
      email: '',
      title: '',
      background_color: '',
      active_date: {
        startDate: null,
        endDate: null
      }
    }),
    []
  )
  const { setValue, register, handleSubmit, watch } = useForm<FormData>({
    defaultValues
  })

  useClickOutside(colorPickerContainerRef, () => {
    setShowColorPicker(false)
  })

  // const [isChange, setIsChange] = React.useState<boolean>(false)
  const data = watch()
  const [date, setDate] = React.useState<DateData>({
    startDate: null,
    endDate: null
  })
  const [color, setColor] = React.useState<string>('')
  const [showColorPicker, setShowColorPicker] = React.useState<boolean>(false)
  const isChange = !isEqual(data, defaultValues)

  const handleSubmitForm = (
    data: FormData,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _?: React.BaseSyntheticEvent<object, unknown, unknown> | undefined
  ) => {
    console.log(data)
  }

  React.useEffect(() => {
    setValue('active_date', date)
  }, [date])

  React.useEffect(() => {
    setValue('background_color', color)
  }, [color])

  const submitClasses = (isTop = true) =>
    classNames({
      'py-2 px-5 bg-red-500 text-white block rounded': true,
      'opacity-50 cursor-not-allowed': !isChange,
      'none md:block': isTop
    })

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MainLayout title={title}>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className='flex flex-col gap-3'
        >
          <div className='flex flex-col sm:flex-row flex-wrap gap-3'>
            <div className='flex flex-col flex-1'>
              <label>
                Title:
                <input
                  className='w-full bg-transparent p-3 outline-none border rounded'
                  placeholder='Title'
                  {...register('title')}
                />
              </label>
            </div>
            <div className='flex flex-col flex-1'>
              <label>
                Email:
                <input
                  className='w-full bg-transparent p-3 outline-none border rounded'
                  placeholder='Title'
                  type='email'
                  {...register('email')}
                />
              </label>
            </div>
          </div>
          <div
            className='flex flex-col sm:flex-row flex-wrap gap-3'
            ref={colorPickerContainerRef}
          >
            <div className='flex flex-col flex-1 relative'>
              <label>
                Background Color:
                <input
                  className='w-full bg-transparent p-3 outline-none border rounded'
                  placeholder='Background color'
                  type='text'
                  value={color}
                  onFocus={() => setShowColorPicker(true)}
                />
              </label>
              {showColorPicker && (
                <SketchPicker
                  className='mx-auto absolute top-full border z-[100]'
                  color={color}
                  onChange={color => setColor(color.hex)}
                />
              )}
            </div>
            <div className='flex flex-col flex-1'>
              <label>
                Active date:
                <Datepicker
                  primaryColor='red'
                  containerClassName=''
                  classNames={
                    {
                      input: () =>
                        'w-full bg-transparent p-3 outline-none border rounded'
                    } as ClassNamesTypeProp
                  }
                  value={date}
                  onChange={newValue => {
                    console.log('newValue:', newValue)
                    setDate(newValue as DateData)
                  }}
                  showShortcuts={false}
                />
              </label>
            </div>
          </div>
          <button
            type='submit'
            className={submitClasses(false)}
            disabled={!isChange}
          >
            Save
          </button>
        </form>
      </MainLayout>
    </>
  )
}

export default SettingsPage
