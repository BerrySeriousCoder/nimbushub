import React, { useState } from 'react'

interface ScheduleMeetingPopupProps {
  isOpen: boolean
  onClose: () => void
}

export function ScheduleMeetingPopup({ isOpen, onClose }: ScheduleMeetingPopupProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Meeting scheduled:', { name, email, date, time })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold">Schedule a Meeting</h2>
          <button
            onClick={onClose}
            className="text-lg font-bold text-gray-500 hover:text-black focus:outline-none"
          >
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block mb-1 text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block mb-1 text-sm font-medium text-gray-700">
              Time
            </label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            >
              <option value="">Select a time</option>
              {['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-200 focus:outline-none"
          >
            Schedule Meeting 
          </button>
        </form>
      </div>
    </div>
  )
}
