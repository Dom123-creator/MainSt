/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as articles from "../articles.js";
import type * as auth from "../auth.js";
import type * as categories from "../categories.js";
import type * as chimoney from "../chimoney.js";
import type * as http from "../http.js";
import type * as payments from "../payments.js";
import type * as reviewsAndSubscriptions from "../reviewsAndSubscriptions.js";
import type * as router from "../router.js";
import type * as seedData from "../seedData.js";
import type * as stripe from "../stripe.js";
import type * as subscribers from "../subscribers.js";
import type * as subscribersManagement from "../subscribersManagement.js";
import type * as userDataManagement from "../userDataManagement.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  articles: typeof articles;
  auth: typeof auth;
  categories: typeof categories;
  chimoney: typeof chimoney;
  http: typeof http;
  payments: typeof payments;
  reviewsAndSubscriptions: typeof reviewsAndSubscriptions;
  router: typeof router;
  seedData: typeof seedData;
  stripe: typeof stripe;
  subscribers: typeof subscribers;
  subscribersManagement: typeof subscribersManagement;
  userDataManagement: typeof userDataManagement;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
