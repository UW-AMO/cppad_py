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
'more_cpp.htm'
];
var list_down3 = [
'setup.py.htm',
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
'cpp_fun.htm',
'sparse.htm',
'cpp_utility.htm',
'more_cpp.htm'
];
var list_current0 = [
'more_cpp.htm#Purpose',
'more_cpp.htm#Include File',
'more_cpp.htm#Include File.independent',
'more_cpp.htm#Include File.new_dynamic',
'more_cpp.htm#Documentation',
'more_cpp.htm#Documentation.independent',
'more_cpp.htm#Documentation.new_dynamic',
'more_cpp.htm#Documentation.Example',
'more_cpp.htm#Implementation',
'more_cpp.htm#Implementation.independent',
'more_cpp.htm#Implementation.new_dynamic',
'more_cpp.htm#Example',
'more_cpp.htm#Testing'
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
