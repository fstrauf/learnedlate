import Clarity from '@microsoft/clarity'

export function useClarity() {
  const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID

  if (!projectId) {
    // Don't initialize without required env; avoid errors in local/dev if not configured
    return
  }

  Clarity.init(projectId)
}
