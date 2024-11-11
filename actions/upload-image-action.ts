'use server';
import cloudinary from "@/utils/cloudinary";

export async function uploadImageAction(prevState: any, formData: FormData) {
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
