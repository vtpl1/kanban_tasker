ARG VARIANT="22.04"
FROM ubuntu:${VARIANT}
ENV SHELL /bin/bash

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends ca-certificates software-properties-common \
    git curl wget ninja-build build-essential gdb python3-tk python3-pip python3-setuptools \
    python3-dev python3-venv pkg-config zip unzip tar iputils-ping xz-utils

RUN wget https://nodejs.org/dist/v16.16.0/node-v16.16.0-linux-x64.tar.xz \
    && tar -xf node-v16.16.0-linux-x64.tar.xz -C /opt/ \
    && rm node-v16.16.0-linux-x64.tar.xz

ENV PATH=/opt/node-v16.16.0-linux-x64/bin:$PATH

ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# Create the user
RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME

RUN groupmod --gid $USER_GID $USERNAME \
    && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
    && chown -R $USER_UID:$USER_GID /home/$USERNAME