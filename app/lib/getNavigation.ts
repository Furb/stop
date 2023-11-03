async function fetchLinks() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_URL}${process.env.NEXT_PUBLIC_MENU}`
  );

  return res.json();
}

export default fetchLinks;
