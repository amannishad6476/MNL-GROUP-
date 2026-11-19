import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ArrowRight, ShieldCheck, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAdminAuth } from '../context/AdminAuthContext';

export default function AdminLoginPage() {
  const { login, isAuthenticated } = useAdminAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('admin@mnlgroup.com');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = login(email, password);
    setLoading(false);

    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen bg-charcoal-950 flex flex-col justify-center items-center p-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full bg-charcoal-900 border border-gold-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 p-0.5 shadow-gold-glow mx-auto mb-4 flex items-center justify-center">
            <div className="w-full h-full bg-charcoal-950 rounded-[14px] flex items-center justify-center">
              <span className="font-serif font-black text-2xl gold-gradient-text">M</span>
            </div>
          </div>
          <h1 className="font-serif font-bold text-2xl text-warm-50">
            MNL GROUP
          </h1>
          <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mt-1">
            Admin Management Console
          </p>
        </div>

        <div className="mb-6 p-4 rounded-xl bg-charcoal-850 border border-charcoal-700/80 text-xs text-warm-300 space-y-1">
          <div className="flex items-center gap-2 text-gold-400 font-semibold mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Frontend Admin Access</span>
          </div>
          <p className="text-[11px] text-warm-400 leading-relaxed">
            Secure session token state in memory (no passwords stored in localStorage).
          </p>
          <div className="pt-1 font-mono text-[11px] text-warm-200">
            <p>Email: <span className="text-gold-400">admin@mnlgroup.com</span></p>
            <p>Password: <span className="text-gold-400">admin123</span></p>
          </div>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-warm-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-charcoal-850 border border-charcoal-700 focus:border-gold-500 focus:outline-none text-warm-100 text-sm transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-warm-300 font-semibold mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-warm-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-charcoal-850 border border-charcoal-700 focus:border-gold-500 focus:outline-none text-warm-100 text-sm transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-warm-400 hover:text-warm-100"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 gold-glow-btn transition-all duration-300 mt-2"
          >
            {loading ? (
              <span>Verifying Session...</span>
            ) : (
              <>
                <span>Sign In to Admin Portal</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
