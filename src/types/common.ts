// Common type definitions that are used across multiple components

export type Theme = {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  error: string;
  info: string;
};

export type Status = "todo" | "in_progress" | "completed";
export type Priority = "low" | "medium" | "high";
export type ActivityType =
  | "create"
  | "update"
  | "delete"
  | "comment"
  | "status_change"
  | "assign";

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

export type DateRange = {
  startDate: Date;
  endDate: Date;
};

export type FilterOptions = {
  status?: Status[];
  priority?: Priority[];
  assignedTo?: string[];
  tags?: string[];
  dateRange?: DateRange;
};

export type SortOptions = {
  field: string;
  order: "asc" | "desc";
};

export type PaginationOptions = {
  page: number;
  limit: number;
  total?: number;
};

export type ResponseMetadata = {
  pagination?: PaginationOptions;
  sort?: SortOptions;
  filter?: FilterOptions;
};

export type FormField = {
  id: string;
  label: string;
  type: string;
  value: string;
  required?: boolean;
  options?: string[];
  error?: string;
};
