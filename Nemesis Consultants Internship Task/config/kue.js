const kue = require('kue');
// queue is group of similar jobs
const queue = kue.createQueue();

module.exports = queue;