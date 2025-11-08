exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      GROQ_API_KEY: process.env.GROQ_API_KEY || "no-key"
    })
  };
};
