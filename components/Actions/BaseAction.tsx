import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { ReactNode } from "react";
import { Platform, StatusBar, TouchableOpacity, View } from "react-native";
import Typo from "../Typo";
import colors from "@/constants/colors";

export type BaseActionProps = {
  title?: string;
  leftIcon?: keyof typeof MaterialIcons.glyphMap;
  withoutLeft?: boolean;
  withoutBorder?: boolean;
  subtitle?: string;
  headerRight?: (props: any) => ReactNode;
};

export default function BaseAction({
  title,
  subtitle,
  leftIcon = "arrow-back-ios",
  withoutBorder,
  withoutLeft = false,
  headerRight: HeaderRight,
}: BaseActionProps) {
  const navigation = useNavigation();

  return (
    <View
      style={{
        paddingTop: Platform.OS === "ios" ? 48 : StatusBar.currentHeight || 0,
        backgroundColor: colors.white,
        borderBottomWidth: withoutBorder ? 0 : 1,
        borderColor: colors.neutral[300],
      }}
    >
      <View
        style={{
          height: 56,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "stretch",
        }}
      >
        {!withoutLeft ? (
          <View
            style={{
              flex: 1,
              height: "100%",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {navigation.canGoBack() ? (
              <TouchableOpacity
                style={{
                  paddingHorizontal: 20,
                  height: "100%",
                  justifyContent: "center",
                }}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <MaterialIcons
                  name={leftIcon}
                  size={24}
                  style={{ color: colors.danger[500] }}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        ) : null}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Typo style={{ textAlign: "center" }} numberOfLines={1}>
            {title}
          </Typo>
          {subtitle ? (
            <Typo
              appearance="small"
              style={{ textAlign: "center" }}
              numberOfLines={1}
            >
              {subtitle}
            </Typo>
          ) : null}
        </View>
        <View
          style={{
            flex: 1,
            height: "100%",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {HeaderRight ? <HeaderRight /> : null}
        </View>
      </View>
    </View>
  );
}
