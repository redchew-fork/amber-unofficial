#!/bin/sh

VERSION=$1
cd `dirname "$0"`/lang
AMBER_BASE=`pwd`

cd $AMBER_BASE/src
# replace version number
cp Kernel-Infrastructure.st Kernel-Infrastructure.st.bak
sed -e "/^version\$/,/^\!\( |\$\)/ s/\^ '[0-9]\{1,\}\.[0-9]\{1,\}\.[0-9]\{1,\}\(-.\{0,\}\)\{0,1\}'\$/^ '$VERSION'/" Kernel-Infrastructure.st.bak >Kernel-Infrastructure.st
rm Kernel-Infrastructure.st.bak

# compile Kernel-Infrastructure
cd $AMBER_BASE
../local-amberc -D src src/Kernel-Infrastructure.st
# set version in all json files (bower, npm)
for F in package.json; do
  cp $F $F.bak
  sed -e 's/"version": "[0-9]\{1,\}\.[0-9]\{1,\}\.[0-9]\{1,\}\(-.\{0,\}\)\{0,1\}"/"version": "'"$VERSION"'"/' $F.bak >$F
  rm $F.bak
done
