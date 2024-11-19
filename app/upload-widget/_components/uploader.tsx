'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

const Uploader = () => {
  const [info, setInfo] = useState();
  function handleSuccess(result, widget) {
    setInfo(result?.info);
    // setError(null);
    widget.close({
      quiet: true,
    });
  }

  function handleError() {}

  return (
    <>
      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
        onError={handleError}
        onSuccess={handleSuccess}
      >
        {({ open }) => {
          return (
            <button className="btn btn-neutral" onClick={() => open()}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
      {info && <p>{JSON.stringify(info)}</p>}
    </>
  );
};

export default Uploader;
