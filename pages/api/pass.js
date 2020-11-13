// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Router from 'next/router';

export default async (req, res) => {
  const {
    query: { id },
  } = req;
  res.statusCode = 200
  res.json(
    {
      id,
    }
  );
}
