# -----------------------------------------------------------------------------
#         cppad_py: A C++ Object Library and Python Interface to Cppad
#          Copyright (C) 2017-18 Bradley M. Bell (bradbell@seanet.com)
#              This program is distributed under the terms of the
#              GNU General Public License version 3.0 or later see
#                    https://www.gnu.org/licenses/gpl-3.0.txt
# -----------------------------------------------------------------------------
# $begin py_a_fun$$ $newlinech #$$
# $spell
#	Cppad
#	Py
# $$
#
# $section Cppad Py AD Functions$$
#
# $comment Files that have Python specific Implementation and Documention$$
# $childtable%lib/python/independent.py
#	%lib/python/abort_recording.omh
#	%lib/python/a_fun_ctor.py
#	%lib/python/a_fun_property.omh
#	%lib/python/a_fun_jacobian.py
#	%lib/python/a_fun_hessian.py
#	%lib/python/a_fun_forward.py
# %$$
#
# $end
# ----------------------------------------------------------------------------
import cppad_py
class a_fun :
	"""Python interface to CppAD::ADFun<double>"""
	#
	# __init__: see a_fun_ctor.py
	def __init__(self, ax, ay) :
		self.af = cppad_py.a_fun_ctor(ax, ay)
	#
	# size_domain
	def size_domain(self) :
		return self.af.size_domain()
	#
	# size_range
	def size_range(self) :
		return self.af.size_range()
	#
	# size_var
	def size_var(self) :
		return self.af.size_var()
	#
	# size_op
	def size_op(self) :
		return self.af.size_op()
	#
	# jacobian: see a_fun_jacobian.py
	def jacobian(self, x) :
		return cppad_py.a_fun_jacobian(self.af, x)
	#
	# hessian: see a_fun_hessian.py
	def hessian(self, x, w) :
		return cppad_py.a_fun_hessian(self.af, x, w)
	#
	# forward
	def forward(self, p, xp) :
		return cppad_py.a_fun_forward(self.af, p, xp)
	#
	# reverse
	def reverse(self, q, yq) :
		return self.af.reverse(q, yq)
	#
	# optimize
	def optimize(self) :
		return self.af.optimize()
	#
	# for_jac_sparsity
	def for_jac_sparsity(self, pattern_in, pattern_out) :
		self.af.for_jac_sparsity(pattern_in, pattern_out)
	#
	# rev_jac_sparsity
	def rev_jac_sparsity(self, pattern_in, pattern_out) :
		self.af.rev_jac_sparsity(pattern_in, pattern_out)
	#
	# for_hes_sparsity
	def for_hes_sparsity(self, select_domain, select_range, pattern_out) :
		self.af.for_hes_sparsity(select_domain, select_range, pattern_out)
	#
	# rev_hes_sparsity
	def rev_hes_sparsity(self, select_domain, select_range, pattern_out) :
		self.af.rev_hes_sparsity(select_domain, select_range, pattern_out)
	#
	# sparse_jac_for
	def sparse_jac_for(self, subset, x, pattern, work) :
		self.af.sparse_jac_for(subset, x, pattern, work)
	#
	# sparse_jac_rev
	def sparse_jac_rev(self, subset, x, pattern, work) :
		self.af.sparse_jac_rev(subset, x, pattern, work)
	#
	# sparse_hes
	def sparse_hes(self, subset, x, r, pattern, work) :
		self.af.sparse_hes(subset, x, r, pattern, work)
