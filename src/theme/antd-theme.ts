import type { ConfigProviderProps } from "antd";

export type AntdTheme = NonNullable<ConfigProviderProps["theme"]>;

export type AppTheme = {
  key: string;
  label: string;
  theme: AntdTheme;
};

/**
 * Brand tokens aligned with `styling-lib/color-style.txt` (cobalt primary, system semantics).
 * Shadows: `styling-lib/shadow-style.txt`. Typography scale: `styling-lib/typography.txt`.
 */
export const brandThemeToken: NonNullable<AntdTheme["token"]> = {
  colorPrimary: "#034EA2",
  colorSuccess: "#00D665",
  colorWarning: "#FF9500",
  colorError: "#FF3B30",
  colorInfo: "#0A84FF",

  colorTextBase: "#111927",
  colorBgBase: "#FFFFFF",

  colorPrimaryBg: "#DCECFE",
  colorPrimaryBgHover: "#AFD4FE",
  colorPrimaryBorder: "#78B6FD",
  colorPrimaryBorderHover: "#288AFB",
  colorPrimaryHover: "#03438C",
  colorPrimaryActive: "#023E82",
  colorPrimaryText: "#034EA2",
  colorPrimaryTextHover: "#03438C",
  colorPrimaryTextActive: "#023E82",

  colorSuccessBg: "#E6FFF4",
  colorSuccessBgHover: "#CCFCE9",
  colorSuccessBorder: "#66E8A8",
  colorSuccessBorderHover: "#33E090",
  colorSuccessHover: "#00B855",
  colorSuccessActive: "#009948",
  colorSuccessText: "#00D665",
  colorSuccessTextHover: "#00B855",
  colorSuccessTextActive: "#009948",

  colorWarningBg: "#FFF4E5",
  colorWarningBgHover: "#FFEACC",
  colorWarningBorder: "#FFD699",
  colorWarningBorderHover: "#FFC266",
  colorWarningHover: "#D97F00",
  colorWarningActive: "#B36800",
  colorWarningText: "#FF9500",
  colorWarningTextHover: "#D97F00",
  colorWarningTextActive: "#B36800",

  colorErrorBg: "#FFEBEA",
  colorErrorBgHover: "#FFD6D4",
  colorErrorBorder: "#FF9A94",
  colorErrorBorderHover: "#FF736B",
  colorErrorHover: "#E02D24",
  colorErrorActive: "#BF221A",
  colorErrorText: "#FF3B30",
  colorErrorTextHover: "#E02D24",
  colorErrorTextActive: "#BF221A",

  colorInfoBg: "#E5F2FF",
  colorInfoBgHover: "#CCE6FF",
  colorInfoBorder: "#99CDFF",
  colorInfoBorderHover: "#66B5FF",
  colorInfoHover: "#0870DB",
  colorInfoActive: "#065BB3",
  colorInfoText: "#0A84FF",
  colorInfoTextHover: "#0870DB",
  colorInfoTextActive: "#065BB3",

  colorText: "rgba(17, 25, 39, 0.88)",
  colorTextSecondary: "rgba(17, 25, 39, 0.65)",
  colorTextTertiary: "rgba(17, 25, 39, 0.45)",
  colorTextQuaternary: "rgba(17, 25, 39, 0.25)",
  colorTextDisabled: "rgba(17, 25, 39, 0.25)",

  colorBgContainer: "#FFFFFF",
  colorBgElevated: "#F9FAFB",
  colorBgLayout: "#F5F7F9",
  colorBgSpotlight: "rgba(17, 25, 39, 0.85)",
  colorBgMask: "rgba(17, 25, 39, 0.45)",
  colorBorder: "#E5E7EB",
  colorBorderSecondary: "#F3F4F6",

  borderRadius: 6,
  borderRadiusXS: 2,
  borderRadiusSM: 4,
  borderRadiusLG: 8,
  padding: 16,
  paddingSM: 12,
  paddingLG: 24,
  margin: 16,
  marginSM: 12,
  marginLG: 24,
  boxShadow: "0 6px 12px rgba(17, 25, 39, 0.08)",
  boxShadowSecondary: "0 2px 4px rgba(17, 25, 39, 0.06)",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
};

export const brandTheme: AntdTheme = {
  token: brandThemeToken,
  components: {
    Alert: {
      borderRadiusLG: 16,
      colorErrorBg: "#FFF1F0",
      colorInfoBg: "#DCECFE",
      colorSuccessBg: "#E6FFF2",
      colorWarningBg: "#FFF7E6",
    },
    Badge: {
      borderRadiusSM: 8,
      colorError: "#FF3B30",
      colorInfo: "#0A84FF",
      colorSuccess: "#00D665",
      colorWarning: "#FF9500",
    },
    Button: {
      borderRadius: 12,
      borderRadiusLG: 16,
      colorPrimary: "#034EA2",
      colorPrimaryActive: "#023E82",
      colorPrimaryHover: "#288AFB",
      contentFontSize: 16,
      contentFontSizeLG: 18,
      contentFontSizeSM: 14,
      controlHeight: 44,
      controlHeightLG: 54,
      controlHeightSM: 32,
      defaultBg: "#ffffff",
      defaultBorderColor: "#D2D6DB",
      defaultColor: "#253342",
      defaultHoverBorderColor: "#034EA2",
      defaultHoverColor: "#034EA2",
      paddingInline: 24,
      paddingInlineLG: 28,
      paddingInlineSM: 16,
      primaryShadow: "0 6px 12px rgba(3, 78, 162, 0.18)",
      textHoverBg: "#DCECFE",
    },
    Card: {
      actionsBg: "#ffffff",
      borderRadiusLG: 16,
      boxShadow: "0 6px 12px rgba(37, 51, 66, 0.12)",
      colorBgContainer: "#ffffff",
      colorBorderSecondary: "#E5E7EB",
      headerBg: "#ffffff",
      headerFontSize: 20,
      paddingLG: 24,
    },
    Input: {
      activeBorderColor: "#034EA2",
      activeShadow: "0 0 0 3px rgba(3, 78, 162, 0.12)",
      addonBg: "#F9FAFB",
      borderRadius: 12,
      controlHeight: 44,
      controlHeightLG: 54,
      controlHeightSM: 32,
      errorActiveShadow: "0 0 0 3px rgba(255, 59, 48, 0.12)",
      hoverBorderColor: "#288AFB",
      paddingBlock: 10,
      paddingBlockLG: 14,
      paddingBlockSM: 6,
      paddingInline: 16,
      warningActiveShadow: "0 0 0 3px rgba(255, 149, 0, 0.14)",
    },
    Modal: {
      borderRadiusLG: 16,
      colorBgElevated: "#ffffff",
      contentBg: "#ffffff",
      footerBg: "#ffffff",
      headerBg: "#ffffff",
      titleFontSize: 24,
      titleLineHeight: 1.2,
    },
    Select: {
      activeBorderColor: "#034EA2",
      activeOutlineColor: "rgba(3, 78, 162, 0.12)",
      borderRadius: 12,
      controlHeight: 44,
      controlHeightLG: 54,
      controlHeightSM: 32,
      hoverBorderColor: "#288AFB",
      multipleItemBg: "#DCECFE",
      optionActiveBg: "#F3F4F6",
      optionSelectedBg: "#DCECFE",
      optionSelectedColor: "#034EA2",
      optionSelectedFontWeight: 600,
      selectorBg: "#ffffff",
    },
    Table: {
      borderColor: "#E5E7EB",
      cellPaddingBlock: 16,
      cellPaddingInline: 16,
      headerBg: "#F9FAFB",
      headerBorderRadius: 12,
      headerColor: "#253342",
      rowHoverBg: "#F3F4F6",
    },
  },
};

export const defaultThemeKey = "brand";

export const builtInThemes = [
  {
    key: defaultThemeKey,
    label: "Brand",
    theme: brandTheme,
  },
] as const satisfies readonly AppTheme[];

export function createThemeOptions(customThemes: readonly AppTheme[] = []) {
  return [...builtInThemes, ...customThemes];
}

export function getThemeByKey(
  themeKey = defaultThemeKey,
  customThemes: readonly AppTheme[] = [],
) {
  return createThemeOptions(customThemes).find(
    (option) => option.key === themeKey,
  )?.theme;
}
