// export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.name;

export default (state) => state.contacts.items;

export const getLoading = (state) => state.contacts.loading;

export const getError = (state) => state.contacts.error;

// export const getStatusFilter = (state) => state.filters.status;
