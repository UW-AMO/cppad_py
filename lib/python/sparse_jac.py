# -----------------------------------------------------------------------------
#         cppad_py: A C++ Object Library and Python Interface to Cppad
#          Copyright (C) 2017-18 Bradley M. Bell (bradbell@seanet.com)
#              This program is distributed under the terms of the
#              GNU General Public License version 3.0 or later see
#                    https://www.gnu.org/licenses/gpl-3.0.txt
# -----------------------------------------------------------------------------
# $begin py_sparse_jac$$ $newlinech #$$
# $spell
#	Jacobians
#	jac
#	af
#	Jacobian
#	Taylor
#	rcv
#	nr
#	nc
#	const
#	vec
#	rc
#	cppad_py
#	numpy
# $$
#
# $section Computing Sparse Jacobians$$
#
# $head Syntax$$
# $icode%work% = cppad_py.sparse_jac_work()
# %$$
# $icode%n_sweep% = %af%.sparse_jac_for(%subset%, %x%, %pattern%, %work%)
# %$$
# $icode%n_sweep% = %af%.sparse_jac_rev(%subset%, %x%, %pattern%, %work%)%$$
#
# $head Purpose$$
# We use $latex F : \B{R}^n \rightarrow \B{R}^m$$ to denote the
# function corresponding to $icode af$$.
# The syntax above takes advantage of sparsity when computing the Jacobian
# $latex \[
#	J(x) = F^{(1)} (x)
# \] $$
# In the sparse case, this should be faster and take less memory than
# $cref py_a_fun_jacobian$$.
# We use the notation $latex J_{i,j} (x)$$ to denote the partial of
# $latex F_i (x)$$ with respect to $latex x_j$$.
#
# $head sparse_jac_for$$
# This function uses first order forward mode sweeps $cref py_a_fun_forward$$
# to compute multiple columns of the Jacobian at the same time.
#
# $head sparse_jac_rev$$
# This function uses first order reverse mode sweeps $cref py_a_fun_reverse$$
# to compute multiple rows of the Jacobian at the same time.
#
# $head af$$
# This object must have been returned by a previous call to the python
# $cref/a_fun/py_a_fun_ctor/$$ constructor.
# Note that the Taylor coefficients stored in $icode af$$ are affected
# by this operation; see
# $cref/uses forward/py_sparse_jac/Uses Forward/$$ below.
#
# $head subset$$
# This argument must have be a $cref/matrix/py_sparse_rcv/matrix/$$
# returned by the $code sparse_rcv$$ constructor.
# Its row size is $icode%subset%.nr() == %m%$$,
# and its column size is $icode%subset%.nc() == %n%$$.
# It specifies which elements of the Jacobian are computed.
# The input value of its value vector
# $icode%subset%.val()%$$ does not matter.
# Upon return it contains the value of the corresponding elements
# of the Jacobian.
# All of the row, column pairs in $icode subset$$ must also appear in
# $icode pattern$$; i.e., they must be possibly non-zero.
#
# $head x$$
# This argument is a numpy vector with $code float$$ elements
# and size $icode n$$.
# It specifies the point at which to evaluate the Jacobian $latex J(x)$$.
#
# $head pattern$$
# This argument must have be a $cref/pattern/py_sparse_rc/pattern/$$
# returned by the $code sparse_rc$$ constructor.
# Its row size is $icode%pattern%.nr() == %m%$$,
# and its column size is $icode%pattern%.nc() == %n%$$.
# It is a sparsity pattern for the Jacobian $latex J(x)$$.
# This argument is not used (and need not satisfy any conditions),
# when $cref/work/py_sparse_jac/work/$$ is non-empty.
#
# $head work$$
# This argument must have been constructed by the call
# $codei%
#	%work% = cppad_py.sparse_jac_work()
# %$$
# We refer to its initial value,
# and its value after $icode%work%.clear()%$$, as empty.
# If it is empty, information is stored in $icode work$$.
# This can be used to reduce computation when
# a future call is for the same object $icode af$$,
# the same member function $code sparse_jac_for$$ or $code sparse_jac_rev$$,
# and the same subset of the Jacobian.
# If any of these values change, use $icode%work%.clear()%$$ to
# empty this structure.
#
# $head n_sweep$$
# This return value is and $code int$$.
# If $code sparse_jac_for$$ ($code sparse_jac_rev$$) is used,
# $icode n_sweep$$ is the number of first order forward (reverse) sweeps
# used to compute the requested Jacobian values.
# This is proportional to the total computational work,
# not counting the zero order forward sweep,
# or combining multiple columns (rows) into a single sweep.
#
# $head Uses Forward$$
# After each call to $cref py_a_fun_forward$$,
# the object $icode af$$ contains the corresponding Taylor coefficients
# for all the variables in the operation sequence..
# After a call to $code sparse_jac_forward$$ or $code sparse_jac_rev$$,
# the zero order coefficients correspond to
# $codei%
#	%af%.forward(0, %x%)
# %$$
# All the other forward mode coefficients are unspecified.
#
# $children%
#	lib/example/python/sparse_jac_xam.py
# %$$
# $head Example$$
# $cref sparse_jac_xam.py$$
#
# $end
# -----------------------------------------------------------------------------
# undocumented fact: pattern.rc (subset.rcv) is vec_int version of
# sparsity pattern (sparse matrix)
import cppad_py
def a_fun_sparse_jac_for(af, subset, x, pattern, work) :
	"""
	n_sweep = af.sparse_jac_for(subset, x, pattern, work)
	"""
	n       = af.size_domain()
	m       = af.size_range()
	dtype   = float
	syntax  = 'af.sparse_jac_for(subset, x, pattern, work)'
	u       = cppad_py.utility.numpy2vec(x, dtype, n, syntax, 'x')
	af.sparse_jac_for(subset.rcv, u, pattern.rc, work)
#
def a_fun_sparse_jac_rev(af, subset, x, pattern, work) :
	"""
	n_sweep = af.sparse_jac_rev(subset, x, pattern, work)
	"""
	n       = af.size_domain()
	m       = af.size_range()
	dtype   = float
	syntax  = 'af.sparse_jac_rev(subset, x, pattern, work)'
	u       = cppad_py.utility.numpy2vec(x, dtype, n, syntax, 'x')
	af.sparse_jac_rev(subset.rcv, u, pattern.rc, work)