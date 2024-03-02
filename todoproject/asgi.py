import os
from pathlib import Path
from django.core.asgi import get_asgi_application
from dotenv import load_dotenv

dotenv_path = os.path.join(Path(__file__).parent, '.env')
load_dotenv(dotenv_path)

application = get_asgi_application()
