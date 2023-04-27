# get the difference between the previous commit and the latest commit
git diff HEAD~1 HEAD | grep '^\+' > ../diff1.js

# remove all lines ending with .js
#grep -v ".js$" ../diff1.js > ../diff2.js

# get all the lines ending with semicolon
grep "\;$" ../diff1.js > ../diff3.js

# remove all occurrences of '+' from the beginging of the string
sed "s/^+*//" ../diff3.js > ../newlyAdddedIndexes.js
exit 0;