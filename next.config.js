const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  codeHighlight: true,
});

module.exports = withNextra();
