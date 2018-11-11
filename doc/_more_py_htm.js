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
'py_lib.htm',
'more_py.htm'
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
'py_fun.htm',
'py_sparse.htm',
'py_utility.htm',
'more_py.htm'
];
var list_current0 = [
'more_py.htm#Purpose',
'more_py.htm#Documentation',
'more_py.htm#Documentation.independent',
'more_py.htm#Documentation.new_dynamic',
'more_py.htm#Documentation.Example',
'more_py.htm#Implementation',
'more_py.htm#Implementation.independent',
'more_py.htm#Implementation.new_dynamic',
'more_py.htm#Implementation.fun_new_dynamic.py',
'more_py.htm#Implementation.__init__.py',
'more_py.htm#Example',
'more_py.htm#Testing'
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
