#!/usr/local/bin/python
import argparse
import sys
import os

serverLocation = "/usr/local/var/www/"

def build():
	command = "cd web; npm run build;"
	print("COMMAND --> " + command)
	os.system(command)

def deploy():
	command = "rm -Rf " + serverLocation + "/*" + ";cp -R web/dist/* " + serverLocation
	print("COMMAND --> " + command)
	os.system(command)

build()
deploy()