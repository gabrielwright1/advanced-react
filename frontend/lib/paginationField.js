import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  // ** Boilerplate for cache invalidation
  return {
    keyArgs: false, // tell apollo that we will take care of everything
    read(existing = [], { args, cache }) {
      const { skip, first } = args;

      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);
      const items = existing.slice(skip, skip + first).filter((x) => x);

      if (items.length && items.length !== first && page === pages) {
        return items; // grab items from cache
      }
      if (items.length !== first) {
        return false; // grab items from network
      }
      if (items.length) {
        return items; // grab items from cache
      }

      return false; // fallback to network
    },
    merge(existing, incoming, { args }) {
      const { skip } = args;
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      return merged; // grab items from network
    },
  };
}
