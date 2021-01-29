@echo off

set CURR_PATH=%cd%
set ANDROID_APK_OUTPUT=%CURR_PATH%\apk

if not exist "%ANDROID_APK_OUTPUT%" (
	mkdir "%ANDROID_APK_OUTPUT%"
)

pushd "%CURR_PATH%\android"
	call gradlew.bat assembleRelease
popd

copy /Y "%CURR_PATH%\android\app\build\outputs\apk\release\app-release.apk" "%ANDROID_APK_OUTPUT%\gasfuel.apk"

