FROM hyperledger/besu:22.2-openjdk-latest

USER root

ADD start.sh /opt/besu/start.sh
ADD genesis-besu.json /opt/besu/genesis.json

RUN chmod +x /opt/besu/start.sh

USER besu
ENTRYPOINT /opt/besu/start.sh