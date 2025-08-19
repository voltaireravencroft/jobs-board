// app/error.tsx
'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';

type Props = {
  error: (Error & { digest?: string }) | undefined;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    if (error) Sentry.captureException(error);
  }, [error]);

  return (
    <div className="min-h-screen grid place-items-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600">Something went wrong</h2>
        <p className="mt-2 text-gray-600">We hit a snag. Please try again.</p>

        <button
          onClick={() => reset()}
          className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
        >
          Try Again
        </button>

        {error?.digest && (
          <p className="mt-3 text-xs text-gray-400">Error id: {error.digest}</p>
        )}
      </div>
    </div>
  );
}
