import {z, defineCollection} from "astro:content";
import {glob} from "astro/loaders";

const blog = defineCollection({
    loader: glob({pattern: "**/*.{md,mdx}", base: "./src/content/blog"}),
    schema: z.object({
        title: z.string(),
        name: z.string(),
        pubDate: z.string(),
        image: z.string(),
        link: z.string().optional(),
        slug: z.string(),
    }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = {blog};
