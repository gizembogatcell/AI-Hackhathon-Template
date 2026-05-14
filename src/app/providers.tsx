"use client";

import { ConfigProvider } from "antd";

import {
  brandTheme,
  getThemeByKey,
  type AntdTheme,
  type AppTheme,
} from "@/theme/antd-theme";
import { AuthProvider } from "@/contexts/auth-context";

type AppProvidersProps = {
  children: React.ReactNode;
  customThemes?: readonly AppTheme[];
  theme?: AntdTheme;
  themeKey?: string;
};

export function AppProviders({
  children,
  customThemes = [],
  theme,
  themeKey,
}: AppProvidersProps) {
  const activeTheme =
    theme ?? getThemeByKey(themeKey, customThemes) ?? brandTheme;

  return (
    <ConfigProvider theme={activeTheme}>
      <AuthProvider>{children}</AuthProvider>
    </ConfigProvider>
  );
}
