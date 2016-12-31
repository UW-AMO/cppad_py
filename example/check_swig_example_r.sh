#! /bin/bash -e
# -----------------------------------------------------------------------------
#         cppad_swig: A C++ Object Library and SWIG Interface to CppAD
#          Copyright (C) 2017-17 Bradley M. Bell (bradbell@seanet.com)
#              This program is distributed under the terms of the
#          GNU Affero General Public License version 3.0 or later see
#                     http://www.gnu.org/licenses/agpl.txt
# -----------------------------------------------------------------------------
swig_module='swig_example'
current_source_dir=`pwd`
current_binary_dir=`pwd | sed -e 's|/swig/example|/build/swig/example|'`
r_include_dir='/usr/include/R'
objects="$swig_module.o ${swig_module}_wrap_r.o"
r_library='/usr/lib64/R/lib/libR.so'
# -----------------------------------------------------------------------------
# bash function that echos and executes a command
echo_eval() {
	echo $*
	eval $*
}
# -----------------------------------------------------------------------------
if ! grep "swig_module *= *'$swig_module'" check_swig_example.R > /dev/null
then
	echo 'Cannot find following line in swig_example.R:'
	echo "swig_module *= *'$swig_module'"
	exit 1
fi
echo_eval cd $current_binary_dir
#
echo_eval  swig -c++ -r  \
	-o $current_binary_dir/swig_example_wrap_r.cxx  \
	$current_source_dir/swig_example.i
#
echo_eval g++ -fPIC -g -c -I $r_include_dir \
	$current_source_dir/swig_example.cpp
#
echo_eval g++ -fPIC -g -c \
	-I $r_include_dir \
	-I $current_source_dir \
	swig_example_wrap_r.cxx
#
echo_eval g++ -shared $objects $r_library -o $swig_module.so
#
if ! R CMD BATCH $current_source_dir/check_swig_example.R
then
	cat check_swig_example.Rout
	echo 'check_swig_r.sh: Error'
	exit 1
fi
sed check_swig_example.Rout -e '1,/options(echo *= *FALSE)/d'
echo 'check_swig_r.sh: OK'
exit 0
