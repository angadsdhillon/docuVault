import {
  Briefcase,
  FileSignature,
  FileSpreadsheet,
  FileText,
  FolderOpen,
  GraduationCap,
  HeartPulse,
  Image,
  Landmark,
  Plane,
  Receipt,
  Repeat,
  Scale,
  Shield,
  Ticket,
  type LucideIcon,
} from "lucide-react";
import type { FileType } from "@/types";

const categoryIcons: Record<string, LucideIcon> = {
  receipt: Receipt,
  plane: Plane,
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  "file-signature": FileSignature,
  repeat: Repeat,
  ticket: Ticket,
  "heart-pulse": HeartPulse,
  scale: Scale,
  shield: Shield,
  landmark: Landmark,
  "folder-open": FolderOpen,
};

const fileTypeIcons: Record<FileType, LucideIcon> = {
  pdf: FileText,
  spreadsheet: FileSpreadsheet,
  document: FileText,
  image: Image,
};

export function getCategoryIcon(iconName: string): LucideIcon {
  return categoryIcons[iconName] ?? FolderOpen;
}

export function getFileTypeIcon(fileType: FileType): LucideIcon {
  return fileTypeIcons[fileType] ?? FileText;
}
