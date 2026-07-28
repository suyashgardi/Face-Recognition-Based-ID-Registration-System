FROM python:3.12
WORKDIR /app

RUN apt-get update && apt-get install -y cmake build-essential libgl1 libglib2.0-0 && rm -rf /var/lib/apt/lists/*
COPY ./requirements.txt .
RUN pip install -r requirements.txt
RUN pip install "setuptools<70.0.0"
RUN pip install git+https://github.com/ageitgey/face_recognition_models
COPY . .

EXPOSE 8000
CMD ["python","main.py"]