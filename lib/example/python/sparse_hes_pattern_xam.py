# -----------------------------------------------------------------------------
#         cppad_py: A C++ Object Library and Python Interface to Cppad
#          Copyright (C) 2017-18 Bradley M. Bell (bradbell@seanet.com)
#              This program is distributed under the terms of the
#              GNU General Public License version 3.0 or later see
#                    https://www.gnu.org/licenses/gpl-3.0.txt
# -----------------------------------------------------------------------------
# for_hes_sparsity, rev_hes_sparsity
# -----------------------------------------------------------------------------
# BEGIN SOURCE
def sparse_hes_pattern_xam() :
	#
	# load the Cppad Py library
	import cppad_py
	#
	# initialize return variable
	ok = True
	# ---------------------------------------------------------------------
	# number of dependent and independent variables
	n = 3
	#
	# create the independent variables ax
	x = cppad_py.vec_double(n)
	for i in range( n  ) :
		x[i] = i + 2.0
	#
	ax = cppad_py.independent(x)
	#
	# create dependent variables ay with ay[i] = ax[j] * ax[i]
	# where i = mod(j + 1, n)
	ay = cppad_py.vec_a_double(n)
	for j in range( n  ) :
		i = j+1
		if i >= n  :
			i = i - n
		#
		ay_i = ax[i] * ax[j]
		ay[i] = ay_i
	#
	#
	# define af corresponding to f(x)
	af = cppad_py.a_fun(ax, ay)
	#
	# Set select_d (domain) to all true, initial select_r (range) to all false
	select_d = cppad_py.vec_bool(n)
	select_r = cppad_py.vec_bool(n)
	for i in range( n ) :
		select_d[i] = True
		select_r[i] = False
	#
	#
	# only select component 0 of the range function
	# f_0 (x) = x_0 * x_{n-1}
	select_r[0] = True
	#
	# loop over forward and reverse mode
	for mode in range( 2 ) :
		pat_out = cppad_py.sparse_rc()
		if mode == 0  :
			af.for_hes_sparsity(select_d, select_r, pat_out)
		#
		if mode == 1  :
			af.rev_hes_sparsity(select_d, select_r, pat_out)
		#
		#
		# check that result is sparsity pattern for Hessian of f_0 (x)
		ok = ok and pat_out.nnz() == 2
		row = pat_out.row()
		col = pat_out.col()
		for k in range( 2 ) :
			r = row[k]
			c = col[k]
			if r <= c  :
				ok = ok and r == 0
				ok = ok and c == n-1
			#
			if r >= c  :
				ok = ok and r == n-1
				ok = ok and c == 0
			#
		#
	#
	#
	return( ok )
#
# END SOURCE
#
# $begin sparse_hes_pattern_xam.py$$ $newlinech #$$
# $spell
#	py
#	perl
#	cppad
#	py
#	xam
#	Jacobian
#	Jacobians
# $$
# $section Python: Hessian Sparsity Patterns: Example and Test$$
# $srcfile|lib/example/python/sparse_hes_pattern_xam.py|0|# BEGIN SOURCE|# END SOURCE|$$
# $end
#