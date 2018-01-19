#!/bin/bash

SWIFT_PART_POWER=18
SWIFT_REPLICAS=3
SWIFT_PART_HOURS=1

cd /etc/swift

swift-ring-builder account.builder create ${SWIFT_PART_POWER} ${SWIFT_REPLICAS} ${SWIFT_PART_HOURS}
swift-ring-builder account.builder add --region 1 --zone 1 --ip ${docker01} --port 6012 --device sdb1 --weight 100
swift-ring-builder account.builder add --region 1 --zone 2 --ip ${docker02} --port 6012 --device sdb1 --weight 100
swift-ring-builder account.builder add --region 1 --zone 3 --ip ${docker03} --port 6012 --device sdb1 --weight 100
swift-ring-builder account.builder
swift-ring-builder account.builder rebalance

swift-ring-builder container.builder create ${SWIFT_PART_POWER} ${SWIFT_REPLICAS} ${SWIFT_PART_HOURS}
swift-ring-builder container.builder add --region 1 --zone 1 --ip ${docker01} --port 6011 --device sdb1 --weight 100
swift-ring-builder container.builder add --region 1 --zone 2 --ip ${docker02} --port 6011 --device sdb1 --weight 100
swift-ring-builder container.builder add --region 1 --zone 3 --ip ${docker03} --port 6011 --device sdb1 --weight 100
swift-ring-builder container.builder
swift-ring-builder container.builder rebalance

swift-ring-builder object.builder create ${SWIFT_PART_POWER} ${SWIFT_REPLICAS} ${SWIFT_PART_HOURS}
swift-ring-builder object.builder add --region 1 --zone 1 --ip ${docker01} --port 6010 --device sdb1 --weight 100
swift-ring-builder object.builder add --region 1 --zone 2 --ip ${docker02} --port 6010 --device sdb1 --weight 100
swift-ring-builder object.builder add --region 1 --zone 3 --ip ${docker03} --port 6010 --device sdb1 --weight 100
swift-ring-builder object.builder
swift-ring-builder object.builder rebalance
