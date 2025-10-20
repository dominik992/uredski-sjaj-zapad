import { useEffect } from "react";
import type {
  DefaultError,
  Mutation,
  MutationKey,
  Query,
  QueryKey,
  QueryClient,
} from "@tanstack/react-query";

type DataLayerEvent = Record<string, unknown>;

function pushToDataLayer(event: DataLayerEvent): void {
  if (typeof window === "undefined") return;
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push(event);
}

function getKeyString(key: QueryKey | MutationKey | undefined): string {
  try {
    return key ? JSON.stringify(key) : "[]";
  } catch {
    return "[]";
  }
}

export function useGtmReactQuery(queryClient: QueryClient): void {
  useEffect(() => {
    if (!queryClient) return;

    const unsubscribeQuery = queryClient.getQueryCache().subscribe((action) => {
      const { type, query } = action as { type: string; query?: Query };
      if (!query) return;

      const key = getKeyString(query.queryKey);
      const base = {
        query_key: key,
        query_hash: query.queryHash,
        status: query.state.status,
      };

      switch (type) {
        case "added":
          pushToDataLayer({ event: "rq_query_added", ...base });
          break;
        case "removed":
          pushToDataLayer({ event: "rq_query_removed", ...base });
          break;
        case "updated": {
          // Detect success/error transitions
          const last = (action as any).action?.type as string | undefined;
          if (last === "success") {
            pushToDataLayer({ event: "rq_query_success", ...base });
          } else if (last === "error") {
            pushToDataLayer({ event: "rq_query_error", ...base });
          } else {
            pushToDataLayer({ event: "rq_query_updated", ...base });
          }
          break;
        }
      }
    });

    const unsubscribeMutation = queryClient
      .getMutationCache()
      .subscribe((mutationAction) => {
        const { type, mutation } = mutationAction as {
          type: string;
          mutation?: Mutation<unknown, DefaultError, unknown, unknown>;
        };
        if (!mutation) return;

        const key = getKeyString(mutation.options?.mutationKey);
        const base = {
          mutation_key: key,
          options_present: Boolean(mutation.options),
        };

        switch (type) {
          case "added":
            pushToDataLayer({ event: "rq_mutation_added", ...base });
            break;
          case "removed":
            pushToDataLayer({ event: "rq_mutation_removed", ...base });
            break;
          case "updated": {
            const last = (mutationAction as any).action?.type as string | undefined;
            if (last === "success") {
              pushToDataLayer({ event: "rq_mutation_success", ...base });
            } else if (last === "error") {
              pushToDataLayer({ event: "rq_mutation_error", ...base });
            } else {
              pushToDataLayer({ event: "rq_mutation_updated", ...base });
            }
            break;
          }
        }
      });

    return () => {
      unsubscribeQuery?.();
      unsubscribeMutation?.();
    };
  }, [queryClient]);
}


