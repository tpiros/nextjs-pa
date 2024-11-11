import Uploader from "./_components/uploader";

const UploadWidgetPage = () => {
  return (
    <div className="m-2 space-y-4">
      <h1 className="text-5xl font-bold">Upload (Upload Widget)</h1>
      <p className="m-2">
        This example shows how to integrate the Cloudinary Upload Widget into a
        React application.
      </p>
      <div className="m-2">
        Please note that the following defaults are being used:
        <ul className="list-disc list-inside">
          <li>
            The upload source is limited to the local filesystem or to a remote
            URL.
          </li>
          <li>
            The{' '}
            <code className="bg-black text-gray-100 px-2 py-1 rounded-md text-sm">
              myphotoalbum-nextjs
            </code>{' '}
            tag gets added to all photos uploaded via this method (this is used
            in the photo album to retrieve images).
          </li>
          <li>Only images can be uploaded.</li>
        </ul>
      </div>
      <Uploader />


    </div>
  )
}
export default UploadWidgetPage;
