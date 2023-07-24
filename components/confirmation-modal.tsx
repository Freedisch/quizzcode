import React, { useEffect } from 'react'
import ReactPortal from './react-portal'
import { deflate } from 'zlib'

interface ConfirmationModalProps {
  children: React.ReactNode
  isOpen: boolean
  handleClose: () => void
}

const ConfirmationModal = ({
  children,
  isOpen,
  handleClose,
}: ConfirmationModalProps) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      e.key === 'Escape' ? handleClose() : null
      document.body.addEventListener('keydown', closeOnEscapeKey)
      return () => {
        document.body.removeEventListener('keydown', closeOnEscapeKey)
      }
    }
  }, [handleClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return (): void => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <ReactPortal wrapperId="react-portal">
      <>
        <div
          className="fixed top-0 left-0 w-screen z-40 bg-slate-300
        opacity-5a"
        />

        <div className="fixed rounded flex flex-col box-border min-w-fit overflow-hidden p-5  inset-y-32 inset-x-32">
          <div className="box-border h-5/6">{children}</div>
        </div>
      </>
    </ReactPortal>
  )
}

export default ConfirmationModal
