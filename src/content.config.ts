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

export const collections = { blog, authors };
