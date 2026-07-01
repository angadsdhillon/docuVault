import type { Category, DocumentCategory, DocumentItem } from "@/types";

export const PLACEHOLDER_USER = {
  name: "Alex Morgan",
  email: "alex.morgan@example.com",
  initials: "AM",
};

export const STORAGE_USAGE = {
  usedBytes: 124 * 1024 * 1024,
  limitBytes: 500 * 1024 * 1024,
};

export const PLACEHOLDER_CATEGORIES: Category[] = [
  { slug: "receipts", label: "Receipts", iconName: "receipt", documentCount: 47 },
  { slug: "travel", label: "Travel", iconName: "plane", documentCount: 23 },
  { slug: "work", label: "Work", iconName: "briefcase", documentCount: 31 },
  { slug: "school", label: "School", iconName: "graduation-cap", documentCount: 12 },
  { slug: "contracts", label: "Contracts", iconName: "file-signature", documentCount: 8 },
  { slug: "subscriptions", label: "Subscriptions", iconName: "repeat", documentCount: 19 },
  { slug: "tickets", label: "Tickets", iconName: "ticket", documentCount: 15 },
  { slug: "medical", label: "Medical", iconName: "heart-pulse", documentCount: 6 },
  { slug: "legal", label: "Legal", iconName: "scale", documentCount: 4 },
  { slug: "insurance", label: "Insurance", iconName: "shield", documentCount: 9 },
  { slug: "tourism", label: "Tourism", iconName: "landmark", documentCount: 11 },
  { slug: "other", label: "Other", iconName: "folder-open", documentCount: 14 },
];

export const PLACEHOLDER_DOCUMENTS: DocumentItem[] = [
  {
    id: "doc-001",
    filename: "flight-itinerary-london.pdf",
    fileType: "pdf",
    category: "travel",
    summary:
      "Round-trip flight confirmation from JFK to Heathrow, departing March 14. Includes seat assignments and baggage allowance details.",
    emailSubject: "Your British Airways booking confirmation",
    sender: "British Airways",
    receivedAt: "2026-03-01T09:15:00Z",
  },
  {
    id: "doc-002",
    filename: "hotel-receipt-marriott.pdf",
    fileType: "pdf",
    category: "receipts",
    summary:
      "Hotel stay receipt for 3 nights at Marriott Downtown. Total charge $847.50 including taxes and resort fee.",
    emailSubject: "Receipt for your stay at Marriott Downtown",
    sender: "Marriott Hotels",
    receivedAt: "2026-02-28T14:30:00Z",
  },
  {
    id: "doc-003",
    filename: "q1-expense-report.xlsx",
    fileType: "spreadsheet",
    category: "work",
    summary:
      "Quarterly expense report covering client meetings, travel, and software subscriptions. Submitted for manager approval.",
    emailSubject: "Q1 2026 Expense Report — Please Review",
    sender: "Finance Team",
    receivedAt: "2026-02-27T11:00:00Z",
  },
  {
    id: "doc-004",
    filename: "netflix-invoice-feb.pdf",
    fileType: "pdf",
    category: "subscriptions",
    summary:
      "Monthly Netflix Premium subscription invoice for February 2026. Payment of $22.99 processed successfully.",
    emailSubject: "Your Netflix payment receipt",
    sender: "Netflix",
    receivedAt: "2026-02-26T08:45:00Z",
  },
  {
    id: "doc-005",
    filename: "concert-tickets-coachella.pdf",
    fileType: "pdf",
    category: "tickets",
    summary:
      "Two general admission passes for Coachella Weekend 1. QR codes included for entry at the festival gate.",
    emailSubject: "Your Coachella 2026 tickets are ready!",
    sender: "Ticketmaster",
    receivedAt: "2026-02-25T16:20:00Z",
  },
  {
    id: "doc-006",
    filename: "lab-results-bloodwork.pdf",
    fileType: "pdf",
    category: "medical",
    summary:
      "Annual blood work results from City Medical Lab. All values within normal range except slightly elevated cholesterol.",
    emailSubject: "Your lab results are available",
    sender: "City Medical Lab",
    receivedAt: "2026-02-24T10:10:00Z",
  },
  {
    id: "doc-007",
    filename: "lease-agreement-2026.docx",
    fileType: "document",
    category: "contracts",
    summary:
      "12-month residential lease agreement for 42 Oak Street, Unit 3B. Rent $2,400/month, starting April 1, 2026.",
    emailSubject: "Signed lease agreement — 42 Oak Street",
    sender: "Oak Street Properties",
    receivedAt: "2026-02-23T13:55:00Z",
  },
  {
    id: "doc-008",
    filename: "passport-scan.jpg",
    fileType: "image",
    category: "travel",
    summary:
      "Scanned copy of passport photo page sent for visa application. Expiration date December 2031.",
    emailSubject: "Passport copy for visa application",
    sender: "Alex Morgan",
    receivedAt: "2026-02-22T09:30:00Z",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return PLACEHOLDER_CATEGORIES.find((c) => c.slug === slug);
}

export function getDocumentsByCategory(slug: DocumentCategory): DocumentItem[] {
  return PLACEHOLDER_DOCUMENTS.filter((doc) => doc.category === slug);
}

export function getDocumentById(id: string): DocumentItem | undefined {
  return PLACEHOLDER_DOCUMENTS.find((doc) => doc.id === id);
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) {
    return `${Math.round(bytes / 1024)} KB`;
  }
  return `${Math.round(bytes / (1024 * 1024))} MB`;
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}
