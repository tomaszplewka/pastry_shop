export const getFeaturedItems = (data, categories) =>
  categories.map((category) => {
    return {
      category,
      item: data[category].featured_item,
    };
  });
