import redis
import configparser
config = configparser.ConfigParser()
config.sections()

# Reading config file
config.read('config.ini')
host = config['REDIS']['HOST']
port = config['REDIS']['PORT']
password = config['REDIS']['PASSWORD']
print(host)
r = redis.Redis(
  host= host,
  port= port,
  password= password)

r.set('foo','bar')
print(r.get('foo'))