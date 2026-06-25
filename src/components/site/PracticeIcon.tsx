import {
  ClipboardCheck,
  Scale,
  FileText,
  Building2,
  Users,
  Calculator,
  TrendingUp,
  Rocket,
  Shield,
  Search,
  Settings,
  BarChart3,
  HelpCircle
} from "lucide-react";

export function PracticeIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "audit-assurance":
      return <ClipboardCheck className={className} />;
    case "tax-litigation":
      return <Scale className={className} />;
    case "gst-compliance":
      return <FileText className={className} />;
    case "business-setup":
      return <Building2 className={className} />;
    case "mca-compliance":
      return <Users className={className} />;
    case "bookkeeping-accounting":
      return <Calculator className={className} />;
    case "project-finance":
      return <TrendingUp className={className} />;
    case "startup-advisory":
      return <Rocket className={className} />;
    case "virtual-cfo":
      return <Shield className={className} />;
    case "due-diligence":
      return <Search className={className} />;
    case "management-audit":
      return <Settings className={className} />;
    case "data-analytics":
      return <BarChart3 className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
}
