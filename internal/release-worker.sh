#!/bin/sh

# ATTENTION: Be logged into npm before running this script,
# as a user with write access to amber npm package.

git reset --hard
git checkout master
git clean -d -x -f
npm install
cd external/sdk
npm install
cd ../..
echo -n "Which version are you going to publish [0 to skip]? "
VER=`head -n 1`
if [ "$VER" = "0" ]; then :; else
	echo "Publishing version $VER"
	internal/setversion.sh "$VER"
	cp package.json package.json.bak
	sed -e 's@/amber.git.*"@/amber.git#'"$VER"'"@' package.json.bak >package.json
	rm package.json.bak
	git add package.json
	git commit -a -m "Release version $VER"
	git tag -a "$VER" -m "Release version $VER"
# bower does not publish explicitly but implictly via semver tag
	echo npm publish
	grunt
	git commit -a -m "Recompile (while version set to $VER)"
fi
echo -n "Which version are you going to work on? "
WVERF=`head -n 1`
WVER="${WVERF}-pre"
echo "Setting version $WVER"
internal/setversion.sh "$WVER"
cp package.json package.json.bak
sed -e 's@/amber.git.*"@/amber.git"@' package.json.bak >package.json
rm package.json.bak
git add package.json
git commit -a -m "Working on $WVERF"
git push
echo git push origin $VER
