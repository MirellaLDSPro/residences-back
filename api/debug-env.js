export default (req, res) => {
    res.json({
      keyExists: !!process.env.FIREBASE_ADMIN_PRIVATE_KEY,
      firstChars: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.slice(0, 10) + '...'
    });
  }