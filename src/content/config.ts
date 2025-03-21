import {z, defineCollection} from "astro:content";
import {glob} from "astro/loaders";

const blog = defineCollection({
    loader: glob({pattern: "**/*.{md,mdx}", base: "./src/content/blog"}),
    schema: ({image}) =>
        z.object({
            title: z.string(),
            name: z.string(),
            pubDate: z.date(),
            image: image(),
            link: z.string().optional(),
            slug: z.string(),
        }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = {blog};
