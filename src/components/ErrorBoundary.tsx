import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });

    // You can also log to an error reporting service here
    // Example: logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border-2 border-red-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-6xl">⚠️</div>
                <div>
                  <h1 className="text-3xl font-bold">Oops! Something went wrong</h1>
                  <p className="text-red-100 mt-2">
                    We encountered an unexpected error. Don't worry, your data is safe.
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              {/* Error Message */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">Error Details:</h3>
                <p className="text-sm text-red-800 font-mono">
                  {this.state.error?.message || "Unknown error"}
                </p>
              </div>

              {/* What you can do */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What you can do:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">
                      Try refreshing the page - this often resolves temporary issues
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">
                      Check your internet connection and try again
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">
                      If the problem persists, contact our support team
                    </span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={this.handleReset}
                  className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={() => window.location.href = "/"}
                  className="flex-1 px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  Go to Homepage
                </button>
              </div>

              {/* Developer Details (collapsed) */}
              {process.env.NODE_ENV === "development" && this.state.errorInfo && (
                <details className="mt-6">
                  <summary className="cursor-pointer text-sm font-semibold text-gray-700 hover:text-gray-900">
                    Developer Details
                  </summary>
                  <div className="mt-3 p-4 bg-gray-100 rounded-lg overflow-x-auto">
                    <pre className="text-xs text-gray-800">
                      {this.state.error?.stack}
                      {"\n\n"}
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                </details>
              )}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 border-t border-gray-200 px-8 py-4 text-center text-sm text-gray-600">
              Need help? Contact us at{" "}
              <a
                href="mailto:support@mainst.ai"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                support@mainst.ai
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Smaller inline error boundary for specific sections
export function InlineErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary
      fallback={
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <div className="text-4xl mb-3">⚠️</div>
          <h3 className="font-semibold text-red-900 mb-2">
            This section encountered an error
          </h3>
          <p className="text-sm text-red-700 mb-4">
            Try refreshing the page. If the problem persists, contact support.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}
