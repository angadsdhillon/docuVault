export type DocumentCategory =
  | "receipts"
  | "travel"
  | "work"
  | "school"
  | "contracts"
  | "subscriptions"
  | "tickets"
  | "medical"
  | "legal"
  | "insurance"
  | "tourism"
  | "other";

export type FileType = "pdf" | "spreadsheet" | "document" | "image";

export type Category = {
  slug: DocumentCategory;
  label: string;
  iconName: string;
  documentCount: number;
};

export type DocumentItem = {
  id: string;
  filename: string;
  fileType: FileType;
  category: DocumentCategory;
  summary: string;
  emailSubject: string;
  sender: string;
  receivedAt: string;
};
