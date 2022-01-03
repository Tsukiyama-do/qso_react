#!/bin/bash

# http mode 
nohup serve -s build -p 8080 &

# https mode 
nohup serve -s build -p 8443 --ssl-cert /home/ubuntu/github.com/Tsukiyama-do/qso_react
/private/jj1pow.com.crt --ssl-key /home/ubuntu/github.com/Tsukiyama-do/qso_react
/private/jj1pow.com.key &

