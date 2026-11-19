import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

export default function ConfirmDialog({
  isOpen,
  title = "Confirm Deletion",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
  confirmText = "Delete",
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-charcoal-900 border border-red-500/30 rounded-2xl max-w-md w-full p-6 shadow-2xl relative space-y-4">
        <button
          onClick={onCancel}
          className="absolute top-4 right-4 text-warm-400 hover:text-warm-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center">
          <AlertTriangle className="w-6 h-6" />
        </div>

        <div>
          <h3 className="text-lg font-serif font-bold text-warm-50">{title}</h3>
          <p className="text-xs text-warm-300 mt-1 leading-relaxed">{message}</p>
        </div>

        <div className="pt-2 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-xs font-semibold uppercase text-warm-200 transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-semibold uppercase text-white transition shadow-lg shadow-red-950/50"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
