const sortByField = (items, field) => {
    return items.sort((a, b) =>
        a[field] > b[field] ? 1 : b[field] > a[field] ? -1 : 0
    );
};

export { sortByField };
