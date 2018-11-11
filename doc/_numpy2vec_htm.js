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
'py_utility.htm',
'numpy2vec.htm'
];
var list_down4 = [
'setup.py.htm',
'library.htm',
'whats_new_2018.htm'
];
var list_down3 = [
'py_lib.htm',
'cpp_lib.htm'
];
var list_down2 = [
'py_fun.htm',
'py_sparse.htm',
'py_utility.htm',
'more_py.htm'
];
var list_down1 = [
'numpy2vec.htm',
'vec2numpy.htm'
];
var list_current0 = [
'numpy2vec.htm#Syntax',
'numpy2vec.htm#array',
'numpy2vec.htm#dtype',
'numpy2vec.htm#shape',
'numpy2vec.htm#syntax',
'numpy2vec.htm#name',
'numpy2vec.htm#vec'
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
