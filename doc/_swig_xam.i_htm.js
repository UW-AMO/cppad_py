var list_across0 = [
'_contents.htm',
'_reference.htm',
'_index.htm',
'_search.htm',
'_external.htm'
];
var list_up0 = [
'cppad_py.htm',
'swig_xam.i.htm'
];
var list_down1 = [
'testing.htm',
'swig_xam.i.htm',
'library.htm',
'whats_new_2018.htm'
];
var list_down0 = [
'swig_xam.hpp.htm',
'check_swig_xam.py.htm',
'check_swig_xam.m.htm',
'check_swig_xam.pl.htm'
];
var list_current0 = [
'swig_xam.i.htm#C++ Includes',
'swig_xam.i.htm#py_swig_xam',
'swig_xam.i.htm#m_swig_xam',
'swig_xam.i.htm#pl_swig_xam',
'swig_xam.i.htm#exception',
'swig_xam.i.htm#int_class',
'swig_xam.i.htm#int_array_ptr',
'swig_xam.i.htm#int_array_class',
'swig_xam.i.htm#vector_double',
'swig_xam.i.htm#swig_xam.hpp',
'swig_xam.i.htm#double_class',
'swig_xam.i.htm#Contents'
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