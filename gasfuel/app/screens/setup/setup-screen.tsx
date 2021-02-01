import React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Text, Screen, Wallpaper } from "../../components"
import { color, spacing } from "../../theme"
import { Api } from "../../services/api"
import { save } from "../../utils/storage"
import InputSpinner from "react-native-input-spinner"

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  alignItems: "center",
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const LITERSINPUT: ViewStyle = {
  marginVertical: spacing[4],
}
const DEMO: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "#5D2555",
}
const SPINNERNUMBERCONTAINER: ViewStyle = {
  height: "20%",
}
const BOLD: TextStyle = { fontWeight: "bold" }
const DEMO_TEXT: TextStyle = {
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}
const LABELS: TextStyle = {
  ...BOLD,
  fontSize: 17,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
  color: "#FFFFFF",
}
const TITLE: TextStyle = {
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
  marginBottom: spacing[5],
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 12,
  textAlign: "center",
  letterSpacing: 1.5,
}

export const SetupScreen = observer(function Setup() {
  const navigation = useNavigation()
  const goBack = () => {
    console.log("Go back --->>")
    // navigation.goBack()
  }

  const demoReactotron = React.useMemo(
    () => async () => {
      console.tron.log("Your Friendly tron log message")
      console.tron.logImportant("I am important")
      console.tron.display({
        name: "DISPLAY",
        value: {
          numbers: 1,
          strings: "strings",
          booleans: true,
          arrays: [1, 2, 3],
          objects: {
            deeper: {
              deeper: {
                yay: "👾",
              },
            },
          },
          functionNames: function hello() {
            /* dummy function */
          },
        },
        preview: "More control with display()",
        important: true,
        image: {
          uri:
            "https://avatars2.githubusercontent.com/u/3902527?s=200&u=a0d16b13ed719f35d95ca0f4440f5d07c32c349a&v=4",
        },
      })
      // make an API call for the demo
      // Don't do API like this, use store's API
      const demo = new Api()
      demo.setup()
      demo.getUser("1")
      // Let's do some async storage stuff
      await save("Cool Name", "Boaty McBoatface")
    },
    [],
  )

  return (
    <View style={FULL}>
      <Wallpaper />
      <Header leftIcon="back" onLeftPress={goBack} titleStyle={HEADER_TITLE} />
      <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
        <Text style={TITLE} preset="header" tx="setupScreen.title" />
        <Text style={LABELS} tx="setupScreen.gasCapacity" />
        <View style={SPINNERNUMBERCONTAINER}>
          <InputSpinner
            style={LITERSINPUT}
            inputStyle={LABELS}
            min={1}
            colorLeft={"#f04048"}
            colorRight={"#40c5f4"}
            rounded={false}
            onChange={(num) => {
              console.log(num)
            }}
            onDecrease={() => {
              console.log("Drecrement -->")
            }}
          />
        </View>
        <Text style={LABELS} tx="setupScreen.gaugeCapacity" />
        <View style={SPINNERNUMBERCONTAINER}>
          <InputSpinner
            style={LITERSINPUT}
            inputStyle={LABELS}
            min={1}
            colorLeft={"#f04048"}
            colorRight={"#40c5f4"}
            rounded={false}
            onChange={(num) => {
              console.log(num)
            }}
            onDecrease={() => {
              console.log("Drecrement -->")
            }}
          />
        </View>
        <Button
          style={DEMO}
          textStyle={DEMO_TEXT}
          tx="setupScreen.accept"
          onPress={demoReactotron}
        />
      </Screen>
    </View>
  )
})
