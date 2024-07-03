import type { Endpoints } from "@octokit/types";
import { z } from "zod";

// Endpoints

export type RatesType = Endpoints["GET /rate_limit"]["response"]["data"];
export type SearchReposType =
  Endpoints["GET /search/repositories"]["response"]["data"];
export type SearchOneReposType =
  Endpoints["GET /search/repositories"]["response"]["data"]["items"][0];
export type SearchUsersType =
  Endpoints["GET /search/users"]["response"]["data"];
export type OneUsersType =
  Endpoints["GET /search/users"]["response"]["data"]["items"][0];
export type GetUserType =
  Endpoints["GET /users/{username}"]["response"]["data"];
export type GetRepoType =
  Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];
export type GetRepoReadmeType =
  Endpoints["GET /repos/{owner}/{repo}/readme"]["response"]["data"];
export type GetRepoOnwerType =
  Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"]["owner"];
export type getUserReposType =
  Endpoints["GET /users/{username}/repos"]["response"]["data"];
export type getOneUserRepoType =
  Endpoints["GET /users/{username}/repos"]["response"]["data"][0];
export type GetBranchesType =
  Endpoints["GET /repos/{owner}/{repo}/branches"]["response"]["data"];
export type GetOneBrancheType =
  Endpoints["GET /repos/{owner}/{repo}/branches"]["response"]["data"][0];
export type GetReleasesType =
  Endpoints["GET /repos/{owner}/{repo}/releases"]["response"]["data"];
export type GetOneReleasesType =
  Endpoints["GET /repos/{owner}/{repo}/releases"]["response"]["data"][0];
export type GetCommitsType =
  Endpoints["GET /repos/{owner}/{repo}/commits"]["response"]["data"];
export type GetOneCommitType =
  Endpoints["GET /repos/{owner}/{repo}/commits"]["response"]["data"][0];
export type GetIssuesType =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"];
export type GetOneIssueType =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"][0];

// Props

interface SearchParamType {
  params: {
    repos: string[];
  };
}
interface GetUserParamsType {
  params: {
    users: string[];
  };
}
interface SearchSearchParamsType {
  searchParams: {
    sort?: string;
    order?: string;
    per_page?: number;
    page?: number;
  };
}
export type GetSearchProps = SearchParamType & SearchSearchParamsType;
export type GetUsersProps = GetUserParamsType & SearchSearchParamsType;
export type GetOneUserProps = GetUserParamsType;
export type GetRepoProps = SearchParamType;

export interface SearchProps {
  q: string;
  sort?: string;
  order?: string;
  per_page?: number;
  page?: number;
}

// Schemas

export const GetSearchSchema = z.object({
  q: z.string(),
  sort: z.string().optional(),
  order: z.string().optional(),
  per_page: z.number().optional(),
  page: z.number().optional(),
});
export const GetBranchesSchema = z.object({ url: z.string() });
export const GetReleasesSchema = z.object({ url: z.string() });
export const GetUserSchema = z.object({ username: z.string() });
export const GetRepoSchema = z.object({ repo: z.string() });

export const CreateNotesSchema = z.object({
  content: z.string().min(3),
  repoId: z.string().optional(),
  repoName: z.string().optional(),
  title: z.string().min(3),
});

export const UpdateNotesSchema = z.object({
  content: z.string().min(3),
  repoId: z.string().min(3),
  title: z.string().min(3),
  id: z.string().min(3),
});
export const GetNotesSchema = z.object({
  repoId: z.string().optional(),
  title: z.string().optional(),
});

export type ErrorType = {
  error: string;
};
