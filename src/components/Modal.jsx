import React, { useEffect, useRef } from 'react'

export default function Modal({ project, onClose }) {
  const modalRef = useRef(null)

  // Trap focus inside modal and close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        if (focusableElements.length === 0) {
          e.preventDefault()
          return
        }
        const first = focusableElements[0]
        const last = focusableElements[focusableElements.length - 1]
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    modalRef.current.focus()
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      ref={modalRef}
      tabIndex={-1}
    >
      <div className="modal-content">
        <button
          onClick={onClose}
          className="modal-close"
          aria-label="Close Modal"
        >
          &times;
        </button>

        <h2 id="modal-title">{project.title}</h2>
        <p><strong>Studio:</strong> {project.studio}</p>
        <p>{project.description}</p>
        <p><strong>Technology Used:</strong> {project.tech.join(', ')}</p>
        <p>{project.work}</p>
        <div className="modal-video">
          <iframe
            width="560"
            height="315"
            src={project.video}
            title={project.title + " video"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
