'use client';
import { uploadImageAction } from '@/actions/upload-image-action';
import { SubmitButton } from './submit-button';
import { useActionState } from 'react';

const initialState = {
  public_id: '',
};

// This component uses server actions to upload assets to Cloudinary. See the server action for more details.

const UploadForm = () => {
  const [state, formAction] = useActionState(uploadImageAction, initialState);
  console.log(state);
  return (
    <>
      <form
        action={formAction}
        className="flex flex-col bg-white rounded-lg shadow p-6 mb-6"
      >
        <label className="form-control w-full max-w-xs" htmlFor="image">
          <div className="label">
            <span className="label-text">Pick a file</span>
          </div>
          <input
            id="image"
            className="file-input file-input-bordered w-full max-w-xs"
            type="file"
            name="image"
            required
          />
        </label>
        <SubmitButton />
      </form>
      {state.public_id && (
        <p className="bg-green-100 p-2 rounded">
          Upload to Cloudinary complete. Uploaded asset&apos;s public ID:{' '}
          {state.public_id}
        </p>
      )}
    </>
  );
};
export default UploadForm;
