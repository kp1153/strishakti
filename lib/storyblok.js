import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

// Initialize Storyblok
storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
});

/**
 * Fetch a single story from Storyblok
 * @param {string} slug - Story slug (e.g., "work/bachpan-ko-jeene-do")
 * @returns {Promise<Object|null>} Story data or null if not found
 */
export async function fetchStoryblokStories(slug) {
  try {
    const response = await fetch(
      `https://api.storyblok.com/v2/cdn/stories/${slug}?version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.STORYBLOK_ACCESS_TOKEN}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      return null;
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching story ${slug}:`, error);
    return null;
  }
}

/**
 * Fetch a list of stories from Storyblok
 * @param {string} starts_with - Folder path (e.g., "work", "impact", "media")
 * @returns {Promise<Object>} Stories data
 */
export async function fetchStoryblokList(starts_with) {
  try {
    const response = await fetch(
      `https://api.storyblok.com/v2/cdn/stories?starts_with=${starts_with}&version=${process.env.NEXT_PUBLIC_STORYBLOK_VERSION}&token=${process.env.STORYBLOK_ACCESS_TOKEN}`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      return { stories: [] };
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching stories from ${starts_with}:`, error);
    return { stories: [] };
  }
}

/**
 * Generate static params for dynamic routes
 * @param {string} starts_with - Folder path
 * @returns {Promise<Array>} Array of params objects
 */
export async function generateStoryblokParams(starts_with) {
  try {
    const data = await fetchStoryblokList(starts_with);

    return data.stories.map((story) => ({
      slug: story.slug,
    }));
  } catch (error) {
    console.error(`Error generating params for ${starts_with}:`, error);
    return [];
  }
}
