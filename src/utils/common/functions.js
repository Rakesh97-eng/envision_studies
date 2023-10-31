export const commonSearchFilter = (data, searchQuery) =>
  data.filter((item) =>
    Object.values(item).some((value) =>
      value?.toString()?.toLowerCase()?.includes(searchQuery.toLowerCase())
    )
  );