import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

// Cache at module level - shared across all components
let settingsCache = null
let settingsFetchPromise = null

function getCachedSettings() {
  try {
    const cached = localStorage.getItem('site_settings_cache')
    if (cached) {
      return JSON.parse(cached)
    }
  } catch (e) {
    // localStorage might be disabled or corrupted
    return null
  }
  return null
}

function setCachedSettings(data) {
  try {
    localStorage.setItem('site_settings_cache', JSON.stringify(data))
  } catch (e) {
    // localStorage might be disabled - ignore
  }
}

async function fetchSiteSettings() {
  try {
    const supabase = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
    )

    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .eq('id', 1)
      .single()

    if (error) {
      console.warn('Failed to fetch site settings:', error)
      return null
    }

    if (data) {
      setCachedSettings(data)
      settingsCache = data
    }

    return data
  } catch (err) {
    console.warn('Error fetching site settings:', err)
    return null
  }
}

export function useSiteSettings() {
  const [settings, setSettings] = useState(() => {
    // Start with cached value if available
    return getCachedSettings()
  })
  const [loaded, setLoaded] = useState(settingsCache !== null)

  useEffect(() => {
    if (settingsCache) {
      setSettings(settingsCache)
      setLoaded(true)
      return
    }

    // Use shared promise to avoid duplicate requests
    if (!settingsFetchPromise) {
      settingsFetchPromise = fetchSiteSettings()
    }

    settingsFetchPromise
      .then((data) => {
        setSettings(data)
        setLoaded(true)
      })
      .catch(() => {
        setLoaded(true)
      })
  }, [])

  return {
    headshot_url: settings?.headshot_url || null,
    bio: settings?.bio || null,
    resume_url: settings?.resume_url || null,
    loaded,
  }
}
