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
'cpp_fun.htm',
'cpp_fun_property.htm',
'fun_property_xam.cpp.htm'
];
var list_down4 = [
'py_lib.htm',
'cpp_lib.htm'
];
var list_down3 = [
'a_double.htm',
'vector.htm',
'cpp_fun.htm',
'sparse.htm',
'cpp_utility.htm',
'more_cpp.htm'
];
var list_down2 = [
'cpp_independent.htm',
'cpp_abort_recording.htm',
'cpp_fun_ctor.htm',
'cpp_fun_property.htm',
'cpp_fun_new_dynamic.htm',
'cpp_fun_jacobian.htm',
'cpp_fun_hessian.htm',
'cpp_fun_forward.htm',
'cpp_fun_reverse.htm',
'cpp_fun_optimize.htm'
];
var list_down1 = [
'fun_property_xam.cpp.htm'
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
function choose_down4(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down4[index-1];
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
