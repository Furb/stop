async function fetchPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_URL}${process.env.NEXT_PUBLIC_API}/pages/`
  );

  return res.json();
}

export default fetchPage;
