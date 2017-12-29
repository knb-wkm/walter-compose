cd /srv
swift-ring-builder object.builder create 18 3 1
swift-ring-builder object.builder add --region 1 --zone 1 --ip 192.168.56.10 --port 6010 --device sdb --weight 100
swift-ring-builder object.builder add --region 2 --zone 1 --ip 192.168.56.11 --port 6020 --device sdb --weight 100
swift-ring-builder object.builder add --region 3 --zone 1 --ip 192.168.56.12 --port 6030 --device sdb --weight 100
swift-ring-builder object.builder rebalance

swift-ring-builder container.builder create 18 3 1
swift-ring-builder container.builder add --region 1 --zone 1 --ip 192.168.56.10 --port 6011 --device sdb --weight 100
swift-ring-builder container.builder add --region 2 --zone 1 --ip 192.168.56.11 --port 6021 --device sdb --weight 100
swift-ring-builder container.builder add --region 3 --zone 1 --ip 192.168.56.12 --port 6031 --device sdb --weight 100
swift-ring-builder container.builder rebalance

swift-ring-builder account.builder create 18 3 1
swift-ring-builder account.builder add --region 1 --zone 1 --ip 192.168.56.10 --port 6012 --device sdb --weight 100
swift-ring-builder account.builder add --region 2 --zone 1 --ip 192.168.56.11 --port 6032 --device sdb --weight 100
swift-ring-builder account.builder add --region 3 --zone 1 --ip 192.168.56.12 --port 6032 --device sdb --weight 100
swift-ring-builder account.builder rebalance
