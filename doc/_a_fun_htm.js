var list_across0 = [
'_contents.htm',
'_reference.htm',
'_index.htm',
'_search.htm',
'_external.htm'
];
var list_up0 = [
'cppad_py.htm',
'library.htm',
'cpp_lib.htm',
'a_fun.htm'
];
var list_down3 = [
'testing.htm',
'swig_xam.i.htm',
'library.htm',
'whats_new_2018.htm'
];
var list_down2 = [
'py_lib.htm',
'cpp_lib.htm'
];
var list_down1 = [
'a_double.htm',
'vector.htm',
'a_fun.htm',
'sparse.htm',
'error.htm'
];
var list_down0 = [
'cpp_independent.htm',
'cpp_abort_recording.htm',
'cpp_a_fun_ctor.htm',
'cpp_a_fun_property.htm',
'cpp_a_fun_jacobian.htm',
'a_fun_hessian.htm',
'a_fun_forward.htm',
'a_fun_reverse.htm',
'a_fun_optimize.htm'
];
var list_current0 = [
'a_fun.htm#Contents'
];
function choose_across0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_across0[index-1];
}
function choose_up0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_up0[index-1];
}
function choose_down3(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down3[index-1];
}
function choose_down2(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down2[index-1];
}
function choose_down1(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down1[index-1];
}
function choose_down0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down0[index-1];
}
function choose_current0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_current0[index-1];
}