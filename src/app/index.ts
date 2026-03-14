/**
 * Application layer barrel export.
 * Re-exports all React hooks and services.
 *
 * Usage: import { useTheme, useSoundEffects } from '@/app'
 */

export * from './aiService'
export * from './haptics'
export * from './crashLogger'
export { SoundProvider, useSoundContext } from './SoundContext'
export * from './storageService'
export { ThemeProvider, useThemeContext } from './ThemeContext'
export { useOnlineStatus } from './useOnlineStatus'
export { useResponsiveState } from './useResponsiveState'
export { RESPONSIVE_BREAKPOINTS } from '@/domain/responsive'
export type {
	ContentDensity as ResponsiveContentDensity,
	NavMode as ResponsiveNavMode,
} from '@/domain/responsive'
export { useSoundEffects } from './useSoundEffects'
export { useStats } from './useStats'
export { default as useTheme } from './useTheme'
export { useMediaQuery } from './useMediaQuery'
export { useWindowSize } from './useWindowSize'
export { useSwipe } from './useSwipe'
export { useKeyboardControls } from './useKeyboardControls'
export { useDeviceInfo } from './useDeviceInfo'
export { useAppScreens } from './useAppScreens'
export { useServiceLoader } from './useServiceLoader'
export { useLongPress } from './useLongPress'
export { usePerformanceMetrics, logWebVitals } from './usePerformanceMetrics'
