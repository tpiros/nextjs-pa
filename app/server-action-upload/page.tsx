import UploadForm from './_components/upload-form';
// This React Server Component is directly utilises the <UploadForm /> component. See that component for more details.
const ServerActionUpload = () => {
  return (
    <div className="m-2 space-y-4">
      <h1 className="text-5xl font-bold">Server Action Upload</h1>
      <p className="m-2">
        This example shows how to upload images via{' '}
        <a
          className="underline text-blue-500 hover:bg-blue-200 rounded-full transition duration-300"
          href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations"
        >
          Next.js Server Actions
        </a>
        .
      </p>
      <div className="m-2">
        Please note that the following defaults are being used:
        <ul className="list-disc list-inside">
          <li>
            The{' '}
            <code className="bg-black text-gray-100 px-2 py-1 rounded-md text-sm">
              myphotoalbum-nextjs
            </code>{' '}
            tag gets added to all photos uploaded via this method (this is used
            in the photo album to retrieve images).
          </li>
          <li>
            Only images are displayed in the photo album, even though you can
            potentially upload other file types here too.
          </li>
        </ul>
      </div>
      <UploadForm />
    </div>
  );
};

export default ServerActionUpload;
