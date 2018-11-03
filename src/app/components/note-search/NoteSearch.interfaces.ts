export interface INoteSearchProps {
  query: string;
  isValid: boolean;
  updateQuery: (query: string) => void;
  doSearch: () => void;
  clearSearch: () => void;
}
