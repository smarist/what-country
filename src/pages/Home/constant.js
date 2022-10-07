export const regionOptions = [
  { value: 'africa', id: 'africa', name: 'africa' },
  { value: 'americas', id: 'americas', name: 'americas' },
  { value: 'antarctic', id: 'antarctic', name: 'antarctic' },
  { value: 'asia', id: 'asia', name: 'asia' },
  { value: 'europe', id: 'europe', name: 'europe' },
];

export const orderTableColumns = [
  'invoiceNumber',
  'status',
  'dueDate',
  'customerName',
  'balance',
  'totalAmount',
  'customerEmail',
];

export const invoicesInitialState = {
  searchValue: '',
  startDate: null,
  endDate: null,
  isGettingInvoices: false,
  ordersToday: 0,
  selectedStatus: undefined,
  selectedTab: 0,
  totalCount: 0,
  paginate: {},
  position: 0,
  invoicesMeta: {},
};
