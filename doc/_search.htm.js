// ------------------------------------------------------------ 
// Copyright (C) Bradley M. Bell 1998-2015, All rights reserved 
// ------------------------------------------------------------ 
Keyword = 
[
'cppad_py  cppad_py-20181110: A C++ Object Library and Python Interface to Cppad  ',' purpose under construction getting started function speed license ',
'setup.py  Configure and Build the cppad_py Python Module  ',' syntax external requirements download top source directory verbose_makefile build_type extra_cxx_flags cppad_prefix test_cppad get testing c++ import installing path ',
'get_cppad.sh  Get Cppad  ',' syntax top source directory setup.py ',
'library  The Cppad Py Libraries  ',' ',
'py_lib  The Python Library  ',' ',
'py_fun  Cppad Py AD Functions  ',' ',
'py_independent  Declare Independent Variables and Start Recording  ',' syntax dynamic adynamic purpose example ',
'fun_dynamic_xam.py  Python: Using Dynamic Parameters: Example and Test  ',' ',
'py_abort_recording  Abort Recording  ',' syntax purpose example ',
'fun_abort_xam.py  Python: Abort Recording a_double Operations: Example and Test  ',' ',
'py_fun_ctor  Stop Current Recording and Store Function Object  ',' syntax d_fun a_fun ay af example ',
'a_fun_xam.py  Python: Purpose of a_fun Objects: Example and Test  ',' ',
'py_fun_property  Properties of a Function Object  ',' syntax size_domain size_range size_var size_op size_order example ',
'fun_property_xam.py  Python: d_fun Properties: Example and Test  ',' ',
'py_fun_new_dynamic  New Dynamic Parameters  ',' syntax size_order example ',
'py_fun_jacobian  Jacobian of an AD Function  ',' syntax f(x) example ',
'fun_jacobian_xam.py  Python: Dense Jacobian Using AD: Example and Test  ',' ',
'py_fun_hessian  Hessian of an AD Function  ',' syntax f(x) g(x) w example ',
'fun_hessian_xam.py  Python: Dense Hessian Using AD: Example and Test  ',' ',
'py_fun_forward  Forward Mode AD  ',' syntax taylor coefficient f(x) x(t) y(t) size_order xp yp example ',
'fun_forward_xam.py  Python: Forward Mode AD: Example and Test  ',' ',
'py_fun_reverse  Reverse Mode AD  ',' syntax notation f(x) x(t) y(t) g(t) q yq xq example ',
'fun_reverse_xam.py  Python: Reverse Mode AD: Example and Test  ',' ',
'py_fun_optimize  Optimize an AD Function  ',' syntax purpose example ',
'fun_optimize_xam.py  Python: Optimize an d_fun: Example and Test  ',' ',
'py_sparse  Python Sparsity Routines  ',' ',
'py_sparse_rc  Sparsity Patterns  ',' syntax nr nc nnz resize put k row col row_major col_major example ',
'sparse_rc_xam.py  Python: Sparsity Patterns: Example and Test  ',' ',
'py_sparse_rcv  Sparse Matrices  ',' syntax pattern matrix nr nc nnz put k row col val row_major col_major example ',
'sparse_rcv_xam.py  Python: Sparsity Patterns: Example and Test  ',' ',
'py_jac_sparsity  Jacobian Sparsity Patterns  ',' syntax purpose for_jac_sparsity rev_jac_sparsity pattern_in pattern_out entire example ',
'sparse_jac_pattern_xam.py  Python: Jacobian Sparsity Patterns: Example and Test  ',' ',
'py_hes_sparsity  Hessian Sparsity Patterns  ',' syntax purpose f select_domain select_range pattern_out component wise example ',
'sparse_hes_pattern_xam.py  Python: Hessian Sparsity Patterns: Example and Test  ',' ',
'py_sparse_jac  Computing Sparse Jacobians  ',' syntax purpose sparse_jac_for sparse_jac_rev subset pattern work n_sweep uses forward example ',
'sparse_jac_xam.py  Python: Computing Sparse Jacobians: Example and Test  ',' ',
'py_sparse_hes  Computing Sparse Hessians  ',' syntax purpose f subset pattern work n_sweep uses forward example ',
'sparse_hes_xam.py  Python: Hessian Sparsity Patterns: Example and Test  ',' ',
'py_utility  Python Utilities  ',' ',
'numpy2vec  Convert a Numpy Array to a cppad_py Vector  ',' syntax dtype shape name ',
'vec2numpy  Convert a cppad_py Vector to a Numpy Array  ',' syntax nr nc ',
'more_py  Steps To Add More Python Functions  ',' purpose documentation independent new_dynamic example implementation fun_new_dynamic.py __init__.py testing ',
'cpp_lib  The C++ Library  ',' ',
'a_double  Cppad Py AD Scalars  ',' ',
'vector  Cppad Py Vectors  ',' ',
'cpp_fun  Cppad Py AD Functions  ',' ',
'sparse  Cppad Py Sparse Calculation  ',' ',
'cpp_utility  C++ Utilities  ',' ',
'a_double_ctor  The a_double Constructor  ',' syntax purpose a_other ad example ',
'a_double_unary_op  a_double Unary Plus and Minus  ',' syntax ay example ',
'a_double_property  Properties of an a_double Object  ',' syntax ad value parameter variable near_equal example ',
'a_double_binary  a_double Binary Operators with an AD Result  ',' syntax ay az example ',
'a_double_compare  a_double Comparison Operators  ',' syntax ay example ',
'a_double_assign  a_double Assignment Operators  ',' syntax ay example ',
'a_double_unary_fun  Unary Functions with AD Result  ',' syntax ay example ',
'a_double_cond_assign  AD Conditional Assignment  ',' syntax purpose target cop left right if_true if_false example ',
'a_double_unary_op_xam.cpp  C++: a_double Unary Plus and Minus: Example and Test  ',' ',
'a_double_unary_op_xam.py  Python: a_double Unary Plus and Minus: Example and Test  ',' ',
'a_double_property_xam.cpp  C++: a_double Properties: Example and Test  ',' ',
'a_double_property_xam.py  Python: a_double Properties: Example and Test  ',' ',
'a_double_binary_xam.cpp  C++: a_double Binary Operators With AD Result: Example and Test  ',' ',
'a_double_binary_xam.py  Python: a_double Binary Operators With AD Result: Example and Test  ',' ',
'a_double_compare_xam.cpp  C++: a_double Comparison Operators: Example and Test  ',' ',
'a_double_compare_xam.py  Python: a_double Comparison Operators: Example and Test  ',' ',
'a_double_assign_xam.cpp  C++: a_double Assignment Operators: Example and Test  ',' ',
'a_double_assign_xam.py  Python: a_double Assignment Operators: Example and Test  ',' ',
'a_double_unary_fun_xam.cpp  C++: a_double Unary Functions with AD Result: Example and Test  ',' ',
'a_double_unary_fun_xam.py  Python: a_double Unary Functions with AD Result: Example and Test  ',' ',
'a_double_cond_assign_xam.cpp  C++: a_double Conditional Assignment: Example and Test  ',' ',
'a_double_cond_assign_xam.py  Python: a_double Conditional Assignment: Example and Test  ',' ',
'vector_ctor  Cppad Py Vector Constructors  ',' syntax purpose vec_bool vec_int vec_double vec_a_double example ',
'vector_size  Size of a Vector  ',' syntax example ',
'vector_set_get  Setting and Getting Vector Elements  ',' syntax element_type u example ',
'vector_size_xam.cpp  C++: Size of Vectors: Example and Test  ',' ',
'vector_size_xam.py  Python: Size of Vectors: Example and Test  ',' ',
'vector_set_get_xam.cpp  C++: Setting and Getting Vector Elements: Example and Test  ',' ',
'vector_set_get_xam.py  Python: Setting and Getting Vector Elements: Example and Test  ',' ',
'cpp_independent  Declare Independent Variables and Start Recording  ',' syntax purpose dynamic a_both example ',
'cpp_abort_recording  Abort Recording  ',' syntax purpose example ',
'cpp_fun_ctor  Stop Current Recording and Store Function Object  ',' syntax d_fun a_fun ay af example ',
'cpp_fun_property  Properties of a Function Object  ',' syntax size_domain size_range size_var size_op size_order example ',
'cpp_fun_new_dynamic  Change The Dynamic Parameters  ',' syntax size_order example ',
'cpp_fun_jacobian  Jacobian of an AD Function  ',' syntax f(x) example ',
'cpp_fun_hessian  Hessian of an AD Function  ',' syntax f(x) g(x) w example ',
'cpp_fun_forward  Forward Mode AD  ',' syntax taylor coefficient f(x) x(t) y(t) size_order xp yp example ',
'cpp_fun_reverse  Reverse Mode AD  ',' syntax notation f(x) x(t) y(t) g(t) q yq xq example ',
'cpp_fun_optimize  Optimize an AD Function  ',' syntax purpose example ',
'fun_dynamic_xam.cpp  C++: Using Dynamic Parameters: Example and Test  ',' ',
'fun_abort_xam.cpp  C++: Abort Recording a_double Operations: Example and Test  ',' ',
'fun_property_xam.cpp  C++: d_fun Properties: Example and Test  ',' ',
'fun_jacobian_xam.cpp  C++: Dense Jacobian Using AD: Example and Test  ',' ',
'fun_hessian_xam.cpp  C++: Dense Hessian Using AD: Example and Test  ',' ',
'fun_forward_xam.cpp  C++: Forward Mode AD: Example and Test  ',' ',
'fun_reverse_xam.cpp  C++: Reverse Mode AD: Example and Test  ',' ',
'fun_optimize_xam.cpp  C++: Optimize an d_fun: Example and Test  ',' ',
'cpp_sparse_rc  Sparsity Patterns  ',' syntax nr nc nnz resize put k row col row_major col_major example ',
'cpp_sparse_rcv  Sparse Matrices  ',' syntax pattern matrix nr nc nnz put k row col val row_major col_major example ',
'cpp_jac_sparsity  Jacobian Sparsity Patterns  ',' syntax purpose for_jac_sparsity rev_jac_sparsity pattern_in pattern_out entire example ',
'cpp_sparsity  Hessian Sparsity Patterns  ',' syntax purpose f select_domain select_range pattern_out component wise example ',
'cpp_sparse_jac  Computing Sparse Jacobians  ',' syntax purpose sparse_jac_for sparse_jac_rev subset pattern work n_sweep uses forward example ',
'cpp_sparse_hes  Computing Sparse Hessians  ',' syntax purpose f subset pattern work n_sweep uses forward example ',
'sparse_rc_xam.cpp  C++: Sparsity Patterns: Example and Test  ',' ',
'sparse_rcv_xam.cpp  C++: Sparsity Patterns: Example and Test  ',' ',
'sparse_jac_pattern_xam.cpp  C++: Jacobian Sparsity Patterns: Example and Test  ',' ',
'sparse_hes_pattern_xam.cpp  C++: Hessian Sparsity Patterns: Example and Test  ',' ',
'sparse_jac_xam.cpp  C++: Computing Sparse Jacobians: Example and Test  ',' ',
'sparse_hes_xam.cpp  C++: Hessian Sparsity Patterns: Example and Test  ',' ',
'vec2cppad_double  Convert an a_double Vector to a CppAD::AD<double> Vector  ',' syntax prototype ',
'vec2a_double  Convert a CppAD::AD<double> Vector to an a_double Vector  ',' syntax prototype ',
'error_message  Exception Handling  ',' syntax try block catch cppad errors not thread safe example ',
'error_message_xam.cpp  C++: Cppad Py Exception Handling: Example and Test  ',' ',
'error_message_xam.py  Python: Cppad Py Exception Handling: Example and Test  ',' ',
'more_cpp  Steps To Add More C++ Functions  ',' purpose include file independent new_dynamic documentation example implementation testing ',
'whats_new_2018  Cppad Py Changes During 2018  ',' 11-10 11-09 11-07 11-05 08-13 07-31 07-26 07-19 07-15 07-14 07-13 07-12 07-10 07-08 07-07 07-03 '
]

var MaxList = 100;
var Nstring = -1;
var Nkeyword = Keyword.length / 2;
Initialize();

function Initialize()
{
	UpdateList();
	document.search.keywords.focus();
}
function UpdateList(event)
{
	key = 0;
	if( window.event )
		key = window.event.keyCode;
	else if( event )
		key = event.which;
	if( key == 13 )
	{	Goto();
		return;
	}
	var string  = document.search.keywords.value;
	if( Nstring == string.length )
		return;
	Nstring     = string.length;

	var word    = string.match(/\S+/g);
	var nword   = 0;
	if(word != null )
		nword   = word.length;

	var pattern = new Array(nword);
	for(var j = 0; j < nword; j++)
		pattern[j] = new RegExp(word[j], 'i');

	var nlist = 0;
	var list  = '';
	for(i = 0; (i < Nkeyword) && (nlist < MaxList) ; i++)
	{
		var match = true;
		for(j = 0; j < nword; j++)
		{	var flag = pattern[j].test(Keyword[2*i]);
			flag     = flag || pattern[j].test(Keyword[2*i+1]);
			match    = match && flag;
		}

		if( match )
		{
			line  = Keyword[2*i].split(/\s+/);
			line  = line.join(' ');
			list  = list + line + '\n';
			nlist = nlist + 1;
		}
	}
	document.search.list.value    = list;
}
function Choose(textarea)
{	var start_select = textarea.value.substring(0, textarea.selectionStart);
	var start_pos    = Math.max(0, start_select.lastIndexOf('\n') );
	var length       = textarea.value.length;
	var end_select   = 
		textarea.value.substring(textarea.selectionEnd, length);
	var end_pos      = end_select.indexOf('\n');
	if( end_pos >= 0 ) 
	{	end_pos = textarea.selectionEnd + end_pos;
	} else 
	{	end_pos = length;
	}
	// highlight the selected line
	textarea.selectionStart = start_pos;
	textarea.selectionEnd   = end_pos;
	// get the choice from the beginning of the line
	var line = textarea.value.substring(start_pos, length);
	var end_choice = line.indexOf(' ');
	if( end_choice >= 0 )
	{	var choice = line.substring(0, end_choice);
		document.search.choice.value = choice.toLowerCase();
	}
	
	return true;
}
function Goto()
{
parent.location = document.search.choice.value + '.htm';
}
