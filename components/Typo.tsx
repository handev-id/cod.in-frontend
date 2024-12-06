import colors from "@/constants/colors";
import { StyleSheet, Text, TextProps } from "react-native";

export const appearances = StyleSheet.create({
  extraSmall: {
    fontFamily: "Poppins-Light",
    fontSize: 12,
    lineHeight: 18,
    color: colors.danger[500],
  },
  small: {
    fontFamily: "Poppins-Light",
    fontSize: 14,
    lineHeight: 20,
    color: colors.danger[500],
  },
  base: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: colors.danger[500],
  },
  large: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    lineHeight: 28,
    color: colors.danger[500],
  },
  extralarge: {
    fontFamily: "Poppins-Bold",
    fontSize: 36,
    lineHeight: 42,
    color: colors.danger[500],
  },
});

export type TypoProps = {
  appearance?: keyof typeof appearances;
};

export default function Typo({
  children,
  style,
  appearance = "base",
  ...props
}: TextProps & TypoProps) {
  return (
    <Typo {...props} style={[appearances[appearance], style]}>
      {children}
    </Typo>
  );
}
