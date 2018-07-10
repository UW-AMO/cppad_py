#! /bin/bash -e
# -----------------------------------------------------------------------------
#         cppad_py: A C++ Object Library and Python Interface to Cppad
#          Copyright (C) 2017-18 Bradley M. Bell (bradbell@seanet.com)
#              This program is distributed under the terms of the
#              GNU General Public License version 3.0 or later see
#                    https://www.gnu.org/licenses/gpl-3.0.txt
# -----------------------------------------------------------------------------
# bash function that echos and executes a command
echo_eval() {
    echo $*
    eval $*
}
# -----------------------------------------------------------------------------
if [ "$0" != 'bug/use_numpy.sh' ]
then
	echo 'bug/use_numpy.sh must be executed from its parent directory'
	exit 1
fi
cmake_source_dir=`pwd`
# -----------------------------------------------------------------------------
if [ "$1" != '2' ] && [ "$1" != '3' ]
then
	echo 'usage: bug/use_numpy.sh python_major_version'
	echo 'python_major_version is 2 or 3'
	echo 'This program returns ok = False for both versions of python.'
	exit 1
fi
python_major_version="$1"
# -----------------------------------------------------------------------------
if [ ! -e 'build/bug' ]
then
	echo_eval mkdir -p build/bug
fi
cd build/bug
# -----------------------------------------------------------------------------
cat << EOF > use_numpy.py
import sys
import os
import numpy
sys.path.insert(0, '$cmake_source_dir')
import cppad_py
def fun(x) :
	"""
	ax = independent(x)
	creates the indepedent numpy vector ax, with value equal numpy vector x,
	and starts recording a_double operations.
	"""
	# convert x -> v
	if( len( x.shape ) != 1 ) :
		msg = 'independent(x): numpy array x is not a vector'
		raise NotImplementedError(msg)
	n = x.size
	v = cppad_py.vec_double(n)
	for i in range(n) :
		v[i] = x[i]
	# call independent
	av =  cppad_py.cppad_py_swig.independent(v)
	#
	ax = numpy.zeros(n, dtype = cppad_py.a_double)
	for i in range(n) :
		ax[i] = av[i]
	#
	return ax
#
#
# initialize return variable
ok = True
# ---------------------------------------------------------------------
n_ind = 2
#
# create ax
x = numpy.zeros(n_ind, dtype=float)
for i in range( n_ind  ) :
	x[i] = i + 1.0
#
ax = fun(x)
#
# preform some a_double operations
ax0 = ax[0]
ax1 = ax[1]
ay = ax0 + ax1
#
# check that ay is a variable; its value depends on the value of ax
ok = ok and ay.variable()
#
# abort this recording
cppad_py.abort_recording()
#
# check that ay is now a parameter, no longer a variable.
ok = ok and ay.parameter()
#
# since it is a parameter, we can retrieve its value
y = ay.value()
#
# its value should be x0 + x1
ok = ok and y  == x[0] + x[1]
#
# an abort when not recording has no effect
cppad_py.abort_recording()
#
print('ok = ', ok )
EOF
echo_eval python$python_major_version use_numpy.py
