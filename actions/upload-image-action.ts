'use server';
import cloudinary from '@/utils/cloudinary';
import type { UploadApiResponse } from 'cloudinary';

// This server action gets invoked from <UploadForm /> and is responsible for uploading the assets to Cloudinary via the upload_stream() method which is wrapped in a Promise.
export async function uploadImageAction(
  prevState: { public_id: string; image?: File },
  formData: FormData
) {
  const file = formData.get('image') as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const result: UploadApiResponse = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          tags: [process.env.CLOUDINARY_TAG],
        },
        function (error, result) {
          if (error || !result) {
            reject(error);
            return;
          }
          resolve(result);
        }
      )
      .end(buffer);
  });

  const { public_id } = result;
  return { public_id };
}
