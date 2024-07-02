"use server";
import { getServerAuthSession } from "~/server/auth";

export async function fetcher<T>(url: string, revalidate?: number | undefined) {
  let headers = {};
  let next = {};
  // check session to set token
  const session = await getServerAuthSession();
  if (session) {
    if (session.user.accessToken) {
      headers = {
        Authorization: `bearer ${session.user.accessToken}`,
      };
    }
  } else {
    const revalidateTime = 60 * 60;
    next = {
      revalidate: revalidateTime,
    };
  }
  // if revalidateTime is specified override
  // default revalidate = 1 hour

  if (revalidate === 0) {
    next = {};
  } else if (revalidate && revalidate > 0) {
    next = {
      revalidate: revalidate,
    };
  }

  try {
    const response = await fetch(url, {
      headers: headers,
      next: next,
    });
    if (!response.ok) {
      console.log(response.statusText);
      return;
    }

    const data = (await response.json()) as T;
    return data;
  } catch (error) {
    return;
  }
}
