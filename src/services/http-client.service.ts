import axios, { AxiosInstance, AxiosError } from 'axios'

/**
 * Crea una instancia de Axios con configuración base.
 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}${import.meta.env.VITE_API_PREFIX}`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000
})

/**
 * Interceptor de solicitud (puede agregar headers como auth, locale, etc.)
 */
axiosInstance.interceptors.request.use(
  (config) => {
    // Aquí podrías agregar automáticamente el token si está en algún store
    return config
  },
  (error) => Promise.reject(error)
)

/**
 * Interceptor de respuesta para manejo centralizado de errores
 */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      const { status, data } = error.response
      const message = (data as any)?.message || 'Error desconocido'

      if (status >= 400 && status < 500) {
        console.warn('Error del cliente:', message)
        return Promise.reject(message)
      } else if (status >= 500) {
        console.error('Error del servidor:', message)
        return Promise.reject('Error del servidor. Inténtalo más tarde.')
      }
    }

    if (error.code === 'ECONNABORTED') {
      return Promise.reject('Tiempo de espera agotado. Verifica tu conexión.')
    }

    return Promise.reject(error.message || 'Error inesperado')
  }
)

export default axiosInstance
