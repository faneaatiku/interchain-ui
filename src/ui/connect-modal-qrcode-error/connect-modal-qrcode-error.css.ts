import { style, styleVariants, createVar } from "@vanilla-extract/css";
import { themeVars } from "../../styles/themes.css";
import { sprinkles as s } from "../../styles/sprinkles.css";

export const qrcodeErrorContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const qrcodeBlurBgVar = createVar();

const qrCodeBlurBase = style([
  style({
    position: "absolute",
    background: qrcodeBlurBgVar,
    filter: "blur(12px)",
  }),
  s({
    width: "full",
    height: "full",
    zIndex: "10",
    borderRadius: "lg",
  }),
]);

export const qrcodeBlur = styleVariants({
  light: [
    qrCodeBlurBase,
    style({
      vars: {
        [qrcodeBlurBgVar]: themeVars.colors.whiteAlpha700,
      },
    }),
  ],
  dark: [
    qrCodeBlurBase,
    style({
      vars: {
        [qrcodeBlurBgVar]: themeVars.colors.blackAlpha400,
      },
    }),
  ],
});

export const qrcodeReloadButtonContainer = style([
  {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  s({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
]);

const reloadButtonBgVar = createVar();
const reloadButtonFgVar = createVar();
const reloadButtonShadowVar = createVar();

const qrCodeReloadButtonBase = style([
  style({
    border: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    appearance: "none",
    position: "relative",
    outline: "2px solid transparent",
    verticalAlign: "middle",
    outlineOffset: "2px",
    padding: "0",
    boxShadow: reloadButtonShadowVar,
    background: reloadButtonBgVar,
    color: reloadButtonFgVar,
  }),
  s({
    borderRadius: "full",
    fontWeight: "semibold",
    fontSize: "lg",
    width: "15",
    height: "15",
  }),
]);

export const qrcodeReloadButton = styleVariants({
  light: [
    qrCodeReloadButtonBase,
    style({
      vars: {
        [reloadButtonBgVar]: themeVars.colors.white,
        [reloadButtonFgVar]: themeVars.colors.blackAlpha900,
        [reloadButtonShadowVar]:
          "rgba(0, 0, 0, 0.48) 0px 1px 4px 0px, rgba(0, 0, 0, 0.24) 0px 5px 12px 0px, rgba(255, 255, 255, 0.48) 0px 0px 25px 6px",
      },
    }),
  ],
  dark: [
    qrCodeReloadButtonBase,
    style({
      vars: {
        [reloadButtonBgVar]: themeVars.colors.gray800,
        [reloadButtonFgVar]: themeVars.colors.white,
        [reloadButtonShadowVar]:
          "rgba(0, 0, 0, 0.92) 0px 1px 4px 0px, rgba(0, 0, 0, 0.8) 0px 5px 12px 0px, rgba(255, 255, 255, 0.24) 0px 0px 25px 6px",
      },
    }),
  ],
});
