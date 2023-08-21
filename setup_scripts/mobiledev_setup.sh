#!/bin/bash

# Install OpenJDK 11
sudo apt install openjdk-11-jdk

# Install Android Studio
sudo snap install android-studio --classic

# Install Flutter
sudo snap install flutter

# Install Dart
sudo apt install dart

# Install React Native
sudo npm install -g react-native-cli

# Install Kotlin
sudo apt install kotlin

##output version and name of all packages installed
echo "OpenJDK version:"
java --version
echo "Android Studio version:"
android-studio --version
echo "Flutter version:"
flutter --version
echo "Dart version:"
dart --version
echo "React Native version:"
react-native --version
echo "Kotlin version:"
kotlin --version
