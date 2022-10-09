export const regionOptions = [
  { value: 'africa', id: 'africa', name: 'Africa' },
  { value: 'americas', id: 'americas', name: 'Americas' },
  { value: 'antarctic', id: 'antarctic', name: 'Antarctic' },
  { value: 'asia', id: 'asia', name: 'Asia' },
  { value: 'europe', id: 'europe', name: 'Europe' },
  { value: 'all', id: 'all', name: 'All' },
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
