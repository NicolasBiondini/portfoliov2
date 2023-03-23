// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import uploadNotionImagesToCloudinary from "upload-notion-images-to-cloudinary";
import { fetchNotionPageIdForBlogPost } from "@/lib/notion";

export default async function revalidateBlogPost(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Use the Notion API to get the page associated with the path to revalidate
  // You need to send the post slug
  if (req.query.slug !== undefined && typeof req.query.slug === "string") {
    const pageId = await fetchNotionPageIdForBlogPost(req.query.slug);

    let notionToken = process.env.NOTION_TOKEN || "";
    let cloudinaryUrl = process.env.CLOUDINARY_URL || "";

    // Move images in that page to Cloudinary using upload-notion-images-to-cloudinary
    await uploadNotionImagesToCloudinary({
      notionToken: notionToken,
      notionPageId: pageId ? pageId : "",
      cloudinaryUrl: cloudinaryUrl,
      cloudinaryUploadFolder: process.env.CLOUDINARY_UPLOAD_FOLDER,
      logLevel: "debug",
    });

    // Revalidate the desired path and the blog index
    await res.revalidate(`/blog/${req.query.slug}`);
  }

  await res.status(404).send("Bad request");
}
