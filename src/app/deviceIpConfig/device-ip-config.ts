export class DeviceIpConfig{
    version: string;
    local_mac: string;
    ip_addr: string;
    subnet_mask: string;
    gateway: string;
    hostname: string;
    port: number;
    dhcp_enable: number;
    ctl_vlan_id: number;
    ctl_vlan_pcp: number;
    ctl_vlan_enable: number;
    data_vlan_id: number;
    data_vlan_enable: number;
    bootstatus1: string;
    bootstatus2: string;

    constructor(){}
}