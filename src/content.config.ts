import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/blog" }),
    schema: z.object({
        title: z.string(),
        desc: z.string().optional(),
        author: reference("authors"),
        relatedPosts: z.array(reference("blog")).optional(),
        pubDate: z.date(),
        updatedDate: z.date(),
        tags: z.array(z.string()),
        categories: z.array(
            z.object({
                name: z.string(), // Main category (required)
                subcategories: z.array(z.string()).optional(), // Sub cate (optional)
            })
        ),
    }),
});

const authors = defineCollection({
    loader: glob({ pattern: "**/[^_]*.json", base: "./src/data/authors" }),
    schema: z.object({
        name: z.string(),
        sourceURL: z.string().optional(),
        isCurrentSite: z.boolean(),
    }),
});

export const collections = { blog, authors };
