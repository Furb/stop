async function fetchPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}`);

  return res.json();
}

export default fetchPage;
