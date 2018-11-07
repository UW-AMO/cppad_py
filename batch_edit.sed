# ----------------------------------------------------------------------------
# list of directories that are added to the repository by batch_edit.sh
# new_directories='
# '
# list of files that are deleted by batch_edit.sh
# delete_files='
# '
# list of files that are not edited by the sed commands in this file
# (with the possible exception of the extra_sed commands)
# ignore_files='
# '
# list of files and or directories that are moved to new names
# move_paths='
# '
# sed command that maps old file and or directory names to new file names
# move_sed='
# '
# list of files that get edited by the extra_sed command
# extra_files='
# '
# sed command that is applied to the extra files
# (after the other sed commands in this file)
# extra_sed='
# '
# ----------------------------------------------------------------------------
# Put other sed commands below here and without # at start of line
s|a_double *\([a-z_][a-z_]*\) *= *a_double()|a_double \1|
s|a_double *\([a-z_][a-z_]*\) *= *a_double(|a_double \1(|
#
s|vec_double *\([a-z_][a-z_]*\) *= *vec_double()|vec_double \1|
s|vec_double *\([a-z_][a-z_]*\) *= *vec_double(|vec_double \1(|
#
s|vec_a_double *\([a-z_][a-z_]*\) *= *vec_a_double()|vec_a_double \1|
s|vec_a_double *\([a-z_][a-z_]*\) *= *vec_a_double(|vec_a_double \1(|
#
s|d_fun *\([a-z_][a-z_]*\) *= *d_fun()|d_fun \1|
s|d_fun *\([a-z_][a-z_]*\) *= *d_fun(|d_fun \1(|
#
s|a_fun *\([a-z_][a-z_]*\) *= *a_fun()|a_fun \1|
s|a_fun *\([a-z_][a-z_]*\) *= *a_fun(|a_fun \1(|
