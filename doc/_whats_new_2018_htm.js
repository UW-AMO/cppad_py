var list_across0 = [
'_contents.htm',
'_reference.htm',
'_index.htm',
'_search.htm',
'_external.htm'
];
var list_up0 = [
'cppad_py.htm',
'whats_new_2018.htm'
];
var list_down1 = [
'setup.py.htm',
'library.htm',
'whats_new_2018.htm'
];
var list_current0 = [
'whats_new_2018.htm#11-10',
'whats_new_2018.htm#11-09',
'whats_new_2018.htm#11-07',
'whats_new_2018.htm#11-05',
'whats_new_2018.htm#08-13',
'whats_new_2018.htm#07-31',
'whats_new_2018.htm#07-26',
'whats_new_2018.htm#07-19',
'whats_new_2018.htm#07-15',
'whats_new_2018.htm#07-14',
'whats_new_2018.htm#07-13',
'whats_new_2018.htm#07-12',
'whats_new_2018.htm#07-10',
'whats_new_2018.htm#07-08',
'whats_new_2018.htm#07-07',
'whats_new_2018.htm#07-03'
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
