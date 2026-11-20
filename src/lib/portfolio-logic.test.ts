import test from "node:test";
import assert from "node:assert/strict";
import { personalInfo } from "../content/profile";
import {
  filterProjectsByCategory,
  getHomeFeaturedProjects,
  getProjectBySlug,
  getNextProject,
  filterArticlesByCategory,
  getArticleBySlug,
  getRelatedArticles,
  validateContactForm,
} from "./portfolio-logic";

test("catalog contains all 9 verified LadeStack projects and 4 home featured projects", () => {
  assert.equal(personalInfo.projects.length, 9);
  const homeFeatured = getHomeFeaturedProjects(personalInfo.projects);
  assert.equal(homeFeatured.length, 4);
  assert.deepEqual(
    homeFeatured.map((p) => p.slug),
    ["gb-coder", "ls-pdf", "md2pdf", "bharat-land-converter"]
  );
});

test("filterProjectsByCategory filters accurately and returns all for ALL", () => {
  const all = filterProjectsByCategory(personalInfo.projects, "ALL");
  assert.equal(all.length, 9);

  const devTools = filterProjectsByCategory(personalInfo.projects, "DEVELOPER TOOLS");
  assert.ok(devTools.some((p) => p.slug === "gb-coder"));
  assert.ok(devTools.some((p) => p.slug === "ladestack"));

  const games = filterProjectsByCategory(personalInfo.projects, "GAMES");
  assert.equal(games.length, 1);
  assert.equal(games[0].slug, "gamehub");

  const measurement = filterProjectsByCategory(personalInfo.projects, "MEASUREMENT");
  assert.equal(measurement.length, 1);
  assert.equal(measurement[0].slug, "bharat-land-converter");
});

test("getProjectBySlug and getNextProject handle normal and wrap-around navigation", () => {
  const gbCoder = getProjectBySlug(personalInfo.projects, "gb-coder");
  assert.equal(gbCoder?.name, "GB Coder");
  assert.equal(getProjectBySlug(personalInfo.projects, "does-not-exist"), undefined);

  const nextAfterFirst = getNextProject(personalInfo.projects, personalInfo.projects[0].slug);
  assert.equal(nextAfterFirst?.slug, personalInfo.projects[1].slug);

  const lastSlug = personalInfo.projects[personalInfo.projects.length - 1].slug;
  const wrappedNext = getNextProject(personalInfo.projects, lastSlug);
  assert.equal(wrappedNext?.slug, personalInfo.projects[0].slug);
});

test("blog filtering and related articles exclude current slug and respect limit", () => {
  assert.equal(personalInfo.articles.length, 8);
  const arch = filterArticlesByCategory(personalInfo.articles, "ARCHITECTURE");
  assert.equal(arch.length, 2);

  const firstSlug = personalInfo.articles[0].slug;
  const found = getArticleBySlug(personalInfo.articles, firstSlug);
  assert.equal(found?.slug, firstSlug);

  const related = getRelatedArticles(personalInfo.articles, firstSlug, 3);
  assert.equal(related.length, 3);
  assert.ok(related.every((a) => a.slug !== firstSlug));
});

test("validateContactForm rejects empty or invalid fields and accepts valid submissions", () => {
  const emptyResult = validateContactForm({ name: "", email: "", message: "" });
  assert.equal(emptyResult.valid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.message);

  const badEmail = validateContactForm({
    name: "Girish",
    email: "not-an-email",
    message: "We need a client-side PDF toolkit built in React.",
  });
  assert.equal(badEmail.valid, false);
  assert.ok(badEmail.errors.email);
  assert.equal(badEmail.errors.name, undefined);

  const validResult = validateContactForm({
    name: "Aarav Mehta",
    email: "aarav@example.com",
    message: "Looking to commission a Swiss editorial portfolio and design system.",
  });
  assert.equal(validResult.valid, true);
  assert.deepEqual(validResult.errors, {});
  assert.equal(validResult.data?.name, "Aarav Mehta");
});
