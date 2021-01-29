from subprocess import Popen, PIPE, run
from shlex import split
from tokenize import tokenize
import sys


if len(sys.argv) < 2:
    print ("Missing emulator path tool")
    exit (1)

try:
    argumentCopy = sys.argv
    #remove fisrt unneccessary command line
    argumentCopy.pop(0)
    process = Popen(argumentCopy , stdout=PIPE)
    (output, err) = process.communicate()
    exit_code = process.wait()
    if exit_code != 0:
        print ("Error in emulator tool")
        exit(1)
    
    argument = "@"
    emulator_list = split(output.decode())
    if len(emulator_list) > 1:
        print("Select an Emulator :")
        for id, emulator in enumerate(emulator_list):
            print('{}) {} '.format(id , emulator))
        
        emulatorID = int(input()) 
        argument += emulator_list[emulatorID]
    else:
        argument += emulator_list[0]

    print("Emulator selected --> ",argument)
    process = Popen([argumentCopy[0], argument] , stdout=PIPE)
    (output, err) = process.communicate()
    exit (0)
except Exception:
    print ("Could not run emulator tool")

exit (1)
