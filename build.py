#!/usr/local/bin/python
import argparse
import sys
import os

buildServerLocationDict = {
	"local": "/usr/local/var/www/",
	"stage": "/usr/share/nginx/html/",
	"prod": "/usr/share/nginx/html/"
}

buildServerEndpointDict = {
	"local": "http://local.mgkslt.com:8080/",
	"stage": "https://stage-sg.mgkslt.com/",
	"prod": "https://sg.mgkslt.com/"
}

parser = argparse.ArgumentParser()

parser.add_argument('--build', '-b', help='Specify local,stage/staging,prod', type=str, default="local")
args = parser.parse_args()
buildType = args.build
if buildType == "staging":
	buildType = "stage"

def build():
	networkingApiLocation = "/Users/sankalpkulshrestha/Dropbox/Magikslate/web/web/src/app/services/app-network.service.ts"
	with open (networkingApiLocation, 'r') as file:
		filedata = file.read()
	filedata = filedata.replace("___BASE_SERVER_URL___", buildServerEndpointDict[buildType])
	with open(networkingApiLocation, 'w') as file:
		file.write(filedata)
	command = "cd web; npm run build;"
	print("COMMAND --> " + command)
	os.system(command)
	filedata = filedata.replace(buildServerEndpointDict[buildType], "___BASE_SERVER_URL___")
	with open(networkingApiLocation, 'w') as file:
		file.write(filedata)

def deploy():
	if buildType == "local":
		command = "rm -Rf " + buildServerLocationDict[buildType] + "/*" + ";cp -R web/dist/* " + buildServerLocationDict[buildType]
		print("COMMAND --> " + command)
		os.system(command)
	else:
		print(">>>>>>>>>>>>>> Not copying to dest as buildType = " + buildType)

build()
deploy()