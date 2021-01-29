@echo off
set CURR-FOLDER=%cd%
set ANDROID-TOOL-FOLDER=%ANDROID_SDK_ROOT%\emulator

if not exist %ANDROID-TOOL-FOLDER% (
    call echo "You need to install emulator tool, inside Android Studio, go to options->SDK Tools->Android Emulator->check it and finally press Apply"
) else (
    call python %CURR-FOLDER%\run-android-emulator.py %ANDROID-TOOL-FOLDER%\emulator.exe -list-avds
)
