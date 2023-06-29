import mqtt from 'mqtt';

const client = mqtt.connect({
  host: '79.175.157.228',
  port: '1883',
  username: 'interview',
  password: 'interview123',
});

client.on('connect', () => {
  client.subscribe('sensor_logs/#', (topic) => {
    console.log(topic);
  });
});

client.on('message', (topic, message) => {
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');
  console.log('message');
  console.log(topic);
  console.log(message.toString());
});

