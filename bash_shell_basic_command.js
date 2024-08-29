********************  pwd, ls, cd, mkdir  ********************



present wprking directory see command -------  pwd

For see any kinds of file list  ----- ls

changing directory command is -------    cd directory name

making new directory command is -----  mkdir making fileName

if you want to create a file directory on directory then file then command ---  mkdir -p directoryName/folderName/fileName



**********************  Ctrl, Alt, exit, clear  ******************


for terminal clear command is -------  clear

if you wnat to exit the terminal then simply command  ----- exit

for command line scrolling to first command -----  Ctrl+l

for go to command line first word then command --- Ctrl+a

then for go to command line end command ------ Ctrl+e

if you want to back one word then command  ----  Alt + b   [b means backward]

if you want to forward one then command ------ Alt + f     [ f means forward]

if you want to back one alphabet then command  ----- Ctrl + b         [backward]

if you want to forward one alphabet then command --- Ctrl + f         [forward]

if you want to delete backward one word then command  ---- Alt + backspacing

if you want to delete backword one word then command  -----  Alt + d



**************************  touch, cat, less, gedit, vim, whoami, date, time  *************************



for open a file on directory then go to the cd command to this directory then command ---- touch fileName

for read any file then command ----- cat fileName  or  less fileName 

if you want to see head side line of file command  ------ head fileName

if you want to see tail side line of the file command ---  tail fileName  

open a file with gedit editor or vim editor -----  gedit fileName  and vim fileName 

see your pc name then command ---- whoami

see todays date command ---- date

see time then command  ------ time 

if you want to open calender then command  --- cal

if you want to see full year calender command  ---  cal year



**************************  cat,cd .. ,code . ,rm,mv,cp  **************************




if you see more command which you dont know then command   ------- cat --h 

once you go to a directory to another directory but want to go agin first directory then command  ----  cd .. 

if you want to go again past directory then command   ---- cd ../..

if you want to open your vscode editor to write some code then simply command on your bash ------   code .

for open your google chrome from your bash command then command --- google-chrome  

if you remove any file then command  ----  rm fileName

if you remove any directory then command  -----  rm -rf directoryName 

if you want to rename any file or directory then simply command -----  mv oldFileName newFileName

if you move any file file one repo to another repo then command   ----- mv fileName Repository name

if copy somethinng one file to another file then command -----  cp fromFileName toFileName 





if you need something bigger then command  ----- man , then command ---- man which you want 

if i want to take some code to githb file raw then create a file then goto the file command ----- curl -O rawLink, [that called download code with curl command].



**** For shell scripting .sh extended file make executabel use = chmod 777 FileName

Description = in general chmod means change modules and its stands 4 = read, 2 = write, 1 = execute and all total 7 that why we give access 777 for all permission for execution 



### when we write any shell script file we have to add first Shebang or hashbang like = #!/bin/bash

###################
###################
###################
###################

### Monitoring and troubleshooting command###
### networking troubleshooting linux command###

*** hostname     => To check and set the hostname of the server.

*** host	 => To get host DNS details

*** ping	 => Checks if the remote server is reachable using ICMP protocol. It also shows the round trip time of packets.

*** curl         => A cross-platform utility that is used to transfer data. It can be used for troubleshooting several network issues.

*** wget	 => Utility to download files. Can be used for troubleshooting proxy connections and connectivity.

*** ip	         => A replacement for ifconfig. Can be used to configure and retrieve information about systems network interfaces

*** arp	         => Utility to view and manage arp cache.

*** ss/netstat	 => Primarily used to check the connections and PID on ports and Unix sockets.

*** traceroute	 => This utility uses the ICMP protocol and finds the hops involved in reading the destination server. It also shows the time it takes between hops.

*** mtr  	 => mtr is a mix of ping and traceroute. It also provides additional information like intermediate hosts and responsiveness.

*** dig	         => Helps you get the DNS records associated with a domain name.

*** nslookup	 => Command similar to dig.

*** nc	         => utility to debug TCP/UDP sockets.

*** telnet	 => It can be used to test remote connectivity on ports

*** route	 => Helps you get all the route table information

*** tcpdump	 => This utility helps you to capture network packets and analyze them for network issues.

*** lsof	 => list all the open files and the process information that opened it

### Monitoring SRE troubleshooting ###

*** top          => This command provides real-time information about system resource usage, including CPU, memory, and running processes. You might get overwhelmed as to what to look for in this output.you get "load average", "zombie process","cpu%","s", "SHR-shared memory","RS-resident memory use"

*** free         => The free command is used to display the amount of free and used memory in the system, including both physical and swap memory. you know anout memory details like = "shared memory", "used", "total, "cached" and "available"

*** nproc        => this for cpu and ram yoou can use 

***

