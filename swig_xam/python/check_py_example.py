# -----------------------------------------------------------------------------
#         cppad_swig: A C++ Object Library and Swig Interface to Cppad
#          Copyright (C) 2017-17 Bradley M. Bell (bradbell@seanet.com)
#              This program is distributed under the terms of the
#          GNU Affero General Public License version 3.0 or later see
#                     http://www.gnu.org/licenses/agpl.txt
# -----------------------------------------------------------------------------
# $begin check_py_example.py$$ $newlinech #$$
# $spell
#	std
#	py
#	ptr
# $$
#
# $section Python Script That Tests py_example Swig Module$$
#
# $head Load the Module$$
# $srccode%cpp%
import py_example
# %$$
#
# $head Initialize Error Count$$
# $srccode%cpp%
error_count = 0
# %$$
#
# $head factorial_by_value$$
# $srccode%cpp%
if py_example.factorial_by_value(4) == 24 :
	print('py_example.factorial_by_value: OK')
else :
	print('py_example.factorial_by_value: Error')
	error_count = error_count + 1
# %$$
# see C++ $cref/factorial_by_value/example_function/factorial_by_value/$$.
#
# $head message_of_void$$
# $srccode%cpp%
if py_example.message_of_void() == 'OK' :
	print('py_example.message_of_void: OK')
else :
	print('py_example.message_of_void: Error')
	error_count = error_count + 1
# %$$
# see C++ $cref/message_of_void/example_function/message_of_void/$$.
#
# $head int_class$$
# $srccode%cpp%
obj = py_example.int_class()
py_example.add_by_ptr(3, 4, obj)
if obj.value() == 7 :
	print('py_example.add_by_ptr: OK')
else :
	print('py_example.add_by_ptr: Error')
	error_count = error_count + 1
# %$$
# see Swig $cref/int_class/example.i/int_class/$$ and
# C++ $cref/add_by_ptr/example_function/add_by_ptr/$$.
#
# $head int_array_ptr$$
# $srccode%cpp%
n   = 10
array_ptr = py_example.new_int_array_ptr(n)
for i in range(n) :
	py_example.int_array_ptr_setitem(array_ptr, i, 2 * i)
#
if py_example.max_array_by_ptr(n, array_ptr) == 18 :
	print('py_example.max_array_by_ptr: pointer: OK')
else :
	print('py_example.max_array_by_ptr: pointer: Error')
	error_count = error_count + 1
py_example.delete_int_array_ptr(array_ptr)
# %$$
# see Swig $cref/int_array_ptr/example.i/int_array_ptr/$$ and
# C++ $cref/max_array_by_ptr/example_function/max_array_by_ptr/$$.
#
# $head int_array_class$$
# $srccode%cpp%
n   = 10
array_obj = py_example.int_array_class(n)
for i in range(n) :
	array_obj[i] = 2 * i
#
if py_example.max_array_by_ptr(n, array_obj) == 18 :
	print('py_example.max_array_by_ptr: class: OK')
else :
	print('py_example.max_array_by_ptr: class: Error')
	error_count = error_count + 1
# %$$
# see Swig $cref/int_array_class/example.i/int_array_class/$$ and
# C++ $cref/max_array_by_ptr/example_function/max_array_by_ptr/$$.
#
# $head vector_double$$
# $srccode%cpp%
n   = 10
vec = py_example.vector_double(n)
for i in range(n) :
	vec[i] = 2.0 * i;
#
if py_example.max_std_vector_double(vec) == 18.0 :
	print('py_example.max_std_vector_double: class: OK')
else :
	print('py_example.max_std_vector_double: class: Error')
	error_count = error_count + 1
# %$$
# see Swig $cref/vector_double/example.i/vector_double/$$ and
# C++ $cref/max_std_vector_double/example_function/max_std_vector_double/$$.
#
# $head raise_exception$$
# $srccode%cpp%
try :
	py_example.raise_exception('test message')
	message = ''
except :
	message = py_example.raise_exception('')
if message == 'test message' :
	print('py_example.py_example.raise_exception: OK')
else :
	print('py_example.raise_exception.message_of_void: Error')
	error_count = error_count + 1
# %$$
# see C++ $cref/raise_exception/example_function/raise_exception/$$.
#
# $head normal_class$$
# $srccode%cpp%
two   = py_example.normal_class(2)
three = py_example.normal_class(3)
five  = two + three
ok       = five == py_example.normal_class(5)
ok       = ok and 4 < five.value()  and five.value() < 6
if ok :
	print('py_example.normal_class: OK')
else :
	print('py_example.normal_class: Error')
	error_count = error_count + 1
# %$$
# see C++ $cref example_normal_class$$.
#
# $head double_class$$
# $srccode%cpp%
two   = py_example.double_class(2.0)
three = py_example.double_class(3.0)
five  = two + three
ok       = five == py_example.double_class(5.0)
ok       = ok and 4.5 < five.value()  and five.value() < 5.5
if ok :
	print('py_example.double_class: OK')
else :
	print('py_example.double_class: Error')
	error_count = error_count + 1
# %$$
# see Swig $cref/double_class/example.i/double_class/$$.
#
# $head Set Exit Code$$
# $srccode%cpp%
import sys
sys.exit(error_count)
# %$$
#
# $end