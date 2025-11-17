import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

// Initialize Storyblok
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN, // फ्रंटएंड के लिए NEXT_PUBLIC_ prefix
  use: [apiPlugin],
});

/**
 * Fetch a single story from Storyblok
 */
export async function fetchStoryblokStories(slug) {
  try {
    const response = await fetch(
      `https://api.storyblok.com/v2/cdn/stories/${slug}?version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_STORYBLOK_TOKEN}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) return null;

    const { story } = await response.json().then((res) => res.data);
    return story;
  } catch (error) {
    console.error(`Error fetching story ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch a list of stories from Storyblok
 */
export async function fetchStoryblokList(starts_with) {
  try {
    const response = await fetch(
      `https://api.storyblok.com/v2/cdn/stories?starts_with=${starts_with}&version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.NEXT_PUBLIC_STORYBLOK_TOKEN}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) return { stories: [] };

    const { stories } = await response.json().then((res) => res.data);
    return { stories };
  } catch (error) {
    console.error(`Error fetching stories from ${starts_with}:`, error);
    return { stories: [] };
  }
}

/**
 * Generate static params for dynamic routes
 */
export async function generateStoryblokParams(starts_with) {
  try {
    const data = await fetchStoryblokList(starts_with);
    return data.stories.map((story) => ({ slug: story.slug }));
  } catch (error) {
    console.error(`Error generating params for ${starts_with}:`, error);
    return [];
  }
}
