#!/usr/local/bin/python
import argparse
import sys
import os

serverLocation = "/usr/local/var/www/"
buildList = "login,portal,role"
toDeploy = True

def build(cmp):
	command = "cd " + cmp + "; npm run build;"
	print("COMMAND --> " + command)
	os.system(command)

def deploy(cmp, fullFolder):
	if(fullFolder == True):
		command = "rm -Rf " + serverLocation + cmp + ";cp -R " + cmp + " " + serverLocation
	else:
		command = "cd " + cmp + "; rm -Rf " + serverLocation + cmp + "; cp -R dist " + serverLocation + cmp
	print("COMMAND --> " + command)
	os.system(command)

parser=argparse.ArgumentParser()
parser.add_argument('--buildList', '-b', help='comma separated list of login,portal,role', type=str, default= buildList)
parser.add_argument('--deploy', '-d', help='deploy to nginx serve location true/false', type=lambda x: (str(x).lower() == 'true'), default= toDeploy)
args=parser.parse_args()

buildList = args.buildList
toDeploy = args.deploy

buildComponents = buildList.split(",")

for component in buildComponents:
	if component != "login":
		build(component)
		deploy(component, False)
	else:
		deploy(component, True)
