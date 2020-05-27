require('dotenv').config();

const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

const db = require('./models');

const primes = [];

primes.push({ lat: 28.7041, lng: 77.1025, country: 'India' });
primes.push({ lat: 19, lng: 72, country: 'India' });
primes.push({ lat: 12, lng: 77, country: 'India' });
primes.push({ lat: 20, lng: 78, country: 'India' });
primes.push({ lat: 17, lng: 79, country: 'India' });
primes.push({ lat: 23, lng: 77, country: 'India' });
primes.push({ lat: 29, lng: 76, country: 'India' });
primes.push({ lat: 21, lng: 81, country: 'India' });
primes.push({ lat: 17, lng: 79, country: 'India' });
primes.push({ lat: 23, lng: 77, country: 'India' });
primes.push({ lat: 29, lng: 76, country: 'India' });
primes.push({ lat: 21, lng: 81, country: 'India' });
primes.push({ lat: 25, lng: 78, country: 'India' });
primes.push({ lat: 19, lng: 75, country: 'India' });
primes.push({ lat: 23, lng: 91, country: 'India' });
primes.push({ lat: 15, lng: 75, country: 'India' });
primes.push({ lat: 10, lng: 76, country: 'India' });
primes.push({ lat: 32, lng: 77, country: 'India' });
primes.push({ lat: 27, lng: 73, country: 'India' });

// const indies = [
//    {}

// ];
const sampleUserMessage = {
  name: 'test-user',
  email: 'test@yahoo.com',
  message: 'This is test message.',
};

const seed = async () => {
  try {
    await db.Prime.remove();
    await db.UserMessages.remove();

    await Promise.all(
      primes.map(async prime => {
        const data = await db.Prime.create(prime);
        await data.save();
      }),
    );

    const message_data = await db.UserMessages.create(sampleUserMessage);
    await message_data.save();
  } catch (err) {
    console.error(err);
  }
};

seed();
