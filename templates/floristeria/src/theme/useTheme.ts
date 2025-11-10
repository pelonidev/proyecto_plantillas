import { onMounted } from 'vue';
import theme from './theme';

type CSSVars = Record<string, string>;

function applyTheme(variables: CSSVars) {
  const root = document.documentElement;
  Object.entries(variables).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}

export function useTheme() {
  onMounted(() => {
    applyTheme(theme.cssVariables);
  });

  return {
    theme,
    applyTheme
  };
}

export default useTheme;
