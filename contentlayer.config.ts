import {defineDocumentType, makeSource} from "contentlayer/source-files"

// TYPES
const Account = defineDocumentType(() => ({
  name: "Account",
  filePathPattern: "accounts/*.md",
  fields: {
    id: {
      type: "string", required: true,
    },

    username: {
      type: "string", required: true,
    },

    role: {
      type: "enum", required: true,
      options: ["mentor", "student"],
    },

    fullname: {
      type: "string", required: true,
    },

    title: {
      type: "string", required: true,
    },

    contacts: {
      type: "json", required: true,
    },

    birthDate: {
      type: "date", required: false,
    },

    maritalStatus: {
      type: "string", required: false,
    },

    stats: {
      type: "json", required: false,
    },

    skills: {
      type: "json", required: false,
    },

    programs: {
      type: "json", required: false,
    },

    education: {
      type: "json", required: false,
    },

    interests: {
      type: "json", required: false,
    },

    languages: {
      type: "json", required: false,
    },

    studentsProjects: {
      type: "json", required: false,
    },

    avatarUrl: {
      type: "string", required: false,
    },

    avatarUrl2: {
      type: "string", required: false,
    },

    createdAt: {
      type: "date", required: true,
    },

    editedAt: {
      type: "date", required: true,
    },

    bonus: {
      type: "number", required: true,
    }
  },

  computedFields: {
    url: {
      type: "string",
      resolve: (page) => `/${page._raw.flattenedPath}`,
    },
  },
}))

const Testimonial = defineDocumentType(() => ({
  name: "Testimonial",
  filePathPattern: "testimonials/to-accounts/*.md",
  fields: {
    id: {
      type: "string", required: true,
    },

    fromAccountId: {
      type: "string", required: true,
    },

    toAccountId: {
      type: "string", required: true,
    },

    createdAt: {
      type: "date", required: true,
    },
  },
}))

const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string", required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (page) => `/${page._raw.flattenedPath}`,
    },
  },
}))

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string", required: true,
    },
    intro: {
      type: "markdown", required: true,
    },
    createdAt: {
      type: "date", required: true,
    },
    editedAt: {
      type: "date", required: false,
    },
    tags: {
      type: "list",
      of: {type: "string"},
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}))

// SOURCE
export default makeSource({
  contentDirPath: "content",
  documentTypes: [Account, Testimonial, Page, Post],
})
