import Link from 'next/link';
import { ArrowLeft, ArrowRight, Home, HelpCircle } from 'lucide-react';
import GetAseedLogo from '@/components/GetAseedLogo';

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-[#0B1220] text-white flex items-center justify-center py-16 relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'var(--thread-gradient)' }}
      />

      <div className="container-xl relative z-10 text-center max-w-lg mx-auto space-y-6">
        <div className="inline-flex justify-center">
          <GetAseedLogo variant="white" size="large" />
        </div>

        {/* Broken thread line device */}
        <div className="py-2 flex items-center justify-center gap-3">
          <span className="w-16 h-[2px] rounded-full bg-[#962FBF]" />
          <span className="w-8 h-[2px] rounded-full bg-[#1877F2] opacity-40" />
          <span className="w-4 h-[2px] rounded-full bg-[#25D366] opacity-20" />
        </div>

        <div className="stat-mono text-[64px] sm:text-[80px] font-bold text-white tracking-tight leading-none">
          404
        </div>

        <div className="space-y-2">
          <h1 
            className="text-[24px] sm:text-[28px] font-semibold text-white tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Page not found
          </h1>
          <p className="text-[#8891A3] text-[15px] max-w-sm mx-auto">
            The page you requested does not exist or has been relocated to another channel.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-pill btn-primary bg-white text-[#0B1220] hover:bg-[#F6F7FB] px-6 py-3 text-[14px] w-full sm:w-auto"
          >
            <Home size={15} />
            <span>Return Home</span>
          </Link>

          <Link
            href="/pricing"
            className="btn-pill bg-[#101B33] text-white border border-[#1E293B] hover:bg-[#1E293B] px-6 py-3 text-[14px] w-full sm:w-auto"
          >
            <span>View Pricing Plans</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
