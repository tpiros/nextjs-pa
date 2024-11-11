import CldImage from "@/components/cld-image";
import { getCldImageUrl } from 'next-cloudinary';


const AlbumItem = async ({ src }: { src: string }) => {
  const imageUrl = getCldImageUrl({
    src,
    width: 100,
  });
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  const dataUrl = `data:${response.type};base64,${base64}`;

  return (
    <CldImage
      className="rounded"
      src={src}
      width="300"
      height="300"
      crop={{
        type: 'auto',
        source: true
      }}
      alt="Photo Album Item"
      placeholder="blur"
      blurDataURL={dataUrl}
    />
  )
}

export default AlbumItem;
