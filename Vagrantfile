# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you are doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "centos65"
  config.vm.box_url = "https://github.com/2creatives/vagrant-centos/releases/download/v6.5.3/centos65-x86_64-20140116.box"

  config.vm.define "broker0" do |broker0|
    broker0.vm.hostname = "broker0"
    broker0.vm.network :private_network, ip: "192.168.251.50"

    config.vm.provider "virtualbox" do | v |
      v.name = 'broker0'
    end
  end

  config.vm.define "celery0" do |celery0|
    celery0.vm.hostname = "celery0"
    celery0.vm.network :private_network, ip: "192.168.251.51"

    config.vm.provider "virtualbox" do | v |
      v.name = 'celery0'
    end
  end

  config.vm.define "node0" do |node0|
    node0.vm.hostname = "node0"
    node0.vm.network :private_network, ip: "192.168.251.52"

    config.vm.provider "virtualbox" do | v |
      v.name = 'node0'
    end
  end

  config.vm.provision "ansible" do |ansible|
    ansible.playbook = "site.yml"
    ansible.verbose = "v"
    ansible.sudo = "true"
    ansible.sudo_user = "root"
    ansible.host_key_checking = "false"
  end
end
