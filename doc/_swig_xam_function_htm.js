var list_across0 = [
'_contents.htm',
'_reference.htm',
'_index.htm',
'_search.htm',
'_external.htm'
];
var list_up0 = [
'cppad_py.htm',
'swig_xam.i.htm',
'swig_xam.hpp.htm',
'swig_xam_function.htm'
];
var list_down3 = [
'testing.htm',
'swig_xam.i.htm',
'library.htm',
'whats_new_2018.htm'
];
var list_down2 = [
'swig_xam.hpp.htm',
'check_swig_xam.py.htm',
'check_swig_xam.m.htm',
'check_swig_xam.pl.htm'
];
var list_down1 = [
'swig_xam_function.htm',
'swig_xam_normal_class.htm',
'swig_xam_template_class.htm'
];
var list_down0 = [
'swig_xam_function.cpp.htm'
];
var list_current0 = [
'swig_xam_function.htm#Prototypes',
'swig_xam_function.htm#factorial_by_value',
'swig_xam_function.htm#message_of_void',
'swig_xam_function.htm#add_by_ptr',
'swig_xam_function.htm#max_array_by_ptr',
'swig_xam_function.htm#max_std_vector_double',
'swig_xam_function.htm#raise_exception',
'swig_xam_function.htm#Contents'
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