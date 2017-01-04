#! /bin/bash -e
# -----------------------------------------------------------------------------
#         cppad_swig: A C++ Object Library and Swig Interface to Cppad
#          Copyright (C) 2017-17 Bradley M. Bell (bradbell@seanet.com)
#              This program is distributed under the terms of the
#          GNU Affero General Public License version 3.0 or later see
#                     http://www.gnu.org/licenses/agpl.txt
# -----------------------------------------------------------------------------
# bash function that echos and executes a command
echo_eval() {
	echo $*
	eval $*
}
# -----------------------------------------------------------------------------
if [ "$0" != "bin/run_cmake.sh" ]
then
	echo "bin/run_cmake.sh: must be executed from its parent directory"
	exit 1
fi
# -----------------------------------------------------------------------------
# BEGIN user settings
cmake_binary_dir='build'
cmake_generator='Unix Makefiles'
cmake_verbose_makefile='false'
cmake_build_type='debug'
cppad_prefix="$HOME/prefix/cppad"
cppad_cxx_flags='-Wall -pedantic-errors'
swig_cxx_flags='-Wall -Wno-sign-compare'
# END user settings
#
if [ ! -e "$cmake_binary_dir" ]
then
	echo_eval mkdir "$cmake_binary_dir"
fi
echo_eval cd "$cmake_binary_dir"
cmake \
	-G "$cmake_generator" \
	-D CMAKE_VERBOSE_MAKEFILE="$cmake_verbose_makefile" \
	-D CMAKE_BUILD_TYPE="$cmake_build_type" \
	-D cppad_prefix="$cppad_prefix" \
	-D cppad_cxx_flags="$cppad_cxx_flags" \
	-D swig_cxx_flags="$swig_cxx_flags" \
	..
# -----------------------------------------------------------------------------
echo 'bin/run_cmake.sh: OK'
exit 0
# -----------------------------------------------------------------------------
# $begin run_cmake.sh$$  $newlinech #$$
# $spell
#	Makefiles
#	Rel
#	Cppad
#	cmake
#	hpp
#	cxx
#	Wno
#	makefile
#	dir
#	executables
# $$
#
# $section Configure cppad_swig for A system$$
#
# $head Syntax$$
# $codei%bin/run_cmake.sh%$$
#
# $head File$$
# Before running this file $code bin/run_cmake.sh$$
# the user should check and possible change the following settings:
# $srcfile%bin/run_cmake.sh%0%# BEGIN user settings%# END user settings%$$
# each of these settings is described below:
#
# $head cmake_binary_dir$$
# This is the directory where object libraries and executables are built.
# It is also the directory where $code make$$ commands are executed.
#
# $head cmake_generator$$
# This determines the type of make files that will be generated by
# $code cmake$$; see
# $href%https://cmake.org/cmake/help/v3.0/manual/cmake-generators.7.html%
#	cmake-generators%$$.
#
# $head cmake_verbose_makefile$$
# This is either $code true$$ or $code false$$.
# If it is true, many of the compiler and Swig options used to
# build the system are output during the $code make$$ commands.
# If it is false, the output during the make commands just describes
# whats is being done without so much detail.
#
# $head cmake_build_type$$
# This is either $code debug$$, $code release$$, $code RelWithDebInfo$$
# or $code MinSizeRel$$; see
# $href%https://cmake.org/cmake/help/v3.0/variable/CMAKE_BUILD_TYPE.html%
#	cmake_build_type%$$.
#
# $head cppad_prefix$$
# The prefix used to install Cppad.
# For example, the following include file must exist
# $codei%
#	%cppad_prefix%/include/Cppad.hpp
# %$$
#
# $head cppad_cxx_flags$$
# Extra C++ compiler flags used when compiling code that includes Cppad
# header files.
#
# $head swig_cxx_flags$$
# Extra C++ compiler flags used when compiling code that is created
# by Swig.
#
# $end
# -----------------------------------------------------------------------------
