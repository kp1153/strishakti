"use client";

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";

// Environment variables
import { apiVersion, dataset, projectId } from "./sanity/env";

// Correct schema import
import { schema } from "./sanity/schemaTypes";

// Optional: custom structure
import { structure } from "./sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema: schema,
  plugins: [
    deskTool({
      structure: structure, // अगर custom structure नहीं है, इसे हटा दो
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
