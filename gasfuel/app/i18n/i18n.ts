import * as Localization from "expo-localization"
import i18n from "i18n-js"

const en = require("./en")
const sp = require("./sp")

i18n.fallbacks = true
i18n.translations = { en, sp }

i18n.locale = Localization.locale || "en"
