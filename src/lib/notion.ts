import { Client } from "@notionhq/client";
const { NotionToMarkdown } = require("notion-to-md");

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

//////////////////
//////POST///////
////////////////

// Function to parse date
function getToday(datestring: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date();

  if (datestring) {
    date = new Date(datestring);
  }

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let today = `${month} ${day}, ${year}`;

  return today;
}

// Function to get metadata parsed for POST
const getPageMetaData = (post: any) => {
  const getTags = (tags: any[]) => {
    const allTags = tags.map((tag) => {
      return tag.name;
    });

    return allTags;
  };

  return {
    id: post.id,
    title: post.properties.name.title[0].plain_text,
    tags: getTags(post.properties.tags.multi_select),
    description: post.properties.description.rich_text[0].plain_text,
    date: getToday(post.properties.created.last_edited_time),
    slug: post.properties.slug.rich_text[0].plain_text,
    thumbnail: post.properties?.thumbnail.url || "",
  };
};

// Function to fetch and get all the POST
export const getAllPublished = async (limit?: number) => {
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || "",
    filter: {
      property: "active",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "published",
        direction: "descending",
      },
    ],
  });

  const allPosts = limit ? posts.results.slice(0, limit) : posts.results;

  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
};

// Function to fetch single POST
export const getSinglePost = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || "",
    filter: {
      property: "slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const page = response.results[0];
  const metadata = getPageMetaData(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);

  return {
    metadata,
    markdown: mdString,
  };
};

//Function to get the POST IS by an slug
export const fetchNotionPageIdForBlogPost = async (slug: string) => {
  const post = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || "",
    filter: {
      and: [
        {
          property: "active",
          checkbox: {
            equals: true,
          },
        },
        { property: "slug", rich_text: { equals: slug } },
      ],
    },
  });

  const allPosts = post.results;

  if (allPosts.length > 0) {
    return allPosts[0].id;
  }
  return undefined;
};

//////////////////
/////PROJECT/////
////////////////

// Function to get metadata parsed for PROJECT
const getProjectMetaData = (project: any, card: boolean) => {
  const getTags = (tags: any[]) => {
    const allTags = tags.map((tag) => {
      return tag.name;
    });

    return allTags;
  };

  if (card) {
    return {
      id: project.id,
      title: project.properties.name.title[0].plain_text,
      image: project.properties?.image.url || "",
      slug: project.properties.slug.rich_text[0].plain_text,
      description: project.properties.description.rich_text[0].plain_text,
    };
  }

  if (project !== undefined) {
    return {
      id: project.id,
      title: project.properties.name.title[0].plain_text,
      image: project.properties?.image.url || "",
      github: project.properties?.github.url || "",
      demo: project.properties?.demo.url || "",
      frontend: getTags(project.properties.frontend.multi_select),
      backend: getTags(project.properties.backend.multi_select),
      deploy: getTags(project.properties.deploy.multi_select),
      slug: project.properties.slug.rich_text[0].plain_text,
      description: project.properties.description.rich_text[0].plain_text,
    };
  }
};

// Function to fetch and get all the PROJECTS
export const getAllProjects = async (limit?: number) => {
  const projects = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID_PROJECTS || "",
    filter: {
      property: "active",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "order",
        direction: "ascending",
      },
    ],
  });

  const allProjects = limit
    ? projects.results.slice(0, limit)
    : projects.results;

  return allProjects.map((project) => {
    return getProjectMetaData(project, true);
  });
};

// Function to fetch single PROJECT
export const getSingleProject = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID_PROJECTS || "",
    filter: {
      and: [
        {
          property: "active",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "slug",
          formula: {
            string: {
              equals: slug,
            },
          },
        },
      ],
    },
  });

  const page = response.results[0];
  const metadata = getProjectMetaData(page, false);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);

  return {
    metadata,
    markdown: mdString,
  };
};

//Function to get the POST IS by an slug
export const fetchSingleProjectBySlug = async (slug: string) => {
  const post = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID_PROJECTS || "",
    filter: {
      and: [
        {
          property: "active",
          checkbox: {
            equals: true,
          },
        },
        {
          property: "slug",
          formula: {
            string: {
              equals: slug,
            },
          },
        },
      ],
    },
  });

  const allPosts = post.results;

  if (allPosts.length > 0) {
    return allPosts[0].id;
  }
  return undefined;
};
