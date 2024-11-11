'use client';

import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button className="btn btn-neutral mt-4 w-full max-w-xs" disabled={pending} type="submit">
      {pending ? 'Uploading...' : 'Upload File'}
    </button>
  )
}
