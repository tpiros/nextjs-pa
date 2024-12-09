'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

// for more info see: https://next.cloudinary.dev/clduploadwidget/basic-usage
const Uploader = () => {
  const [info, setInfo] = useState();
  function handleSuccess(result, widget) {
    setInfo(result?.info);
    widget.close({
      quiet: true,
    });
  }

  return (
    <>
      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
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
