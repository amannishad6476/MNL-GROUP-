import React, { useState } from 'react';
import { Upload, Image as ImageIcon, Link as LinkIcon, X, Video } from 'lucide-react';

export default function ImageUploadField({
  label = "Upload Image / Media",
  value = "",
  onChange,
  accept = "image/*,video/*",
  helpText = "Supports JPEG, PNG, WEBP, or MP4 formats."
}) {
  const [tab, setTab] = useState('upload'); // 'upload' or 'url'
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-xs uppercase tracking-wider text-warm-300 font-semibold">
          {label}
        </label>
        <div className="flex items-center gap-1 bg-charcoal-900 p-0.5 rounded-lg border border-charcoal-800 text-[11px]">
          <button
            type="button"
            onClick={() => setTab('upload')}
            className={`px-2.5 py-1 rounded-md transition ${tab === 'upload' ? 'bg-gold-500 text-charcoal-950 font-bold' : 'text-warm-400 hover:text-warm-200'}`}
          >
            File Upload
          </button>
          <button
            type="button"
            onClick={() => setTab('url')}
            className={`px-2.5 py-1 rounded-md transition ${tab === 'url' ? 'bg-gold-500 text-charcoal-950 font-bold' : 'text-warm-400 hover:text-warm-200'}`}
          >
            Direct URL
          </button>
        </div>
      </div>

      {tab === 'upload' ? (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-xl p-5 text-center transition ${
            dragActive
              ? 'border-gold-400 bg-gold-500/10'
              : 'border-charcoal-700 bg-charcoal-850 hover:border-gold-500/50'
          }`}
        >
          <input
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-gold-500/10 text-gold-400 flex items-center justify-center">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-warm-100">
                Click to browse or drag & drop media file
              </p>
              <p className="text-[11px] text-warm-400 mt-0.5">{helpText}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <LinkIcon className="w-4 h-4 text-warm-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="url"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Paste image URL (e.g. https://images.unsplash.com/...)"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-charcoal-850 border border-charcoal-700 focus:border-gold-500 focus:outline-none text-warm-100 text-xs transition"
          />
        </div>
      )}

      {/* Live Preview if value exists */}
      {value && (
        <div className="relative mt-2 p-2 rounded-xl bg-charcoal-900 border border-charcoal-800 flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-12 h-12 rounded-lg overflow-hidden border border-gold-500/30 shrink-0 bg-charcoal-950">
              <img src={value} alt="Preview" className="w-full h-full object-cover" />
            </div>
            <div className="truncate text-xs text-warm-300">
              <span className="font-semibold text-gold-400 block">Media Selected</span>
              <span className="truncate block text-[11px] text-warm-400 max-w-xs">{value.slice(0, 45)}...</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onChange('')}
            className="p-1.5 rounded-lg bg-charcoal-800 hover:bg-red-950/80 hover:text-red-400 text-warm-400 transition"
            title="Remove media"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
