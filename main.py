import eel
import os
from engine.command import *
from engine.features import playassistantsound

# Initialize Eel
eel.init("www")

# Optional: Play assistant start sound
playassistantsound()

# Start Eel app
eel.start("index.html", size=(900, 700), host="localhost", port=8000)



