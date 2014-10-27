#!/bin/sh
for FILE in $(find js/ -type f); do
	echo "Auto-formatting $FILE"
	js-beautify ${@} $FILE > ${FILE}2 && mv ${FILE}2 $FILE || rm ${FILE}2
done
