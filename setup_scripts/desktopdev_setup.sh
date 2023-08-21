#!/bin/bash

# Install Visual Studio Code
sudo snap install --classic code

# Install C/C++
sudo apt install build-essential
sudo apt install gdb

# Install CMake
sudo apt install cmake

# Install Qt
sudo apt install qt5-default

# Install GTK+
sudo apt install libgtk-3-dev

# Install MinGW
sudo apt install mingw-w64

# Install Debugging tools
sudo apt install gdb
sudo apt install valgrind

# Install Git
sudo apt install git

##echo all pacjages installed and their versions
echo "Visual Studio Code version:"
code --version
echo "C/C++ version:"
gcc --version
echo "CMake version:"
cmake --version
echo "Qt version:"
qmake --version
echo "GTK+ version:"
pkg-config --modversion gtk+-3.0
echo "MinGW version:"
i686-w64-mingw32-gcc --version
echo "Debugging tools version:"
gdb --version
echo "Git version:"
git --version
