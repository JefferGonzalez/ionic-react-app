const getEnv = (key: string, defaultValue?: string) => {
  return import.meta.env[key] || defaultValue
}

export const config = {
  firebase: {
    api_key: getEnv('VITE_FIREBASE_API_KEY'),
    auth_domain: getEnv('VITE_FIREBASE_AUTH_DOMAIN'),
    database_url: getEnv('VITE_FIREBASE_DATABASE_URL'),
    project_id: getEnv('VITE_FIREBASE_PROJECT_ID'),
    storage_bucket: getEnv('VITE_FIREBASE_STORAGE_BUCKET'),
    messaging_sender_id: getEnv('VITE_FIREBASE_MESSAGING_SENDER_ID'),
    app_id: getEnv('VITE_FIREBASE_APP_ID'),
    measurement_id: getEnv('VITE_FIREBASE_MEASUREMENT_ID')
  }
}
