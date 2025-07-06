import React from "react";

export class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div>
            <h1>Something went wrong...</h1>
            <p>{this.state.error?.message}</p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
