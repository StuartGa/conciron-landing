import { Component, type ErrorInfo, type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

/**
 * Catches render errors on the landing page and shows a stable fallback UI.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[Conciron] Render error:', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-surface text-on-surface flex items-center justify-center p-8">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Algo salió mal</h1>
            <p className="text-on-surface-variant mb-6">
              No pudimos cargar la página. Por favor recarga o contáctanos directamente.
            </p>
            <a
              href="mailto:cotizaciones@conciron.com.mx"
              className="inline-block bg-primary text-white px-6 py-3 font-semibold"
            >
              cotizaciones@conciron.com.mx
            </a>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
