import React, { createContext, useContext, useState, useEffect } from "react";
import { CareInquiryRecord } from "../types";

interface NotificationContextType {
  inquiries: CareInquiryRecord[];
  unreadInquiriesCount: number;
  addInquiry: (inquiry: Omit<CareInquiryRecord, "id" | "timestamp" | "dateFormatted" | "status">) => void;
  updateInquiryStatus: (id: string, status: "new" | "contacted" | "completed") => void;
  deleteInquiry: (id: string) => void;
  isAdminInboxOpen: boolean;
  setIsAdminInboxOpen: (open: boolean) => void;
  isNotificationModalOpen: boolean;
  setIsNotificationModalOpen: (open: boolean) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [inquiries, setInquiries] = useState<CareInquiryRecord[]>([]);
  const [isAdminInboxOpen, setIsAdminInboxOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("bin_abbas_hc_inquiries");
      if (saved) {
        setInquiries(JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Could not load inquiries:", e);
    }
  }, []);

  const saveInquiries = (updated: CareInquiryRecord[]) => {
    setInquiries(updated);
    try {
      localStorage.setItem("bin_abbas_hc_inquiries", JSON.stringify(updated));
    } catch (e) {
      console.warn("Could not save inquiries:", e);
    }
  };

  const addInquiry = (data: Omit<CareInquiryRecord, "id" | "timestamp" | "dateFormatted" | "status">) => {
    const newRecord: CareInquiryRecord = {
      ...data,
      id: `inq-${Date.now()}`,
      timestamp: Date.now(),
      dateFormatted: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit"
      }),
      status: "new"
    };

    const updated = [newRecord, ...inquiries];
    saveInquiries(updated);
  };

  const updateInquiryStatus = (id: string, status: "new" | "contacted" | "completed") => {
    const updated = inquiries.map((inq) => (inq.id === id ? { ...inq, status } : inq));
    saveInquiries(updated);
  };

  const deleteInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    saveInquiries(updated);
  };

  const unreadInquiriesCount = inquiries.filter((inq) => inq.status === "new").length;

  return (
    <NotificationContext.Provider
      value={{
        inquiries,
        unreadInquiriesCount,
        addInquiry,
        updateInquiryStatus,
        deleteInquiry,
        isAdminInboxOpen,
        setIsAdminInboxOpen,
        isNotificationModalOpen,
        setIsNotificationModalOpen
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) throw new Error("useNotifications must be used within NotificationProvider");
  return context;
}
