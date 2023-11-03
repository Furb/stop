async function fetchHomepage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_URL}${process.env.NEXT_PUBLIC_API}/pages/12`
  );

  return res.json();
}

export default fetchHomepage;
