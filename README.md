# Introduction

This project demonstrates how to use the [Cloudinary Next.js SDK](https://next.cloudinary.dev) (via the `app` router) to create a photo album app.

The sample project showcases the following functionality:

- Using the [Upload Widget](https://cloudinary.com/documentation/upload_widget) to upload images to your product environment via the Next.js SDK.
- Using the [Node.js Upload](https://cloudinary.com/documentation/node_image_and_video_upload) to upload images to your product environment via Next.js Server Actions
- [Transforming](https://cloudinary.com/documentation/image_transformations) and displaying images

# Setup

[Create an unsigned upload preset](https://cloudinary.com/documentation/upload_presets#creating_and_managing_upload_presets) in your Cloudinary product environment and make a note of the name of the unsigned upload preset as well as your Cloudinary cloud name.

Create a `.env` file with the following content at the root of the project:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="YOUR-CLOUDINARY-ACCOUNT-NAME"
CLOUDINARY_API_KEY="YOUR-CLOUDINARY-API-KEY"
CLOUDINARY_API_SECRET="YOUR-CLOUDINARY-API-SECRET"
CLOUDINARY_TAG="myphotoalbum-nextjs"
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET="YOUR-CLOUDINARY-UPLOAD-PRESET-NAME"
```

# Run

From your terminal, in the root folder of your project, run:

- `npm i`
- `npm run dev`

Then, click the localhost link to open the app in your browser, or open a browser and navigate to localhost:3000 or to the port displayed in the terminal.

Try uploading images using each of the upload tabs, then see your images displayed in the Photo Album tab.

# Explore

- Take a look at the source code to understand how it works.
- Discover more features in the [Cloudinary Docs](https://cloudinary.com/documentation).
- Ask for help in our [Community Forum](https://community.cloudinary.com/), in [Discord](https://discord.gg/Cloudinary), or [raise a support request](https://support.cloudinary.com/hc/en-us/requests/new).

Feel free to fork this repo as a starting point for your own Next.js app, contribute to it, or star it if you like it!
