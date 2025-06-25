import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/contents/blog" }),
    schema: z.object({
        title: z.string(),
        desc: z.string().optional(),
        author: reference("authors"),
        relatedPosts: z.array(reference("blog")).optional(),
        prevPost: reference("blog").optional(),
        nextPost: reference("blog").optional(),
        pubDate: z.date(),
        updatedDate: z.date(),
        tags: z.array(z.string()),
        categories: z.array(
            z.object({
                name: z.string(), // Parent category (required)
                subcategories: z.array(z.string()).optional(), // Sub cate (optional)
            })
        ),
    }),
});

const authors = defineCollection({
    loader: glob({ pattern: "**/[^_]*.json", base: "./src/contents/authors" }),
    schema: z.object({
        name: z.string(),
        sourceURL: z.string().optional(),
        isCurrentSite: z.boolean(),
    }),
});

// Collection cho các khóa học (chỉ lấy index.md)
const courses = defineCollection({
    loader: glob({ pattern: "**/index.md", base: "./src/contents/courses" }),
    schema: z.object({
        title: z.string(),
        desc: z.string().optional(),
        author: reference("authors"), // Giả sử bạn có collection authors
        pubDate: z.date(),
        updatedDate: z.date().optional(),
        level: z.enum(["beginner", "intermediate", "advanced"]).default("beginner"),
        whatIsYouWillLearn: z.array(z.string()).optional(),
        requirement: z.array(z.string()).optional(),
    }),
});

// Collection cho các bài học (lấy các file lesson_*.md)
const lessons = defineCollection({
    loader: glob({ pattern: "**/lesson_*.md", base: "./src/contents/courses" }),
    schema: z.object({
        course: reference("courses"), // Tham chiếu đến khóa học
        module: z.string(), // Tên module, ví dụ: "module_1_understand_git"
        title: z.string(),
        order: z.number(), // Thứ tự bài học trong module
        pubDate: z.date(),
        updatedDate: z.date().optional(),
    }),
});


export const collections = { blog, authors, courses, lessons };
