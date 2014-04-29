var celery = require('node-celery'),
    client = celery.createClient({
        CELERY_BROKER_URL: 'amqp://guest@192.168.251.50//'
    }),
    hello_world = client.createTask('hello_world.hello');

client.on('error', function(err) {
    console.log(err);
});

client.on('connect', function() {
    hello_world.call({});
});